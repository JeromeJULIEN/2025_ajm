import ClubBlock from "@/components/displayElements/homepage/ClubBlock";
import SportBlock from "@/components/displayElements/homepage/SportBlock";
import VideoHomepage from "@/components/displayElements/homepage/VideoHomepage";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-start">
      <VideoHomepage />
      <ClubBlock />
      <SportBlock />
    </div>
  );
}
