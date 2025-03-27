import Link from 'next/link'
import HomeButton from '../components/HomeButton'
import { getCurrentWeather } from '../utils/getCurrentWeather'

interface Props {
  params: { location: string }
}

export default async function Detail({ params }: Props) {
  const { location } = params
  const json = await getCurrentWeather(location)
  console.log(location, json)

  const name = location === 'seoul' ? '서울' : location
  return (
    <>
      <h1>Detail Page</h1>
      <h4 style={{ margin: '30px 0 10px 0' }}>{name}의 현재 날씨</h4>
      <p>기온 : {json.current?.temp_c}도</p>
      <p>하늘 : {json.current?.condition.text}</p>
      <h4 style={{ margin: '30px 0 10px 0' }}>{name}의 3일치 날씨 예보</h4>
      <ul>
        {json.forecast.forecastday.map((day: any) => (
          <li key={day.date}>
            <p>
              {day.date} : 평균 {day.day.avgtemp_c}도
            </p>
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  )
}

// localhost:3000/detail
// [location]/page.tsx는 /seoul, /busan 등에 대한 페이지를 렌더링하는 역할

// 'use client' // 클라이언트 사이드에서 사용할 수 있는 hook
// csr 사용 시 맨 상단에 써야함
