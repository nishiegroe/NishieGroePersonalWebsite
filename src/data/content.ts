// Single source for the site's copy. Pages render from here, and
// scripts/write-route-pages.mjs reads `pageMeta` for each route's <title> and description.

export type Screenshot = {
    src: string
    alt: string
    caption: string
}

export type Project = {
    slug: string
    title: string
    summary: string
    role?: string
    since?: string
    stack: string[]
    highlights: string[]
    screenshots: Screenshot[]
    website?: string
}

export type Job = {
    title: string
    company: string
    period: string
    location: string
    highlights: string[]
}

export const profile = {
    name: 'Nishie Groe',
    role: 'Software Engineer',
    location: 'Chicago, IL',
    email: 'nishiegroe@gmail.com',
    github: 'https://github.com/nishiegroe',
    linkedin: 'https://www.linkedin.com/in/nishie-groe/',
}

export const projects: Project[] = [
    {
        slug: 'veridian',
        title: 'Veridian Esports',
        summary:
            'A production platform that runs competitive Apex Legends leagues, plus a real-time server that ingests live match data straight from the game.',
        role: 'Director of Technology',
        since: 'June 2026',
        stack: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets', 'Protobuf', 'AWS'],
        highlights: [
            'Runs tournaments end to end: group seeding, a timed multi-map draft, live scoring and ALGS tiebreakers.',
            'Live broadcast console with one-click observer cameras, live-fight alerts, shared observer consoles and OBS overlays.',
            'Ranks players on separate scrim and tournament ladders, with older matches counting for less over time.',
            'A companion server receives live game data over WebSockets (JSON or protobuf) and streams scoreboards to browsers.',
            'Zero-downtime deploys on AWS Lightsail with automatic rollback, and 1,500+ automated tests.',
            'English and Spanish, Discord sign-in, and separate tools for organizers and admins.',
        ],
        screenshots: [
            {
                src: '/veridian-2026-10-live-console.webp',
                alt: 'Organizer console mid-match with director camera controls, a camera button beside every player, and recommended live fights in the event feed.',
                caption: 'Live broadcast console: one click puts the camera on any player, and live fights are flagged as they start.',
            },
            {
                src: '/veridian-2026-10-home.webp',
                alt: 'Veridian home page with the headline "Build, Compete, Grow Together" and featured events.',
                caption: 'Home page with featured events.',
            },
            {
                src: '/veridian-2026-10-player-profile.webp',
                alt: 'Player profile showing rank badges for three ladders, KDA, damage, accuracy and top legends.',
                caption: 'Player profile: ranks on three ladders, core stats, top legends and a suggested role.',
            },
            {
                src: '/veridian-2026-10-console.webp',
                alt: 'Organizer console after an event, showing the series winner and game-by-game standings for 20 teams.',
                caption: 'Console after an event: series winner, game-by-game standings and stat leaders.',
            },
            {
                src: '/veridian-2026-10-tournament.webp',
                alt: 'Revival Invitational tournament page with final standings and the series schedule.',
                caption: 'Tournament page: final standings, kills and the series schedule.',
            },
            {
                src: '/veridian-2026-10-rankings.webp',
                alt: 'Rankings page with the eight rank tiers from Quartz to Top 10 above a cumulative leaderboard.',
                caption: 'Rankings: rank tiers and the cumulative leaderboard.',
            },
            {
                src: '/veridian-2026-10-events.webp',
                alt: 'Matches page listing featured events, scrims, tournaments and other events.',
                caption: 'Matches: featured events plus every scrim and tournament.',
            },
            {
                src: '/veridian-2026-10-lootpaths.webp',
                alt: 'Storm Point map with named points of interest and loot markers.',
                caption: 'Map library: Storm Point with points of interest and loot markers.',
            },
        ],
        website: 'https://veridianesports.org',
    },
    {
        slug: 'vod-insights',
        title: 'VOD Insights',
        summary: 'Automated video review for esports coaches and creators. It reads the killfeed, bookmarks every event and exports clips, fully offline.',
        stack: ['Python', 'React', 'Electron', 'OpenCV', 'FFmpeg'],
        highlights: [
            'Detects killfeed events with OCR, for any esports game.',
            'Exports clips automatically, merging events that happen close together.',
            'Imports Twitch VODs and processes them in batches.',
            'Exports event logs as CSV or JSONL.',
            'Runs fully offline, with no cloud services.',
        ],
        screenshots: [
            {
                src: '/vod-insights-home.webp',
                alt: 'VOD Insights home screen with rows of recent VOD and clip thumbnails.',
                caption: 'Home: recent recordings and clips.',
            },
            {
                src: '/vod-insights-clips.webp',
                alt: 'Clips library grouped by date, each clip showing its kills, assists and length.',
                caption: 'Clips library, grouped by day.',
            },
            {
                src: '/vod-insights-viewer.webp',
                alt: 'VOD viewer playing Apex Legends gameplay beside a list of 31 detected events, with a timeline below.',
                caption: 'VOD viewer: every detected knock, assist and elimination is a bookmark.',
            },
            {
                src: '/vod-insights-clip-viewer.webp',
                alt: 'Clip viewer playing a short Apex Legends clip with playback controls.',
                caption: 'Clip viewer.',
            },
        ],
        website: 'https://vodinsights.app',
    },
    {
        slug: 'usg',
        title: 'USG.com',
        summary:
            'The corporate website for USG Corporation, a leading manufacturer of construction products including drywall, ceilings and building envelope solutions.',
        stack: ['Contentful', 'Next.js', 'TypeScript'],
        highlights: [
            'Built on Next.js and TypeScript, with Contentful as the content system.',
            'Supports rich product catalogs, design tools and multi-language content.',
        ],
        screenshots: [
            {
                src: '/usg-com.webp',
                alt: 'USG.com home page with the headline "What We Choose Today Builds Tomorrow" and three feature cards below.',
                caption: 'USG.com home page.',
            },
        ],
        website: 'https://usg.com',
    },
    {
        slug: 'lootpath-finder',
        title: 'Lootpath Finder',
        summary: 'An interactive map editor for planning Apex Legends loot routes.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Docker'],
        highlights: [
            'Draw loot paths directly on the map.',
            'Saves routes as JSON.',
            'Runs in a Docker container for easy deployment.',
            'Works on desktop and tablet.',
        ],
        screenshots: [
            {
                src: '/lootpath-finder-home.webp',
                alt: 'Lootpath Finder home screen with cards for four maps: World\'s Edge, Storm Point, Olympus and E-District.',
                caption: 'Pick a map.',
            },
            {
                src: '/lootpath-finder-map.webp',
                alt: 'E-District map with points of interest and loot markers.',
                caption: 'Map view with points of interest.',
            },
            {
                src: '/lootpath-finder-lootpath.webp',
                alt: 'Storm Point map zoomed into The Wall, with three colored loot paths drawn across it.',
                caption: 'Loot paths drawn at The Wall on Storm Point.',
            },
        ],
    },
]

