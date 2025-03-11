import ButtonLabel from "@/components/displayElements/ButtonLabel";
import ButtonLabelBig from "@/components/displayElements/ButtonLabelBig";
import Title from "@/components/displayElements/Title";

const page = () => {
  return (
    <div className="relative w-full mt-20">
      <img
        src="/images/qigong.jpg"
        alt="Qigong banner"
        className="w-full h-[300px] md:h-[500px] object-cover"
      />
      <div className="absolute top-8 left-10 flex flex-col gap-4 items-start justify-start">
        <h1 className="text-4xl font-bold text-white">QI GONG</h1>
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/448699-q-qi-gong?header=%2Fpage%2F2888954-qi-gong"
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
            La pratique du Qi Gong permet de travailler sur un état de
            conscience modifiée permettant d’accueillir de manière plus adaptée
            :
            <br />
            - l’anxiété, l’hyperactivité mentale, le stress...
            <br />- les douleurs fonctionnelles: rhumatismes, arthrose...
          </p>
          <p className="text-body">
            «Qi» signifie «Souffle» On trouve aussi «Énergie». « Gong» veut dire
            «travail». Cette discipline ancestrale chinoise fait partie de la
            Médecine Traditionnelle Chinoise - MCT-. C’est la réalisation, en
            silence, de mouvements lents synchronisant la respiration et
            l’Intention (=Être présent au moment présent).
          </p>
          <p className="text-body">
            SUIVI possible en présentiel & Distanciel: * Cours de QI GONG : Tous
            Niveaux * Stages à thèmes de QI GONG : les Week-ends * Activité
            Physique Adaptée * Accompagnement vers le bien-être * Atelier
            Relaxation issu de techniques du Qi Gong et de Méditation
          </p>

          <p className="text-body">Bonne relaxation !</p>
        </div>
        {/* horaires */}
        <Title label="Horaires" />

        <ul className="list-disc list-inside mb-10">
          <li>Lundi 9h - 10h30 (1h30)</li>
          <li>Mardi 9h - 10h (1h)</li>
          <li>Jeudi 9h - 10h30 (1h30)</li>
        </ul>

        {/* tarifs */}
        <Title label="Tarifs" />
        <ul className="list-disc list-inside mb-10">
          <li>
            <strong>Cours à la demande 1h :</strong> 15 €
          </li>
          <li>
            <strong>Cours à la demande 1h30 :</strong> 20 €
          </li>
          <li>
            <strong>Formule 2 cours par semaine :</strong> 35 €
          </li>
          <li>
            <strong>Formule 3 cours par semaine :</strong> 40 €
          </li>
        </ul>
        {/* contact */}
        <Title label="Contact" />
        <p>
          Pour toute question, veuillez nous contacter par mail :{" "}
          <a href="mailto:benedicte.schied@gmail.com" className="underline">
            benedicteschied@gmail.com
          </a>
        </p>
        <p>
          Ou par téléphone :{" "}
          <a href="tel:+33674680125" className="underline">
            +33 6 74 68 01 25
          </a>
        </p>
        {/* inscription */}
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/collect/description/448699-q-qi-gong?header=%2Fpage%2F2888954-qi-gong"
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
