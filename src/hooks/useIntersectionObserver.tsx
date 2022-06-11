import { useState } from 'react'

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @returns {object} - State-data.
 */
const useIntersectionObserver = (target: HTMLElement, ancestor: HTMLElement, margin: number = 0, threshold: number = 1.0) => {
  const [isVisible, setIsVisible] = useState(false)

  const options = {
    root: ancestor ? ancestor : null,
    rootMargin: `${margin}px`,
    threshold
  }
  
  const observer = new IntersectionObserver(() => setIsVisible(true), options);
  observer.observe(target)

  return {
    isVisible
  }
}

export default useIntersectionObserver
