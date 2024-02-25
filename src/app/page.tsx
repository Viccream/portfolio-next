import Cover from "@/components/Cover";
import NavBar from "@/components/Navbar";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="h-full relative">
      <NavBar />
      <Cover />
      <Skills />
    </main>
  );
}
