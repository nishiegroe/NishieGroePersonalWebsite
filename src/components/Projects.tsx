import {
    Card,
    Typography,
    List,
    ListItem,
    Container,
    Grid,
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
    headerColor?: string
}

const ProjectEntry = ({
    title,
    description,
    technologies,
    highlights,
    images,
    imageAlt,
    links,
    headerColor,
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

    let content: React.ReactNode = null

    if (highlights && highlights.length > 0) {
        content = (
            <List
                sx={{
                    listStyleType: 'disc',
                    px: { xs: 2, sm: 3 },
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {highlights.map((highlight) => (
                    <ListItem
                        key={highlight}
                        sx={{ display: 'list-item', pl: 2, p: 0 }}
                    >
                        <Typography variant="body2" align="left">
                            {highlight}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        )
    }

    return (
        <Card sx={{ m: { xs: 2, sm: 3 }, p: { xs: 1, sm: 2 } }}>
            <Container
                disableGutters
                sx={{
                    backgroundColor: headerColor || '#f2f2f2',
                    borderRadius: 1,
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 1.5, sm: 2 },
                }}
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                textAlign: { xs: 'center', md: 'left' },
                                color: '#666',
                            }}
                        >
                            {description}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Container
                            disableGutters
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-end' },
                                gap: 2,
                                flexWrap: 'wrap',
                            }}
                        >
                            {links?.website && (
                                <Link
                                    href={links.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#36c0f0',
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    Website
                                </Link>
                            )}
                            {links?.github && (
                                <Link
                                    href={links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#36c0f0',
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    GitHub
                                </Link>
                            )}
                        </Container>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: { xs: 'center', md: 'right' },
                                mt: { xs: 0.5, md: 0 },
                            }}
                        >
                            {technologies.join(', ')}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Project Image Gallery */}
            {images && images.length > 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px 24px',
                        backgroundColor: '#fafafa',
                        gap: 1,
                        position: 'relative',
                    }}
                >
                    {hasMultipleImages && (
                        <IconButton
                            onClick={handlePrevImage}
                            size="small"
                            sx={{
                                color: '#36c0f0',
                                '&:hover': {
                                    backgroundColor: 'rgba(54, 192, 240, 0.1)',
                                },
                            }}
                            aria-label="Previous image"
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                    )}

                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt={imageAlt || `${title} screenshot`}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                maxHeight: '300px',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                    {hasMultipleImages && (
                        <IconButton
                            onClick={handleNextImage}
                            size="small"
                            sx={{
                                color: '#36c0f0',
                                '&:hover': {
                                    backgroundColor: 'rgba(54, 192, 240, 0.1)',
                                },
                            }}
                            aria-label="Next image"
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    )}
                </Box>
            )}

            {/* Gallery Dots Indicator */}
            {images && images.length > 1 && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        paddingY: 1,
                        backgroundColor: '#f5f5f5',
                    }}
                >
                    {images.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor:
                                    index === currentImageIndex
                                        ? '#36c0f0'
                                        : '#ccc',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                                '&:hover': {
                                    backgroundColor:
                                        index === currentImageIndex
                                            ? '#36c0f0'
                                            : '#999',
                                },
                            }}
                            aria-label={`Go to image ${index + 1}`}
                            role="button"
                            tabIndex={0}
                        />
                    ))}
                </Box>
            )}

            {content}
        </Card>
    )
}

const projectsData: ProjectEntryProps[] = [
    {
        title: 'VOD Insights',
        description: 'Automated VOD analysis for esports coaches and creators',
        technologies: ['Python', 'React', 'Electron', 'OpenCV', 'FFmpeg'],
        highlights: [
            'Killfeed OCR detection for any esports game (Apex, Valorant, CS:GO, etc.)',
            'Automated clip export with intelligent event merging',
            'Twitch VOD integration—download and analyze VODs directly',
            'Batch processing for analyzing multiple recordings',
            'Event logs export (CSV/JSONL) for further analysis',
            'Fully offline—no cloud dependencies or data tracking',
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
        headerColor: 'rgba(54, 192, 240, .1)',
    },
    {
        title: 'Lootpath Finder',
        description: 'Interactive map editor for Apex Legends loot paths',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Docker'],
        highlights: [
            'Real-time interactive map editor with visual path drawing',
            'JSON-based data persistence for loot routes',
            'Docker containerization for easy deployment',
            'Responsive design for desktop and tablet interfaces',
        ],
        images: [
            '/lootpath-finder-home.png',
            '/lootpath-finder-map.png',
            '/lootpath-finder-lootpath.png',
        ],
        imageAlt: 'Lootpath Finder application screenshots',
        headerColor: 'rgba(75, 192, 192, .1)',
    },
]

const Projects = () => (
    <Card
        id="projects"
        className="header"
        sx={{
            backgroundColor: '#FDFAF6',
            m: { xs: '16px 8px', md: '12px' },
            p: { xs: 2, sm: 3, md: 4 },
            width: '100%',
            maxWidth: { xs: 680, md: 960 },
            boxSizing: 'border-box',
            mx: 'auto',
            scrollMarginTop: { xs: '20px', md: '104px' },
            borderRadius: '15px',
        }}
    >
        <Typography
            variant="h4"
            sx={{
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 1, sm: 2 },
            }}
        >
            Projects
        </Typography>
        {projectsData.map((project) => (
            <ProjectEntry key={project.title} {...project} />
        ))}
    </Card>
)

export default Projects
