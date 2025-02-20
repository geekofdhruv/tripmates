import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses = "px-10 py-2 h-12 rounded-full text-sm font-medium";
  const variantClasses = {
    primary: "bg-[#ED3B73] text-white",
    secondary: "bg-[#F2F2F2] text-[#ED3B73]"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
