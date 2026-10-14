import { Link } from 'react-router'
import { jobs, projects, skillGroups } from '../data/content'
import portrait640 from '../assets/IMG_2521-640.webp'
import portrait960 from '../assets/IMG_2521-960.webp'

const veridian = projects.find((p) => p.slug === 'veridian')!

const Home = () => (
    <>
        <div className="intro">
            <div>
                <p className="eyebrow">Software Engineer · Chicago, IL</p>
                <h1 tabIndex={-1}>Hi, I'm Nishie.</h1>
                <p className="lead">
                    I'm a full-stack engineer with 8+ years of experience building web apps that teams can grow with.
                    I like clear architecture, good documentation and interfaces that work for everyone.
                </p>
                <p>
                    By day I'm a Software Developer at USG, where I lead the rebuild of the company's estimator tools
                    and website on Next.js. Outside work I'm Director of Technology at Veridian Esports, where I
                    designed and built the platform that runs its competitive Apex Legends leagues.
                </p>
                <div className="btn-row">
                    <Link className="btn" to="/projects">
                        See my projects
                    </Link>
                    <Link className="btn secondary" to="/resume">
                        Get my resume
                    </Link>
                </div>
            </div>
            <img
                className="portrait"
                src={portrait640}
                srcSet={`${portrait640} 640w, ${portrait960} 960w`}
                sizes="(max-width: 760px) 15rem, 17rem"
                alt="Portrait of Nishie Groe."
                width="640"
                height="854"
            />
        </div>

        <h2>At a glance</h2>
        <dl className="glance">
            <div>
                <dt>Experience</dt>
                <dd>8+ years in software</dd>
            </div>
            <div>
                <dt>Now</dt>
                <dd>Software Developer at USG · Director of Technology at Veridian Esports</dd>
            </div>
            <div>
                <dt>Strongest in</dt>
                <dd>Next.js, React and TypeScript</dd>
            </div>
            <div>
                <dt>Education</dt>
                <dd>B.S. Information Systems and Management, Western Illinois University, 2018</dd>
            </div>
        </dl>

        <h2>What I do</h2>
        <div className="columns">
            <div>
                <h3>Frontend architecture</h3>
                <p>
                    Monorepos, micro-frontends and shared design systems. At USG I set up a Turborepo with 6 shared
                    packages that reuses 90%+ of its code across two brands.
                </p>
            </div>
            <div>
                <h3>Full-stack products</h3>
                <p>
                    From database to deploy. Veridian runs on Next.js, Prisma and a real-time WebSocket server I wrote,
                    with zero-downtime deploys on AWS.
                </p>
            </div>
            <div>
                <h3>Teams and delivery</h3>
                <p>
                    I've built and onboarded a development team, interviewed engineers, and mentored remote and
                    onshore teams on React and micro-frontends.
                </p>
            </div>
        </div>

        <h2>Featured project</h2>
        <div className="featured">
            <img src={veridian.screenshots[0].src} alt={veridian.screenshots[0].alt} width="2160" height="1350" />
            <div>
                <h3>{veridian.title}</h3>
                <p>
                    A production platform for competitive Apex Legends leagues: tournaments, rankings, and a live
                    broadcast console fed by data straight from the game.
                </p>
                <p>
                    <Link to="/projects/veridian">Read about Veridian</Link>
                </p>
            </div>
        </div>

        <h2>Career so far</h2>
        <ol className="career">
            {jobs.map((job) => (
                <li key={`${job.company}-${job.period}`}>
                    <span className="when">{job.period.replace(/^\w+ (\d{4}) – (?:\w+ )?(\d{4}|present)$/, '$1 – $2')}</span>
                    <span>
                        <strong>{job.title}</strong>, {job.company}
                    </span>
                </li>
            ))}
        </ol>
        <p>
            <Link to="/experience">Full experience</Link>
        </p>

        <h2>Skills</h2>
        <div className="columns">
            {skillGroups.map((group) => (
                <div key={group.name}>
                    <h3>{group.name}</h3>
                    <p>{group.skills.join(', ')}</p>
                </div>
            ))}
        </div>

        <h2>Outside of work</h2>
        <ul>
            <li>
                <strong>Gaming.</strong> Mostly Apex Legends and Minecraft.
            </li>
            <li>
                <strong>Homelab.</strong> I self-host Vaultwarden, Home Assistant and Portainer.
            </li>
            <li>
                <strong>TV and movies.</strong> Grey's Anatomy, Dexter, Harry Potter and Breaking Bad.
            </li>
        </ul>

        <div className="cta-band">
            <p>
                <strong>Want to work together?</strong> Email is the quickest way to reach me.
            </p>
            <Link className="btn" to="/contact">
                Contact me
            </Link>
        </div>
    </>
)

export default Home
