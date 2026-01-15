import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  type = 'button',
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 shadow-lg hover:shadow-xl';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 text-white hover:from-emerald-400 hover:via-cyan-400 hover:to-emerald-400 focus:ring-emerald-400 shadow-emerald-500/50 hover:shadow-emerald-400/60',
    secondary: 'bg-slate-700/80 backdrop-blur-sm text-gray-200 hover:bg-slate-600/80 focus:ring-slate-500 border border-slate-600/50 shadow-slate-900/50',
    danger: 'bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-400 hover:to-rose-500 focus:ring-red-400 shadow-red-500/50 hover:shadow-red-400/60',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
