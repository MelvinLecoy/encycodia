import { CodeBlock2 } from "@/typings";

const AoN_Routing_NormalComponentHierarchy =
"<Layout>                                        //layout.tsx\n" +
"  <Template>                                    //template.tsx\n" +
"    <ErrorBoundary fallback={<Error/>}>         //error.tsx\n" +
"      <Suspense fallback={<Loading/>}>          //loading.tsx\n" +
"        <ErrorBoundary fallback={<NotFound/>}>  //not-found.tsx\n" +
"          <Page/>                               //page.tsx\n" +
"        </ErrorBoundary>\n" +
"      </Suspense>\n" +
"    </ErrorBoundary>\n" +
"  </Template>\n" +
"</Layout>\n";
const AoN_Routing_NestedComponentHierarchy =
"// Nested\n" +
"<Layout>\n" +
"  <ErrorBoundary fallback={<OuterError/>}>\n" +
"    <Suspense fallback={<OuterLoading/>}>\n" +
"      //Inner File starts\n" +
"      <Layout>\n" +
"	     <ErrorBoundary fallback={<InnerError/>}>\n" +
"		   <Suspense fallback={<InnerLoading/>}>\n" +
"            <Page/>\n" +
"		   </Suspense>\n" +
"		 </ErrorBoundary>\n" +
"	   </Layout>\n" +
"	   //Inner file ends\n" +
"	 </Suspense>\n" +
"  </ErrorBoundary>\n" +
"</Layout>\n";

export const AoN_Routing_ComponentHierarchy = [
    {
        code: {code: AoN_Routing_NormalComponentHierarchy, _type: 'code'},
        _type: 'codeBlock2',
        description: 'normalCH',
        _key: '9dq613dod28c',
    },
    {
        code: {code: AoN_Routing_NestedComponentHierarchy, _type: 'code'},
        _type: 'codeBlock2',
        description: 'nestedCH',
        _key: 'h9c1j3x6iclx',
    },
] as CodeBlock2[];