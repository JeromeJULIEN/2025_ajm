import Image from "next/image";
import Link from "next/link";
import Title from "../Title";

const JudoCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <Title label="JUDO / JUJITSU" />
        <p className="text-body">
          Curabitur tellus magna, porttitor a, commodo a, commodo in, tortor.
          Donec interdum. Praesent scelerisque. Maecenas posuere sodales odio.
          Vivamus metus lacus, varius quis, imperdiet quis, rhoncus a, turpis.
        </p>
        <Link
          className="bg-red-600 px-4 py-2 text-xl text-white font-bold"
          href={"/judo"}
        >
          Découvrir
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
