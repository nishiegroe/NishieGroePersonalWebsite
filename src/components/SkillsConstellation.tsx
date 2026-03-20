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
        // Frontend (top-left cluster)
        { id: 1, name: 'React', icon: ReactIcon, category: 'frontend', x: 12, y: 10 },
        { id: 2, name: 'Next.js', icon: NextJs, category: 'frontend', x: 22, y: 8 },
        { id: 3, name: 'TypeScript', icon: TypeScript, category: 'frontend', x: 18, y: 18 },
        { id: 4, name: 'JavaScript', icon: JavaScript, category: 'frontend', x: 8, y: 20 },
        { id: 5, name: 'CSS', icon: CSS, category: 'frontend', x: 28, y: 22 },
        { id: 6, name: 'Redux', icon: Redux, category: 'frontend', x: 16, y: 28 },

        // Backend (top-right cluster)
        { id: 7, name: 'Node.js', icon: NodeJs, category: 'backend', x: 78, y: 12 },
        { id: 8, name: 'Express', icon: ExpressJsDark, category: 'backend', x: 88, y: 18 },
        { id: 9, name: 'Java', icon: Java, category: 'backend', x: 82, y: 28 },
        { id: 10, name: 'Python', icon: Python, category: 'backend', x: 72, y: 22 },

        // Database (center cluster)
        { id: 11, name: 'PostgreSQL', icon: PostgreSQL, category: 'database', x: 45, y: 48 },
        { id: 12, name: 'MySQL', icon: MySQL, category: 'database', x: 38, y: 58 },
        { id: 13, name: 'MongoDB', icon: MongoDB, category: 'database', x: 55, y: 55 },

        // DevOps (bottom-left cluster)
        { id: 14, name: 'Docker', icon: Docker, category: 'devops', x: 10, y: 70 },
        { id: 15, name: 'AWS', icon: AWS, category: 'devops', x: 18, y: 80 },
        { id: 16, name: 'Grafana', icon: Grafana, category: 'devops', x: 8, y: 90 },

        // Testing (right-middle cluster)
        { id: 17, name: 'Jest', icon: Jest, category: 'testing', x: 82, y: 50 },
        { id: 18, name: 'Cypress', icon: Cypress, category: 'testing', x: 92, y: 62 },

        // Tools & CMS (bottom-center cluster)
        { id: 19, name: 'Git', icon: Git, category: 'tools', x: 42, y: 80 },
        { id: 20, name: 'Jira', icon: Jira, category: 'tools', x: 58, y: 88 },
        { id: 21, name: 'Contentful', icon: Contentful, category: 'tools', x: 50, y: 75 },
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
                                <Box sx={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '2px',
                                    zIndex: 10,
                                    mt: 1,
                                }}>
                                    <Typography className="skill-label">
                                        {skill.name}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '0.7rem',
                                        color: '#7a7066',
                                        textAlign: 'center',
                                        fontWeight: 500,
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
