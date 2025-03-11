import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import ButtonLabel from "../ButtonLabel";

const JudoCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <Title label="JUDO / JUJITSU" />
        <p className="text-body">
          Venez pratiquer le Judo (柔道, &quot;la voie de la souplesse&quot;) et
          le Jujitsu (柔術, &quot;l&apos;art de la souplesse&quot;), deux
          disciplines ancestrales qui allient technique, contrôle et respect.{" "}
          <br />
          Que vous soyez débutant ou confirmé, nos cours sont ouverts à tous,
          dans une ambiance conviviale et dynamique. Rejoignez-nous sur le
          tatami et découvrez la richesse de ces arts martiaux !
        </p>
        <Link href={"/judo"}>
          <ButtonLabel label="Découvrir" />
        </Link>
      </div>
      <div className="w-full md:w-1/2 relative h-[300px]">
        <Image
          src="/images/judo.jpg"
          alt="Judo"
          className="object-cover aspect-square"
          fill
        />
      </div>
    </div>
  );
};

export default JudoCard;
