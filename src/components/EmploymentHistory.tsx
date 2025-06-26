import { Card, Typography, List, ListItem, Container } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const EmploymentHistory = () => {
    return (
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
            <Card sx={{ m: 4 }}>
                <div
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'row',
                        gridTemplateColumns: '3fr 2fr 3fr',
                        backgroundColor: '#f2f2f2f2',
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
                            Full-Stack Developer
                        </Typography>
                        <div>
                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: 'left',
                                }}
                            >
                                USG
                            </Typography>
                        </div>
                    </div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/USG_Corporation_logo.svg/1200px-USG_Corporation_logo.svg.png"
                        alt="USG Logo"
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
                            <Typography>Chicago, IL</Typography>
                        </div>
                        <Typography variant="body1" sx={{ textAlign: 'right' }}>
                            2025 - Present
                        </Typography>
                    </div>
                </div>
                <Container
                    sx={{
                        m: 2,
                    }}
                >
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
            </Card>
            <Card sx={{ m: 4 }}>
                <div
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'row',
                        gridTemplateColumns: '3fr 2fr 3fr',
                        backgroundColor: '#f2f2f2f2',
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
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: 'left',
                            }}
                        >
                            Senior Software Engineer
                        </Typography>
                        <div>
                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: 'left',
                                }}
                            >
                                John Deere
                            </Typography>
                        </div>
                    </div>
                    <img
                        src="https://purepng.com/public/uploads/large/purepng.com-john-deere-logologobrand-logoiconslogos-251519940703ra54z.png"
                        alt="USG Logo"
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
                            margin: '8px 16px 8px 16px',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                marginRight: '0 auto',
                                justifyContent: 'flex-end',
                                display: 'flex',
                            }}
                        >
                            <LocationOnIcon sx={{ scale: 0.8 }} />
                            <Typography>Moline, IL</Typography>
                        </div>
                        <Typography variant="body1" sx={{ textAlign: 'right' }}>
                            2022 - 2024
                        </Typography>
                    </div>
                </div>
                <List
                    sx={{ listStyleType: 'disc', width: '97%', ml: 3, mr: 3 }}
                >
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Spearheaded UI/UX modernization, creating ReactJS
                            Micro-Frontends to dismantle monolithic AngularJS
                            and Java applications, enhancing maintainability and
                            development efficiency.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Conducted international knowledge transfer,
                            upskilling remote and local teams on ReactJS and
                            UI/UX best practices, fostering global
                            collaboration.{' '}
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Created multiple Micro-Frontends (MFE) to split up
                            our monolithic application Created Drone CI/CD
                            pipelines for our MFE’s.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Replaced out-of-date SOAP API’s with REST API’s
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Conceptualized and developed a container UI to
                            effectively house micro-frontends, improving overall
                            system architecture and user experience.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Made use of SaaS and AWS to host and deploy JS and
                            Java applications
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Reworked and automated M/A processes using SQL
                            functionality
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Created Drone CI/CD pipelines for our MFE’s
                        </Typography>{' '}
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Assisted in creating a container UI to better house
                            our MFE’s.
                        </Typography>
                    </ListItem>
                </List>
            </Card>
            <Card sx={{ m: 4 }}>
                <div
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'row',
                        gridTemplateColumns: '3fr 2fr 3fr',
                        backgroundColor: '#f2f2f2f2',
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
                            Software Engineer
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: 'left',
                            }}
                        >
                            John Deere
                        </Typography>
                    </div>
                    <img
                        src="https://purepng.com/public/uploads/large/purepng.com-john-deere-logologobrand-logoiconslogos-251519940703ra54z.png"
                        alt="USG Logo"
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
                            margin: '8px 16px 8px 16px',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                marginRight: '0 auto',
                                justifyContent: 'flex-end',
                                display: 'flex',
                            }}
                        >
                            <LocationOnIcon sx={{ scale: 0.8 }} />
                            <Typography>Moline, IL</Typography>
                        </div>
                        <Typography variant="body1" sx={{ textAlign: 'right' }}>
                            2017 - 2022
                        </Typography>
                    </div>
                </div>

                <List
                    sx={{ listStyleType: 'disc', width: '97%', ml: 3, mr: 3 }}
                >
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Optimized software development lifecycle, enhancing
                            team productivity and reducing time to-market for
                            key product features
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Fostered cross-functional collaboration, aligning
                            software development with business objectives and
                            enhancing overall product quality
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Assisted in migrating applications to AWS
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Conducted comprehensive analysis to identify and
                            decommission underutilized ColdFusion applications,
                            optimizing system resources and reducing maintenance
                            costs.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Partnered with cross-functional teams to execute
                            smooth transition from legacy systems, ensuring
                            minimal disruption to business operations during
                            migration process.
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', left: '20px', p: 0 }}>
                        <Typography variant="body2" align="left">
                            Spearheaded SiteMinder to OKTA SSO migration in
                            ColdFusion apps, enhancing security protocols.
                            Analyzed and decommissioned underutilized
                            applications, optimizing resources.
                        </Typography>
                    </ListItem>
                </List>
            </Card>
        </Card>
    )
}

export default EmploymentHistory
