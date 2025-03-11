import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import ButtonLabel from "../ButtonLabel";

const YogaCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full pt-10">
      <div className="w-full md:w-1/2 relative h-[300px] hidden md:block">
        <Image
          src="/images/yogaPage.jpg"
          alt="Yoga"
          className="object-cover aspect-square"
          fill
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <Title label="YOGA KUNDALINI" />
        <p className="text-body">
          Venez profiter d’un moment de détente et de bien-être à travers des
          séances alliant respiration, postures et relaxation. Que vous soyez
          débutant ou confirmé, le yoga vous aide à retrouver équilibre et
          énergie dans une ambiance apaisante.
          <br />
          Rejoignez-nous sur le tapis pour un instant rien qu&apos;à vous !
        </p>
        <Link href={"/yoga"}>
          <ButtonLabel label="Découvrir" />
        </Link>
      </div>
      <div className="w-full md:w-1/2 relative h-[300px] md:hidden block">
        <Image
          src="/images/yoga.webp"
          alt="Yoga"
          className="object-cover aspect-square"
          fill
        />
      </div>
    </div>
  );
};

export default YogaCard;
