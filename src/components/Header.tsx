import {
    Avatar,
    Card,
    Tooltip,
    Typography,
    Link,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Divider,
    ListItemIcon,
} from '@mui/material'
import profilePic128 from '../assets/profile-pic-128.webp'
import profilePic256 from '../assets/profile-pic-256.webp'
import resume from '../assets/Resume Jan 2026.pdf'
import { LinkedIn } from 'developer-icons'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import BuildIcon from '@mui/icons-material/Build'
import WorkIcon from '@mui/icons-material/Work'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import ArticleIcon from '@mui/icons-material/Article'
import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'About', href: '#introduction', icon: <HomeIcon fontSize="small" /> },
    { label: 'Skills', href: '#skills', icon: <BuildIcon fontSize="small" /> },
    { label: 'Projects', href: '#projects', icon: <WorkIcon fontSize="small" /> },
    { label: 'Experience', href: '#experience', icon: <WorkIcon fontSize="small" /> },
    { label: 'Contact', href: '#contact', icon: <ContactPageIcon fontSize="small" /> },
]

const Header = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
    const [scrolled, setScrolled] = useState(false)
    const menuOpen = Boolean(menuAnchorEl)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => setMenuAnchorEl(null)

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        handleMenuClose()
    }

    return (
        <>
            <Card
                sx={{
                    ...headerStyles.card,
                    ...(scrolled ? headerStyles.cardScrolled : {}),
                }}
            >
                {/* Logo */}
                <Link
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    sx={headerStyles.logoLink}
                >
                    <Avatar
                        sx={{ width: 36, height: 36 }}
                        alt="Profile picture"
                        src={profilePic256}
                        srcSet={`${profilePic128} 128w, ${profilePic256} 256w`}
                        sizes="36px"
                        imgProps={{ loading: 'eager', decoding: 'async' }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            color: '#4a4a52',
                        }}
                    >
                        Nishie Groe
                    </Typography>
                </Link>

                {/* Desktop Nav */}
                <Box sx={headerStyles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, link.href)}
                            sx={headerStyles.navLink}
                        >
                            {link.label}
                        </Link>
                    ))}
                </Box>

                {/* Desktop Actions */}
                <Box sx={headerStyles.desktopActions}>
                    <Tooltip title="View my GitHub profile">
                        <Link
                            href="https://github.com/nishiegroe"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={headerStyles.iconLink}
                            aria-label="GitHub"
                        >
                            <GitHubIcon sx={{ fontSize: 22 }} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="View my LinkedIn profile">
                        <Link
                            href="https://www.linkedin.com/in/nishie-groe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={headerStyles.iconLink}
                            aria-label="LinkedIn"
                        >
                            <LinkedIn size={22} />
                        </Link>
                    </Tooltip>
                    <Link
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={headerStyles.resumeButton}
                    >
                        <ArticleIcon sx={{ fontSize: 18 }} />
                        Resume
                    </Link>
                </Box>

                {/* Mobile Menu Button */}
                <Box sx={headerStyles.mobileMenu}>
                    <IconButton
                        aria-label="Open navigation menu"
                        aria-controls={menuOpen ? 'header-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={menuOpen ? 'true' : undefined}
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon sx={{ color: '#4a4a52' }} />
                    </IconButton>
                    <Menu
                        id="header-menu"
                        anchorEl={menuAnchorEl}
                        open={menuOpen}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted
                        PaperProps={{
                            sx: {
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(217, 168, 199, 0.2)',
                                border: '1px solid rgba(217, 168, 199, 0.2)',
                                mt: 1,
                            },
                        }}
                    >
                        {navLinks.map((link) => (
                            <MenuItem
                                key={link.label}
                                component="a"
                                href={link.href}
                                onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, link.href)}
                                sx={headerStyles.menuItem}
                            >
                                <ListItemIcon sx={{ minWidth: 32, color: '#d9a8c7' }}>
                                    {link.icon}
                                </ListItemIcon>
                                {link.label}
                            </MenuItem>
                        ))}
                        <Divider sx={{ my: 1, borderColor: 'rgba(217, 168, 199, 0.15)' }} />
                        <MenuItem
                            component="a"
                            href="https://github.com/nishiegroe"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleMenuClose}
                            sx={headerStyles.menuItem}
                        >
                            <ListItemIcon sx={{ minWidth: 32, color: '#d9a8c7' }}>
                                <GitHubIcon fontSize="small" />
                            </ListItemIcon>
                            GitHub
                        </MenuItem>
                        <MenuItem
                            component="a"
                            href="https://www.linkedin.com/in/nishie-groe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleMenuClose}
                            sx={headerStyles.menuItem}
                        >
                            <ListItemIcon sx={{ minWidth: 32, color: '#d9a8c7' }}>
                                <LinkedInIcon fontSize="small" />
                            </ListItemIcon>
                            LinkedIn
                        </MenuItem>
                        <MenuItem
                            component="a"
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleMenuClose}
                            sx={headerStyles.menuItem}
                        >
                            <ListItemIcon sx={{ minWidth: 32, color: '#d9a8c7' }}>
                                <ArticleIcon fontSize="small" />
                            </ListItemIcon>
                            Resume
                        </MenuItem>
                    </Menu>
                </Box>
            </Card>
        </>
    )
}

/* ─── Styles ─── */
const headerStyles = {
    card: {
        position: 'fixed',
        top: { xs: 'auto', md: 20 },
        bottom: { xs: 16, md: 'auto' },
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        width: { xs: 'calc(100% - 32px)', sm: 'auto' },
        maxWidth: { xs: '100%', sm: 850 },
        p: { xs: '8px 16px', md: '10px 20px' },
        borderRadius: '9999px',
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(217, 168, 199, 0.25)',
        boxShadow: '0 8px 32px rgba(217, 168, 199, 0.15)',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    cardScrolled: {
        boxShadow: '0 12px 40px rgba(217, 168, 199, 0.2)',
        border: '1px solid rgba(217, 168, 199, 0.35)',
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        textDecoration: 'none',
        flexShrink: 0,
    },
    desktopNav: {
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 1,
    },
    navLink: {
        color: '#4a4a52',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.9rem',
        fontWeight: 500,
        textDecoration: 'none',
        padding: '6px 14px',
        borderRadius: '9999px',
        transition: 'all 200ms ease',
        position: 'relative',
        '&:hover': {
            color: '#d9a8c7',
            background: 'rgba(217, 168, 199, 0.1)',
        },
    },
    desktopActions: {
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 1.5,
    },
    iconLink: {
        color: '#8a8a92',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 200ms ease',
        '&:hover': {
            color: '#d9a8c7',
        },
    },
    resumeButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '6px 16px',
        background: 'linear-gradient(135deg, #d9a8c7 0%, #f2a8c5 100%)',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '0.85rem',
        borderRadius: '9999px',
        textDecoration: 'none',
        transition: 'all 200ms ease',
        boxShadow: '0 2px 8px rgba(217, 168, 199, 0.3)',
        '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 16px rgba(217, 168, 199, 0.4)',
        },
    },
    mobileMenu: {
        display: { xs: 'flex', md: 'none' },
        ml: 'auto',
    },
    menuItem: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.95rem',
        py: 1,
        px: 2,
        '&:hover': {
            background: 'rgba(217, 168, 199, 0.08)',
        },
    },
}

export default Header
