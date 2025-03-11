type Props = {
  label: string;
};

const Title = (props: Props) => {
  return (
    <h3 className="text-2xl font-bold relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[70px] after:h-[10px] after:bg-red-600 after:transform after:rotate-[-3deg] mb-4">
      {props.label}
    </h3>
  );
};

export default Title;
