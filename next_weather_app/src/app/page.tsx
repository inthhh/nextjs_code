// import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const getCurrentWeather = async () => {
    const res = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=d10862e40a0d4d6b8cdI*******&q=London&aqi=no'
    )

    return res.json()
  }

  return (
    <>
      <h1>Hello Next.js</h1>
      <a href="#">바로가기</a>
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
