import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 transition-all duration-300 font-semibold rounded-full active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-green-600 hover:bg-green-700 hover:scale-95 text-white shadow-lg shadow-green-600/20",
    secondary: "bg-[#EBC85B] hover:bg-[#e0bc4a] hover:scale-95 text-[#1A1A1A]",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 hover:scale-95",
    ghost: "bg-transparent text-[#1A1A1A] hover:text-green-700 hover:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes.md;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;
