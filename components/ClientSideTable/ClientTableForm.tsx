'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Titles3, CodeRows } from '@/typings';
import { langCheckedInit, langCheckedFalse } from '@/lib/langHeader';
import { newMapping } from '@/lib/langNameMappings';
import Table from '@/components/ClientSideTable/table';

type Props = {
  rows:Titles3[];
  slug: string;
  conclusions: CodeRows;
  btnStyle?: string;
};

export default function ClientTableForm({rows, slug, conclusions, btnStyle="t15 b1 border-black bg-[#f1f1f1] hover:bg-[#e7e7e7] brounded5 px5"}: Props) {
  //Avoid hydration mismatch error
  const [preHydration, setPreHydration] = useState(true);
  useEffect(() => setPreHydration(false), []);
  //Store state
  const pathname = usePathname();
  let langInitVal = langCheckedInit;
  if (typeof window !== "undefined" && pathname in sessionStorage) langInitVal = JSON.parse(sessionStorage.getItem(pathname)!);
  const [selectedLangs, setSelectedLangs] = useState(langInitVal);
  //Event handlers
  const disableBtns = (langs=selectedLangs, len=Object.values(langs).length) => !preHydration && Object.values(langs).filter(Boolean).length === len;
  const clickBtns = (langMapping: Record<string, boolean>) => () => setSelectedLangs(langMapping);
  const clickCheckbox = (e:React.ChangeEvent<HTMLInputElement>) => setSelectedLangs(prev => ({...prev, [e.target.value]: e.target.checked}));
  return (
    <>
      <form className='rela ws tc py3 sbcx30' onSubmit={() => sessionStorage.setItem(pathname, JSON.stringify(selectedLangs))}>
        <div className='il sbcx10'>
          <button type="button" className={`${btnStyle} disabled:cursorna`} disabled={disableBtns()} onClick={clickBtns(langCheckedInit)}>Select All</button>
          <button type="button" className={`${btnStyle} disabled:cursorna`} disabled={disableBtns(undefined, 0)} onClick={clickBtns(langCheckedFalse)}>Clear All</button>
        </div>
        {Object.entries(selectedLangs).map(([lang, checked]) => (
          <div className='il sbcx1' key={lang}>
            <input type="checkbox" id={lang} value={lang} checked={checked} onChange={clickCheckbox} className='cursorp'/>
            <label htmlFor={lang} className='cursorp'>{newMapping[lang]}</label>
          </div>
        ))}
        <button type="submit" className={btnStyle}>Confirm</button>
      </form>
      <Table rows={rows} langSelectionMapping={selectedLangs} preHydration={preHydration} slug={slug} conclusions={conclusions}/>
    </>
  )
}