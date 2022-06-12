import { useState, useEffect, useRef } from 'react'

interface intersectionObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @returns {object} - Ref for target element and isIntersecting-state.
 */
const useIntersectionObserver = (options?: intersectionObserverOptions) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef(null)

  const intersectionOptions = {
    root: options?.root || null,
    rootMargin: options?.rootMargin || '0px',
    threshold: options?.threshold || 0
  }

  /**
   * Callback-function checking if element is intersecting.
   *
   * @param entries - List of IntersectionObserverEntry-objects.
   * @param observer - The observer.
   */
  const intersectionHandler = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)

        observer.unobserve(entry.target)
      }
    })
  }

  useEffect(() => {
  const observer = new IntersectionObserver(intersectionHandler, intersectionOptions)

  if (targetRef.current) {
    observer.observe(targetRef.current)
  }

  return () => {
    if (targetRef.current) {
      observer.unobserve(targetRef.current)
    }
  }
  }, [targetRef])

  return {
    targetRef,
    isIntersecting
  }
}

export default useIntersectionObserver
