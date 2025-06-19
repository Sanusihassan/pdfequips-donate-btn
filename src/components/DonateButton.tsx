import React, { useState } from 'react';
import { Heart } from 'lucide-react';
export interface DonateButtonProps {
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  target?: string;
  lang?: 'en' | 'ar' | 'es' | 'fr' | 'hi' | 'zh';
}

const translations = {
  en: 'Donate',
  ar: 'تبرع',
  es: 'Donar',
  fr: 'Faire un don',
  hi: 'दान करें',
  zh: '捐赠'
};

const DonateButton: React.FC<DonateButtonProps> = ({
  href = "checkout/?subscription=donate",
  className = "",
  size = "lg",
  variant = "primary",
  target = "_self",
  lang = "en"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const buttonText = translations[lang] || translations.en;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
    ghost: "text-pink-500 hover:bg-pink-50"
  };

  return (
    <a
      href={href}
      target={target}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
        relative overflow-hidden
        font-semibold rounded-full
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-4 focus:ring-pink-200
        group inline-flex
        ${isPressed ? 'scale-95' : ''}
        no-underline
      `}
    >
      {/* Animated background effect */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
        transform transition-transform duration-500
        ${isHovered ? 'translate-x-full' : '-translate-x-full'}
      `} />

      {/* Button content */}
      <div className="relative flex items-center justify-center gap-2">
        <Heart
          className={`
            transition-all duration-300
            ${isHovered ? 'scale-110 animate-pulse' : 'scale-100'}
            ${variant === 'outline' && !isHovered ? 'fill-transparent' : 'fill-current'}
          `}
          size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24}
        />
        <span className="font-bold tracking-wide">
          {buttonText}
        </span>
      </div>

      {/* Ripple effect */}
      {isPressed && (
        <div className="absolute inset-0 animate-ping bg-white/30 rounded-full" />
      )}
    </a>
  );
};

export default DonateButton;