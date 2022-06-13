import React from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { fallbackStyling } from './IntersectionPicture.css'

/**
 * Interface for the options-object.
 */
interface InstersectionPictureOptions {
  mobile_first?: boolean
  media_unit?: string
  placeholder_height?: string
  placeholder_background_color?: string
}

/**
 * Define prop-types.
 *
 */
type Props = {
  children?: JSX.Element
  options?: InstersectionPictureOptions
  uuid: string
}

const defaultOptions = {
  mobile_first: false,
  media_unit: 'px',
  placeholder_height: '200px',
  placeholder_background_color: 'transparent'
}

/**
 * Lazyloaded picture-component.
 *
 * @returns {JSX} - Picture-element with image-srcets.
 */
const IntersectionPicture = ({uuid, children, options = defaultOptions}: Props) => {
  const { targetRef, isIntersecting } = useIntersectionObserver()
  
  // Populate options with default values.
  const optionObject = {
    mobile_first: options.mobile_first || false,
    media_unit: options.media_unit || 'px',
    placeholder_height: options.placeholder_height || '200px',
    placeholder_background_color: options.placeholder_background_color || 'transparent'
  }


  return (
    <>
      { !isIntersecting && <div ref={targetRef} css={() => fallbackStyling(optionObject.placeholder_background_color)}>{ children || <div>Not intersecting</div> }</div> }
      { isIntersecting && (
        <div>Is intersecting</div>
      ) }
    </>
  )
}

export default IntersectionPicture
