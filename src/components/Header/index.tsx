import { Logout } from "../Buttons/Logout";
import { ThemeSwitch } from "../Buttons/ThemeSwitch";

export function Header() {
  return (
    <>
      <header>
        <div>
          <ThemeSwitch />
          <Logout />
        </div>
      </header>
    </>
  );
}
