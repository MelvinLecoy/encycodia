import { validifyURLparams } from "@/lib/util";

export default function TopNavbar({items, topic, fontsize='t20'}: {items: string[], topic: string, fontsize?: string}) {
  return (
    <nav className={`rela h40 ws fjbic bg-[#c5c0c0] ${fontsize} tb5 tudl sbcx20 px35`}>
      {/* {Object.entries(items).map(([item, link]) => <a href={link} key={item}>{item}</a>)} */}
      {items.map(ele => <a href={`/${topic}/${validifyURLparams(ele)}`} key={ele}>{ele}</a>)}
    </nav>
  )
};
// Record<string, string>