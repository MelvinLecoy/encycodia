import { DOMNode, CodeBlock2 } from "@/typings";
import CodeBox from "./CodeBox";
import { Fragment } from 'react';

// type VWProps = {
//   Tag: keyof JSX.IntrinsicElements;
//   style?: string;
//   href?: string;
//   target?: string;
//   children?: React.ReactNode | string;
// }
// const PureVarWrapper = ({ Tag, style, href, target, children }: VWProps) => (<Tag className={style} href={href} target={target}>{children}</Tag>);

type RCProps = {
  dn: DOMNode;
  codes: CodeBlock2[] | undefined;
  children?: React.ReactNode;
};
const RenderContent = ({dn, codes, children}: RCProps) => {
  if (dn.tag as string === 'CODE') {
    const code = codes?.find(c => c.description === dn.codeDesc)?.code.code;
    return code ? <CodeBox lang="tsx" code={code}/> : <div>Code Not Found</div>;
    // const [query, title, desc] = dn.codeInfo!;
    // const res: AoN[] = await SanityFetch(query);
    // const code = res[0].titleBlock2.find(tb => tb.title === title)?.codes.find(x => x.description === desc)?.code.code;
    // return code && <CodeBox lang="tsx" code={code}/>
  }
  return (
    // <PureVarWrapper Tag={dn.tag} style={dn?.style} href={dn?.href} target={dn?.target}>{children}</PureVarWrapper>
    <dn.tag className={dn?.style} href={dn?.href} target={dn?.target}>
      {children}
    </dn.tag>
  );
};

// export default function CustomBlogTemplate({blogData}: {blogData: DOMNode[]}) {
//   return (
//     <>
//       {blogData.map((c1, k1) => (
//         // @ts-expect-error Server Component
//         <RenderContent c={c1} key={k1}>
//           {c1?.content?.map((c2, k2) => (
//             <RenderContent c={c2} key={k2}>
//               {(c2 as DOMNode)?.content?.map((c3, k3) => (
//                 <RenderContent c={c3} key={k3}>
//                   {(c3 as DOMNode)?.content?.map((c4, k4) => (
//                     <RenderContent c={c4} key={k4} />
//                   ))}
//                 </RenderContent>
//               ))}
//             </RenderContent>
//           ))}
//         </RenderContent>
//       ))}
//     </>
//   )
// };


type RecurProps = {
  data: (DOMNode|string)[] | undefined;
  codes: CodeBlock2[] | undefined;
};
type CBTProps = {
  blogData: DOMNode[];
  codesPerPage: CodeBlock2[] | undefined;
};
export default function CustomBlogTemplate({blogData, codesPerPage}: CBTProps) {
  const recursive = ({data, codes}: RecurProps) => {
    return data?.map((dn, k) => (
      (typeof dn === 'string') ?
      <Fragment key={k}>{dn}</Fragment> :
      <RenderContent dn={dn} codes={codes} key={k}>
        {recursive({data:dn?.content, codes:codes})}
      </RenderContent>
    ))
  };
  return <>{recursive({data:blogData, codes:codesPerPage})}</>
}
//___@ts-expect-error Server Component