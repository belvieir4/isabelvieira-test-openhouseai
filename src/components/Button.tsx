export type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded-md bg-orange-600 px-6 py-3 text-white duration-300 ease-in-out hover:bg-orange-700 font-bold mt-5">
      {text}
    </button>
  );
};

export default Button;
