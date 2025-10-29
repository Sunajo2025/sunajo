'use client';

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import PageLoader from '@/components/PageLoader'

export default function PageTransitionLoader() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const prevPathRef = useRef<string | null>(null)

  // Hide loader shortly after initial mount (hydration)
  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIsLoading(false), 400)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Show loader briefly on route changes
  useEffect(() => {
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname
      return
    }
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname
      setIsLoading(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsLoading(false), 400)
    }
  }, [pathname])

  return isLoading ? <PageLoader /> : null
}


