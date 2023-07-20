import CodeBox from "@/components/CodeBox";
import SanityFetch, { reshapeResponse, validifyURLparams } from "@/lib/util";
import TopNavbar from "@/components/Navbar/top";
// import { HashMapConclusion } from "../../conclusions";
import { DSs } from "@/typings";
// import { langHeader } from "@/lib/langHeader";
// import { navbarMapping } from "../../util";

export const revalidate = 15;
export const dynamicParams = false;

export async function generateStaticParams() {
  const DSs: DSs[] = await SanityFetch("_type == 'syntax'");
  return DSs.map(ds => ({container: validifyURLparams(ds.container), id: ds._id}));
}

export default async function Index({params:{subtitle, id}}: {params: {subtitle: string, id: string}}) {
  const syntaxes: DSs[] = await SanityFetch(`_type == 'syntax' && _id == '${id}'`);
  const codeRows = reshapeResponse(syntaxes);
  return (
    <div className="hs ofs">
      {/* <TopNavbar items={navbarMapping}/> */}
      <div className="rela f pl15 py15 ofs">
        {/* {container === 'HashMap' && <HashMapConclusion/>} */}
        <div className="pr35">
          <table>
            <thead>
              {/* <tr>{langHeader.map((lh, k) => <th className="b1 border-black px15" key={k}>{lh}</th>)}</tr> */}
            </thead>
            <tbody>
              {codeRows && Object.entries(codeRows).map(([title, row]) => (
                <tr key={title}>
                  <td className="b1 border-black px15">{title}</td>
                  {Object.entries(row).map(([lang, codes]) => (
                    <td className="align-baseline b1 border-black" key={lang}>
                      {codes.map((c, idx) => <CodeBox lang={lang} code={c} key={idx}/>)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};