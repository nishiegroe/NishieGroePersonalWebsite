import { Card, Typography, Container, Stack } from '@mui/material'
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
    { Icon: TypeScript, label: 'TypeScript' },
    { Icon: JavaScript, label: 'JavaScript' },
    { Icon: Redux, label: 'Redux' },
    { Icon: PostgreSQL, label: 'PostgreSQL' },
    { Icon: Git, label: 'Git' },
    { Icon: Docker, label: 'Docker' },
    { Icon: NextJs, label: 'Next.js' },
    { Icon: Angular, label: 'Angular' },
    { Icon: CSS, label: 'CSS' },
    { Icon: NodeJs, label: 'NodeJs' },
    { Icon: HTML5, label: 'HTML5' },
    { Icon: Java, label: 'Java' },
    { Icon: Jest, label: 'Jest' },
    { Icon: Python, label: 'Python' },
    { Icon: Cypress, label: 'Cypress' },
    { Icon: ExpressJsDark, label: 'Express' },
    { Icon: Grafana, label: 'Grafana' },
    { Icon: Jenkins, label: 'Jenkins' },
    { Icon: Jira, label: 'Jira' },
    { Icon: Lua, label: 'Lua' },
    { Icon: MySQL, label: 'MySQL' },
    { Icon: MongoDB, label: 'MongoDB' },
]

const SkillItem = ({ Icon, label }: Skill) => (
    <div
        className="icon-wiggle"
        style={{ display: 'flex', flexDirection: 'row', margin: '6px 8px' }}
    >
        <Icon size={28} className="icon-wiggle" />
        <Typography
            variant="body1"
            sx={{
                pr: 1,
                ml: 1,
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
                alignContent: 'center',
            }}
        >
            {label}
        </Typography>
    </div>
)

const Skills = () => (
    <Card
        id="skills"
        className="header"
        sx={{
            m: { xs: '16px 8px', md: '12px' },
            p: { xs: 2, sm: 3, md: 4 },
            width: '100%',
            maxWidth: { xs: 680, md: 960 },
            boxSizing: 'border-box',
            mx: 'auto',
            scrollMarginTop: { xs: '20px', md: '104px' },
            borderRadius: '15px',
            minHeight: 120,
        }}
        >
        <Typography
            variant="h4"
            sx={{
                mb: { xs: 1, sm: 2 },
                textAlign: { xs: 'center', md: 'left' },
            }}
        >
            Skills
        </Typography>
        <Container sx={{ px: { xs: 0.5, sm: 2 } }}>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                useFlexGap
                spacing={{ xs: 0.5, sm: 1 }}
            >
                {skills.map((skill) => (
                    <SkillItem key={skill.label} {...skill} />
                ))}
            </Stack>
        </Container>
    </Card>
)

export default Skills
