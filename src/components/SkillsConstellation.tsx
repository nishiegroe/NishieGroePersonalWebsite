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
    Git
} from 'developer-icons'

interface SkillNode {
    id: number
    name: string
    icon: React.ElementType
    x: number
    y: number
}

const SkillsConstellation = () => {
    const skills: SkillNode[] = [
        { id: 1, name: 'React', icon: ReactIcon, x: 20, y: 25 },
        { id: 2, name: 'TypeScript', icon: TypeScript, x: 80, y: 15 },
        { id: 3, name: 'Java', icon: Java, x: 50, y: 10 },
        { id: 4, name: 'AWS', icon: AWS, x: 15, y: 60 },
        { id: 5, name: 'Node.js', icon: NodeJs, x: 75, y: 65 },
        { id: 6, name: 'PostgreSQL', icon: PostgreSQL, x: 50, y: 75 },
        { id: 7, name: 'Docker', icon: Docker, x: 30, y: 45 },
        { id: 8, name: 'Python', icon: Python, x: 70, y: 40 },
        { id: 9, name: 'Git', icon: Git, x: 45, y: 55 },
    ]

    const [hoveredId, setHoveredId] = useState<number | null>(null)

    useEffect(() => {
        // Add scroll animation listener
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
                        {/* Generate connection lines between nearby nodes */}
                        {skills.map((skill1, i) =>
                            skills.slice(i + 1).map((skill2) => {
                                const distance = Math.sqrt(
                                    Math.pow(skill1.x - skill2.x, 2) + Math.pow(skill1.y - skill2.y, 2)
                                )
                                if (distance < 40) {
                                    return (
                                        <line
                                            key={`line-${skill1.id}-${skill2.id}`}
                                            x1={`${skill1.x}%`}
                                            y1={`${skill1.y}%`}
                                            x2={`${skill2.x}%`}
                                            y2={`${skill2.y}%`}
                                            stroke="#d9a8c7"
                                            strokeWidth="0.5"
                                            opacity="0.4"
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
                            <Box className="skill-dot">
                                <skill.icon size={32} />
                            </Box>
                            {hoveredId === skill.id && (
                                <Typography className="skill-label">
                                    {skill.name}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 5, textAlign: 'center' }}>
                    <Typography sx={{ color: '#555', fontSize: '0.95rem' }}>
                        Also experienced in: Vue, Python, Docker, GraphQL, REST APIs, System Design, Agile
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default SkillsConstellation
