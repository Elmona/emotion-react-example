
export const viewportSmall = 420
export const viewportMedium = 768
export const viewportLarge = 1120

const mediaQueryMaxWidth = (width) => `@media (max-width: ${width}px)`
const mediaQueryMinWidth = (width) => `@media (min-width: ${width}px)`

export const small = mediaQueryMaxWidth(viewportSmall)
export const medium = mediaQueryMinWidth(viewportMedium)
export const large = mediaQueryMinWidth(viewportLarge)