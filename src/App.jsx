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

function App() {
    return (
        <div className="app">
            <Header />
            <div className="body" style={{ marginTop: '50px', width: '70vw' }}>
                <div>
                    <Introduction />
                </div>

                <Skills />
                <EmploymentHistory />

                <Contact />
            </div>
        </div>
    )
}

export default App
