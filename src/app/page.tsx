import Landing from "./sections/landing/landing"
import StackIcons from "./sections/landing/_components/stack-icons"
import AboutMe from "./sections/about-me/about-me"
import Projects from "./sections/projects/projects"
import SkillsGrid from "./sections/skills/skills-grid"
import { Achievements } from "./sections/achivements/achievemnts"
import Contact from "./sections/contact/contact"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">



      <Landing />

      <StackIcons />

      <AboutMe />

      <Projects />

      <Achievements />

      <SkillsGrid />

      {/* Contact Section */}
      <Contact />


     

    </div>
  )
}

