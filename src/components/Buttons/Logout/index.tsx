import { ButtonHTMLAttributes, useContext } from "react";
import { FaDoorOpen } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthContext";

interface ILogoutProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Logout({ ...props }: ILogoutProps) {
  const { logout } = useContext(AuthContext);

  return (
    <button
      className="p-4 rounded-md bg-transparent hover:bg-opacity-10 [&>svg]:fill-pink-500 hover:bg-pink-500 dark:hover:bg-opacity-10 dark:[&>svg]:fill-indigo-500 dark:hover:bg-indigo-500"
      onClick={logout}
      {...props}
    >
      <FaDoorOpen />
    </button>
  );
}

export { Logout, type ILogoutProps };
