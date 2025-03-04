import JudoCard from "./JudoCard";
import JujitsuCard from "./JujitsuCard";

const SportBlock = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 p-10">
      <h2 className="text-4xl font-bold">NOS DISCIPLINES</h2>
      <p className="text-body pb-10">
        Curabitur tellus magna, porttitor a, commodo a, commodo in, tortor.
        Donec interdum. Praesent scelerisque. Maecenas posuere sodales odio.
        Vivamus metus lacus, varius quis, imperdiet quis, rhoncus a, turpis.
        Etiam ligula arcu, elementum a, venenatis quis, sollicitudin sed, metus.
        Donec nunc pede, tincidunt in, venenatis vitae, faucibus vel, nibh.
        Pellentesque wisi. Nullam malesuada. Morbi ut tellus ut pede tincidunt
        porta. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
        congue neque id dolor.
      </p>
      <JudoCard />
      <JujitsuCard />
    </div>
  );
};

export default SportBlock;
