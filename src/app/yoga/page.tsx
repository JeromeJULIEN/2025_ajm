import ButtonLabel from "@/components/displayElements/ButtonLabel";
import Title from "@/components/displayElements/Title";

const page = () => {
  return (
    <div className="relative w-full mt-20">
      <img
        src="/images/yogaPage.jpg"
        alt="Yoga banner"
        className="w-full h-[300px] md:h-[500px] object-cover"
      />
      <div className="absolute top-8 left-10 flex flex-col gap-4 items-start justify-start">
        <h1 className="text-4xl font-bold text-white">YOGA KUNDALINI</h1>
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/448690-q-yoga-kundalini?header=%2Fpage%2F2889342-yoga"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <ButtonLabel label="M'inscrire" />
        </a>
      </div>
      <div className="p-10 flex flex-col gap-4 items-start justify-start">
        {/* description */}
        <Title label="Description" />
        <div className="flex flex-col gap-4 items-start justify-start mb-10">
          <p className="text-body ">
            LE yoga KUNDALINI est une technologie holistique puissante qui
            travaille sur les différents plans de l’être à partir de séries
            (appelées » kriyas ») utilisant le souffle, le rythme, des postures
            dynamiques ou statiques, le son (sous forme de mantras), la
            relaxation et la méditation.
          </p>
        </div>
        {/* horaires */}
        <Title label="Horaires" />
        <ul className="list-disc list-inside mb-10">
          <li>
            Prabhu Ram Singh donne son cours les mercredis de 19h45 à 21h.
          </li>
        </ul>
        {/* tarifs */}
        <Title label="Tarifs" />
        <ul className="list-disc list-inside mb-10">
          <li>
            <strong>Cours à l&apos;unité :</strong> 18 €
          </li>
          <li>
            <strong>Carte 10 cours :</strong> 150 €
          </li>
          <li>
            <strong>Cours au trimestre :</strong> 160 €
          </li>
          <li>
            <strong>Cours à l&apos;année :</strong> 400 €
          </li>
        </ul>
        {/* contact */}
        <Title label="Contact" />
        <p>
          Pour toute question, veuillez nous contacter par mail :{" "}
          <a href="mailto:prabhu.ram.singh@gmx.com" className="underline">
            prabhu.ram.singh@gmx.com
          </a>
        </p>
        <p>
          Ou par téléphone :{" "}
          <a href="tel:+33761030180" className="underline">
            +33 7 61 03 01 80
          </a>
        </p>
        {/* inscription */}
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/448690-q-yoga-kundalini?header=%2Fpage%2F2889342-yoga"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-full flex justify-center mt-10"
        >
          <ButtonLabel label="M'inscrire" />
        </a>
      </div>
    </div>
  );
};

export default page;
