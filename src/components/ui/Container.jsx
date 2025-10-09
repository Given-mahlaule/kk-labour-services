export default function Container({ children, className = "", variant = "default" }) {
  const variants = {
    default: "max-w-[1200px]", // wider than previous 6xl (~1152px)
    wide: "max-w-[1600px]",
    full: "max-w-none",
  };

  return (
    <div className={`mx-auto w-full ${variants[variant] || variants.default} px-6 lg:px-10 2xl:px-14 ${className}`}>
      {children}
    </div>
  );
}
