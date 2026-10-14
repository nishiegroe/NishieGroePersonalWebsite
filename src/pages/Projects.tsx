import { Link } from 'react-router'
import { projects } from '../data/content'

const Projects = () => (
    <>
        <h1 tabIndex={-1}>Projects</h1>
        <p className="lead">Four projects, newest first. Each one has its own page with screenshots.</p>
        <ul className="project-list">
            {projects.map((project) => (
                <li key={project.slug}>
                    <h2>
                        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                    </h2>
                    <p>{project.summary}</p>
                    <p className="stack">{project.stack.join(' · ')}</p>
                </li>
            ))}
        </ul>
    </>
)

export default Projects
