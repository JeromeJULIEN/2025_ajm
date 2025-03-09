import ButtonLabel from "@/components/displayElements/ButtonLabel";
import Title from "@/components/displayElements/Title";

const page = () => {
  return (
    <div className="relative w-full mt-20">
      <img
        src="/images/judoPage.jpg"
        alt="Judo banner"
        className="w-full h-[300px] md:h-[400px] object-cover"
      />
      <div className="absolute top-8 left-10 flex flex-col gap-4 items-start justify-start">
        <h1 className="text-4xl font-bold text-white">JUDO / JUJITSU</h1>
        <a
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/page/2395750-presentation"
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
        <p className="text-body mb-10">
          Lorem ipsum dolor sit amet. Aut facere doloremque et enim ullam et
          nostrum sapiente hic quia quae ut fuga laboriosam! In libero quidem
          vel nemo consequuntur est temporibus consectetur vel maiores harum eos
          fugit voluptatem sit neque eveniet sit pariatur tempore. Aut omnis
          inventore id aliquid galisum aut placeat adipisci eum possimus
          recusandae nam suscipit nulla ea architecto delectus. Nam pariatur
          eius aut itaque voluptatem aut autem vero. Eum placeat exercitationem
          a nemo assumenda cum earum odio a accusantium dolores aut fugiat
          nostrum aut alias sint sit ipsum error. Ut possimus dolores aut
          asperiores commodi ut pariatur reprehenderit. Vel obcaecati repellat a
          quos necessitatibus id fugit vitae est odit voluptas nam doloremque
          nulla est tenetur dolore. Sed expedita dolor et modi esse aut dolorem
          labore et animi ratione. Ut dolore repellat quo expedita quae id
          temporibus unde et consequatur quam et autem quaerat. Quo expedita
          harum qui quae omnis aut galisum eveniet ea autem Quis qui voluptas
          quisquam est minus obcaecati!
        </p>
        {/* horaires */}
        <Title label="Horaires" />
        <p>JUDO</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Baby :</strong> Mercredi 16h - 17h
          </li>
          <li>
            <strong>Pré judo :</strong> Mercredi 14h30 - 15h30
          </li>
          <li>
            <strong>Pré poussins :</strong> Lundi 17h30 - 18h30 / Mercredi 17h30
            - 18h30
          </li>
          <li>
            <strong>Poussins :</strong> Mardi 17h30 - 18h30 / Jeudi 17h30 -
            18h30
          </li>
          <li>
            <strong>Benjamins et Minimes :</strong> Lundi 18h30 - 19h30 /
            Mercredi 18h30 - 19h30
          </li>
          <li>
            <strong>Cadets / Juniors / Adultes :</strong> Mardi 19h - 20h30 /
            Jeudi 19h - 20h30 / Vendredi 18h30 - 20h (cours compétitions et
            technique)
          </li>
        </ul>
        <p>JUJITSU</p>
        <ul className="list-disc list-inside mb-10">
          <li>Lundi 19h30 - 21h / Jeudi (avec le judo) 19h - 21h</li>
        </ul>
        {/* tarifs */}
        <Title label="Tarifs" />
        <ul className="list-disc list-inside mb-10">
          <li>
            <strong>Baby :</strong> 340 € l&apos;année
          </li>
          <li>
            <strong>Pré judo :</strong> 340 € l&apos;année
          </li>
          <li>
            <strong>Pré poussins :</strong> 340 € l&apos;année
          </li>
          <li>
            <strong>Poussins :</strong> 340 € l&apos;année
          </li>
          <li>
            <strong>Benjamins et Minimes :</strong> 340 € l&apos;année
          </li>
          <li>
            <strong>Cadets / Juniors / Adultes :</strong> 340 € l&apos;année
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
          href="https://leo-lagrange-64c2d426da138.assoconnect.com/page/2395750-presentation"
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
