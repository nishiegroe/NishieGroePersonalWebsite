import {
    Typography,
    List,
    ListItem,
    Link,
    Box,
    IconButton,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React, { useState } from 'react'

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

    return (
        <Box sx={styles.card}>
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

            {/* Project Gallery */}
            {images && images.length > 0 && (
                <Box sx={styles.galleryContainer}>
                    <Box sx={styles.galleryInner}>
                        {hasMultipleImages && (
                            <IconButton
                                onClick={handlePrevImage}
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
                                onClick={handleNextImage}
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
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
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
        maxWidth: '100%',
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
}

export default Projects
