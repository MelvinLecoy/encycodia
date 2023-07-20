import { DSs } from "@/typings";
import SanityFetch, { validifyURLparams } from "@/lib/util";
import { SyntaxSubtitle, SyntaxConclusions } from "../util";
import TopNavbar from "@/components/Navbar/top";
import { Suspense } from 'react';
import ClientTableForm from "@/components/ClientSideTable/ClientTableForm";

export const revalidate = 15;
export const dynamicParams = false;

export async function generateStaticParams() {
  const Syntaxes: DSs[] = await SanityFetch("_type == 'syntax'");
  return Syntaxes.map(syn => ({subtitle: validifyURLparams(syn.container)}));
}

export default async function Page({params: {subtitle}}: {params: {subtitle: string}}) {
  const Syntaxes: DSs[] = await SanityFetch("_type == 'syntax'");
  const navBar = SyntaxSubtitle.filter(subt => Syntaxes.some(syn => syn.container === subt));
  const tableRows = Syntaxes.find(syn => validifyURLparams(syn.container) === subtitle)?.titleBlock3;
  return (
    <div className="hs ofs">
      <TopNavbar items={navBar} topic="Syntax"/>
      <Suspense fallback={null}>
        {tableRows && <ClientTableForm rows={tableRows} slug={subtitle} conclusions={SyntaxConclusions}/>}
      </Suspense>
    </div>
  )
}