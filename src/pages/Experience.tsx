import { jobs } from '../data/content'

const Experience = () => (
    <>
        <h1 tabIndex={-1}>Experience</h1>
        {jobs.map((job) => (
            <article className="job" key={`${job.company}-${job.period}`}>
                <h2>
                    {job.title}, {job.company}
                </h2>
                <p className="meta">
                    {job.period} · {job.location}
                </p>
                <ul>
                    {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                    ))}
                </ul>
            </article>
        ))}
    </>
)

export default Experience
