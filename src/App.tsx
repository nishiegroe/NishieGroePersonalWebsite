import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectPage />} />
            <Route path="experience" element={<Experience />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
)

export default App
