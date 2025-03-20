import axios from "axios";

export const fetchBills = async () => {
  try {
    const response = await axios.get("https://127.0.0.1:7202/api/Bills", {
      params: { userId: 0 },
    });

    return response.data;
  } catch (error) {
    console.log("Erro ao obter as contas do usuário.", error);
  }
};

export const createNewBill = async (title, duedate, amount) => {
  const newBill = {
    id: 0,
    idUser: 0,
    title,
    duedate,
    amount,
    status: false,
  };

  try {
    const response = await axios.post(
      "https://127.0.0.1:7202/api/Bills",
      newBill
    );
    return response;
  } catch (error) {
    console.log("Erro ao criar nova conta.", error);
    return error;
  }
};

export const deleteBill = async (idUser, idBill) => {
  try {
    idUser = 0;

    const response = await axios.delete(
      `https://127.0.0.1:7202/api/Bills/${idUser}/${idBill}`
    );

    return response;
  } catch (error) {
    console.log("Erro ao remover conta com ID " + idBill, error);
  }
};

export const completeBill = async (idBill) => {
  try {
    const response = await axios.put(
      `https://127.0.0.1:7202/api/Bills/${idBill}`
    );

    return response;
  } catch (error) {
    console.log("Erro ao pagar conta com ID " + idBill, error);
  }
};

export const getOverdueBills = (bills) => {
  const unpaidBills = bills.filter((bill) => bill.completed !== true);
  const overdueBills = unpaidBills.filter(
    (bill) => parseInt(bill.dueDate) < new Date().getDate()
  );

  return overdueBills;
};

export const getPendingBills = (bills) => {
  const unpaidBills = bills.filter((bill) => bill.completed == false);

  return unpaidBills;
};

export const getPaidBills = (bills) => {
  const paidBills = bills.filter((bill) => bill.completed == true);

  return paidBills;
};

export const sortBills = (bills, sortFilter = 0) => {
  const sortedData = bills.sort(sortFilter);

  return sortedData;
};
