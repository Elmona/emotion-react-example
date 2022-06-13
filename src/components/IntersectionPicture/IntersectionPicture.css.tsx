/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export const fallbackStyling = (backgroundcolor: string, height: string) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${height};

  background-color: ${backgroundcolor};
`

export const imageStyling = () => css`
  width: 100vw;
  display: block;
`
