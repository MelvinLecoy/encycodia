import '@/styles/globals.css'
import '@/public/prismjs/prism.css'
import Script from 'next/script'
import Image from 'next/image'
import bgImg from '@/public/img/wallpaper.jpg'

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
// <body className={inter.className}>{children}</body>

export const metadata = {
  title: 'Encycodia',
  description: 'Programming Language Encyclopedia',
}

type Props = {
  children: React.ReactNode;
  // test: React.ReactNode;
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>
        <div className='abso hs ws opac30'><Image src={bgImg} alt="Background Image" fill style={{objectFit:"cover"}} priority/></div>
        {children}
      </body>
      <Script src="/prismjs/prism.js"/>
    </html>
  )
}
