import Header from './components/Header'

// import fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './App.css'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import EmploymentHistory from './components/EmploymentHistory'
import Contact from './components/Contact'
import { Box } from '@mui/material'
import React from 'react'

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Box
                className="body"
                sx={{
                    mt: { xs: 1, md: '80px' },
                    pb: { xs: '88px', md: 0 },
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div>
                    <Introduction />
                </div>

                <Skills />
                <EmploymentHistory />

                <Contact />
            </Box>
        </div>
    )
}

export default App
