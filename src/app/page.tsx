import ClubBlock from "@/components/displayElements/homepage/ClubBlock";
import ImageGallery from "@/components/displayElements/homepage/ImageGallery";
import SportBlock from "@/components/displayElements/homepage/SportBlock";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-start">
      {/* <VideoHomepage /> */}
      <ImageGallery />
      <ClubBlock />
      <SportBlock />
    </div>
  );
}
