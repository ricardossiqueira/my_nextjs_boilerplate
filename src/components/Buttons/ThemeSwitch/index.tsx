import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeSwitchProps {
  colorMode?: "light" | "dark";
}

function ThemeSwitch({ colorMode, ...rest }: ThemeSwitchProps) {
  const { toggleColorMode, colorMode: chakraColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={
        <Icon as={(colorMode ?? chakraColorMode) === "dark" ? FaSun : FaMoon} />
      }
      onClick={toggleColorMode}
      variant="ghost"
      colorScheme={
        (colorMode ?? chakraColorMode) === "dark" ? "pink" : "purple"
      }
      size="lg"
      {...rest}
    />
  );
}

export { ThemeSwitch, type ThemeSwitchProps };
