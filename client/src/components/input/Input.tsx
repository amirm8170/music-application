import { InputHTMLAttributes, ReactNode } from "react";
import "./Input.scss";

interface props {
  width?: number | undefined;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  error?: string;
}

const Input: React.FC<InputHTMLAttributes<HTMLInputElement> & props> = ({
  width,
  leftIcon,
  rightIcon,
  className,
  error,
  ...props
}) => {
  return (
    <div
      className={`input-container ${className}`}
      style={width ? { width: `${width}px` } : { width: "320px" }}
    >
      <input className='input' {...props} />
      {leftIcon && <div className="input-left-icon">{leftIcon}</div>}
      {rightIcon && <div className="input-right-icon">{rightIcon}</div>}
      {error && <span className="input-error">{`${error} !`}</span>}
    </div>
  );
};

export default Input;
