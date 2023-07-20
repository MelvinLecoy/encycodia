import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import rust from 'react-syntax-highlighter/dist/esm/languages/prism/rust';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import csharp from 'react-syntax-highlighter/dist/esm/languages/prism/csharp';
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go';
import scala from 'react-syntax-highlighter/dist/esm/languages/prism/scala';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('ts', typescript);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('scala', scala);
SyntaxHighlighter.registerLanguage('jsx', tsx);

export default function CodeBox_RSH({lang, code}: {lang: string, code: string}) {
  const preStyles = {'width': 'fit-content', 'height': 'fit-content', 'fontSize': '10.5px', 'padding': '5px', 'margin': '3px 2px', 'flexShrink': '0'};
  return <SyntaxHighlighter language={lang} style={okaidia} customStyle={preStyles}>{code}</SyntaxHighlighter>;
}