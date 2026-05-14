// Pastel Tech - Cute Feminine Portfolio Redesign
// =================================================

import './styles/pastel-tech.css'
import './App.css'
import { useEffect } from 'react'

// Components
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Introduction from './components/Introduction.tsx'
import SkillsGrid from './components/SkillsGrid.tsx'
import Projects from './components/Projects.tsx'
import EmploymentHistory from './components/EmploymentHistory.tsx'
import Contact from './components/Contact.tsx'
import { Box } from '@mui/material'

function App() {
    useEffect(() => {
        // Scroll fade-in observer (not scroll-jacking - just reveals elements)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view')
                        // Optionally unobserve after first reveal
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                root: null,
                rootMargin: '0px 0px -80px 0px',
                threshold: 0.1,
            }
        )

        // Observe all scroll-fade-in elements
        const elements = document.querySelectorAll('.scroll-fade-in')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="app">
            {/* Fixed Header */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Introduction Section */}
            <Box className="section scroll-fade-in" sx={{ py: { xs: 6, md: 10 } }}>
                <Introduction />
            </Box>

            {/* Skills Grid */}
            <Box className="section scroll-fade-in" sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0f5 50%, #faf8f5 100%)' }}>
                <SkillsGrid />
            </Box>

            {/* Projects Section */}
            <Box className="section scroll-fade-in" sx={{ py: { xs: 6, md: 10 } }}>
                <Projects />
            </Box>

            {/* Experience Section */}
            <Box className="section scroll-fade-in" sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0f5 50%, #faf8f5 100%)' }}>
                <EmploymentHistory />
            </Box>

            {/* Contact Section */}
            <Box className="section scroll-fade-in" sx={{ py: { xs: 6, md: 10 } }}>
                <Contact />
            </Box>
        </div>
    )
}

export default App
