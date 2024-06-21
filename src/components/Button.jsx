const Button = ({ label, iconURL, style, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          style ? `${style}` : "bg-coral-red  text-white cursor-pointer"
        } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="icon"
          className="ml-2 rounded-full w-5 h-5 cursor-pointer"
        />
      )}
    </button>
  );
};

export default Button;
