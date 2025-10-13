import { Card, Typography, Link, Stack, Box } from '@mui/material'
import imageJpg from '../assets/IMG_2521.jpg'
import image640 from '../assets/IMG_2521-640.webp'
import image960 from '../assets/IMG_2521-960.webp'
import img2521webp from '../assets/IMG_2521.webp'
import Email from '@mui/icons-material/Email'
import Phone from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Contact = () => {
    return (
        <Card
            id="contact"
            className="header"
            sx={{
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: '#FDFAF6',
                borderRadius: '15px',
                m: { xs: '16px 8px', md: '12px' },
                width: '100%',
                maxWidth: { xs: 680, md: 960 },
                boxSizing: 'border-box',
                mx: 'auto',
                scrollMarginTop: { xs: '20px', md: '104px' },
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 2, sm: 3 }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
            >
                <Stack spacing={1.5} sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: { xs: 'center', md: 'left' } }}
                    >
                        Contact Info
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mt: { xs: 1, sm: 2 },
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        Want to get in contact? I'm available most times/days
                        every week. Give me a call or shoot me an email!
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >
                        <Email fontSize="small" />
                        <Typography variant="body2">
                            E-mail:{' '}
                            <Link href="mailto: NishieGroe@gmail.com">
                                NishieGroe@gmail.com
                            </Link>
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >
                        <Phone fontSize="small" />
                        <Typography variant="body2">
                            Phone:{' '}
                            <Link href="tel: 815-219-9863">(815) 219-9863</Link>
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >
                        <LinkedInIcon fontSize="small" />
                        <Typography variant="body2">
                            LinkedIn:{' '}
                            <Link
                                href="https://www.linkedin.com/in/nishie-groe/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nishie Groe
                            </Link>
                        </Typography>
                    </Stack>
                </Stack>
                <Box>
                    <picture>
                        <source srcSet={`${image640} 640w, ${image960} 960w, ${img2521webp} 1280w`} type="image/webp" />
                        <img
                            src={image640}
                            srcSet={`${image640} 640w, ${image960} 960w, ${img2521webp} 1280w`}
                            sizes="(max-width: 600px) 80vw, 320px"
                            alt="Nishie speaking"
                            loading="lazy"
                            decoding="async"
                            style={{
                                borderRadius: 15,
                                width: '80%',
                                maxWidth: 320,
                                height: 'auto',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 0,
                            }}
                        />
                    </picture>
                </Box>
            </Stack>
        </Card>
    )
}

export default Contact
