import { Box, Typography } from '@mui/material'
import heroImg640 from '../assets/IMG_2521-640.webp'
import heroImg960 from '../assets/IMG_2521-960.webp'
import heroImgFull from '../assets/IMG_2521.webp'

const Hero = () => {
    const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const element = document.getElementById('introduction')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <Box className="hero" sx={heroStyles.container}>
            {/* Floating background shapes */}
            <Box sx={{ ...shapeStyles.base, ...shapeStyles.shape1 }} />
            <Box sx={{ ...shapeStyles.base, ...shapeStyles.shape2 }} />
            <Box sx={{ ...shapeStyles.base, ...shapeStyles.shape3 }} />

            <Box sx={heroStyles.inner}>
                {/* Left: Text */}
                <Box sx={heroStyles.textSide}>
                    <Typography variant="h1" sx={heroStyles.name}>
                        Nishie Groe
                        <Box component="span" sx={{ color: '#d9a8c7' }}>
                            .
                        </Box>
                    </Typography>
                    <Typography sx={heroStyles.tagline}>
                        Full-stack software engineer building exceptional digital
                        experiences
                    </Typography>
                    <Box sx={heroStyles.cta}>
                        <a
                            href="#introduction"
                            onClick={handleExploreClick}
                            style={heroStyles.ctaButton}
                        >
                            Explore my work
                        </a>
                    </Box>
                </Box>

                {/* Right: Portrait */}
                <Box sx={heroStyles.imageWrapper}>
                    <Box sx={heroStyles.imageGlow} />
                    <picture>
                        <source
                            srcSet={`${heroImg640} 640w, ${heroImg960} 960w, ${heroImgFull} 1280w`}
                            sizes="(max-width: 768px) 80vw, 400px"
                            type="image/webp"
                        />
                        <img
                            src={heroImg640}
                            alt="Nishie Groe"
                            loading="eager"
                            decoding="async"
                            style={heroStyles.portrait}
                        />
                    </picture>
                </Box>
            </Box>
        </Box>
    )
}

/* ─── Styles ─── */
const heroStyles = {
    container: {
        position: 'relative',
        minHeight: { xs: '100dvh', md: 'auto' },
        pt: { xs: 16, md: 20 },
        pb: { xs: 6, md: 8 },
        px: { xs: 3, md: 6 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #faf8f5 0%, #f5f0f5 100%)',
    },
    inner: {
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 4, md: 8 },
    },
    textSide: {
        flex: 1,
        textAlign: { xs: 'center', md: 'left' },
        maxWidth: { xs: '100%', md: '55%' },
    },
    name: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 800,
        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
        lineHeight: 1.1,
        color: '#4a4a52',
        mb: 2,
    },
    tagline: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: { xs: '1rem', md: '1.2rem' },
        color: '#8a8a92',
        maxWidth: { xs: '100%', md: '480px' },
        lineHeight: 1.7,
        mb: 4,
        mx: { xs: 'auto', md: 0 },
    },
    cta: {
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-start' },
    },
    ctaButton: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.85rem 2rem',
        background: 'linear-gradient(135deg, #d9a8c7 0%, #f2a8c5 100%)',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '0.95rem',
        borderRadius: '9999px',
        textDecoration: 'none',
        transition:
            'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 16px rgba(217, 168, 199, 0.3)',
    },
    imageWrapper: {
        position: 'relative',
        flexShrink: 0,
        width: { xs: '260px', sm: '320px', md: '400px' },
        height: { xs: '260px', sm: '320px', md: '400px' },
    },
    imageGlow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        borderRadius: '50%',
        background:
            'radial-gradient(circle, rgba(217,168,199,0.25) 0%, transparent 70%)',
        zIndex: 0,
    },
    portrait: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '24px',
        boxShadow: '0 12px 40px rgba(217, 168, 199, 0.2)',
    },
}

const shapeStyles = {
    base: {
        position: 'absolute' as const,
        borderRadius: '50%',
        pointerEvents: 'none' as const,
        zIndex: 0,
    },
    shape1: {
        width: '400px',
        height: '400px',
        background:
            'radial-gradient(circle, rgba(217,168,199,0.12) 0%, transparent 70%)',
        top: '5%',
        right: '-100px',
    },
    shape2: {
        width: '300px',
        height: '300px',
        background:
            'radial-gradient(circle, rgba(168,216,242,0.1) 0%, transparent 70%)',
        bottom: '10%',
        left: '-80px',
    },
    shape3: {
        width: '200px',
        height: '200px',
        background:
            'radial-gradient(circle, rgba(245,209,200,0.15) 0%, transparent 70%)',
        top: '40%',
        right: '15%',
    },
}

export default Hero
