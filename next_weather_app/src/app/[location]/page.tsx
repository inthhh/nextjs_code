import Link from 'next/link'

interface Props {
  params: { location: string }
}

export default async function Detail({ params }: Props) {
  const { location } = await params
  console.log(location)

  const name = location === 'seoul' ? '서울' : location
  return (
    <>
      <h1>Detail Page</h1>
      <h4>{name}의 3일치 날씨 예보</h4>
      <Link href="/">홈으로</Link>
    </>
  )
}

// localhost:3000/detail
// [location]/page.tsx는 /seoul, /busan 등에 대한 페이지를 렌더링하는 역할
