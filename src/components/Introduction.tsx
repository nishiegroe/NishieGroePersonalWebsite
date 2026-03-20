import { Typography, Box, Stack } from '@mui/material'
import img1w240 from '../assets/IMG_2444-240.webp'

const Introduction = () => {
    return (
        <Box
            id="introduction"
            className="scroll-fade-in"
            sx={{
                width: '100%',
                maxWidth: '900px',
                margin: '0 auto',
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 3, md: 4 }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            fontSize: {
                                xs: '2rem',
                                sm: '2.3rem',
                                md: '2.5rem',
                            },
                            fontFamily: 'Playfair Display, serif',
                            mb: 2,
                        }}
                    >
                        About<span style={{ color: '#d9a8c7' }}>/me</span>
                    </Typography>
                    {/* Visually hidden site name to reinforce title for crawlers */}
                    <Typography
                        component="span"
                        sx={{
                            position: 'absolute',
                            width: 1,
                            height: 1,
                            p: 0,
                            m: -1,
                            overflow: 'hidden',
                            clip: 'rect(0,0,0,0)',
                            whiteSpace: 'nowrap',
                            border: 0,
                        }}
                    >
                        Nishie Groe
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            fontSize: { xs: '1.05rem', sm: '1.1rem' },
                            lineHeight: 1.9,
                            color: '#555',
                        }}
                    >
                        I'm a full-stack software engineer with 7+ years building
                        scalable applications. I specialize in React, microservices,
                        AWS infrastructure, and leading technical initiatives. I love
                        solving complex problems and creating experiences that users
                        genuinely enjoy.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flexShrink: 0,
                        minWidth: { xs: '100%', md: '300px' },
                    }}
                >
                    <picture>
                        <img
                            src={img1w240}
                            sizes="300px"
                            alt="Nishie Groe"
                            decoding="async"
                            fetchPriority="high"
                            width={240}
                            height={240}
                            style={{
                                display: 'block',
                                width: '100%',
                                maxWidth: '240px',
                                height: 'auto',
                                borderRadius: '4px',
                                margin: '0 auto',
                            }}
                        />
                    </picture>
                </Box>
            </Stack>
        </Box>
    )
}

export default Introduction
