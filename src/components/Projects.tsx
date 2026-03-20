import {
    Card,
    Typography,
    List,
    ListItem,
    Container,
    Grid,
    Link,
} from '@mui/material'
import React from 'react'

type ProjectEntryProps = {
    title: string
    description: string
    technologies: string[]
    highlights?: string[]
    image?: string
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
    image,
    imageAlt,
    links,
    headerColor,
}: ProjectEntryProps) => {
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

            {/* Project Image */}
            {image && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '16px 24px',
                        backgroundColor: '#fafafa',
                    }}
                >
                    <img
                        src={image}
                        alt={imageAlt || title}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            maxHeight: '300px',
                            objectFit: 'cover',
                        }}
                    />
                </div>
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
        image: '/vod-insights-home.png',
        imageAlt: 'VOD Insights home page showing recent VODs and clips library',
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
