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
      <main className="mx-auto max-w-7xl xl:px-8">
        <section className="flex mt-4 h-screen">
          <div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              a voluptas et est nisi reiciendis sed quis quasi mollitia! Neque
              saepe ut ipsa minus consequuntur omnis voluptate mollitia
              reiciendis explicabo.
            </div>
            <div>
              Reiciendis recusandae asperiores illo commodi aspernatur labore.
              Obcaecati, sit? Repellat tempore consequatur in quo facilis minus
              maiores. Unde a ipsa, quas voluptatum repellat accusamus cumque
              magnam quia aliquam deleniti! Atque!
            </div>
            <div>
              Nostrum facilis quasi inventore? Maxime recusandae velit
              voluptatem excepturi incidunt eos veritatis voluptatibus
              molestias! Nulla inventore recusandae impedit. Ipsum quidem quam
              excepturi quibusdam pariatur totam minus possimus quisquam commodi
              id!
            </div>
            <div>
              Nobis sapiente sunt nihil unde nam quia. Sit accusamus ea qui
              molestiae nisi cum necessitatibus facere, et consequuntur alias,
              veritatis dolorum pariatur quibusdam dicta error, quaerat itaque
              temporibus dolores soluta.
            </div>
            <div>
              Consectetur sapiente quisquam ex repudiandae, suscipit nam dolorum
              delectus a deleniti quibusdam atque unde ratione eaque, enim quasi
              exercitationem accusamus esse fugiat inventore illo hic! Aperiam
              placeat id natus praesentium.
            </div>
          </div>
        </section>
        <section className="h-screen bg-red-100"></section>
      </main>
    </>
  );
}
