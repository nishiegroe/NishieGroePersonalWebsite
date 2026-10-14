import { useRef, useState } from 'react'
import type { Screenshot } from '../data/content'

type Props = {
    screenshots: Screenshot[]
    projectTitle: string
}

// Every screenshot is visible at once as a captioned figure. "View full size" opens a native
// <dialog>, which traps focus and closes on Esc; focus then returns to the button that opened it.
const ScreenshotGallery = ({ screenshots, projectTitle }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const openerRef = useRef<HTMLButtonElement | null>(null)
    const [active, setActive] = useState<Screenshot | null>(null)

    const open = (shot: Screenshot, opener: HTMLButtonElement) => {
        openerRef.current = opener
        setActive(shot)
        dialogRef.current?.showModal()
    }

    const handleClose = () => {
        openerRef.current?.focus()
        setActive(null)
    }

    return (
        <>
            <ul className="shots">
                {screenshots.map((shot) => (
                    <li key={shot.src}>
                        <figure>
                            <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                            <figcaption>{shot.caption}</figcaption>
                            <button
                                type="button"
                                className="linklike"
                                onClick={(e) => open(shot, e.currentTarget)}
                            >
                                View full size<span className="visually-hidden">: {shot.caption}</span>
                            </button>
                        </figure>
                    </li>
                ))}
            </ul>

            <dialog
                ref={dialogRef}
                className="viewer"
                aria-labelledby="viewer-title"
                onClose={handleClose}
                onClick={(e) => {
                    // A click on the backdrop lands on the dialog element itself.
                    if (e.target === e.currentTarget) dialogRef.current?.close()
                }}
            >
                <div className="viewer-bar">
                    <h2 id="viewer-title">
                        {projectTitle}: {active?.caption}
                    </h2>
                    <button type="button" className="btn secondary" onClick={() => dialogRef.current?.close()}>
                        Close
                    </button>
                </div>
                {active && <img src={active.src} alt={active.alt} />}
            </dialog>
        </>
    )
}

export default ScreenshotGallery
