import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'


const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <NotFound/>
      <Plans/>
      <Trainers/>
    </div>
  )
}

export default App