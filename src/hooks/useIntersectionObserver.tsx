import { useState, useEffect, useRef } from 'react'

interface intersectionObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @param {object} options - Options-object for the Intersection Observer.
 * @returns {object} - Ref for target element and isIntersecting-state.
 */
const useIntersectionObserver = (options?: intersectionObserverOptions) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef(null)

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
  const intersectionOptions = {
    root: options?.root || null,
    rootMargin: options?.rootMargin || '0px',
    threshold: options?.threshold || 0
  }

  const observer = new IntersectionObserver(intersectionHandler, intersectionOptions)
  const target = targetRef.current
  if (target) {
    observer.observe(target)
  }

  return () => {
    if (target) {
      observer.unobserve(target)
    }
  }
  }, [targetRef, options])

  return {
    targetRef,
    isIntersecting
  }
}

export default useIntersectionObserver
