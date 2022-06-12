import { useState } from 'react'
// TODO: Fix types.

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @returns {object} - State-data.
 */
const useIntersectionObserver = (target: HTMLElement, ancestor: HTMLElement, margin: number = 0, threshold: number = 1.0) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const options = {
    root: ancestor ? ancestor : null,
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
  
  const observer = new IntersectionObserver(intersectionHandler, options);
  observer.observe(target)

  return {
    isIntersecting
  }
}

export default useIntersectionObserver
