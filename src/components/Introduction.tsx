import { Card, Typography, Box, Stack } from '@mui/material'
import img1Jpg from '../assets/IMG_2444.jpg'
import img1w640 from '../assets/IMG_2444-640.webp'
import img1w960 from '../assets/IMG_2444-960.webp'

const Introduction = () => {
    return (
        <Card
            className="Introduction"
            sx={{
                m: { xs: '16px 8px', md: '24px 12px' },
                p: { xs: 2, sm: 3, md: 4 },
                width: '100%',
                maxWidth: { xs: 680, md: 960 },
                boxSizing: 'border-box',
                mx: 'auto',
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
                    <Box
                        component="img"
                        src={img1w640}
                        srcSet={`${img1w640} 640w, ${img1w960} 960w`}
                        sizes="(max-width: 600px) 70vw, (max-width: 900px) 60vw, 260px"
                        alt="Nishie portrait"
                        loading="lazy"
                        decoding="async"
                        onError={(e: any) => {
                            e.currentTarget.src = img1Jpg
                        }}
                        sx={{
                            display: 'block',
                            mx: { xs: 'auto', md: 0 },
                            width: { xs: '70%', sm: '60%', md: '100%' },
                            maxWidth: { xs: 200, sm: 240, md: 260 },
                            height: 'auto',
                            borderRadius: 2,
                        }}
                    />
                </Box>
            </Stack>
        </Card>
    )
}

export default Introduction
