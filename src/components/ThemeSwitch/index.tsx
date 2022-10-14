import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={<Icon as={colorMode === "dark" ? FaSun : FaMoon} />}
      onClick={toggleColorMode}
      variant="ghost"
      colorScheme={colorMode === "dark" ? "pink" : "purple"}
      size="lg"
    />
  );
}
