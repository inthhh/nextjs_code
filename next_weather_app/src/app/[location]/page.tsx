// "use client" 디렉티브를 추가해서 이 파일이 클라이언트 컴포넌트임을 명시
'use client'
import Link from 'next/link'
import HomeButton from '../components/HomeButton'
import { getCurrentWeather } from '../utils/getCurrentWeather'
import { useState, useEffect, use } from 'react'
import Loading from '../loading'
import { useParams } from 'next/navigation'

// interface Props {
//   location: string
// }

export default function Detail() {
  // const data = getCurrentWeather(location)
  const params = useParams()
  const location = params?.location as string
  const name = location === 'seoul' ? '서울' : location
  console.log(location)
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const json = await getCurrentWeather(location)
      setData(json)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Detail Page</h1>
      <h4 style={{ margin: '30px 0 10px 0' }}>{name}의 현재 날씨</h4>
      {loading ? (
        <Loading />
      ) : (
        <>
          <p>기온 : {data?.current.temp_c}도</p>
          <p>하늘 : {data?.current.condition.text}</p>
        </>
      )}
      <h4 style={{ margin: '30px 0 10px 0' }}>{name}의 3일치 날씨 예보</h4>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul>
            {data?.forecast.forecastday.map((day: any) => (
              <li key={day.date}>
                <p>
                  {day.date} : 평균 {day.day.avgtemp_c}도
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
      <HomeButton />
    </>
  )
}

// localhost:3000/detail
// [location]/page.tsx는 /seoul, /busan 등에 대한 페이지를 렌더링하는 역할

// 'use client' // 클라이언트 사이드에서 사용할 수 있는 hook
// csr 사용 시 맨 상단에 써야함
