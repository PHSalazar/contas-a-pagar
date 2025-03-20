import { Plus } from "lucide-react";
import { createNewBill } from "../../utils/billsHelpers";
import { useState } from "react";
import useBills from "../../hooks/useBills";

const ModalAddNewBill = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [duedate, setDuadate] = useState(1);
  const [amount, setAmount] = useState(parseFloat(0.01));

  const { getBills } = useBills();

  const handleCreateNewBill = async () => {
    event.preventDefault();
    var response = await createNewBill(title, duedate, amount);

    if (response.status === 201) {
      getBills();
      onClose(
        response.status,
        `${response.data.title} adicionado com sucesso!`
      );
    } else {
      onClose(response.status, `Erro ao adicionar conta. Tente novamente.`);
    }
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-900/85 z-20">
      <section id="wrapper" className="bg-white h-[400px] w-[350px]">
        <h1 className="p-10 text-center">Nova Conta</h1>

        <form
          onSubmit={() => handleCreateNewBill()}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Título da conta"
            className="p-2 border-b-1 border-b-gray-400 w-3/4 mx-auto"
            onChange={() => setTitle(event.target.value)}
            required
          />
          <input
            type="number"
            min={0}
            max={31}
            placeholder="Vencimento"
            className="p-2 border-b-1 border-b-gray-400 w-3/4 mx-auto"
            onChange={() => setDuadate(event.target.value)}
            required
          />
          <input
            type="number"
            step={0.01}
            min={0.01}
            placeholder="Valor"
            className="p-2 border-b-1 border-b-gray-400 w-3/4 mx-auto"
            onChange={() => setAmount(event.target.value)}
            required
          />

          <button
            type="submit"
            className="flex flex-nowrap gap-2 w-3/4 justify-center border-1 border-emerald-700 text-emerald-700 rounded-2xl mx-auto text-xs items-center p-2 hover:bg-emerald-700 hover:text-white hover:border-transparent"
          >
            <Plus size={14} />
            Criar
          </button>

          <button
            type="submit"
            className="w-3/4 justify-center mx-auto text-xs items-center p-2  hover:text-orange-600"
            onClick={() => onClose()}
          >
            Cancelar
          </button>
        </form>
      </section>
    </section>
  );
};
export default ModalAddNewBill;
