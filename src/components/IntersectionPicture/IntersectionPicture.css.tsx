/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export const fallbackStyling = (backgroundcolor: string) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15rem;

  background-color: ${backgroundcolor};
`