import { Icon, IconButton } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../contexts/AuthContext";

export default function Index() {
  const { logout, user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <IconButton
        icon={<Icon as={AiOutlineLogout} />}
        onClick={logout}
        aria-label="logout"
        variant="ghost"
        mt="1rem"
        ml="1rem"
      ></IconButton>
    </>
  );
}