export const jobs: Job[] = [
    {
        title: 'Director of Technology',
        company: 'Veridian Esports',
        period: 'June 2026 – present',
        location: 'Remote',
        highlights: [
            'Designed, built and operate veridianesports.org end to end: 840+ commits and 200+ merged pull requests across ~87k lines of strict TypeScript (Next.js 16, React 19, Prisma 7, Tailwind v4).',
            'Built the tournament operations suite community leagues run on: multi-stage events, invite-gated registration, roster locks, MMR-based group seeding, a real-time timed map draft, and live scoring with ALGS tiebreakers.',
            'Built a live broadcast console for casters and observers: one-click camera switching to any player or squad, auto-detected live fights surfaced as recommended views, off-camera fight alerts, shared observer consoles and OBS overlays.',
            'Engineered a ranking engine with separate scrim and tournament ladders, time-weighted decay and a live Top 25, fed by Overstat.gg, NeatQueue and Respawn\'s official stats API.',
            'Built a standalone real-time server for Apex Legends\' LiveAPI (Node.js, WebSockets, Protocol Buffers) that reduces the game\'s event stream into live scoreboards and routes camera commands back to game clients.',
            'Run production on AWS Lightsail with Docker, Caddy TLS and zero-downtime blue/green deploys, with GitHub Actions CI running 1,500+ tests.',
        ],
    },
    {
        title: 'Software Developer',
        company: 'USG',
        period: 'May 2025 – present',
        location: 'Chicago, IL',
        highlights: [
            'Led an architectural redesign of 21 legacy estimator tools, designing domain-driven REST APIs with OpenAPI specifications and implementing them in a Next.js monorepo.',
            'Architected a Turborepo monorepo with 6 shared packages and 90%+ code reuse across a multi-tenant setup (USG and Knauf), with server-first data fetching, i18next/Crowdin internationalization, an MUI design system and strict TypeScript.',
            'Wrote technical documentation including OpenAPI specifications, architecture diagrams and onboarding guides.',
            'Built a headless CMS-driven frontend for flexible content delivery.',
            'Built and onboarded a development team with agile workflows, interviewed engineering candidates, led the pilot go-live and planned the post-pilot roadmap.',
        ],
    },
    {
        title: 'Senior Software Engineer',
        company: 'John Deere',
        period: 'June 2022 – August 2024',
        location: 'Moline, IL',
        highlights: [
            'Led UI/UX modernization, replacing AngularJS and Java monoliths with React micro-frontends.',
            'Designed a container UI that hosts and orchestrates the micro-frontends.',
            'Built Drone CI/CD pipelines and replaced legacy SOAP APIs with REST services.',
            'Ran international knowledge transfer, mentoring remote and onshore teams on React and micro-frontend architecture.',
            'Automated M&A operational processes with advanced SQL.',
        ],
    },
    {
        title: 'Software Engineer',
        company: 'John Deere',
        period: 'June 2020 – June 2022',
        location: 'Moline, IL',
        highlights: [
            'Improved the development lifecycle and shortened time-to-market for key features.',
            'Analyzed the application portfolio and decommissioned underused ColdFusion systems.',
            'Led the single sign-on migration from SiteMinder to Okta.',
            'Supported application migrations to AWS.',
        ],
    },
]

