import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import ButtonLabel from "../ButtonLabel";

const GymCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full mt-10">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <Title label="GYM" />
        <p className="text-body">
          Bougez, renforcez votre corps et gardez la forme avec des séances
          adaptées à tous les niveaux. Dans une ambiance conviviale, travaillez
          souplesse, tonicité et endurance en douceur.
          <br />
          Venez prendre soin de vous et faites le plein d&apos;énergie !
        </p>
        <Link href={"/gym"}>
          <ButtonLabel label="Découvrir" />
        </Link>
      </div>
      <div className="w-full md:w-1/2 relative h-[300px]">
        <Image
          src="/images/gym.jpg"
          alt="Judo"
          className="object-cover aspect-square"
          fill
        />
      </div>
    </div>
  );
};

export default GymCard;
