type Props = {
  label: string;
};

const ButtonLabelBig = (props: Props) => {
  return (
    <div className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 text-3xl text-white font-bold">
      {props.label}
    </div>
  );
};

export default ButtonLabelBig;
