import { Card, Typography, List, ListItem, Container } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

type EmploymentEntryProps = {
    title: string
    company: string
    logo: string
    location: string
    period: string
    highlights?: string[]
    currentRole?: boolean
    headerColor?: string
}

const EmploymentHistoryEntry = ({
    title,
    company,
    logo,
    location,
    period,
    highlights,
    currentRole,
    headerColor,
}: EmploymentEntryProps) => (
    <Card sx={{ m: 4 }}>
        <div
            style={{
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: '3fr 2fr 3fr',
                backgroundColor: headerColor || '#f2f2f2',
                borderRadius: '4px',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridAutoFlow: 'row',
                    alignItems: 'center',
                    margin: '8px 16px 8px 16px',
                }}
            >
                <Typography variant="h5" sx={{ textAlign: 'left' }}>
                    {title}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'left' }}>
                    {company}
                </Typography>
            </div>
            <img
                src={logo}
                alt={`${company} Logo`}
                style={{
                    height: '50px',
                    alignSelf: 'center',
                    justifySelf: 'center',
                }}
            />
            <div
                style={{
                    display: 'grid',
                    gridAutoFlow: 'row',
                    alignItems: 'center',
                    margin: '8px 16px 8px 16px',
                }}
            >
                <div
                    style={{
                        justifyContent: 'flex-end',
                        display: 'flex',
                    }}
                >
                    <LocationOnIcon sx={{ scale: 0.8 }} />
                    <Typography>{location}</Typography>
                </div>
                <Typography variant="body1" sx={{ textAlign: 'right' }}>
                    {period}
                </Typography>
            </div>
        </div>
        {currentRole ? (
            <Container sx={{ m: 2 }}>
                <Typography
                    variant="h5"
                    sx={{
                        display: 'inline',
                        fontWeight: 'bold',
                    }}
                >
                    More to come!
                </Typography>
            </Container>
        ) : highlights && highlights.length > 0 ? (
            <List sx={{ listStyleType: 'disc', width: '97%', ml: 3, mr: 3 }}>
                {highlights.map((highlight, index) => (
                    <ListItem
                        key={index}
                        sx={{ display: 'list-item', left: '20px', p: 0 }}
                    >
                        <Typography variant="body2" align="left">
                            {highlight}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        ) : null}
    </Card>
)

const employmentData: EmploymentEntryProps[] = [
    {
        title: 'Full-Stack Developer',
        company: 'USG',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/USG_Corporation_logo.svg/1200px-USG_Corporation_logo.svg.png',
        location: 'Chicago, IL',
        period: '2025 - Present',
        currentRole: true,
        headerColor: 'rgba(227, 28, 61, .05)',
    },
    {
        title: 'Senior Software Engineer',
        company: 'John Deere',
        logo: 'https://purepng.com/public/uploads/large/purepng.com-john-deere-logologobrand-logoiconslogos-251519940703ra54z.png',
        location: 'Moline, IL',
        period: '2022 - 2024',
        highlights: [
            'Spearheaded UI/UX modernization, creating ReactJS Micro-Frontends to dismantle monolithic AngularJS and Java applications, enhancing maintainability and development efficiency.',
            'Conducted international knowledge transfer, upskilling remote and local teams on ReactJS and UI/UX best practices, fostering global collaboration.',
            'Created multiple Micro-Frontends (MFE) to split up our monolithic application Created Drone CI/CD pipelines for our MFE’s.',
            'Replaced out-of-date SOAP API’s with REST API’s',
            'Conceptualized and developed a container UI to effectively house micro-frontends, improving overall system architecture and user experience.',
            'Made use of SaaS and AWS to host and deploy JS and Java applications',
            'Reworked and automated M/A processes using SQL functionality',
            'Created Drone CI/CD pipelines for our MFE’s',
            'Assisted in creating a container UI to better house our MFE’s.',
        ],
        headerColor: 'rgba(54, 124, 43, .1)',
    },
    {
        title: 'Software Engineer',
        company: 'John Deere',
        logo: 'https://purepng.com/public/uploads/large/purepng.com-john-deere-logologobrand-logoiconslogos-251519940703ra54z.png',
        location: 'Moline, IL',
        period: '2017 - 2022',
        highlights: [
            'Optimized software development lifecycle, enhancing team productivity and reducing time to-market for key product features',
            'Fostered cross-functional collaboration, aligning software development with business objectives and enhancing overall product quality',
            'Assisted in migrating applications to AWS',
            'Conducted comprehensive analysis to identify and decommission underutilized ColdFusion applications, optimizing system resources and reducing maintenance costs.',
            'Partnered with cross-functional teams to execute smooth transition from legacy systems, ensuring minimal disruption to business operations during migration process.',
            'Spearheaded SiteMinder to OKTA SSO migration in ColdFusion apps, enhancing security protocols. Analyzed and decommissioned underutilized applications, optimizing resources.',
        ],
        headerColor: 'rgba(54, 124, 43, .1)',
    },
]

const EmploymentHistory = () => (
    <Card
        className="header"
        sx={{
            backgroundColor: '#FDFAF6',
            placeContent: 'center',
            margin: '16px 8px ',
            p: 2,
        }}
    >
        <Typography variant="h4">Employment History</Typography>
        {employmentData.map((entry, idx) => (
            <EmploymentHistoryEntry key={idx} {...entry} />
        ))}
    </Card>
)

export default EmploymentHistory
