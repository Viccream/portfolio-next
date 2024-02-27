import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";




export default function Home() {
  return (
    <main className="h-full relative">
      <NavBar />
      <Cover />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
