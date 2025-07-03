import { Card, Container, Typography } from '@mui/material'
import img1 from '../assets/IMG_2444.jpg'

const Introduction = () => {
    return (
        <Card
            className="Introduction"
            sx={{
                margin: '16px 8px',
                p: 2,
                display: 'flex',
                placeContent: 'center',
            }}
        >
            <Container style={{ alignContent: 'center' }}>
                <Container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        placeContent: 'center',
                    }}
                >
                    <Typography variant={'h2'}>
                        Hey! I'm{' '}
                        <span style={{ color: '#36C0F0' }}>Nishie</span>,
                    </Typography>
                    <Container
                        sx={{
                            display: {
                                lg: 'none',
                                md: 'flex',
                                sm: 'flex',
                                xs: 'flex',
                            },
                            width: '112px',
                            margin: 0,
                            ml: 2,
                        }}
                    >
                        <img
                            src={img1}
                            style={{
                                height: '150px',
                                width: '112px',
                                borderRadius: '20px',
                                maxHeight: 'fit-content',
                            }}
                        />
                    </Container>
                </Container>

                <br />
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center' }}
                    fontSize="20px"
                >
                    Full-stack Software Engineer with 7+ years of experience in
                    React, Java, and AWS. Passionate about building great user
                    experiences and leading teams to deliver impactful
                    solutions.
                </Typography>
            </Container>
            <Container
                sx={{
                    display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' },
                    width: '30%',
                    marginRight: '-8px',
                    alignItems: 'center',
                }}
            >
                <img
                    src={img1}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '20px',
                        margin: '8px',
                        marginRight: '0',
                        maxHeight: 'fit-content',
                    }}
                />
            </Container>
        </Card>
    )
}

export default Introduction
