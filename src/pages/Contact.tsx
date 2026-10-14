import { useState } from 'react'
import { profile } from '../data/content'

const Contact = () => {
    const [status, setStatus] = useState('')

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email)
            setStatus('Email address copied')
        } catch {
            setStatus('Copy failed. Select the address and copy it manually.')
        }
    }

    return (
        <>
            <h1 tabIndex={-1}>Contact</h1>
            <p className="lead">Email is the quickest way to reach me.</p>
            <ul className="contact-list">
                <li>
                    <span className="label">Email</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    <button type="button" className="btn secondary" onClick={copyEmail}>
                        Copy email
                    </button>
                    <span role="status" className="muted">
                        {status}
                    </span>
                </li>
                <li>
                    <span className="label">GitHub</span>
                    <a href={profile.github}>github.com/nishiegroe</a>
                </li>
                <li>
                    <span className="label">LinkedIn</span>
                    <a href={profile.linkedin}>linkedin.com/in/nishie-groe</a>
                </li>
            </ul>
        </>
    )
}

export default Contact
