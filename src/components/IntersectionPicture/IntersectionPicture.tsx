import React from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

/**
 * Lazyloaded picture-component.
 *
 * @returns {JSX} - Picture-element with image-srcets.
 */
const IntersectionPicture : React.FC = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver()

  if (isIntersecting) {
    console.log('intersecting')
  }
  return (
    <div ref={targetRef}>IntersectionPicture</div>
  )
}

export default IntersectionPicture