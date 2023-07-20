// import Category from '@/components/Category'
// {/* @ts-expect-error Async Server Component
//       <Category api='getFS'/> */}
import Link from 'next/link'

export default function Home() {
  return (
    <div className='rela'>
      <Link href="/FundamentalSyntax">Fundamental Syntax</Link><br />
      <Link href="/Syntax">Syntax</Link><br />
      <Link href="/DataStructures">Data Structures</Link><br />
      <Link href="/AllofNextjs">All of Nextjs</Link>
    </div>
  )
}
