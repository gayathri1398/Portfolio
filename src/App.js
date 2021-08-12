
import NavbarComponent from "./components/Navbar/Navbar.component";
import HomeComponent from "./components/Home/Home.component";
import AboutComponent from "./components/About/About.component";
import ContactComponent from "./components/Contact/Contact.component";
import ProjectComponent from "./components/Projects/Project.component";
import SkillsComponent from "./components/Skills/Skills.component";




function App() {
  return (
    <main>
    <NavbarComponent/>
    <HomeComponent/>
    <AboutComponent/>
    <ProjectComponent/>
    <SkillsComponent/>
    <ContactComponent/>
    </main>
  );
}

export default App;
