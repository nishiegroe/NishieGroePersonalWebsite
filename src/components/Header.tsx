import {
    Avatar,
    Card,
    Tooltip,
    Typography,
    Container,
    Link,
} from '@mui/material'
import profilePic128 from '../assets/profile-pic-128.webp'
import profilePic256 from '../assets/profile-pic-256.webp'
import resume from '../assets/Nishie Groe- Resume (April).pdf'
import ArticleIcon from '@mui/icons-material/Article'
import { LinkedIn } from 'developer-icons'
import Email from '@mui/icons-material/Email'
import GitHub from '@mui/icons-material/GitHub'

const Header = () => {
    return (
        <Card
            className="header"
            style={{
                padding: '8px',
                backgroundColor: '#FDFAF6',
                display: 'flex',
                position: 'fixed',
                zIndex: 999,
                top: '16px',
                justifySelf: 'anchor-center',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '70vw',
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

            <div
                id="center"
                style={{
                    flexGrow: 1,
                    display: 'flex',
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
            </div>

            <Container
                id="right"
                sx={{
                    display: 'flex',
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
        </Card>
    )
}

export default Header
