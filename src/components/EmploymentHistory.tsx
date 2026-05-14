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
        title: 'Senior Full-Stack Developer',
        company: 'USG',
        location: 'Chicago, IL',
        period: '2025 - Present',
        highlights: [
            'Led an architectural redesign of 21 legacy estimator tools, designing domain-driven RESTful apis with OpenAPI specifications and implementing via a Next.js monorepo',
            'Architected a Turborepo monorepo with 6 shared packages achieving 90%+ code reuse across multi-tenant architecture (USG/Knauf) while implementing server-first data fetching, i18next/Crowdin OTA internationalization, MUI design system, and strict TS type safety',
            'Created many techical documentations including OpenAPI specifications, architectural diagrams, and onboarding guides to facilitate team knowledge sharing and streamline development processes',
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
        sx={styles.container}
    >
        <Typography
            variant="h2"
            sx={styles.heading}
        >
            Experience
        </Typography>

        <Box sx={styles.timeline}>
            {timelineData.map((item) => (
                <Box key={`${item.company}-${item.period}`} sx={styles.timelineItem}>
                    {/* Timeline visual */}
                    <Box sx={styles.timelineDot} />
                    <Box sx={styles.timelineLine} />

                    {/* Content */}
                    <Box sx={styles.timelineContent}>
                        <Typography sx={styles.title}>
                            {item.title}
                        </Typography>
                        <Typography sx={styles.company}>
                            {item.company}
                        </Typography>
                        <Typography sx={styles.period}>
                            {item.period} &mdash; {item.location}
                        </Typography>

                        {item.highlights && (
                            <List sx={styles.highlightsList}>
                                {item.highlights.map((highlight) => (
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
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
)

/* ─── Styles ─── */
const styles = {
    container: {
        width: '100%',
        maxWidth: '900px',
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
    timeline: {
        position: 'relative',
        pl: { xs: '2rem', md: '3rem' },
    },
    timelineItem: {
        position: 'relative',
        pb: { xs: 3, md: 5 },
        '&:last-child': {
            pb: 0,
        },
    },
    timelineDot: {
        position: 'absolute',
        left: { xs: '-1.55rem', md: '-2.35rem' },
        top: '0.25rem',
        width: 14,
        height: 14,
        background: 'linear-gradient(135deg, #d9a8c7 0%, #f2a8c5 100%)',
        borderRadius: '50%',
        border: '3px solid #faf8f5',
        boxShadow: '0 0 0 3px rgba(217, 168, 199, 0.15)',
        zIndex: 2,
    },
    timelineLine: {
        position: 'absolute',
        left: { xs: '-1.1rem', md: '-1.85rem' },
        top: 20,
        width: 2,
        height: 'calc(100% - 20px)',
        background: 'linear-gradient(180deg, #d9a8c7 0%, #f2a8c5 40%, transparent 100%)',
        zIndex: 1,
    },
    timelineContent: {
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(217, 168, 199, 0.15)',
        borderRadius: '20px',
        p: { xs: 2.5, md: 3.5 },
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'translateX(4px)',
            boxShadow: '0 8px 24px rgba(217, 168, 199, 0.1)',
        },
    },
    title: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: '1.15rem',
        color: '#4a4a52',
        mb: 0.3,
    },
    company: {
        color: '#d9a8c7',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '0.95rem',
        mb: 0.8,
    },
    period: {
        fontSize: '0.85rem',
        color: '#8a8a92',
        mb: 1.5,
        fontFamily: "'Poppins', sans-serif",
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
}

export default EmploymentHistory
