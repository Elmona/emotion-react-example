/** @jsxImportSource @emotion/react */
import {css, Theme} from '@emotion/react'
import {medium} from '../framework/mediaqueries'

export const headerWrapper = (theme: Theme) => css`
	display: flex;
	justify-content: space-between;
	background-color: ${theme.colors.primary};
	padding: ${theme.spacing.s};

	h1 {
	  margin-bottom: 0;
	}

	${medium} {
	  padding: ${theme.spacing.m};
	}
`