import GymCard from "./GymCard";
import JudoCard from "./JudoCard";
import PoterieCard from "./PoterieCard";
import QiGongCard from "./QiGongCard";
import YogaCard from "./YogaCard";

const SportBlock = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-8 p-10">
      <h2 className="text-4xl font-bold">NOS ACTIVITÉS</h2>
      <p className="text-body pb-10">
        Pour la saison à venir (2024/2025) vous pourrez venir pratiquer du judo,
        de la poterie, du yoga, de la gymnastique, et même du Qi Jong ! Vous
        trouverez les informations nécessaires sur ce site.
        <br /> Des animations, loto, fête du club, évènements sportifs pour les
        compétiteurs (judo) ont lieu toute l&apos;année et permettent de faire
        vivre notre association, vous pouvez voir les différents évènements dans
        les onglets prévus à cet effet.
        <br />
        Le conseil d&apos;administration, les professeurs et les bénévoles font
        tout pour que cet endroit soit le plus accueillant et vivant possible,
        vous pouvez si vous le souhaitez, nous apporter votre aide, bénévole ou
        financière en faisant un don ici et contribuer à faire vivre notre beau
        quartier d&apos;Endoume.
      </p>
      <JudoCard />
      <YogaCard />
      <QiGongCard />
      <PoterieCard />
      <GymCard />
    </div>
  );
};

export default SportBlock;
