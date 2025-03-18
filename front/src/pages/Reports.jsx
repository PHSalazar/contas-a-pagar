import {
  ChartPie,
  ClipboardMinus,
  DollarSign,
  HandCoins,
  History,
} from "lucide-react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Navbar from "../components/Navbar";
import TableBills from "../components/TableBills";
import {
  getOverdueBills,
  getPaidBills,
  getUnpaidBills,
} from "../utils/billsFilter";

const Reports = () => {
  const data = [
    {
      title: "Luz",
      dueDate: 6,
      amount: 1998.29,
      completed: false,
    },
    {
      title: "Água",
      dueDate: 10,
      amount: 120.5,
      completed: true,
    },
    {
      title: "Internet",
      dueDate: 15,
      amount: 89.99,
      completed: false,
    },
    {
      title: "Internet",
      dueDate: 20,
      amount: 89.99,
      completed: false,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="p-20 pt-4 px-3">
        <CardContainer Icon={ChartPie}>
          <section>
            <h1 className="font-semibold">Relatórios</h1>
            <p className="p-3 text-sm">
              Nesta seção você pode gerar relatórios de todas as suas despesas.
            </p>
          </section>
        </CardContainer>

        <section className="flex flex-wrap gap-3 justify-center">
          <Card Icon={DollarSign} title="Total do mês" amount="1.721,99" />
          <Card Icon={History} title="Em atraso" amount="1.721,99" />
          <Card Icon={HandCoins} title="Falta pagar" amount="1.721,99" />
        </section>

        <section>
          <CardContainer title="Todas as contas do mês PENDENTES">
            <TableBills data={getUnpaidBills(data)} />
          </CardContainer>

          <CardContainer title="Todas as contas do mês PAGAS">
            <TableBills data={getPaidBills(data)} />
          </CardContainer>

          <CardContainer title="Todas as contas do mês VENCIDAS">
            <TableBills data={getOverdueBills(data)} />
          </CardContainer>
        </section>

        <button className="flex flex-nowrap gap-2 border-1 border-emerald-700 text-emerald-700 rounded-2xl mx-auto text-xs items-center p-2 hover:bg-emerald-700 hover:text-white hover:border-transparent">
          <ClipboardMinus size={14} />
          Gerar Relatório
        </button>
      </section>
    </>
  );
};
export default Reports;
