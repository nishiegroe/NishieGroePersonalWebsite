import { Box, Typography, List, ListItem } from '@mui/material'

type TimelineItemProps = {
    title: string
    company: string
    location: string
    period: string
    highlights?: string[]
}

const timelineData: TimelineItemProps[] = [
    {
        title: 'Full-Stack Developer',
        company: 'USG',
        location: 'Chicago, IL',
        period: '2025 - Present',
        highlights: [
            'Headless CMS-driven frontend for flexible content delivery',
            'Built and onboarded development team with agile workflows',
            'Led pilot go-live coordination and post-pilot roadmap',
            'Interviewed candidates and evaluated technical fit',
        ]
    },
    {
        title: 'Senior Software Engineer',
        company: 'John Deere',
        location: 'Moline, IL',
        period: '2022 - 2024',
        highlights: [
            'Led UI/UX modernization with ReactJS Micro-Frontends',
            'Replaced monolithic AngularJS/Java with scalable MFE architecture',
            'Conducted international knowledge transfer on React best practices',
            'Established Drone CI/CD pipelines and REST API migrations',
            'Designed container UI to house micro-frontends effectively',
        ]
    },
    {
        title: 'Software Engineer',
        company: 'John Deere',
        location: 'Moline, IL',
        period: '2017 - 2022',
        highlights: [
            'Optimized development lifecycle and reduced time-to-market',
            'Led AWS migration initiatives across multiple applications',
            'Decommissioned legacy ColdFusion applications',
            'Spearheaded SiteMinder to OKTA SSO migration',
            'Fostered cross-functional collaboration on product quality',
        ]
    },
]

const EmploymentHistory = () => (
    <Box
        id="experience"
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
            Experience
        </Typography>

        <Box className="employment-timeline">
            {timelineData.map((item) => (
                <Box key={`${item.company}-${item.period}`} className="timeline-item">
                    <Box className="timeline-dot" />
                    <Box className="timeline-line" />

                    <Typography className="timeline-title">
                        {item.title}
                    </Typography>
                    <Typography className="timeline-subtitle">
                        {item.company}
                    </Typography>
                    <Typography className="timeline-date">
                        {item.period} - {item.location}
                    </Typography>

                    {item.highlights && (
                        <List
                            sx={{
                                listStyleType: 'disc',
                                pl: 2,
                                py: 0,
                            }}
                        >
                            {item.highlights.map((highlight) => (
                                <ListItem
                                    key={highlight}
                                    sx={{
                                        display: 'list-item',
                                        p: 0,
                                        pb: 0.5,
                                    }}
                                >
                                    <Typography className="timeline-description">
                                        {highlight}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
            ))}
        </Box>
    </Box>
)

export default EmploymentHistory
