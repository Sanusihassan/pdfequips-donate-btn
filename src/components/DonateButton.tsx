import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './styles.scss';

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

  return (
    <a
      href={href}
      target={target}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        donate-button
        donate-button--${size}
        donate-button--${variant}
        ${isPressed ? 'donate-button--pressed' : ''}
        ${className}
      `}
    >
      {/* Animated background effect */}
      <div
        className={`donate-button__bg-effect ${isHovered ? 'donate-button__bg-effect--hovered' : ''}`}
      />

      {/* Button content */}
      <div className="donate-button__content">
        <Heart
          className={`
            donate-button__icon
            ${isHovered ? 'donate-button__icon--hovered' : ''}
            ${variant === 'outline' && !isHovered ? '' : 'donate-button__icon--filled'}
          `}
          size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24}
        />
        <span className="donate-button__text">
          {buttonText}
        </span>
      </div>

      {/* Ripple effect */}
      {isPressed && (
        <div className="donate-button__ripple" />
      )}
    </a>
  );
};

export default DonateButton;