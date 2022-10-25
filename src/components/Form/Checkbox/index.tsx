import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: ReactNode;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  children: ReactNode;
}

const CheckboxBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ name, error = null, children, ...props }, ref) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="rounded bg-gray-400 bg-opacity-10 text-pink-500 focus:ring-pink-500 hover:text-pink-400 dark:text-indigo-500 dark:focus:ring-indigo-500 dark:hover:text-indigo-400"
          ref={ref}
          {...props}
        />
        <label htmlFor={name} className="ml-2 text-sm">
          {children}
        </label>
      </div>
      {!!error && (
        <label className="text-red-500 text-sm">
          {error.message.toString()}
        </label>
      )}
    </div>
  );
};

export type { CheckboxProps };
export const Checkbox = forwardRef(CheckboxBase);
