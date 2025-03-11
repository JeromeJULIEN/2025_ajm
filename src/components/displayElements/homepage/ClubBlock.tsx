import Image from "next/image";

const ClubBlock = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-black ">
      <div className="flex flex-col items-start justify-start gap-4 text-white p-10">
        <h1 className="text-4xl font-bold">
          VOTRE CLUB LÉO LAGRANGE À ENDOUME
        </h1>
        <p className="text-body">
          Venez découvrir au coeur du quartier d&apos;endoume, un club familial
          ! <br />
          Actuellement dirigé par des passionnés de sport, et de loisir, qui
          sont avant tout des amis, voire une famille, le club Léo Lagrange
          d&apos;endoume est le lieu idéal pour vos loisirs. <br /> Vous vous y
          sentirez bien et vos enfants seront entre de bonnes mains.
        </p>
        <h2 className="text-2xl font-bold mt-10">Nos réseaux sociaux</h2>
        <div className="flex flex-row gap-4 justify-start items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61569351842091"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook.png"
              alt="facebook"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://www.instagram.com/ajm_leo.lagrange.endoume/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram.png"
              alt="facebook"
              width={60}
              height={60}
            />
          </a>
        </div>
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
