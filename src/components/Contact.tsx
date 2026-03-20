import { Typography, Link, Stack, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DescriptionIcon from '@mui/icons-material/Description'
import image640 from '../assets/IMG_2521-640.webp'
import image960 from '../assets/IMG_2521-960.webp'
import img2521webp from '../assets/IMG_2521.webp'
import resume from '../assets/Resume Jan 2026.pdf'

const Contact = () => {
    return (
        <Box
            id="contact"
            className="contact-section scroll-fade-in"
            sx={{
                width: '100%',
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    mb: 2,
                    fontFamily: 'Playfair Display, serif',
                }}
            >
                Let's <span style={{ color: '#d9a8c7' }}>connect</span>
            </Typography>
            <Typography
                sx={{
                    fontSize: '1.1rem',
                    color: '#555',
                    mb: 3,
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                }}
            >
                I'm always interested in hearing about interesting projects and opportunities. Feel free to reach out!
            </Typography>

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 3, md: 4 }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 4 }}
            >
                <Stack spacing={2} sx={{ flex: 1 }}>
                    <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#888', mb: 0.5 }}>
                            EMAIL
                        </Typography>
                        <Link
                            href="mailto:NishieGroe@gmail.com"
                            sx={{
                                fontSize: '1.1rem',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                color: '#d9a8c7',
                            }}
                        >
                            NishieGroe@gmail.com
                        </Link>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#7a7066', mb: 0.5 }}>
                            PHONE
                        </Typography>
                        <Link
                            href="tel:815-219-9863"
                            sx={{
                                fontSize: '1.1rem',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                color: '#d9a8c7',
                            }}
                        >
                            (815) 219-9863
                        </Link>
                    </Box>

                    <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#7a7066', mb: 0.5 }}>
                            SOCIAL
                        </Typography>
                        <Stack spacing={1} direction="row" justifyContent="center" sx={{ gap: 2 }}>
                            <Link
                                href="https://github.com/nishiegroe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#333',
                                    transition: 'opacity 0.2s ease',
                                    '&:hover': {
                                        opacity: 0.7,
                                    },
                                }}
                            >
                                <GitHubIcon sx={{ fontSize: 32 }} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/nishie-groe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#0077b5',
                                    transition: 'opacity 0.2s ease',
                                    '&:hover': {
                                        opacity: 0.7,
                                    },
                                }}
                            >
                                <LinkedInIcon sx={{ fontSize: 32 }} />
                            </Link>
                            <Link
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Resume"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#d9a8c7',
                                    transition: 'opacity 0.2s ease',
                                    '&:hover': {
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                <DescriptionIcon sx={{ fontSize: 32 }} />
                            </Link>
                        </Stack>
                    </Box>
                </Stack>

                <Box sx={{ flexShrink: 0 }}>
                    <picture>
                        <source srcSet={`${image640} 640w, ${image960} 960w, ${img2521webp} 1280w`} type="image/webp" />
                        <img
                            src={image640}
                            srcSet={`${image640} 640w, ${image960} 960w, ${img2521webp} 1280w`}
                            sizes="(max-width: 600px) 80vw, 300px"
                            alt="Nishie Groe"
                            loading="lazy"
                            decoding="async"
                            style={{
                                borderRadius: 4,
                                width: '100%',
                                maxWidth: 280,
                                height: 'auto',
                                display: 'block',
                            }}
                        />
                    </picture>
                </Box>
            </Stack>

            <Typography
                sx={{
                    fontSize: '0.9rem',
                    color: '#999',
                    fontFamily: 'Space Mono, monospace',
                }}
            >
                Made with intention • Built with React
            </Typography>
        </Box>
    )
}

export default Contact
