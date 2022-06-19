/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren, useMemo } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { wrapperStyle, overlay } from './RevealingWrapper.css'

/**
 * Wrapper div revealing child-elements when intersecting and hiding it when not intersecting.
 *
 * @returns {JSX} - Div element.
 */
const RevealingWrapper = ({ children }: PropsWithChildren) => {
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLImageElement>(useMemo(() => ({ observe_once: false, threshold: 0.8 }), []))

  if (isIntersecting) {
    console.log('Peek-a-boo!')
  }

  return (
    <div
      ref={targetRef}
      css={() => wrapperStyle()}
    >
      { children }
      <div css={() => overlay(isIntersecting)}></div>
    </div>
  )
}

export default RevealingWrapper
