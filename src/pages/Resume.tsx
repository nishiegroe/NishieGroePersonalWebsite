import { Link } from 'react-router'
import { skillGroups } from '../data/content'
import resumeUrl from '../assets/Resume Oct 2026.pdf'

const Resume = () => (
    <>
        <h1 tabIndex={-1}>Resume</h1>
        <p className="lead">My full resume is a two-page PDF.</p>
        <div className="btn-row">
            <a className="btn" href={resumeUrl} download="Nishie Groe Resume.pdf">
                Download PDF
            </a>
            <a className="btn secondary" href={resumeUrl}>
                Open in browser
            </a>
        </div>

        <h2>Summary</h2>
        <p>
            Software Engineer with 8+ years of experience in modern frontend architecture and full-stack development.
            Expert in Next.js, React and TypeScript, with a track record of designing scalable multi-tenant applications,
            leading architectural initiatives, building development teams and running complex migrations with zero
            downtime. As Director of Technology at Veridian Esports, I designed and built a production tournament
            platform with real-time ingestion of live game data.
        </p>
        <p>
            The full work history is on the <Link to="/experience">Experience</Link> page.
        </p>

        <h2>Education</h2>
        <p>
            <strong>Western Illinois University</strong>, B.S. in Information Systems and Management, 2018
        </p>

        <h2>Skills</h2>
        <ul>
            {skillGroups.map((group) => (
                <li key={group.name}>
                    <strong>{group.name}:</strong> {group.skills.join(', ')}
                </li>
            ))}
        </ul>
    </>
)

export default Resume
