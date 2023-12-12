import { Header } from './components/Header'
import { SectionAbout } from './components/SectionAbout'
import { SectionContato } from './components/SectionContact'
import { SectionHome } from './components/SectionHome'
import { SectionProjects } from './components/SectionProjects'
import { SectionTech } from './components/SectionTech'
import './styles/reset.css'

export const App =()=> {

  return (
    <>
      <Header/>
      <SectionHome/>
      <SectionAbout/>
      <SectionTech/>
      <SectionProjects/>
      <SectionContato/>
    </>
  )
}
