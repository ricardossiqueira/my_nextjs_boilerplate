import useTheme from "next-theme";
import { HTMLAttributes } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface IThemeSwitchProps extends HTMLAttributes<HTMLInputElement> {
  colorMode?: "light" | "dark";
}

function ThemeSwitch({ colorMode, ...props }: IThemeSwitchProps) {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="p-4 rounded-md bg-transparent hover:bg-opacity-10 [&>svg]:fill-pink-500 hover:bg-pink-500 dark:hover:bg-opacity-10 dark:[&>svg]:fill-indigo-500 dark:hover:bg-indigo-500"
      onClick={handleToggleTheme}
      {...props}
    >
      {(colorMode ?? theme) === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export { ThemeSwitch, type IThemeSwitchProps };
