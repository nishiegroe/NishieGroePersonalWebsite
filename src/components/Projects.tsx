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
        <Box className="project-card scroll-zoom-in">
            <Typography
                variant="h3"
                sx={{
                    mb: 0.5,
                    fontFamily: 'Playfair Display, serif',
                    color: '#3a3531',
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    color: '#d9a8c7',
                    mb: 1.5,
                    fontSize: '0.9rem',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                }}
            >
                {technologies.join(' • ')}
            </Typography>
            <Typography
                sx={{
                    mb: 1.5,
                    color: '#555',
                }}
            >
                {description}
            </Typography>

            {/* Project Gallery */}
            {images && images.length > 0 && (
                <Box className="project-images">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        {hasMultipleImages && (
                            <IconButton
                                onClick={handlePrevImage}
                                size="small"
                                sx={{
                                    position: 'absolute',
                                    left: 8,
                                    color: '#d9a8c7',
                                    zIndex: 10,
                                    '&:hover': {
                                        backgroundColor: 'rgba(217, 168, 199, 0.15)',
                                    },
                                }}
                                aria-label="Previous image"
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                        )}

                        <img
                            src={images[currentImageIndex]}
                            alt={imageAlt || `${title} screenshot`}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                display: 'block',
                            }}
                        />

                        {hasMultipleImages && (
                            <IconButton
                                onClick={handleNextImage}
                                size="small"
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    color: '#d9a8c7',
                                    zIndex: 10,
                                    '&:hover': {
                                        backgroundColor: 'rgba(217, 168, 199, 0.15)',
                                    },
                                }}
                                aria-label="Next image"
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        )}
                    </Box>

                    {/* Gallery Dots */}
                    {images.length > 1 && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 0.75,
                                py: 1.5,
                            }}
                        >
                            {images.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        backgroundColor:
                                            index === currentImageIndex
                                                ? '#d9a8c7'
                                                : '#e0d5cc',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor:
                                                index === currentImageIndex
                                                    ? '#d9a8c7'
                                                    : '#ccc4bb',
                                        },
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
                <List
                    sx={{
                        listStyleType: 'disc',
                        pl: 2,
                        py: 1,
                    }}
                >
                    {highlights.map((highlight) => (
                        <ListItem
                            key={highlight}
                            sx={{
                                display: 'list-item',
                                p: 0,
                                pb: 0.5,
                                fontSize: '0.95rem',
                            }}
                        >
                            <Typography sx={{ color: '#555' }}>
                                {highlight}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            )}

            {/* Links */}
            {(links?.website || links?.github) && (
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    {links?.website && (
                        <Link
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#d9a8c7',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            Live →
                        </Link>
                    )}
                    {links?.github && (
                        <Link
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#d9a8c7',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            GitHub →
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
        sx={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
        }}
    >
        <Typography
            variant="h2"
            sx={{
                mb: 4,
                textAlign: 'center',
                fontFamily: 'Playfair Display, serif',
            }}
        >
            Projects
        </Typography>

        <Box className="projects-gallery">
            {projectsData.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </Box>
    </Box>
)

export default Projects
