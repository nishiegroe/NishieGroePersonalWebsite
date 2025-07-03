import { Card, Typography, Container } from '@mui/material'
import {
    React,
    JavaScript,
    TypeScript,
    PostgreSQL,
    Redux,
    Git,
    Angular,
    CSS,
    NodeJs,
    HTML5,
    Java,
    Jest,
    Python,
    Cypress,
    Docker,
    ExpressJsDark,
    Grafana,
    Jenkins,
    Jira,
    Lua,
    MySQL,
    MongoDB,
    NextJs,
} from 'developer-icons'

type Skill = {
    Icon: React.ElementType
    label: string
}

const skills: Skill[] = [
    { Icon: React, label: 'React' },
    { Icon: JavaScript, label: 'JavaScript' },
    { Icon: TypeScript, label: 'TypeScript' },
    { Icon: Redux, label: 'Redux' },
    { Icon: PostgreSQL, label: 'PostgreSQL' },
    { Icon: Git, label: 'Git' },
    { Icon: Angular, label: 'Angular' },
    { Icon: CSS, label: 'CSS' },
    { Icon: NodeJs, label: 'NodeJs' },
    { Icon: HTML5, label: 'HTML5' },
    { Icon: Java, label: 'Java' },
    { Icon: Jest, label: 'Jest' },
    { Icon: Python, label: 'Python' },
    { Icon: Cypress, label: 'Cypress' },
    { Icon: Docker, label: 'Docker' },
    { Icon: ExpressJsDark, label: 'Express' },
    { Icon: Grafana, label: 'Grafana' },
    { Icon: Jenkins, label: 'Jenkins' },
    { Icon: Jira, label: 'Jira' },
    { Icon: Lua, label: 'Lua' },
    { Icon: MySQL, label: 'MySQL' },
    { Icon: MongoDB, label: 'MongoDB' },
    { Icon: NextJs, label: 'Next.js' },
]

const SkillItem = ({ Icon, label }: Skill) => (
    <div
        class="icon-wiggle"
        style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '4px',
        }}
    >
        <Icon size={30} class="icon-wiggle" />
        <Typography
            variant="h6"
            sx={{
                textAlign: 'right',
                pr: 2,
                ml: 1,
                textWrap: 'nowrap',
                alignContent: 'center',
            }}
        >
            {label}
        </Typography>
    </div>
)

const Skills = () => (
    <Card
        className="header"
        sx={{
            margin: '16px 8px',
            p: 4,
            pt: 2,
        }}
    >
        <Typography variant="h4" sx={{ mb: 2 }}>
            Skills
        </Typography>
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexFlow: 'wrap',
            }}
        >
            {skills.map((skill) => (
                <SkillItem key={skill.label} {...skill} />
            ))}
        </Container>
    </Card>
)

export default Skills
