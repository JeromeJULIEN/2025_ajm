import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import ButtonLabel from "../ButtonLabel";

const PoterieCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full pt-10">
      <div className="w-full md:w-1/2 relative h-[300px] hidden md:block">
        <Image
          src="/images/poterie.jpg"
          alt="Poterie"
          className="object-cover aspect-square"
          fill
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <Title label="POTERIE" />
        <p className="text-body">
          Laissez libre cours à votre imagination et façonnez la terre à votre
          rythme. Que vous soyez débutant ou passionné, nos ateliers vous
          offrent un moment de création et de plaisir dans une ambiance
          conviviale.
          <br />
          Venez modeler, sculpter et donner vie à vos idées !
        </p>
        <Link href={"/poterie"}>
          <ButtonLabel label="Découvrir" />
        </Link>
      </div>
      <div className="w-full md:w-1/2 relative h-[300px] md:hidden block">
        <Image
          src="/images/poterie.jpg"
          alt="Poterie"
          className="object-cover aspect-square"
          fill
        />
      </div>
    </div>
  );
};

export default PoterieCard;
