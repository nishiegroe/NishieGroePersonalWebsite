import {
    Card,
    Typography,
    Container,
    List,
    ListItem,
    Grid,
    Box,
    Link,
} from '@mui/material'
import React from 'react'

type ProjectProps = {
    title: string
    description: string
    technologies: string[]
    highlights: string[]
    links: {
        website?: string
        github?: string
    }
}

const ProjectCard: React.FC<ProjectProps> = ({
    title,
    description,
    technologies,
    highlights,
    links,
}) => {
    return (
        <Card sx={{ m: { xs: 2, sm: 3 }, p: { xs: 1, sm: 2 } }}>
            <Container
                disableGutters
                sx={{
                    backgroundColor: '#f2f2f2',
                    borderRadius: 1,
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 1.5, sm: 2 },
                }}
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#666',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            {description}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                flexWrap: 'wrap',
                                justifyContent: { xs: 'center', md: 'flex-end' },
                            }}
                        >
                            {links.website && (
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
                            {links.github && (
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
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Highlights Section */}
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

            {/* Technologies Section */}
            <Box sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: '#555',
                    }}
                >
                    Stack: {technologies.join(', ')}
                </Typography>
            </Box>
        </Card>
    )
}

const Projects: React.FC = () => {
    const projects: ProjectProps[] = [
        {
            title: 'VOD Insights',
            description:
                'Automated VOD analysis for esports coaches and content creators',
            technologies: ['Python', 'React', 'Electron', 'OpenCV', 'FFmpeg'],
            highlights: [
                'Killfeed OCR detection for any esports game (Apex, Valorant, CS:GO, etc.)',
                'Automated clip export with intelligent event merging',
                'Twitch VOD integration—download and analyze VODs directly',
                'Batch processing for analyzing multiple recordings',
                'Event logs export (CSV/JSONL) for further analysis',
                'Fully offline—no cloud dependencies or data tracking',
            ],
            links: {
                website: 'https://vodinsights.app',
            },
        },
    ]

    return (
        <Container
            id="projects"
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: { xs: 4, md: 6 },
                mb: { xs: 4, md: 6 },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 600,
                    mb: { xs: 3, md: 4 },
                    textAlign: 'center',
                }}
            >
                Projects
            </Typography>

            <Box sx={{ width: '100%' }}>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </Box>
        </Container>
    )
}

export default Projects
