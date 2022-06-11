import { useState, useEffect } from 'react'

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @returns {object} - State-data.
 */
const useIntersectionObserver = (target: HTMLElement, ancestor: HTMLElement, margin: number = 0, threshold: number = 1.0, callback: () => AnyTypeAnnotation) => {
  const options = {
    root: ancestor ? ancestor : null,
    rootMargin: `${margin}px`,
    threshold
  }
  
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target)
}

export default useIntersectionObserver
