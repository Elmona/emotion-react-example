/** @jsxImportSource @emotion/react */
import {Theme} from '@emotion/react'
import {darkTheme, lightTheme} from '../framework/theme'
import {headerWrapper} from './Header.css'

const Header = (
	{theme, setTheme}: {theme: Theme, setTheme: any}
) =>
	<header css={(theme: Theme) => headerWrapper(theme)}>
		<h1>Emotion React example</h1>
		<button
			onClick={() => {
				if (theme.name === 'light') {
					setTheme(darkTheme)
				} else {
					setTheme(lightTheme)
				}
			}}
		>
			Change theme
		</button>
	</header>

export {Header}