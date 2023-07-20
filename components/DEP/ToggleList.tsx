import { Titles } from "@/typings";

type Props = {
  titles: Titles[];
};

const LangNames = {
  python: 'Python',
  js: 'JS',
  cpp: 'C++',
  csharp: 'C#',
  java: 'Java',
  rust: 'Rust',
  go: 'Go',
};

function ToggleList({titles}: Props) {
  return (
    <>
      {titles.map(t => (
        <details key={t._key}>
          <summary>{t.title}</summary>
          <div className="">
            {t.codes.map(c => (
              <div className="" key={c._key}>
                <button className="">{c.language.map(lang => LangNames[lang as keyof typeof LangNames]).join(', ')}</button>
                {/* <div className="code" style="display: none;"> */}
                <div className="">
                  <pre><code className={`language-${c.language?.[0]}`}>{c.code.code}</code></pre>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </>
  )
}

export default ToggleList;