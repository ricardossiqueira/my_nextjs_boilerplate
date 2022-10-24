import { HStack, Wrap } from "@chakra-ui/react";
import { Logout } from "../Buttons/Logout";
import { ThemeSwitch } from "../Buttons/ThemeSwitch";

export function Header() {
  return (
    <>
      <header>
        <HStack
          boxShadow={"md"}
          alignItems={"center"}
          w={"100%"}
          h={"5rem"}
          pl={"10%"}
          pr={"10%"}
          justifyContent={"flex-end"}
        >
          <Wrap>
            <ThemeSwitch />
            <Logout />
          </Wrap>
        </HStack>
      </header>
    </>
  );
}