export const skillGroups = [
    { name: 'Frontend', skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Material UI', 'Tailwind CSS'] },
    { name: 'Backend and data', skills: ['Node.js', 'PostgreSQL', 'SQLite', 'Prisma', 'WebSockets', 'Contentful'] },
    { name: 'Infrastructure and testing', skills: ['AWS', 'Docker', 'Turborepo', 'GitHub Actions', 'Vitest', 'Playwright'] },
]

// <title> and meta description for every route. Also read at build time to write per-route HTML.
export const pageMeta: Record<string, { title: string; description: string }> = {
    '/': {
        title: 'Nishie Groe · Software Engineer',
        description:
            'Nishie Groe is a full-stack software engineer in Chicago with 8+ years of experience in Next.js, React and TypeScript, and Director of Technology at Veridian Esports.',
    },
    '/projects': {
        title: 'Projects · Nishie Groe',
        description: 'Projects by Nishie Groe: Veridian Esports, VOD Insights, USG.com and Lootpath Finder.',
    },
    '/projects/veridian': {
        title: 'Veridian Esports · Nishie Groe',
        description:
            'Veridian Esports: a production platform for competitive Apex Legends leagues, with live game data, a broadcast console and tournament tools.',
    },
    '/projects/vod-insights': {
        title: 'VOD Insights · Nishie Groe',
        description: 'VOD Insights: offline video review for esports coaches and creators, with killfeed detection and automatic clips.',
    },
    '/projects/usg': {
        title: 'USG.com · Nishie Groe',
        description: 'USG.com: the corporate website for USG Corporation, built on Next.js and Contentful.',
    },
    '/projects/lootpath-finder': {
        title: 'Lootpath Finder · Nishie Groe',
        description: 'Lootpath Finder: an interactive map editor for planning Apex Legends loot routes.',
    },
    '/experience': {
        title: 'Experience · Nishie Groe',
        description: 'Work history for Nishie Groe: Veridian Esports, USG and John Deere.',
    },
    '/resume': {
        title: 'Resume · Nishie Groe',
        description: 'Download the resume of Nishie Groe, software engineer.',
    },
    '/contact': {
        title: 'Contact · Nishie Groe',
        description: 'Get in touch with Nishie Groe by email, GitHub or LinkedIn.',
    },
}
