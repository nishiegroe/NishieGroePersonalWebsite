import {
    Typography,
    List,
    ListItem,
    Link,
    Box,
    IconButton,
    Modal,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CloseIcon from '@mui/icons-material/Close'
import { useState, useCallback } from 'react'

type ProjectEntryProps = {
    title: string
    description: string
    technologies: string[]
    highlights?: string[]
    images?: string[]
    imageAlt?: string
    links?: {
        website?: string
        github?: string
    }
}

const ProjectCard = ({
    title,
    description,
    technologies,
    highlights,
    images,
    imageAlt,
    links,
}: ProjectEntryProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [galleryOpen, setGalleryOpen] = useState(false)
    const hasMultipleImages = images && images.length > 1

    const handlePrevImage = () => {
        if (images) {
            setCurrentImageIndex(
                (prev) => (prev - 1 + images.length) % images.length
            )
        }
    }

    const handleNextImage = () => {
        if (images) {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }
    }

    const openGallery = useCallback(() => {
        if (images && images.length > 0) {
            setGalleryOpen(true)
        }
    }, [images])

    const navigateFullscreen = (e: React.MouseEvent, direction: 'prev' | 'next') => {
        e.stopPropagation()
        if (direction === 'prev') {
            handlePrevImage()
        } else {
            handleNextImage()
        }
    }

    return (
        <Box sx={styles.card}>
            <Box sx={styles.cardHeader}>
                <Typography
                    variant="h3"
                    sx={styles.cardTitle}
                >
                    {title}
                </Typography>
                <Typography sx={styles.techStack}>
                    {technologies.join(' \u2022 ')}
                </Typography>
                <Typography sx={styles.description}>
                    {description}
                </Typography>
            </Box>

            {/* Project Gallery */}
            {images && images.length > 0 && (
                <Box sx={styles.galleryContainer}>
                    <Box
                        sx={styles.galleryInner}
                        onClick={openGallery}
                        style={{ cursor: 'zoom-in' }}
                    >
                        {hasMultipleImages && (
                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handlePrevImage()
                                }}
                                size="small"
                                sx={{ ...styles.galleryNav, left: 8 }}
                                aria-label="Previous image"
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                        )}

                        <img
                            src={images[currentImageIndex]}
                            alt={imageAlt || `${title} screenshot`}
                            style={styles.galleryImage}
                        />

                        {hasMultipleImages && (
                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleNextImage()
                                }}
                                size="small"
                                sx={{ ...styles.galleryNav, right: 8 }}
                                aria-label="Next image"
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        )}
                    </Box>

                    {/* Gallery Dots */}
                    {images.length > 1 && (
                        <Box sx={styles.dotsContainer}>
                            {images.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    sx={{
                                        ...styles.dot,
                                        backgroundColor:
                                            index === currentImageIndex
                                                ? '#d9a8c7'
                                                : '#e8e0e0',
                                    }}
                                    role="button"
                                    tabIndex={0}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            )}

            {/* Fullscreen Gallery Modal */}
            <Modal
                open={galleryOpen}
                onClose={() => setGalleryOpen(false)}
                sx={styles.modal}
            >
                <Box
                    sx={styles.modalContent}
                    onClick={() => setGalleryOpen(false)}
                >
                    <IconButton
                        onClick={() => setGalleryOpen(false)}
                        sx={styles.modalCloseButton}
                        aria-label="Close gallery"
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box
                        sx={styles.modalImageContainer}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {hasMultipleImages && (
                            <IconButton
                                onClick={(e) => navigateFullscreen(e, 'prev')}
                                sx={{ ...styles.modalNav, left: { xs: 8, md: 24 } }}
                                aria-label="Previous image"
                            >
                                <ChevronLeftIcon fontSize="large" />
                            </IconButton>
                        )}

                        <img
                            src={images?.[currentImageIndex]}
                            alt={imageAlt || `${title} fullscreen screenshot`}
                            style={styles.modalImage}
                        />

                        {hasMultipleImages && (
                            <IconButton
                                onClick={(e) => navigateFullscreen(e, 'next')}
                                sx={{ ...styles.modalNav, right: { xs: 8, md: 24 } }}
                                aria-label="Next image"
                            >
                                <ChevronRightIcon fontSize="large" />
                            </IconButton>
                        )}
                    </Box>

                    {/* Modal Dots */}
                    {images && images.length > 1 && (
                        <Box sx={styles.modalDotsContainer}>
                            {images.map((imageUrl, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        ...styles.modalDot,
                                        backgroundColor:
                                            index === currentImageIndex
                                                ? '#d9a8c7'
                                                : '#e8e0e0',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setCurrentImageIndex(index)
                                    }}
                                    role="button"
                                    tabIndex={0}
                                />
                            ))}
                        </Box>
                    )}

                    {/* Image counter */}
                    {images && images.length > 1 && (
                        <Box sx={styles.imageCounter}>
                            {currentImageIndex + 1} / {images.length}
                        </Box>
                    )}
                </Box>
            </Modal>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
                <List sx={styles.highlightsList}>
                    {highlights.map((highlight) => (
                        <ListItem
                            key={highlight}
                            sx={styles.highlightItem}
                        >
                            <Typography sx={styles.highlightText}>
                                {highlight}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            )}

            {/* Links */}
            {(links?.website || links?.github) && (
                <Box sx={styles.linksContainer}>
                    {links?.website && (
                        <Link
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={styles.projectLink}
                        >
                            View Website &rarr;
                        </Link>
                    )}
                    {links?.github && (
                        <Link
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={styles.projectLink}
                        >
                            GitHub &rarr;
                        </Link>
                    )}
                </Box>
            )}
        </Box>
    )
}

