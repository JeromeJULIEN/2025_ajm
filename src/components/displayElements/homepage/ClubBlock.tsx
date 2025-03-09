import Image from "next/image";

const ClubBlock = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-black ">
      <div className="flex flex-col items-start justify-start gap-4 text-white p-10">
        <h1 className="text-4xl font-bold">
          VOTRE CLUB LÉO LAGRANGE À ENDOUME
        </h1>
        <p className="text-body">
          Curabitur tellus magna, porttitor a, commodo a, commodo in, tortor.
          Donec interdum. Praesent scelerisque. Maecenas posuere sodales odio.
          Vivamus metus lacus, varius quis, imperdiet quis, rhoncus a, turpis.
          Etiam ligula arcu, elementum a, venenatis quis, sollicitudin sed,
          metus. Donec nunc pede, tincidunt in, venenatis vitae, faucibus vel,
          nibh. Pellentesque wisi. Nullam malesuada. Morbi ut tellus ut pede
          tincidunt porta. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Etiam congue neque id dolor.
        </p>
      </div>
      <Image
        src="/images/club.png"
        alt="judo"
        width={500}
        height={500}
        className="m-10"
      />
    </div>
  );
};

export default ClubBlock;
