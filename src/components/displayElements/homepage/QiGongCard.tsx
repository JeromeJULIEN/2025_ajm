import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import ButtonLabel from "../ButtonLabel";

const QiGongCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full mt-10">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <Title label="QI GONG" />
        <p className="text-body">
          Découvrez une pratique douce alliant mouvements, respiration et
          concentration pour harmoniser corps et esprit. Accessible à tous, le
          Qi Gong aide à renforcer la vitalité et à apaiser le mental.
          <br /> Venez retrouver équilibre et bien-être en toute simplicité !
        </p>
        <Link href={"/qigong"}>
          <ButtonLabel label="Découvrir" />
        </Link>
      </div>
      <div className="w-full md:w-1/2 relative h-[300px]">
        <Image
          src="/images/qigong.jpg"
          alt="Qi Gong"
          className="object-cover aspect-square"
          fill
        />
      </div>
    </div>
  );
};

export default QiGongCard;
