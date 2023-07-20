export default function CodeBox({lang, code}: {lang: string, code: string}) {
  return (
    <pre className={`hfit wfit !text-[10.5px] !p-[5px] !my-[3px] !mx-[2px] fnoshrink language-${lang}`}>
      <code className={`language-${lang}`}>{code}</code>
    </pre>
  )
}