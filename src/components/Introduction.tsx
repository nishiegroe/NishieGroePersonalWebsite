import { Card, Typography, Box, Stack } from '@mui/material'
import img1Jpg from '../assets/IMG_2444.jpg'
import img1w640 from '../assets/IMG_2444-640.webp'
import img1w960 from '../assets/IMG_2444-960.webp'

const Introduction = () => {
    return (
        <Card
            id="introduction"
            className="Introduction"
            sx={{
                m: { xs: '16px 8px', md: '12px' },
                p: { xs: 2, sm: 3, md: 4 },
                width: '100%',
                maxWidth: { xs: 680, md: 960 },
                boxSizing: 'border-box',
                mx: 'auto',
                scrollMarginTop: { xs: '20px', md: '104px' },
                borderRadius: '15px',
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 2, sm: 3 }}
                alignItems="center"
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            fontSize: {
                                xs: '1.9rem',
                                sm: '2.2rem',
                                md: '2.6rem',
                            },
                        }}
                    >
                        Hey! I'm{' '}
                        <span style={{ color: '#36C0F0' }}>Nishie</span>,
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
                        variant="body1"
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            mt: { xs: 1.5, sm: 2 },
                            fontSize: { xs: '1rem', sm: '1.05rem' },
                        }}
                    >
                        Full-stack Software Engineer with 7+ years of experience
                        in React, Java, and AWS. Passionate about building great
                        user experiences and leading teams to deliver impactful
                        solutions.
                    </Typography>
                </Box>
                <Box sx={{ flexShrink: 0 }}>
                    <picture>
                        <source srcSet="/src/assets/IMG_2444.webp" type="image/webp" />
                        <source srcSet={`${img1w640} 640w, ${img1w960} 960w`} type="image/webp" />
                        <img
                            src={img1Jpg}
                            srcSet={`${img1w640} 640w, ${img1w960} 960w`}
                            sizes="(max-width: 600px) 70vw, (max-width: 900px) 60vw, 260px"
                            alt="Nishie portrait"
                            loading="lazy"
                            decoding="async"
                            style={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 0,
                                width: '70%',
                                maxWidth: 240,
                                height: 'auto',
                                borderRadius: 8,
                            }}
                        />
                    </picture>
                </Box>
            </Stack>
        </Card>
    )
}

export default Introduction
