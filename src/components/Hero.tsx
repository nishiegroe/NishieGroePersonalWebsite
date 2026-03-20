import { Box, Typography } from '@mui/material'

const Hero = () => {
    const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const element = document.getElementById('introduction')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    return (
        <Box className="hero spatial-container">
            <Box className="hero-content">
                <h1>
                    Nishie Groe<span style={{ color: '#d9a8c7' }}>.</span>
                </h1>
                <Typography className="hero-tagline">
                    Full-stack software engineer building exceptional digital experiences
                </Typography>
                <Box className="hero-cta">
                    <a href="#introduction" onClick={handleExploreClick}>Explore my work</a>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero
