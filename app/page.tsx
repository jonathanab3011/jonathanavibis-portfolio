import Navbar from "@/app/component/navbar";
import Home from "@/app/component/home";
import AboutSection from "@/app/component/about/about";
import ProjectsSection from "@/app/component/projects/projects";
import ContactSection from "@/app/component/Contract/contract";
import Footer from "@/app/component/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}