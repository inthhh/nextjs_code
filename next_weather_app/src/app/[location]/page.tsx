// import Link from 'next/link'
import HomeButton from '../components/HomeButton'

interface Props {
  params: { location: string }
}

// .env 참조
const API_KEY = process.env.WEATHER_API_KEY

const getCurrentWeather = async (location: string) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
  )
  return res.json()
}

export default async function Detail({ params }: Props) {
  const { location } = params
  const json = await getCurrentWeather(location)
  console.log(location, json)
  const { current } = json

  const name = location === 'seoul' ? '서울' : location
  return (
    <>
      <h1>Detail Page</h1>
      <h4>{name}의 3일치 날씨 예보</h4>
      <p>{current.temp_c}도</p>
      <HomeButton />
    </>
  )
}

// localhost:3000/detail
// [location]/page.tsx는 /seoul, /busan 등에 대한 페이지를 렌더링하는 역할

// 'use client' // 클라이언트 사이드에서 사용할 수 있는 hook
// csr 사용 시 맨 상단에 써야함
