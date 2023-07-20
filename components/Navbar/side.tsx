import { AoN, FS, Titles, Titles2 } from "@/typings";
import Link from "next/link";
import { validifyURLparams } from "@/lib/util";

type Props = {
  topics: FS[] | AoN[];
  linkPrefix: string;
  navSty?: string;
  aSty?: string;
}

export default function SideNavbar({
  topics,
  linkPrefix,
  navSty="rela hs w180 fnoshrink pl8 bg-[#c5c0c0]",
  aSty="blk t15 hover:bg-[#9f9c9c]",
}: Props) {
  const renderTitles = (topic:string, tb:(Titles[]|Titles2[])) => (
    tb.map(tt => <a href={`${linkPrefix}/${validifyURLparams(topic)}/${tt._key}`} className={aSty} key={tt._key}>{tt.title}</a>)
  );
  return (
    <nav className={navSty}>
      {topics.map(t => (
        <div key={t._id} className="mb15">
          <h1 className="t19 tb7"><Link href={`${linkPrefix}/${validifyURLparams(t.topic)}`}>{t.topic}</Link></h1>
          {linkPrefix === '/FundamentalSyntax' && renderTitles(t.topic, (t as FS).titleBlock)}
          {linkPrefix === '/AllofNextjs' && renderTitles(t.topic, (t as AoN).titleBlock2)}
        </div>
      ))}
    </nav>
  )
}