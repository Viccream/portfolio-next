import CoverSection from "@/components/CoverSection";
import NavBarSection from "@/components/NavbarSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="h-full">
      <NavBarSection />
      <CoverSection />
      <SkillsSection />
    </main>
  );
}
