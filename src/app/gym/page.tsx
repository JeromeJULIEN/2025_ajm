import ButtonLabel from "@/components/displayElements/ButtonLabel";
import ButtonLabelBig from "@/components/displayElements/ButtonLabelBig";
import Title from "@/components/displayElements/Title";

const page = () => {
  return (
    <div className="relative w-full mt-20">
      <img
        src="/images/gym.jpg"
        alt="Yoga banner"
        className="w-full h-[300px] md:h-[500px] object-cover"
      />
      <div className="absolute top-8 left-10 flex flex-col gap-4 items-start justify-start">
        <h1 className="text-4xl font-bold text-white">GYM</h1>
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/448697-q-gym?header=%2Fpage%2F2889344-gym"
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
            Bougez, renforcez votre corps et gardez la forme avec des séances
            adaptées à tous les niveaux. Dans une ambiance conviviale,
            travaillez souplesse, tonicité et endurance en douceur.
          </p>
          <p className="text-body">
            Venez prendre soin de vous et faites le plein d&apos;énergie !
          </p>
        </div>
        {/* horaires */}
        <Title label="Horaires" />
        <ul className="list-disc list-inside mb-10">
          <li>Elisabeth donne ses cours les lundis et jeudis de 11h à 12h.</li>
        </ul>
        {/* tarifs */}
        <Title label="Tarifs" />
        <ul className="list-disc list-inside mb-10">
          <li>
            <strong>Cours à l&apos;unité :</strong> 6 € (à régler directement au
            professeur)
          </li>
        </ul>
        {/* contact */}
        <Title label="Contact" />
        <p>
          Pour toute question, veuillez nous contacter par mail :{" "}
          <a href="mailto:elisabethbenguigui@gmail.com" className="underline">
            elisabethbenguigui@gmail.com
          </a>
        </p>
        <p>
          Ou par téléphone :{" "}
          <a href="tel:+33689297801" className="underline">
            +33 6 89 29 78 01
          </a>
        </p>
        {/* inscription */}
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/448697-q-gym?header=%2Fpage%2F2889344-gym"
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
