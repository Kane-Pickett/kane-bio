import ProfileSection from "./components/ProfileSection";
import SocialLinks from "./components/SocialLinks";
import ContentButtons from "./components/ContentButtons";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="flex flex-col gap-6 mb-18">
          <ProfileSection />
          <SocialLinks />
          <ContentButtons />
        </div>
      </div>
      <Footer />
    </main>
  );
}
