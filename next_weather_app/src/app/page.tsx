// import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>날씨 알림 웹사이트</h1>
      <h4 style={{ color: 'lightblue' }}>Hello Next.js</h4>

      <ul>
        <li>
          <Link href="/seoul">서울</Link>
        </li>
        <li>
          <Link href="/nyc">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
    </>
  )
}
