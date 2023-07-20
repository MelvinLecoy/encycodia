import { DSs } from "@/typings";
import SanityFetch from "@/lib/util";
import { DScontainers } from "./util";
import TopNavbar from "@/components/Navbar/top";

export const revalidate = 15;
export const dynamicParams = false;

// export async function generateStaticParams() {
//   const DSs: DSs[] = await SanityFetch("_type == 'dataStructures'");
//   return DSs.map(ds => ({container: validifyURLparams(ds.container)}));
// }

export default async function Page() {
  const DSs: DSs[] = await SanityFetch("_type == 'dataStructures'");
  const navBar = DScontainers.filter(cont => DSs.some(ds => ds.container === cont));
  return (
    <div className="hs ofs">
      <TopNavbar items={navBar} topic="DataStructures"/>
    </div>
  )
}