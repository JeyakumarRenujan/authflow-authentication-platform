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
          font-medium
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
          px-4
          py-3
          border
          border-slate-300
          rounded-lg
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}

export default Input;