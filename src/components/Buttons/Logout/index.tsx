import { Icon, IconButton, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { FaDoorOpen } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthContext";

function Logout({ ...rest }) {
  const colorScheme = useColorModeValue("purple", "pink");
  const { logout } = useContext(AuthContext);

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={<Icon as={FaDoorOpen} />}
      onClick={logout}
      variant="ghost"
      colorScheme={colorScheme}
      size="lg"
      {...rest}
    />
  );
}

export { Logout };
