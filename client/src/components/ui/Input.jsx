function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="space-y-2">
      <label
        className="
          text-sm
          font-bold
          text-slate-700
        "
      >
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          px-5
          py-3.5
          rounded-2xl
          bg-white/60
          backdrop-blur-xl
          border
          border-white/70
          shadow-sm
          text-slate-700
          placeholder:text-slate-400
          outline-none
          focus:ring-2
          focus:ring-[#14B8A6]
          focus:bg-white/80
          transition-all
          duration-300
        "
      />
    </div>
  );
}

export default Input;