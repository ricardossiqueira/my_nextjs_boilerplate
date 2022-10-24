import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, ReactNode } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: ReactNode;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  children: ReactNode
}

const CheckboxBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ name, error = null, children, ...props }, ref) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <input type="checkbox"
          className="rounded ring-pink-500 accent-pink-500 dark:ring-indigo-500"
          ref={ref}
          {...props}
        />
        <label htmlFor={name}
          className="ml-2 text-sm font-medium text-gray-500"
        >{children}</label>
      </div>
      {!!error && <label className="text-red-500 text-sm">{error.message.toString()}</label>}
    </>
  );
};

export type { CheckboxProps };
export const Checkbox = forwardRef(CheckboxBase);
