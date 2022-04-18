/** @jsxImportSource @emotion/react */
import {css, Theme} from '@emotion/react'
import {medium} from '../framework/mediaqueries'

export const wrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  padding: ${theme.spacing.m} 0;

  ${medium} {
	flex-direction: row;
  }
`

export const cardStyling = (theme: Theme, backgroundcolor: string, color: string) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15rem;
  padding: ${theme.spacing.m};
  margin: ${theme.spacing.s};
  background-color: ${backgroundcolor};

  transition: all .2s ease-in-out; 

  &:hover {
    transform: scale(1.03);
  }

  p {
    color: ${color};
  }

  ${medium} {
	width: 100%;
  }
`