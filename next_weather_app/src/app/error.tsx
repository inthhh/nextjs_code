'use client'

import { useEffect } from 'react'

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error('-----', error.message)
  }, [])
  return (
    <>
      <h3>오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          reset()
        }}
      >
        새로고침
      </button>
    </>
  )
}
