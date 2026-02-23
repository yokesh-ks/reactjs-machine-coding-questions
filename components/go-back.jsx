'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function GoBack() {
  const router = useRouter()
  const segments = usePathname().split('/')
  const isNestedPage = segments.length > 2

  if (!isNestedPage) return null

  return (
    <button
      onClick={() => router.back()}
      className="x:underline x:print:hidden x:cursor-pointer"
    >
      Back
    </button>
  )
}
