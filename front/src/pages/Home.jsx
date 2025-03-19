import {
  ChartPie,
  ClipboardMinus,
  DollarSign,
  HandCoins,
  History,
  ListPlus as IconAddNewBill,
} from "lucide-react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import DoughnutChart from "../components/Charts/DoughnutChart";
import TableBills from "../components/TableBills";
import FrameDropBills from "../components/FrameDropBills";
import Navbar from "../components/Navbar";
import { getAllBills, sortBills } from "../utils/billsHelpers";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7202/api/Bill")
      .then((response) => {
        setBills(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar contas.", error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-20 pt-4 px-3">
        <div
          id="cards"
          className="flex gap-2.5 flex-wrap justify-center sm:justify-start"
        >
          <Card Icon={DollarSign} title="Total do mês" amount="1.721,99" />
          <Card Icon={History} title="Em atraso" amount="1.721,99" />
          <Card Icon={HandCoins} title="Falta pagar" amount="1.721,99" />
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <CardContainer title="Despesas por status" Icon={ChartPie}>
            <DoughnutChart />
            <button className="flex flex-nowrap gap-2 border-1 border-emerald-700 text-emerald-700 rounded-2xl mx-auto text-xs items-center p-2 hover:bg-emerald-700 hover:text-white hover:border-transparent">
              <ClipboardMinus size={14} />
              Gerar Relatório
            </button>
          </CardContainer>

          <CardContainer title="Pagar Faturas com Arrastar / Clicar">
            <FrameDropBills />
          </CardContainer>
        </div>

        <section>
          <CardContainer title="Todas as contas do mês">
            <section className="text-xs flex flex-row gap-2 items-center justify-end p-3">
              Classificar por:
              <select
                name="select-sort-bills"
                id="select-sort-bills"
                className="border-1 border-gray-300"
              >
                <option value="">Nome da Conta</option>
                <option value="">Vencimento</option>
                <option value="">Valor</option>
                <option value="">Status</option>
              </select>
            </section>
            <TableBills
              data={sortBills(
                bills,
                (value1, value2) => value1.completed - value2.completed
              )}
            />
          </CardContainer>
        </section>

        <button
          id="adicionar-Nova-Conta"
          className="fixed right-2 bottom-2 bg-sky rounded-full p-3 flex items-center justify-center text-white shadow-gray-500 shadow-sm"
        >
          <IconAddNewBill />
        </button>
      </div>
    </>
  );
};
export default Home;
