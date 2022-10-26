import { HTMLAttributes } from "react";

interface IGhostButtonProps extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

function GhostButton({ children, ...props }: IGhostButtonProps) {
  return (
    <button
      className="p-4 rounded-md bg-transparent hover:bg-opacity-10 [&>svg]:fill-pink-500 hover:bg-pink-500 dark:hover:bg-opacity-10 dark:[&>svg]:fill-indigo-500 dark:hover:bg-indigo-500"
      {...props}
    >
      {children}
    </button>
  );
}

export { GhostButton, type IGhostButtonProps };
