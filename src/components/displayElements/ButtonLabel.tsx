type Props = {
  label: string;
};

const ButtonLabel = (props: Props) => {
  return (
    <div className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-4 py-2 text-xl text-white font-bold">
      {props.label}
    </div>
  );
};

export default ButtonLabel;
