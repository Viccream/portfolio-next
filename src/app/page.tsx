import IntroductionSection from "@/components/IntroductionSection";
import NavBarSection from "@/components/NavbarSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBarSection />
      <IntroductionSection />
    </main>
  );
}
