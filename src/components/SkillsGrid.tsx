import { Box, Typography } from '@mui/material'
import {
    React as ReactIcon,
    TypeScript,
    Java,
    NodeJs,
    PostgreSQL,
    Docker,
    Python,
    AWS,
    Git,
    JavaScript,
    NextJs,
    CSS,
    ExpressJsDark,
    MySQL,
    MongoDB,
    Jest,
    Cypress,
    Grafana,
    Jira,
    C as Contentful,
} from 'developer-icons'

// Inline SVG icon components for technologies not in developer-icons
const TurborepoIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2L2 7.5l10 5.5 10-5.5L12 2zM2 9.25l10 5.5 10-5.5V12L12 17.5 2 12V9.25zM2 13.75l10 5.5 10-5.5V16l-10 5.5L2 16v-2.25z" />
    </svg>
)

const I18nextIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12.87 15.07l-.54.55a3.77 3.77 0 01-5.34 0l-.54-.55 5.88-5.88.54.54a3.77 3.77 0 010 5.34zM11.46 7.54l-.54.54L5.04 13.42l-.54-.54a3.77 3.77 0 010-5.34l.54-.54 5.88 5.88.54-.54a3.77 3.77 0 015.34 0l.54.54-5.88 5.88-.54-.54 5.34-5.34a2.38 2.38 0 000-3.36l-.54-.54a2.38 2.38 0 00-3.36 0l-.54.54z" />
        <circle cx="16" cy="8" r="1.5" />
    </svg>
)

const OpenAPIIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.17 5 7.41 0 2.08-.8 3.97-2.1 5.48z" />
    </svg>
)

interface Skill {
    name: string
    icon: React.ElementType
    category: string
}

interface SkillCategory {
    name: string
    color: string
    bgColor: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend',
        color: '#d9a8c7',
        bgColor: 'rgba(217, 168, 199, 0.1)',
        skills: [
            { name: 'React', icon: ReactIcon, category: 'frontend' },
            { name: 'Next.js', icon: NextJs, category: 'frontend' },
            { name: 'TypeScript', icon: TypeScript, category: 'frontend' },
            { name: 'JavaScript', icon: JavaScript, category: 'frontend' },
            { name: 'CSS', icon: CSS, category: 'frontend' },
        ],
    },
    {
        name: 'Backend',
        color: '#a8d8f2',
        bgColor: 'rgba(168, 216, 242, 0.1)',
        skills: [
            { name: 'Node.js', icon: NodeJs, category: 'backend' },
            { name: 'Express', icon: ExpressJsDark, category: 'backend' },
            { name: 'Java', icon: Java, category: 'backend' },
            { name: 'Python', icon: Python, category: 'backend' },
        ],
    },
    {
        name: 'Database',
        color: '#c8b8e8',
        bgColor: 'rgba(200, 184, 232, 0.1)',
        skills: [
            { name: 'PostgreSQL', icon: PostgreSQL, category: 'database' },
            { name: 'MySQL', icon: MySQL, category: 'database' },
            { name: 'MongoDB', icon: MongoDB, category: 'database' },
        ],
    },
    {
        name: 'DevOps & Tools',
        color: '#f5d1c8',
        bgColor: 'rgba(245, 209, 200, 0.1)',
        skills: [
            { name: 'Docker', icon: Docker, category: 'devops' },
            { name: 'AWS', icon: AWS, category: 'devops' },
            { name: 'Git', icon: Git, category: 'devops' },
            { name: 'Grafana', icon: Grafana, category: 'devops' },
            { name: 'Jira', icon: Jira, category: 'devops' },
            { name: 'Contentful', icon: Contentful, category: 'devops' },
        ],
    },
    {
        name: 'Architecture & Standards',
        color: '#d0c8e0',
        bgColor: 'rgba(208, 200, 224, 0.1)',
        skills: [
            { name: 'Turborepo', icon: TurborepoIcon, category: 'architecture' },
            { name: 'OpenAPI', icon: OpenAPIIcon, category: 'architecture' },
            { name: 'i18next', icon: I18nextIcon, category: 'architecture' },
        ],
    },
    {
        name: 'Testing',
        color: '#f2a8c5',
        bgColor: 'rgba(242, 168, 197, 0.1)',
        skills: [
            { name: 'Jest', icon: Jest, category: 'testing' },
            { name: 'Cypress', icon: Cypress, category: 'testing' },
        ],
    },
]

const SkillsGrid = () => {
    return (
        <Box id="skills" sx={styles.container}>
            <Typography
                variant="h2"
                sx={styles.heading}
            >
                Skills & Expertise
            </Typography>
            <Typography sx={styles.subheading}>
                Technologies I work with across the stack
            </Typography>

            <Box sx={styles.grid}>
                {skillCategories.map((category) => (
                    <Box
                        key={category.name}
                        sx={{
                            ...styles.card,
                            background: category.bgColor,
                            borderColor: `${category.color}25`,
                        }}
                    >
                        <Typography
                            sx={{
                                ...styles.categoryLabel,
                                color: category.color,
                            }}
                        >
                            {category.name}
                        </Typography>
                        <Box sx={styles.skillList}>
                            {category.skills.map((skill) => (
                                <Box
                                    key={skill.name}
                                    sx={styles.skillItem}
                                >
                                    <Box sx={styles.iconWrapper}>
                                        <skill.icon size={20} />
                                    </Box>
                                    <Typography sx={styles.skillName}>
                                        {skill.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

/* ─── Styles ─── */
const styles = {
    container: {
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        px: { xs: 2, md: 4 },
    },
    heading: {
        mb: 1.5,
        textAlign: 'center',
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: { xs: '1.8rem', md: '2.4rem' },
        color: '#4a4a52',
    },
    subheading: {
        textAlign: 'center',
        color: '#8a8a92',
        mb: 5,
        fontSize: '1rem',
        fontFamily: "'Poppins', sans-serif",
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
        },
        gap: { xs: 2.5, md: 3 },
    },
    card: {
        p: { xs: 2.5, md: 3 },
        borderRadius: '20px',
        border: '1px solid',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(217, 168, 199, 0.12)',
        },
    },
    categoryLabel: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '0.85rem',
        mb: 2,
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    skillList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1.2,
    },
    skillItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '9999px',
        border: '1px solid rgba(217, 168, 199, 0.15)',
        transition: 'all 200ms ease',
        '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 2px 8px rgba(217, 168, 199, 0.12)',
        },
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        color: '#d9a8c7',
    },
    skillName: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.85rem',
        fontWeight: 500,
        color: '#4a4a52',
        whiteSpace: 'nowrap',
    },
}

export default SkillsGrid
