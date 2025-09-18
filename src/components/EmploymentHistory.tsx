import {
    Card,
    Typography,
    List,
    ListItem,
    Container,
    Grid,
} from '@mui/material'
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
}: EmploymentEntryProps) => {
    let content: React.ReactNode = null;

    if (currentRole) {
        content = (
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
        );
    } else if (highlights && highlights.length > 0) {
        content = (
            <List
                sx={{
                    listStyleType: 'disc',
                    px: { xs: 2, sm: 3 },
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {highlights.map((highlight) => (
                    <ListItem
                        key={highlight}
                        sx={{ display: 'list-item', pl: 2, p: 0 }}
                    >
                        <Typography variant="body2" align="left">
                            {highlight}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        );
    }

    return (
        <Card sx={{ m: { xs: 2, sm: 3 }, p: { xs: 1, sm: 2 } }}>
            <Container
                disableGutters
                sx={{
                    backgroundColor: headerColor || '#f2f2f2',
                    borderRadius: 1,
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 1.5, sm: 2 },
                }}
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            {company}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }} sx={{ textAlign: 'center' }}>
                        <img
                            src={logo}
                            alt={`${company} Logo`}
                            loading="lazy"
                            decoding="async"
                            style={{
                                height: 50,
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Container
                            disableGutters
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-end' },
                            }}
                        >
                            <LocationOnIcon sx={{ mr: 0.5, fontSize: 18 }} />
                            <Typography>{location}</Typography>
                        </Container>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: { xs: 'center', md: 'right' },
                                mt: { xs: 0.5, md: 0 },
                            }}
                        >
                            {period}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            {content}
        </Card>
    );
}

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
        id="experience"
        className="header"
        sx={{
            backgroundColor: '#FDFAF6',
            m: { xs: '16px 8px', md: '12px' },
            p: { xs: 2, sm: 3, md: 4 },
            width: '100%',
            maxWidth: { xs: 680, md: 960 },
            boxSizing: 'border-box',
            mx: 'auto',
            scrollMarginTop: { xs: '20px', md: '104px' },
            borderRadius: '15px',
        }}
    >
        <Typography
            variant="h4"
            sx={{
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 1, sm: 2 },
            }}
        >
            Employment History
        </Typography>
        {employmentData.map((entry) => (
            <EmploymentHistoryEntry
                key={`${entry.company}-${entry.period}`}
                {...entry}
            />
        ))}
    </Card>
)

export default EmploymentHistory
