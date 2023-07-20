import { AoN } from '@/typings';
import SanityFetch, { validifyURLparams } from '@/lib/util';
import SideNavbar from '@/components/Navbar/side'
import CustomBlogTemplate from '@/components/CustomBlogTemplate';
import { AoN_Routing_ComponentHierarchy as Routing_CH } from '@/lib/codeSnippets';

export const revalidate = 15;
export const dynamicParams = false;

export async function generateStaticParams() {
  const topics: AoN[] = await SanityFetch("_type == 'allofNextjs'");
  let paths = topics.flatMap(t => t.titleBlock2.map(tb => ({ topic: [validifyURLparams(t.topic), tb._key] })))
  paths.push(...topics.map(t => ({ topic: [validifyURLparams(t.topic)] })));
  paths.push({topic: []});
  return paths;
}

export default async function Index({params}: {params: {topic?: string[]}}) {
  const topics: AoN[] = await SanityFetch("_type == 'allofNextjs'");
  const [urlTopic, urlTitleKey] = params.topic ?? [];
  let htmlContent, codesPerPage;
  if (urlTopic || urlTitleKey) {
    const titleKey = !urlTitleKey ? '': `/${urlTitleKey}`;
    htmlContent = (await import(`@/app/AllofNextjs/_${urlTopic}${titleKey}/content`)).default;
    if (urlTopic === 'Routing' && !urlTitleKey) codesPerPage = Routing_CH;
    else if (urlTopic && urlTitleKey) codesPerPage = topics.find(t => validifyURLparams(t.topic) === urlTopic)
                                                ?.titleBlock2.find(tb => tb._key === urlTitleKey)?.codes;
  }
  return (
    <div className='f t14'>
      <SideNavbar topics={topics} linkPrefix="/AllofNextjs"/>
      <div className="rela hs px35 pt10 ofs">
        {htmlContent && <CustomBlogTemplate blogData={htmlContent} codesPerPage={codesPerPage}/>}
      </div>
    </div>
  )
}