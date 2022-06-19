/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const wrapperStyle = () => css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`
export const overlay = (isIntersecting: boolean) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 10;
  transition: all 200ms;

  ${!isIntersecting &&
  `
    opacity: 1;
  `}

  ${isIntersecting &&
  `
    opacity: 0;
  `}
`
