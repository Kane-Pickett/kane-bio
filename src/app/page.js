import ProfileSection from "./components/ProfileSection";
import SocialLinks from "./components/SocialLinks";
import ContentButtons from "./components/ContentButtons";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <ProfileSection />
        <SocialLinks />
        <ContentButtons />
      </div>
      <Footer />
    </main>
  );
}
