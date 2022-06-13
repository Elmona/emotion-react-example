import React from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { fallbackStyling, imageStyling } from './IntersectionPicture.css'
import { viewportSmall, viewportMedium } from '../../framework/mediaqueries'

/**
 * Interface for the options-object.
 */
interface InstersectionPictureOptions {
  base_url?: string
  type?: string
  source?: boolean
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
  alt: string
}

/**
 * Lazyloaded picture-component.
 *
 * @returns {JSX} - Picture-element with image-srcets.
 */
const IntersectionPicture = ({alt, uuid, children, options}: Props) => {
  const { targetRef, isIntersecting } = useIntersectionObserver()
  
  // Populate options with default values to let client only add some options and leave the others to default.
  const optionObject = {
    base_url: options?.base_url || 'https://imengine.gota.infomaker.io',
    type: options?.type || 'preview',
    source: options?.source || false,
    placeholder_height: options?.placeholder_height || '200px',
    placeholder_background_color: options?.placeholder_background_color || 'transparent'
  }

  return (
    <>
      { !isIntersecting && <div ref={targetRef} css={() => fallbackStyling(optionObject.placeholder_background_color, optionObject.placeholder_height)}>{ children || <div>Not intersecting</div> }</div> }

      { isIntersecting && (
        <picture>
          <source srcSet={`${optionObject.base_url}?uuid=${uuid}&width=${viewportSmall}&type=${optionObject.type}&source=${optionObject.source}`} media={`(max-width: ${viewportSmall}px)`}/>
          <source srcSet={`${optionObject.base_url}?uuid=${uuid}&width=${viewportMedium}&type=${optionObject.type}&source=${optionObject.source}`} media={`(max-width: ${viewportMedium}px)`}/>
          <img src={`${optionObject.base_url}?uuid=${uuid}&type=${optionObject.type}&source=${optionObject.source}`} alt={alt} css={() => imageStyling()} />
        </picture>
      ) }
    </>
  )
}

export default IntersectionPicture


/**
 * test uuids: 
 * f87dc2da-7835-5c6b-ad74-2593b243d603
 * f468b0f3-16ca-5583-9a51-3fceed135ba8
 */