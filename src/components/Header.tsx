import {
    Avatar,
    Card,
    Tooltip,
    Typography,
    Container,
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
import resume from '../assets/Nishie Groe- Resume (April).pdf'
import ArticleIcon from '@mui/icons-material/Article'
import { LinkedIn } from 'developer-icons'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useState } from 'react'
import Email from '@mui/icons-material/Email'
import GitHub from '@mui/icons-material/GitHub'
import HomeIcon from '@mui/icons-material/Home'
import BuildIcon from '@mui/icons-material/Build'
import WorkIcon from '@mui/icons-material/Work'
import ContactPageIcon from '@mui/icons-material/ContactPage'

const Header = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
    const menuOpen = Boolean(menuAnchorEl)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => setMenuAnchorEl(null)

    return (
        <Card
            className="header"
            sx={{
                p: 1,
                backgroundColor: '#FDFAF6',
                display: 'flex',
                position: 'fixed',
                zIndex: 999,
                top: { xs: 'auto', md: 16 },
                bottom: { xs: 16, md: 'auto' },
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: { xs: '100%', md: '70vw' },
                maxWidth: { xs: 360, sm: 680, md: 960 },
                boxSizing: 'border-box',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            <div
                id="Left"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '16px',
                }}
            >
                <Avatar
                    className="logo"
                    sx={{ mr: 2, width: 40, height: 40 }}
                    alt="Profile picture"
                    src={profilePic256}
                    srcSet={`${profilePic128} 128w, ${profilePic256} 256w`}
                    sizes="40px"
                    imgProps={{ loading: 'eager', decoding: 'async' }}
                />
                <Typography
                    variant="h4"
                    className="logo"
                    sx={{ textWrap: 'nowrap' }}
                >
                    Nishie Groe
                </Typography>
            </div>

            <Box
                id="center"
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    gap: '8px',
                }}
            >
                <Tooltip title="View my GitHub profile">
                    <Link
                        href="https://github.com/nishiegroe"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            mr: 1,
                        }}
                    >
                        <div
                            className="icon-wiggle"
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <GitHub sx={{ fontSize: 30 }} />
                        </div>
                    </Link>
                </Tooltip>
                <Tooltip title="View my LinkedIn profile">
                    <Link
                        href="https://www.linkedin.com/in/nishie-groe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            mr: 1,
                        }}
                    >
                        <div
                            className="icon-wiggle"
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <LinkedIn size={30} />
                        </div>
                    </Link>
                </Tooltip>
                <Tooltip title="Send me an email">
                    <Link
                        href="mailto:nishiegroe@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            mr: 1,
                        }}
                    >
                        <div
                            className="icon-wiggle"
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <Email sx={{ fontSize: 30 }} />
                        </div>
                    </Link>
                </Tooltip>
            </Box>

            <Container
                id="right"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    paddingRight: '8px',
                    width: 'auto',
                }}
            >
                <Card sx={{ backgroundColor: 'rgba(54, 192, 240, .4)', ml: 2 }}>
                    <Tooltip title="View my resume">
                        <Typography
                            variant="h6"
                            sx={{
                                ml: 1,
                                mr: 1,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onClick={(e) => {
                                window.open(resume, '_blank')
                            }}
                        >
                            View Resume
                            <ArticleIcon sx={{ top: '5px', ml: 1 }} />
                        </Typography>
                    </Tooltip>
                </Card>
            </Container>

            {/* Mobile menu trigger */}
            <Box
                sx={{
                    ml: 'auto',
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'center',
                    pr: 1,
                }}
            >
                <IconButton
                    id="header-menu-button"
                    aria-label="Open navigation menu"
                    aria-controls={menuOpen ? 'header-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? 'true' : undefined}
                    onClick={handleMenuOpen}
                    size="large"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="header-menu"
                    anchorEl={menuAnchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                >
                    {/* In-page navigation */}
                    <MenuItem
                        component="a"
                        href="#introduction"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        Introduction
                    </MenuItem>
                    <MenuItem
                        component="a"
                        href="#skills"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <BuildIcon fontSize="small" />
                        </ListItemIcon>
                        Skills
                    </MenuItem>
                    <MenuItem
                        component="a"
                        href="#experience"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <WorkIcon fontSize="small" />
                        </ListItemIcon>
                        Experience
                    </MenuItem>
                    <MenuItem
                        component="a"
                        href="#contact"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <ContactPageIcon fontSize="small" />
                        </ListItemIcon>
                        Contact
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        component="a"
                        href="https://github.com/nishiegroe"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <GitHub fontSize="small" />
                        </ListItemIcon>
                        GitHub
                        <OpenInNewIcon
                            fontSize="small"
                            style={{ marginLeft: 'auto' }}
                        />
                    </MenuItem>
                    <MenuItem
                        component="a"
                        href="https://www.linkedin.com/in/nishie-groe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <LinkedInIcon fontSize="small" />
                        </ListItemIcon>
                        LinkedIn
                        <OpenInNewIcon
                            fontSize="small"
                            style={{ marginLeft: 'auto' }}
                        />
                    </MenuItem>
                    <MenuItem
                        component="a"
                        href="mailto:nishiegroe@gmail.com"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <Email fontSize="small" />
                        </ListItemIcon>
                        Email
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        component="a"
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleMenuClose}
                    >
                        <ListItemIcon>
                            <ArticleIcon fontSize="small" />
                        </ListItemIcon>
                        View Resume
                        <OpenInNewIcon
                            fontSize="small"
                            style={{ marginLeft: 'auto' }}
                        />
                    </MenuItem>
                </Menu>
            </Box>
        </Card>
    )
}

export default Header
