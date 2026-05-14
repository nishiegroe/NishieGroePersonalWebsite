import { Typography, Link, Stack, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DescriptionIcon from '@mui/icons-material/Description'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import img2521webp from '../assets/IMG_2521.webp'
import resume from '../assets/Resume May 2026.pdf'



const Contact = () => {
    return (
        <Box
            id="contact"
            sx={styles.container}
        >
            <Typography
                variant="h2"
                sx={styles.heading}
            >
                Let's <Box component="span" sx={{ color: '#d9a8c7' }}>connect</Box>
            </Typography>

            <Typography sx={styles.subheading}>
                I'm always interested in hearing about interesting projects and opportunities. Feel free to reach out!
            </Typography>

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, md: 6 }}
                alignItems={{ xs: 'center', md: 'center' }}
                sx={styles.content}
            >
                {/* Contact Info */}
                <Stack spacing={3} sx={styles.infoStack}>
                    <Box>
                        <Typography sx={styles.label}>
                            EMAIL
                        </Typography>
                        <Link
                            href="mailto:NishieGroe@gmail.com"
                            sx={styles.link}
                        >
                            <EmailIcon sx={{ fontSize: 18, mr: 1, color: '#d9a8c7' }} />
                            NishieGroe@gmail.com
                        </Link>
                    </Box>

                    <Box>
                        <Typography sx={styles.label}>
                            PHONE
                        </Typography>
                        <Link
                            href="tel:815-219-9863"
                            sx={styles.link}
                        >
                            <PhoneIcon sx={{ fontSize: 18, mr: 1, color: '#d9a8c7' }} />
                            (815) 219-9863
                        </Link>
                    </Box>

                    <Box>
                        <Typography sx={styles.label}>
                            SOCIAL
                        </Typography>
                        <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                            <Link
                                href="https://github.com/nishiegroe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                sx={styles.socialButton}
                            >
                                <GitHubIcon sx={{ fontSize: 22 }} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/nishie-groe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                sx={styles.socialButton}
                            >
                                <LinkedInIcon sx={{ fontSize: 22 }} />
                            </Link>
                            <Link
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Resume"
                                sx={styles.socialButton}
                            >
                                <DescriptionIcon sx={{ fontSize: 22 }} />
                            </Link>
                        </Stack>
                    </Box>
                </Stack>

                {/* Portrait */}
                <Box sx={styles.imageWrapper}>
                    <Box sx={styles.imageGlow} />
                    <picture>
                        <img
                            src={img2521webp}
                            alt="Nishie Groe"
                            loading="lazy"
                            decoding="async"
                            style={styles.portrait}
                        />
                    </picture>
                </Box>
            </Stack>

            <Typography sx={styles.footer}>
                Made with intention &bull; Built with React
            </Typography>
        </Box>
    )
}

/* ─── Styles ─── */
const styles = {
    container: {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        px: { xs: 2, md: 4 },
    },
    heading: {
        mb: 1.5,
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: { xs: '2rem', md: '2.5rem' },
        color: '#4a4a52',
    },
    subheading: {
        fontSize: '1rem',
        color: '#8a8a92',
        mb: { xs: 4, md: 5 },
        maxWidth: '550px',
        margin: '0 auto 3rem',
        lineHeight: 1.7,
        fontFamily: "'Poppins', sans-serif",
    },
    content: {
        mb: { xs: 4, md: 5 },
        alignItems: 'center',
    },
    infoStack: {
        flex: 1,
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
        maxWidth: { xs: '100%', md: '400px' },
    },
    label: {
        fontSize: '0.8rem',
        color: '#8a8a92',
        mb: 0.5,
        fontWeight: 600,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        fontFamily: "'Poppins', sans-serif",
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.05rem',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        color: '#4a4a52',
        textDecoration: 'none',
        transition: 'color 200ms ease',
        justifyContent: { xs: 'center', md: 'flex-start' },
        '&:hover': {
            color: '#d9a8c7',
        },
    },
    socialButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(217, 168, 199, 0.2)',
        color: '#8a8a92',
        transition: 'all 200ms ease',
        boxShadow: '0 2px 8px rgba(217, 168, 199, 0.08)',
        '&:hover': {
            color: '#d9a8c7',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 16px rgba(217, 168, 199, 0.15)',
            borderColor: 'rgba(217, 168, 199, 0.35)',
        },
    },
    imageWrapper: {
        position: 'relative',
        width: { xs: '220px', md: '280px' },
        height: { xs: '220px', md: '280px' },
        flexShrink: 0,
    },
    imageGlow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217,168,199,0.2) 0%, transparent 70%)',
        zIndex: 0,
    },
    portrait: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px',
        boxShadow: '0 8px 24px rgba(217, 168, 199, 0.15)',
    },
    footer: {
        fontSize: '0.85rem',
        color: '#a8a8b0',
        fontFamily: "'Space Mono', monospace",
        mt: 2,
    },
}

export default Contact
