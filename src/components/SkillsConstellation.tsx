import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
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
    Redux,
    ExpressJsDark,
    MySQL,
    MongoDB,
    Jest,
    Cypress,
    Grafana,
    Jira,
    C as Contentful
} from 'developer-icons'

interface SkillNode {
    id: number
    name: string
    icon: React.ElementType
    category: string
    x: number
    y: number
}

interface SkillCategory {
    name: string
    color: string
}

const categoryColors: Record<string, SkillCategory> = {
    frontend: { name: 'Frontend', color: '#f5b8a8' },
    backend: { name: 'Backend', color: '#d9a8c7' },
    database: { name: 'Database', color: '#c8b8d9' },
    devops: { name: 'DevOps', color: '#a8c8d9' },
    testing: { name: 'Testing', color: '#d9d4a8' },
    tools: { name: 'Tools & CMS', color: '#d4a8b8' },
}

const SkillsConstellation = () => {
    const skills: SkillNode[] = [
        // Frontend
        { id: 1, name: 'React', icon: ReactIcon, category: 'frontend', x: 15, y: 15 },
        { id: 2, name: 'Next.js', icon: NextJs, category: 'frontend', x: 25, y: 20 },
        { id: 3, name: 'TypeScript', icon: TypeScript, category: 'frontend', x: 20, y: 30 },
        { id: 4, name: 'JavaScript', icon: JavaScript, category: 'frontend', x: 10, y: 35 },
        { id: 5, name: 'CSS', icon: CSS, category: 'frontend', x: 30, y: 35 },
        { id: 6, name: 'Redux', icon: Redux, category: 'frontend', x: 25, y: 10 },

        // Backend
        { id: 7, name: 'Node.js', icon: NodeJs, category: 'backend', x: 60, y: 15 },
        { id: 8, name: 'Express', icon: ExpressJsDark, category: 'backend', x: 70, y: 22 },
        { id: 9, name: 'Java', icon: Java, category: 'backend', x: 50, y: 25 },
        { id: 10, name: 'Python', icon: Python, category: 'backend', x: 65, y: 35 },

        // Database
        { id: 11, name: 'PostgreSQL', icon: PostgreSQL, category: 'database', x: 45, y: 55 },
        { id: 12, name: 'MySQL', icon: MySQL, category: 'database', x: 35, y: 60 },
        { id: 13, name: 'MongoDB', icon: MongoDB, category: 'database', x: 55, y: 65 },

        // DevOps
        { id: 14, name: 'Docker', icon: Docker, category: 'devops', x: 15, y: 55 },
        { id: 15, name: 'AWS', icon: AWS, category: 'devops', x: 20, y: 65 },
        { id: 16, name: 'Grafana', icon: Grafana, category: 'devops', x: 10, y: 75 },

        // Testing
        { id: 17, name: 'Jest', icon: Jest, category: 'testing', x: 75, y: 55 },
        { id: 18, name: 'Cypress', icon: Cypress, category: 'testing', x: 85, y: 60 },

        // Tools & CMS
        { id: 19, name: 'Git', icon: Git, category: 'tools', x: 50, y: 80 },
        { id: 20, name: 'Jira', icon: Jira, category: 'tools', x: 40, y: 75 },
        { id: 21, name: 'Contentful', icon: Contentful, category: 'tools', x: 65, y: 80 },
    ]

    const [hoveredId, setHoveredId] = useState<number | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view')
                }
            })
        })

        const elements = document.querySelectorAll('.scroll-fade-in, .skill-node')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const getSkillsByCategory = (category: string) => skills.filter(s => s.category === category)

    return (
        <Box id="skills" className="spatial-section">
            <Box className="spatial-section-content">
                <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontFamily: 'Playfair Display, serif' }}>
                    Skills & Expertise
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                        color: '#7a7066',
                        mb: 4,
                        fontSize: '1.1rem',
                        fontFamily: 'Crimson Text, serif',
                    }}
                >
                    A constellation of technologies I work with
                </Typography>

                <Box className="skills-constellation">
                    <svg className="skill-connections" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {skills.map((skill1, i) =>
                            skills.slice(i + 1).map((skill2) => {
                                const distance = Math.sqrt(
                                    Math.pow(skill1.x - skill2.x, 2) + Math.pow(skill1.y - skill2.y, 2)
                                )
                                // Connect skills in same category or nearby skills
                                if ((skill1.category === skill2.category && distance < 25) || distance < 20) {
                                    const lineColor = skill1.category === skill2.category
                                        ? categoryColors[skill1.category].color
                                        : '#d9a8c7'
                                    const lineOpacity = skill1.category === skill2.category ? 0.5 : 0.2
                                    return (
                                        <line
                                            key={`line-${skill1.id}-${skill2.id}`}
                                            x1={`${skill1.x}%`}
                                            y1={`${skill1.y}%`}
                                            x2={`${skill2.x}%`}
                                            y2={`${skill2.y}%`}
                                            stroke={lineColor}
                                            strokeWidth="0.5"
                                            opacity={lineOpacity}
                                        />
                                    )
                                }
                                return null
                            })
                        )}
                    </svg>

                    {skills.map((skill) => (
                        <Box
                            key={skill.id}
                            className="skill-node"
                            sx={{
                                left: `calc(${skill.x}% - 30px)`,
                                top: `calc(${skill.y}% - 30px)`,
                            }}
                            onMouseEnter={() => setHoveredId(skill.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Box
                                className="skill-dot"
                                sx={{
                                    backgroundColor: `${categoryColors[skill.category].color}20 !important`,
                                }}
                            >
                                <skill.icon size={32} />
                            </Box>
                            {hoveredId === skill.id && (
                                <Box>
                                    <Typography className="skill-label">
                                        {skill.name}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '0.7rem',
                                        color: '#999',
                                        textAlign: 'center',
                                        mt: '2px'
                                    }}>
                                        {categoryColors[skill.category].name}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>

                {/* Category Legend */}
                <Box sx={{
                    mt: 4,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2,
                }}>
                    {Object.entries(categoryColors).map(([key, category]) => {
                        const skillsInCategory = getSkillsByCategory(key)
                        return (
                            <Box
                                key={key}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    px: 2,
                                    py: 1,
                                    backgroundColor: `${category.color}15`,
                                    borderRadius: '20px',
                                    border: `1px solid ${category.color}40`,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: category.color,
                                    }}
                                />
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
                                    {category.name} ({skillsInCategory.length})
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default SkillsConstellation
