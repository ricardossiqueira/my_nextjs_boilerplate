import { useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";

export default function Index() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Header />
    </>
  );
}
