interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disable?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disable,
  onChange,
}) => {
  return (
    <input
      disabled={disable}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className="
        w-full
        p-4
        text-lg
        border-2
        border-neutral-800
        rounded-md
        outline-none
        text-white
        focus:border-sky-500
        focus:border-2
        transition
        disabled:bg-neutral-900
        disabled:opacity-70
        disabled:cursor-not-allowed
        bg-black
      "
    />
  );
};

export default Input;