const projectsData: ProjectEntryProps[] = [
    {
        title: 'Veridian Esports',
        description:
            "Competitive Apex Legends platform for women's comp — team rosters, MMR rankings, and live tournament scoring.",
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'AWS'],
        highlights: [
            'Dual-ladder MMR engine with time-weighted match decay',
            'Live scrim and tournament scoring streamed over SSE',
            'Overstat.gg stats ingestion with per-player caching',
            'Discord OAuth with role-gated organizer and admin tooling',
            'Bilingual (en/es), Dockerized on AWS Lightsail behind Caddy',
        ],
        images: [
            '/veridian-home.webp',
            '/veridian-player-profile.webp',
            '/veridian-rankings.webp',
            '/veridian-events.webp',
            '/veridian-lootpaths.webp',
        ],
        imageAlt: 'Veridian Esports platform screenshots',
        links: {
            website: 'https://veridianesports.org',
        },
    },
    {
        title: 'VOD Insights',
        description: 'Automated VOD analysis for esports coaches and creators',
        technologies: ['Python', 'React', 'Electron', 'OpenCV', 'FFmpeg'],
        highlights: [
            'Killfeed OCR detection for any esports game',
            'Automated clip export with intelligent event merging',
            'Twitch VOD integration and batch processing',
            'Event logs export (CSV/JSONL)',
            'Fully offline with zero cloud dependencies',
        ],
        images: [
            '/vod-insights-home.png',
            '/vod-insights-clips.png',
            '/vod-insights-viewer.png',
            '/vod-insights-clip-viewer.png',
        ],
        imageAlt: 'VOD Insights application screenshots',
        links: {
            website: 'https://vodinsights.app',
        },
    },
    {
        title: 'USG.com',
        description:
            'The corporate website for USG Corporation — a leading manufacturer of innovative construction products including drywall, ceiling tiles, subfloors, and building envelope solutions.',
        technologies: ['Contentful', 'Next.js', 'TypeScript'],
        highlights: [
            'Built on a modern Next.js + TypeScript stack integrated with Contentful CMS',
            'Supports rich product catalogs, design tools, and multi-language content',
        ],
        images: ['/usg-com-screenshot.png'],
        imageAlt: 'USG.com website screenshot',
        links: {
            website: 'https://usg.com',
        },
    },
    {
        title: 'Lootpath Finder',
        description: 'Interactive map editor for Apex Legends loot paths',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Docker'],
        highlights: [
            'Real-time interactive map editor with visual path drawing',
            'JSON-based data persistence for loot routes',
            'Docker containerization for easy deployment',
            'Responsive design for desktop and tablet',
        ],
        images: [
            '/lootpath-finder-home.png',
            '/lootpath-finder-map.png',
            '/lootpath-finder-lootpath.png',
        ],
        imageAlt: 'Lootpath Finder application screenshots',
    },
]

