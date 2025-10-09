export default function Button({ 
  children, 
  href = "#", 
  variant = "primary", 
  className = "", 
  icon: Icon,
  ...props 
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-slate-600 text-white hover:bg-slate-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    accent: "bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg",
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />}
    </Component>
  );
}
