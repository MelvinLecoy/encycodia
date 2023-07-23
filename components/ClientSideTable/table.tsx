import { Titles3, CodeRows } from "@/typings";
import { reshapeRows } from "@/lib/util";
import { newMapping } from "@/lib/langNameMappings";
import CodeBox_RSH from "@/components/CodeBox/RSH";

type Props = {
  rows: Titles3[]
  langSelectionMapping: Record<string, boolean>
  preHydration: boolean
  slug: string
  conclusions: CodeRows
};

export default function Table({rows, langSelectionMapping, preHydration, slug, conclusions}: Props) {
  const selectedLangs = Object.keys(langSelectionMapping).filter(k => langSelectionMapping[k]);
  const tableHeader = slug in conclusions ? ['', ' ', ...selectedLangs] : [' ', ...selectedLangs];
  const codeRows = reshapeRows(rows, selectedLangs);
  return (
    <div className="rela f pl10 pr15 pb13 ofs">
      {preHydration ? 'Prerendered before hydration' :
      (<table>
        <thead>
          <tr>{tableHeader.map(h => <th className={h.length ? "b1 border-black px15" : ''} key={h}>{newMapping[h]}</th>)}</tr>
        </thead>
        <tbody>
          {codeRows && Object.entries(codeRows).map(([title, row]) => (
            <tr key={title}>
              {slug in conclusions && (!(title in conclusions[slug]) ? <td></td> :
              <td className="b1 border-black text-[13.5px] minw142 maxw200 pl11">
                <ul className="list-disc ps-[5px]">{conclusions[slug][title].map(conc => <li key={conc}>{conc}</li>)}</ul>
              </td>)}
              <td className="b1 border-black t15 minw135 px8 titalic">{title}</td>
              {Object.entries(row).map(([lang, codes]) => (
                <td className="align-baseline b1 border-black" key={lang}>
                  {codes.map((c, idx) => <CodeBox_RSH lang={lang} code={c} key={idx}/>)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  )
};