import Header from './components/Header.tsx'

// import fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './App.css'
import Introduction from './components/Introduction.tsx'
import Skills from './components/Skills.tsx'
import EmploymentHistory from './components/EmploymentHistory.tsx'
import Contact from './components/Contact.tsx'
import { Box } from '@mui/material'

function App() {
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
