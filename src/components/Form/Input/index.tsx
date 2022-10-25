import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  children?: ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, placeholder, label, children, error = null, ...props },
  ref
) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="sr-only">
        {label ?? name}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        {...props}
        ref={ref}
        className={`relative block w-full ${
          !!children && "pr-8"
        } appearance-none rounded-md border bg-gray-400 bg-opacity-10 dark:border-gray-600 border-gray-300 px-3 py-2 placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm dark:focus:border-indigo-500 dark:focus:ring-indigo-500`}
      />
      {!!children && (
        <div className="absolute inset-y-0 right-2 flex items-center">
          {children}
        </div>
      )}
      {!!error && (
        <label className="text-red-500 text-sm">
          {error.message.toString()}
        </label>
      )}
    </div>
  );
};

export type { InputProps };
export const Input = forwardRef(InputBase);
