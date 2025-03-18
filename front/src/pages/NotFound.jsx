import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center p-5">
      <article>
        <h1 className="text-4xl">404 - Página não encontrada. ☹️</h1>
        <p className="py-5">
          Hummm. Não encontramos essa página, você pode{" "}
          <Link to={"/"} className="text-sky font-semibold">
            voltar ao início
          </Link>
          .
        </p>
      </article>
    </section>
  );
};
export default NotFound;