const Projects = () => (
    <Box
        id="projects"
        sx={styles.container}
    >
        <Typography
            variant="h2"
            sx={styles.heading}
        >
            Projects
        </Typography>

        <Box sx={styles.projectsContainer}>
            {projectsData.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </Box>
    </Box>
)

/* ─── Styles ─── */
const styles = {
    container: {
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        px: { xs: 2, md: 4 },
    },
    heading: {
        mb: { xs: 3, md: 5 },
        textAlign: 'center',
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: { xs: '1.8rem', md: '2.4rem' },
        color: '#4a4a52',
    },
    projectsContainer: {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: { xs: 3, md: 4 },
    },
    card: {
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(217, 168, 199, 0.2)',
        borderRadius: '24px',
        padding: { xs: '1.5rem', md: '2.5rem' },
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 20px rgba(217, 168, 199, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 16px 40px rgba(217, 168, 199, 0.15)',
            borderColor: 'rgba(217, 168, 199, 0.35)',
        },
    },
    cardHeader: {
        // Keeps the image tops aligned across a row. Sized to the tallest real
        // header at md's narrowest: USG.com's long description measures 206px at
        // a 900px viewport (180px at 1440). Anything smaller and that one card's
        // image drops below its neighbour's. Was 16rem for the old 3-across grid,
        // which left ~100px of dead space under every description at 2-up.
        minHeight: { xs: 'auto', md: '13rem' },
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        mb: 0.5,
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: { xs: '1.3rem', md: '1.5rem' },
        color: '#4a4a52',
    },
    techStack: {
        color: '#d9a8c7',
        mb: 1.5,
        fontSize: '0.85rem',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
    },
    description: {
        mb: 1.5,
        color: '#8a8a92',
        fontSize: '0.95rem',
        lineHeight: 1.7,
    },
    galleryContainer: {
        mt: 1.5,
        mb: 2,
    },
    galleryInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: '#f9f9f9',
        borderRadius: '16px',
        overflow: 'hidden',
    },
    galleryNav: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#d9a8c7',
        zIndex: 10,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(4px)',
        width: 32,
        height: 32,
        '&:hover': {
            background: 'rgba(217, 168, 199, 0.15)',
        },
    },
    galleryImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '12px',
    },
    dotsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '6px',
        py: 1.5,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
            transform: 'scale(1.3)',
        },
    },
    highlightsList: {
        listStyleType: 'disc',
        pl: 2.5,
        py: 0.5,
    },
    highlightItem: {
        display: 'list-item',
        p: 0,
        pb: 0.5,
    },
    highlightText: {
        color: '#8a8a92',
        fontSize: '0.9rem',
        lineHeight: 1.7,
    },
    linksContainer: {
        display: 'flex',
        gap: 2,
        mt: 'auto',
        pt: 2,
    },
    projectLink: {
        color: '#d9a8c7',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.9rem',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'color 200ms ease',
        '&:hover': {
            color: '#c697b8',
            textDecoration: 'underline',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300,
    },
    modalContent: {
        position: 'relative',
        background: 'rgba(0, 0, 0, 0.85)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    modalCloseButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        color: '#fff',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        zIndex: 10,
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
        },
    },
    modalImageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',
        maxWidth: '90vw',
        maxHeight: '85vh',
        px: { xs: 6, md: 10 },
    },
    modalImage: {
        maxWidth: '100%',
        maxHeight: '85vh',
        width: 'auto',
        height: 'auto',
        borderRadius: '12px',
        objectFit: 'contain',
        display: 'block',
    },
    modalNav: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#d9a8c7',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(4px)',
        zIndex: 10,
        '&:hover': {
            background: 'rgba(217, 168, 199, 0.5)',
        },
    },
    modalDotsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        py: 2,
        position: 'absolute',
        bottom: 16,
    },
    modalDot: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
            transform: 'scale(1.3)',
        },
    },
    imageCounter: {
        position: 'absolute',
        bottom: 12,
        right: 24,
        color: '#fff',
        fontSize: '0.85rem',
        fontFamily: "'Poppins', sans-serif",
        opacity: 0.7,
    },
}

export default Projects
