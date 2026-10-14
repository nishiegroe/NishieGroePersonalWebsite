import { useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router'
import { pageMeta, profile } from '../data/content'
import avatar from '../assets/profile-pic-128.webp'

const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/projects', label: 'Projects', end: false },
    { to: '/experience', label: 'Experience', end: false },
    { to: '/resume', label: 'Resume', end: false },
    { to: '/contact', label: 'Contact', end: false },
]

// The old site was one page with #section anchors; send those links to the matching page.
const legacyAnchors: Record<string, string> = {
    '#introduction': '/',
    '#skills': '/',
    '#projects': '/projects',
    '#experience': '/experience',
    '#contact': '/contact',
}

const NavList = () => (
    <ul className="nav-list">
        {navItems.map((item) => (
            <li key={item.to}>
                <NavLink to={item.to} end={item.end}>
                    {item.label}
                </NavLink>
            </li>
        ))}
    </ul>
)

const Layout = () => {
    const { pathname, hash } = useLocation()
    const navigate = useNavigate()
    const firstRender = useRef(true)

    useEffect(() => {
        if (pathname === '/' && legacyAnchors[hash] && legacyAnchors[hash] !== '/') {
            navigate(legacyAnchors[hash], { replace: true })
        }
    }, [pathname, hash, navigate])

    // A new page behaves like a fresh page load: title updates, view starts at the top,
    // and focus moves to the page's heading so screen readers announce it.
    useEffect(() => {
        document.title = pageMeta[pathname]?.title ?? 'Page not found · Nishie Groe'
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        window.scrollTo(0, 0)
        document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true })
    }, [pathname])

    return (
        <>
            <a className="skip-link" href="#content">
                Skip to content
            </a>
            <header className="site-header">
                <div className="wrap">
                    <Link className="brand" to="/">
                        <img src={avatar} alt="" width="36" height="36" />
                        {profile.name}
                    </Link>
                    <nav aria-label="Main">
                        <NavList />
                    </nav>
                </div>
            </header>
            <main id="content" className="wrap" tabIndex={-1}>
                <Outlet />
            </main>
            <footer className="site-footer">
                <div className="wrap">
                    <nav aria-label="Footer">
                        <NavList />
                    </nav>
                    <p className="muted">
                        <a href={profile.github}>GitHub</a> · <a href={profile.linkedin}>LinkedIn</a> · © {new Date().getFullYear()} {profile.name}
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Layout
