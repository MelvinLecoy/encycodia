import { DSs } from "@/typings";
import SanityFetch from "@/lib/util";
import { SyntaxSubtitle } from "./util";
import TopNavbar from "@/components/Navbar/top";

export const revalidate = 15;
export const dynamicParams = false;

// export async function generateStaticParams() {
//   const DSs: DSs[] = await SanityFetch("_type == 'dataStructures'");
//   return DSs.map(ds => ({container: validifyURLparams(ds.container)}));
// }

export default async function Page() {
  const Syntaxes: DSs[] = await SanityFetch("_type == 'syntax'");
  const navBar = SyntaxSubtitle.filter(subt => Syntaxes.some(syn => syn.container === subt));
  return (
    <div className="hs ofs">
      <TopNavbar items={navBar} topic="Syntax"/>
    </div>
  )
}