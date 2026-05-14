import { Typography, Box, Stack } from '@mui/material'
import img1w240 from '../assets/IMG_2444-240.webp'

const Introduction = () => {
    return (
        <Box
            id="introduction"
            className="scroll-fade-in"
            sx={styles.container}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, md: 6 }}
                alignItems={{ xs: 'center', md: 'center' }}
            >
                {/* Image */}
                <Box sx={styles.imageWrapper}>
                    <Box sx={styles.imageGlow} />
                    <picture>
                        <img
                            src={img1w240}
                            sizes="280px"
                            alt="Nishie Groe"
                            decoding="async"
                            loading="lazy"
                            style={styles.portrait}
                        />
                    </picture>
                </Box>

                {/* Text */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={styles.heading}
                    >
                        About
                        <Box component="span" sx={{ color: '#d9a8c7' }}>
                            /me
                        </Box>
                    </Typography>
                    <Typography sx={styles.bio}>
                        I'm a Software Engineer with 8+ years of experience specializing in modern frontend architecture and full-stack development. Expert in Next.js, React, and Typescript with proven ability to design and deliver scalable multi-tenant applications. Demonstrated success leading architectural initiatives, establishing development teams, and executing complex migrations with zero downtime. Passionate about creating well-documented, maintainable systems that empower teams and drive business value.
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

/* ─── Styles ─── */
const styles = {
    container: {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        px: { xs: 2, md: 4 },
    },
    imageWrapper: {
        position: 'relative',
        flexShrink: 0,
        width: { xs: '200px', md: '280px' },
        height: { xs: '200px', md: '280px' },
    },
    imageGlow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217,168,199,0.15) 0%, transparent 70%)',
        zIndex: 0,
    },
    portrait: {
        position: 'relative',
        zIndex: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px',
        boxShadow: '0 8px 24px rgba(217, 168, 199, 0.15)',
    },
    heading: {
        textAlign: { xs: 'center', md: 'left' },
        fontSize: {
            xs: '2rem',
            sm: '2.3rem',
            md: '2.5rem',
        },
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        mb: 2.5,
        color: '#4a4a52',
    },
    bio: {
        textAlign: { xs: 'center', md: 'left' },
        fontSize: { xs: '1rem', sm: '1.1rem' },
        lineHeight: 1.9,
        color: '#8a8a92',
        fontFamily: "'Poppins', sans-serif",
    },
}

export default Introduction
