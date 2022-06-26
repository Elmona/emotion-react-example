/** @jsxImportSource @emotion/react */
import React from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { fallbackStyling, imageStyling } from './IntersectionPicture.css'
import { viewportSmall, viewportMedium } from '../../framework/mediaqueries'

/**
 * Interface for the options-object.
 */
interface InstersectionPictureOptions {
  base_url?: string
  imengine_type?: string
  imengine_source?: boolean
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
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>()

  // Populate options with default values to let client only add some options and leave the others to default.
  const optionObject = {
    base_url: options?.base_url || 'https://imengine.gota.infomaker.io',
    imengine_type: options?.imengine_type || 'preview',
    imengine_source: options?.imengine_source || false,
    placeholder_height: options?.placeholder_height || '300px',
    placeholder_background_color: options?.placeholder_background_color || 'transparent'
  }

  /**
   * Create url with query-parameters based on options and media-queries.
   *
   * @param width - The width to set as value for query-parameter width.
   * @returns {URL} - Url-object.
   */
  const createUrlParams = (width: number): URLSearchParams => {
    return new URLSearchParams({
        uuid,
        width: `${width}`,
        type: `${optionObject.imengine_type}`,
        source: `${optionObject.imengine_source}`
    })
  }

  return (
    <>
      { !isIntersecting && <div ref={targetRef} css={() => fallbackStyling(optionObject.placeholder_background_color, optionObject.placeholder_height)}>{ children }</div> }

      { isIntersecting && (
        <picture>
          <source srcSet={`${optionObject.base_url}?${createUrlParams(viewportSmall)}`} media={`(max-width: ${viewportSmall}px)`}/>
          <source srcSet={`${optionObject.base_url}?${createUrlParams(viewportMedium)}`} media={`(max-width: ${viewportMedium}px)`}/>
          <img src={`${optionObject.base_url}?${createUrlParams(window.innerWidth)}`} alt={alt} css={() => imageStyling()} />
        </picture>
      ) }
    </>
  )
}

export default IntersectionPicture
