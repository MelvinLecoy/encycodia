import { DSs } from "@/typings";
import SanityFetch, { validifyURLparams } from "@/lib/util";
import { DScontainers, DSconclusions } from "../util";
import TopNavbar from "@/components/Navbar/top";
import { Suspense } from 'react';
import ClientTableForm from "@/components/ClientSideTable/ClientTableForm";

export const revalidate = 15;
export const dynamicParams = false;

export async function generateStaticParams() {
  const DSs: DSs[] = await SanityFetch("_type == 'dataStructures'");
  return DSs.map(ds => ({container: validifyURLparams(ds.container)}));
}

export default async function Page({params: {container}}: {params: {container: string}}) {
  const DSs: DSs[] = await SanityFetch("_type == 'dataStructures'");
  const navBar = DScontainers.filter(cont => DSs.some(ds => ds.container === cont));
  const tableRows = DSs.find(ds => validifyURLparams(ds.container) === container)?.titleBlock3;
  return (
    <div className="hs ofs">
      <TopNavbar items={navBar} topic="DataStructures"/>
      <Suspense fallback={null}>
        {tableRows && <ClientTableForm rows={tableRows} slug={container} conclusions={DSconclusions}/>}
      </Suspense>
    </div>
  )
}