function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white/45
        backdrop-blur-2xl
        border
        border-white/70
        rounded-[2rem]
        shadow-2xl
        p-7
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;