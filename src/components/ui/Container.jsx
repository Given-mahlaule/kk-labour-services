export default function Container({ children, className = "", variant = "default" }) {
  const variants = {
    default: "max-w-[1400px]", // wider default
    wide: "max-w-[1800px]", // extra wide
    full: "max-w-none",
  };

  return (
    <div className={`mx-auto w-full ${variants[variant] || variants.default} px-4 lg:px-8 2xl:px-12 ${className}`}>
      {children}
    </div>
  );
}
