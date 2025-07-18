import ButtonLabel from "@/components/displayElements/ButtonLabel";
import ButtonLabelBig from "@/components/displayElements/ButtonLabelBig";
import Title from "@/components/displayElements/Title";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative w-full mt-20">
      <img
        src="/images/judoPage.jpg"
        alt="Judo banner"
        className="w-full h-[300px] md:h-[500px] object-cover"
      />
      <div className="absolute top-8 left-10 flex flex-col gap-4 items-start justify-start">
        <h1 className="text-4xl font-bold text-white">JUDO / JUJITSU</h1>
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <ButtonLabel label="M'inscrire" />
        </a>
      </div>
      <div className="p-10 flex flex-col gap-4 items-start justify-start w-full">
        {/* description */}
        <Title label="Description" />
        <div className="flex flex-col md:flex-row gap-4 items-start justify-start mb-10 w-full">
          <div className="relative w-full md:w-1/5 aspect-square">
            <Image
              src="/logoAJM.png"
              alt="logo AJM"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start mb-10 w-full md:w-4/5">
            <p className="text-body ">
              Au sein de notre club, le Judo et le Jujitsu se pratiquent dans un
              esprit de convivialité et de partage, où chacun progresse à son
              rythme. Ici, pas d’obligation de compétition : l’essentiel est de
              découvrir, d’apprendre et de se dépasser, tout en respectant les
              valeurs fondamentales de ces disciplines.
            </p>
            <p className="text-body">
              Pour les compétiteurs, pas d&apos;inquiétude ! Vous trouverez
              également de bons partenaires pour vous pousser à vous dépasser.
            </p>
            <p className="text-body">
              Nos cours sont ouverts à tous, des plus jeunes aux adultes, avec
              des groupes adaptés à chaque niveau. Les séances sont encadrées
              par des professeurs passionnés, soucieux de transmettre technique,
              confiance en soi et entraide. Que vous soyez débutant ou confirmé,
              vous trouverez votre place sur le tatami.
            </p>
            <p className="text-body ">
              Au-delà des entraînements, notre club est un lieu d’échange et de
              rencontres, où règne un véritable esprit de famille. Événements et
              moments de convivialité rythment l’année, renforçant le lien entre
              les pratiquants.
            </p>
            <p className="text-body">
              Venez essayer, progresser et partager un art martial riche de
              sens, dans une ambiance chaleureuse et bienveillante !
            </p>
            <p className="text-body">
              Ces activités sont réalisés dans le cadre de l&apos;AJM
              (Association Judo Marseille) créée par Bernard TCHOULLOUYAN
              (champion du monde 1981) et Jean-Louis GRECH (6ème Dan, toujours
              professeur au sein du club).
            </p>
          </div>
        </div>
        {/* horaires */}
        <Title label="Horaires" />
        <p>JUDO</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Baby :</strong> Mercredi 9h30 - 10h15
          </li>
          <li>
            <strong>Pré judo 1:</strong> Mercredi 10h30 - 11h30
          </li>
          <li>
            <strong>Pré judo 2:</strong> Mercredi 14h00 - 15h00
          </li>
          <li>
            <strong>Pré judo 3:</strong> Mercredi 15h30 - 16h30
          </li>
          <li>
            <strong>Pré poussins :</strong> Lundi et mercredi 17h30 - 18h30
          </li>
          <li>
            <strong>Poussins :</strong> Mardi et jeudi 17h30 - 18h30
          </li>
          <li>
            <strong>Benjamins et Minimes :</strong> Lundi et mercredi 18h30 -
            19h30
          </li>
          <li>
            <strong>Cadets / Juniors / Adultes :</strong> Mardi et jeudi 19h -
            20h30
          </li>
          <li>
            <strong>
              Cours compétition et technique (à partir de minime):
            </strong>{" "}
            Vendredi 18h30 - 20h
          </li>
        </ul>
        <p>JUJITSU</p>
        <ul className="list-disc list-inside mb-10">
          <li>Lundi 19h30 - 21h / Jeudi 19h - 21h</li>
        </ul>
        {/* tarifs */}
        <Title label="Tarifs" />
        <ul className="list-disc list-inside mb-10">
          <li>
            <strong>Baby judo et pré judo :</strong> 327 € l&apos;année
          </li>
          <li>
            <strong>Pré poussins à Adultes :</strong> 467 € l&apos;année
          </li>
          <li>
            <strong>Tarif famille Baby judo et pré judo :</strong> 287 €
            l&apos;année
          </li>
          <li>
            <strong>Tarif famille Pré poussins à Adultes :</strong> 427 €
            l&apos;année
          </li>
          <li>
            <strong>Etudiant :</strong> 327 € l&apos;année
          </li>
        </ul>
        {/* contact */}
        <Title label="Contact" />
        <p>
          Pour toute question, veuillez nous contacter par mail :{" "}
          <a href="mailto:leolagrangeendoume@free.fr" className="underline">
            leolagrangeendoume@free.fr
          </a>
        </p>
        <p>
          Ou par téléphone :{" "}
          <a href="tel:+33620021732" className="underline">
            +33 6 20 02 17 32
          </a>
        </p>
        {/* inscription */}
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com"
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
