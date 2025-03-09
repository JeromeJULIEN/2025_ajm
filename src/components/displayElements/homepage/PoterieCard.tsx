import Image from "next/image";
import Link from "next/link";

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
        <h3 className="text-2xl font-bold relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[70px] after:h-[10px] after:bg-red-600 after:transform after:rotate-[-3deg]">
          POTERIE
        </h3>
        <p className="text-body">
          Curabitur tellus magna, porttitor a, commodo a, commodo in, tortor.
          Donec interdum. Praesent scelerisque. Maecenas posuere sodales odio.
          Vivamus metus lacus, varius quis, imperdiet quis, rhoncus a, turpis.
        </p>
        <Link
          className="bg-red-600 px-4 py-2 text-xl text-white font-bold"
          href={"/poterie"}
        >
          Découvrir
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
