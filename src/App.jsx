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
        // Only on desktop devices
        const isMobileDevice = () => {
            return window.innerWidth < 768
        }

        if (isMobileDevice()) {
            // Mobile: disable section jumping, use natural scrolling
            return
        }

        let isScrolling = false
        let lastScrollDirection = null
        const scrollDelay = 1200 // Milliseconds to wait between section jumps

        const getSections = () => {
            const sections = document.querySelectorAll('.spatial-section, .hero, .skills-constellation')
            return Array.from(sections).filter(el => el && el.offsetParent !== null)
        }

        const handleWheel = (e) => {
            if (isScrolling) return

            const sections = getSections()
            if (sections.length === 0) return

            const windowHeight = window.innerHeight
            let currentSectionIndex = 0

            // Find the current section (top is most visible in viewport)
            let minDistance = Infinity
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect()
                // Find section with top closest to viewport top (more reliable than center)
                const distance = Math.abs(rect.top)
                if (distance < minDistance) {
                    minDistance = distance
                    currentSectionIndex = index
                }
            })

            const scrollingDown = e.deltaY > 0

            // Only jump if scrolling direction matches expectation
            // This prevents jumping backwards when transitioning between sections
            if (lastScrollDirection !== null && scrollingDown !== lastScrollDirection) {
                lastScrollDirection = scrollingDown
                return
            }
            lastScrollDirection = scrollingDown

            let targetIndex = scrollingDown ? currentSectionIndex + 1 : currentSectionIndex - 1

            // Clamp to valid range
            targetIndex = Math.max(0, Math.min(targetIndex, sections.length - 1))

            if (targetIndex !== currentSectionIndex) {
                isScrolling = true
                sections[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })
                setTimeout(() => {
                    isScrolling = false
                }, scrollDelay)
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: true })

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
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
