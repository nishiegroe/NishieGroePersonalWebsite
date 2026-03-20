import {
    Card,
    Typography,
    Container,
    Box,
    Chip,
    Button,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LanguageIcon from '@mui/icons-material/Language'
import React from 'react'

type ProjectProps = {
    title: string
    description: string
    technologies: string[]
    keyFeatures: string[]
    links: {
        website?: string
        github?: string
        demo?: string
    }
    screenshot?: string
    screenshotAlt?: string
}

const ProjectCard: React.FC<ProjectProps> = ({
    title,
    description,
    technologies,
    keyFeatures,
    links,
    screenshot,
    screenshotAlt,
}) => {
    return (
        <Card
            sx={{
                m: { xs: 2, sm: 3 },
                p: { xs: 2, sm: 3 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 3 },
            }}
        >
            {/* Screenshot Section */}
            {screenshot && (
                <Box
                    sx={{
                        flex: { xs: '0 100%', md: '0 0 40%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={screenshot}
                        alt={screenshotAlt || title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                </Box>
            )}

            {/* Content Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            mb: 1,
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mb: 2,
                            color: '#555',
                        }}
                    >
                        {description}
                    </Typography>

                    {/* Key Features */}
                    <Box sx={{ mb: 2 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 600,
                                mb: 1,
                                color: '#333',
                            }}
                        >
                            Key Features:
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {keyFeatures.map((feature) => (
                                <Typography key={feature} variant="body2">
                                    • {feature}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    {/* Technologies */}
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {technologies.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: 'rgba(54, 192, 240, 0.1)',
                                        borderColor: 'rgba(54, 192, 240, 0.4)',
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Links */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {links.website && (
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<LanguageIcon />}
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderColor: 'rgba(54, 192, 240, 0.6)',
                                color: '#36c0f0',
                                '&:hover': {
                                    backgroundColor: 'rgba(54, 192, 240, 0.1)',
                                },
                            }}
                        >
                            Website
                        </Button>
                    )}
                    {links.demo && (
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<OpenInNewIcon />}
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderColor: 'rgba(54, 192, 240, 0.6)',
                                color: '#36c0f0',
                                '&:hover': {
                                    backgroundColor: 'rgba(54, 192, 240, 0.1)',
                                },
                            }}
                        >
                            Live Demo
                        </Button>
                    )}
                    {links.github && (
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderColor: 'rgba(54, 192, 240, 0.6)',
                                color: '#36c0f0',
                                '&:hover': {
                                    backgroundColor: 'rgba(54, 192, 240, 0.1)',
                                },
                            }}
                        >
                            GitHub
                        </Button>
                    )}
                </Box>
            </Box>
        </Card>
    )
}

const Projects: React.FC = () => {
    const projects: ProjectProps[] = [
        {
            title: 'VOD Insights',
            description:
                'Automated VOD analysis for esports coaches and content creators. Scans gaming footage, detects key moments (kills, assists, knockdowns), and exports clips—all locally on Windows.',
            technologies: ['Python', 'React', 'Electron', 'OpenCV', 'Tesseract', 'FFmpeg'],
            keyFeatures: [
                'Killfeed OCR detection for any game (Apex, Valorant, CS:GO, etc.)',
                'Automated clip export with intelligent event merging',
                'Twitch VOD download and analysis',
                'Batch processing for multiple recordings',
                'Event logs export (CSV/JSONL)',
                'Works entirely offline—no cloud dependencies',
            ],
            links: {
                website: 'https://vodinsights.app',
                demo: 'https://vodinsights.app',
            },
            screenshot: '/vod-insights-home.png',
            screenshotAlt: 'VOD Insights Home Page showing recent VODs and clips',
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
                variant="h3"
                sx={{
                    fontWeight: 600,
                    mb: 4,
                    textAlign: 'center',
                }}
            >
                Featured Projects
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
