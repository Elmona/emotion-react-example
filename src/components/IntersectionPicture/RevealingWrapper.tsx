/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

/**
 * Wrapper div revealing child-elements when intersecting and hiding it when not intersecting.
 *
 * @returns {JSX} - Div element.
 */
const RevealingWrapper = ({ children }: PropsWithChildren) => {
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLImageElement>({ intersect_once: false, threshold: 0.6 })

  if (isIntersecting) {
    console.log('Pick-a-boo!')
  }

  return (
    <div ref={targetRef}>
      { children }
    </div>
  )
}

export default RevealingWrapper
