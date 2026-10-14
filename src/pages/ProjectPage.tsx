import { Link, useParams } from 'react-router'
import { projects } from '../data/content'
import ScreenshotGallery from '../components/ScreenshotGallery'
import NotFound from './NotFound'

const ProjectPage = () => {
    const { slug } = useParams()
    const project = projects.find((p) => p.slug === slug)
    if (!project) return <NotFound />

    return (
        <>
            <nav aria-label="Breadcrumb" className="breadcrumb">
                <ol>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li aria-current="page">{project.title}</li>
                </ol>
            </nav>
            <h1 tabIndex={-1}>{project.title}</h1>
            <p className="lead">{project.summary}</p>

            <dl className="facts">
                {project.role && (
                    <>
                        <dt>Role</dt>
                        <dd>{project.role}</dd>
                    </>
                )}
                {project.since && (
                    <>
                        <dt>Since</dt>
                        <dd>{project.since}</dd>
                    </>
                )}
                <dt>Stack</dt>
                <dd>{project.stack.join(', ')}</dd>
                {project.website && (
                    <>
                        <dt>Website</dt>
                        <dd>
                            <a href={project.website}>{project.website.replace(/^https:\/\//, '')}</a>
                        </dd>
                    </>
                )}
            </dl>

            <h2>What it does</h2>
            <ul>
                {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                ))}
            </ul>

            <h2>Screenshots</h2>
            <ScreenshotGallery screenshots={project.screenshots} projectTitle={project.title} />

            <p className="btn-row">
                <Link className="btn secondary" to="/projects">
                    All projects
                </Link>
            </p>
        </>
    )
}

export default ProjectPage
