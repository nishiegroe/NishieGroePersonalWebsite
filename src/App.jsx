import Header from './components/Header.tsx'

// Import fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Spatial theme and styles
import './styles/spatial.css'
import './App.css'
import { useTheme } from './theme/useTheme'
import { useEffect } from 'react'

import Hero from './components/Hero.tsx'
import Introduction from './components/Introduction.tsx'
import SkillsConstellation from './components/SkillsConstellation.tsx'
import Projects from './components/Projects.tsx'
import EmploymentHistory from './components/EmploymentHistory.tsx'
import Contact from './components/Contact.tsx'
import { Box } from '@mui/material'

function App() {
    // Apply theme configuration
    useTheme()

    useEffect(() => {
        // Scroll animation and parallax handler
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const elements = document.querySelectorAll('[data-parallax], .scroll-fade-in, .spatial-section')

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect()
                const elementCenter = rect.top + rect.height / 2
                const windowCenter = windowHeight / 2

                // Parallax effect for data-parallax elements
                if (element.hasAttribute('data-parallax')) {
                    const parallaxValue = (elementCenter - windowCenter) * 0.05
                    element.style.transform = `translateY(${parallaxValue}px)`
                }

                // Fade-in trigger
                if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                    element.classList.add('in-view')
                }
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Run on mount

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Section jumping on scroll - navigate to next/prev section automatically
        let isScrolling = false
        const scrollDelay = 1000 // Milliseconds to wait between section jumps

        const getSections = () => {
            const hero = document.querySelector('.hero')
            const sections = document.querySelectorAll('.spatial-section, .hero, .skills-constellation')
            return Array.from(sections).filter(el => el && el.offsetParent !== null) // Only visible elements
        }

        const handleWheel = (e) => {
            if (isScrolling) return

            const sections = getSections()
            if (sections.length === 0) return

            const windowHeight = window.innerHeight
            let currentSectionIndex = 0

            // Find the current section (closest to viewport center)
            let minDistance = Infinity
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect()
                const distance = Math.abs(rect.top + rect.height / 2 - windowHeight / 2)
                if (distance < minDistance) {
                    minDistance = distance
                    currentSectionIndex = index
                }
            })

            const scrollingDown = e.deltaY > 0
            let targetIndex = scrollingDown ? currentSectionIndex + 1 : currentSectionIndex - 1

            // Clamp to valid range
            targetIndex = Math.max(0, Math.min(targetIndex, sections.length - 1))

            if (targetIndex !== currentSectionIndex) {
                isScrolling = true
                sections[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })
                setTimeout(() => {
                    isScrolling = false
                }, scrollDelay)
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: true })

        return () => window.removeEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className="app spatial-container">
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Introduction Section */}
            <Box className="spatial-section scroll-fade-in">
                <Box className="spatial-section-content">
                    <Introduction />
                </Box>
            </Box>

            {/* Skills Constellation */}
            <SkillsConstellation />

            {/* Projects Gallery */}
            <Box className="spatial-section scroll-fade-in">
                <Box className="spatial-section-content">
                    <Projects />
                </Box>
            </Box>

            {/* Employment Timeline */}
            <Box className="spatial-section scroll-fade-in">
                <Box className="spatial-section-content">
                    <EmploymentHistory />
                </Box>
            </Box>

            {/* Contact Section */}
            <Box className="spatial-section scroll-fade-in">
                <Box className="spatial-section-content">
                    <Contact />
                </Box>
            </Box>
        </div>
    )
}

export default App
