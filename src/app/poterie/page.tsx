import ButtonLabel from "@/components/displayElements/ButtonLabel";
import ButtonLabelBig from "@/components/displayElements/ButtonLabelBig";
import Title from "@/components/displayElements/Title";

const page = () => {
  return (
    <div className="relative w-full mt-20">
      <img
        src="/images/poterie.jpg"
        alt="poterie banner"
        className="w-full h-[300px] md:h-[500px] object-cover"
      />
      <div className="absolute top-8 left-10 flex flex-col gap-4 items-start justify-start">
        <h1 className="text-4xl font-bold text-white">POTERIE</h1>
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/499161-e-poterie-1er-mars?header=%2Fpage%2F2401882-poterie"
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
            Laissez libre cours à votre imagination et façonnez la terre à votre
            rythme. Que vous soyez débutant ou passionné, nos ateliers vous
            offrent un moment de création et de plaisir dans une ambiance
            conviviale.
          </p>
          <p className="text-body">
            Venez modeler, sculpter et donner vie à vos idées !
          </p>
        </div>
        {/* horaires */}
        <Title label="Horaires" />

        {/* tarifs */}
        <Title label="Tarifs" />
        <ul className="list-disc list-inside mb-10">
          <li>
            <strong>Baby (4/5 ans):</strong> 165 € l&apos;année
          </li>
          <li>
            <strong>Ados (6/16 ans) :</strong> 205 € l&apos;année
          </li>
          <li>
            <strong>Adultes (+16 ans):</strong> 245 € l&apos;année
          </li>
          <li>
            <strong>Tarif famille Baby (4/5 ans):</strong> 145 € l&apos;année
          </li>
          <li>
            <strong>Tarif famille Ados (6/16 ans) :</strong> 185 € l&apos;année
          </li>
          <li>
            <strong>Tarif famille Adultes (+16 ans):</strong> 225 € l&apos;année
          </li>
        </ul>
        {/* contact */}
        <Title label="Contact" />
        <p>
          Pour toute question, veuillez nous contacter par mail :{" "}
          <a href="mailto:mayoussf@dmul.fr" className="underline">
            mayoussf@dmul.fr
          </a>
        </p>
        <p>
          Ou par téléphone :{" "}
          <a href="tel:+33671732900" className="underline">
            +33 6 71 73 29 00
          </a>
        </p>
        {/* inscription */}
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/499161-e-poterie-1er-mars?header=%2Fpage%2F2401882-poterie"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-full flex justify-center mt-10"
        >
          <ButtonLabelBig label="M'inscrire" />
        </a>
      </div>
    </div>
  );
};

export default page;
