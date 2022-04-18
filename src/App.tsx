import React, {useState} from 'react'
import {ThemeProvider} from '@emotion/react'

import {Cards} from './components/Cards'
import {Header} from './components/Header'
import {DisplayTextElements} from './components/DisplayTextElements'

import {GlobalStyles} from './framework/GlobalStyles'
import {lightTheme} from './framework/theme'

import {cards} from './models/cards'

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
            </main>
            <footer>
                {/* TOOD */}
            </footer>
        </ThemeProvider>
    </>
}


export default App
