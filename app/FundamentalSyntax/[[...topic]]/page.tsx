import { FS, tC, Titles } from "@/typings";
import SanityFetch, { validifyURLparams } from "@/lib/util";
import SideNavbar from "@/components/Navbar/side";
import CodeBox from "@/components/CodeBox";
import LangNames from "@/lib/langNameMappings";

export const revalidate = 15;
export const dynamicParams = false;

export async function generateStaticParams() {
  const topics: FS[] = await SanityFetch("_type == 'fundamentalSyntax'");
  let paths = topics.flatMap(t => t.titleBlock.map(tb => ({ topic: [validifyURLparams(t.topic), tb._key] })))
  paths.push(...topics.map(t => ({ topic: [validifyURLparams(t.topic)] })));
  paths.push({topic: []});
  return paths;
}

export default async function Index({params}: {params: {topic?: string[]}}) {
  const topics: FS[] = await SanityFetch("_type == 'fundamentalSyntax'");
  const [urlTopic, urlTitleKey] = params.topic ?? [];
  let thatTitle:(Titles|undefined), titleCodes;
  if (urlTopic && urlTitleKey) {
    thatTitle = topics.find(t => validifyURLparams(t.topic) === urlTopic)?.titleBlock.find(t => t._key === urlTitleKey);
    titleCodes = thatTitle?.codes?.reduce((agg:tC[], tc) => {
      const exist = agg.find(obj => obj.language.join(',') === tc.language.join(','));
      if (exist) exist.codeSnippet.push({_key: tc._key, code: tc.code});
      else agg.push({language: tc.language, codeSnippet: [{_key: tc._key, code: tc.code}]});
      return agg;
    }, []);
    // if (!thatTitle && !titleCodes) throw new Error('Invalid URL');
  }

  return (
    <div className="f">
      <SideNavbar topics={topics} linkPrefix="/FundamentalSyntax"/>
      <div className="rela hs f fspan fwrap px35 pt10 ofs">
        {titleCodes?.map((tc, idx) => (
          <div className="pr30" key={idx}>
            <h3 className="titalic tb6">{
              (tc.language.length === 1 && tc.language[0] === 'js') ?
              'Javascript' :
              tc.language.map(lang => LangNames[lang]).join(', ')
            }</h3>
            {thatTitle?.numberList ?
            (<ol className="list-decimal ps-[18px] text-white tb6">
              {tc.codeSnippet.map(c => <li key={c._key}><CodeBox lang={tc.language[0]} code={c.code.code}/></li>)}
            </ol>):
            tc.codeSnippet.map(c => <CodeBox lang={tc.language[0]} code={c.code.code} key={c._key}/>)}
          </div>
        ))}
      </div>
    </div>
  )
}