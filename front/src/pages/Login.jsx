import { User, KeyRound } from "lucide-react";
import Input from "../components/Input";

const Login = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <section
        id="wrapper"
        className="bg-white w-[350px] min-h-[300px] shadow shadow-gray-200 flex flex-col justify-center p-4"
      >
        <h1>Login</h1>

        <Input Icon={User} type="text" placeholder="Usuário" />
        <Input
          Icon={KeyRound}
          type="password"
          placeholder="Senha"
          className="p-3 border-b-gray-600 border-b-1 outline-none"
        />

        <button className="bg-sky my-4 p-4 text-white hover:opacity-75">
          Entrar
        </button>
      </section>
    </section>
  );
};
export default Login;
