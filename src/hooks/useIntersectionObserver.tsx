import { useState, useEffect, useRef } from 'react'
// TODO: Fix types.

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @returns {object} - Ref for target element and isIntersecting-state.
 */
const useIntersectionObserver = (margin: number = 0, threshold: number = 1.0) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef(null)

  const options = {
    root: null,
    rootMargin: `${margin}px`,
    threshold
  }

  /**
   * Callback-function checking if element is intersecting.
   *
   * @param entries - List of IntersectionObserverEntry-objects.
   * @param observer - The observer.
   */
  const intersectionHandler = (entries, observer) => {
    entries.forEach(entry => {
      console.log(entry)
      if (entry.isIntersecting) {
        setIsIntersecting(true)

        observer.unobserve(entry.target)
      }
    })
  }

  useEffect(() => {
  const observer = new IntersectionObserver(intersectionHandler, options)

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
