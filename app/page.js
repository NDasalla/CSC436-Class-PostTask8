import LinksLinks from "../components/LinksLinks";
import SocialLinks from "../components/SocialLinks";
import TopContent from "../components/TopContent";

export default async function Home() {
  return (
    <main>
      <TopContent />
      <SocialLinks />
      <LinksLinks />
    </main>
  );
}
