import React, {useState} from 'react'
import {ThemeProvider} from '@emotion/react'

import {Cards} from './components/Cards'
import {Header} from './components/Header'
import {DisplayTextElements} from './components/DisplayTextElements'

import {GlobalStyles} from './framework/GlobalStyles'
import {lightTheme} from './framework/theme'

import {cards} from './models/cards'
import IntersectionPicture from './components/IntersectionPicture/IntersectionPicture'

const App = () => {
    const [theme, setTheme] = useState(lightTheme)

    return <>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header
                setTheme={setTheme}
                theme={theme}
            />
            {/* TOOD: Add Wrapper here */}
            <main>
                <DisplayTextElements />
                <Cards cards={cards} />
                <IntersectionPicture uuid='ae39a0be-e360-50e5-a2e0-528ff145b73b' alt='Test image' />
            </main>
            <footer>
                {/* TOOD */}
            </footer>
        </ThemeProvider>
    </>
}


export default App
