export const getAllBills = () => {
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
      dueDate: 31,
      amount: 89.99,
      completed: false,
    },
    {
      title: "Internet",
      dueDate: 23,
      amount: 89.99,
      completed: true,
    },
    {
      title: "Internet",
      dueDate: 29,
      amount: 89.99,
      completed: false,
    },
  ];

  return data;
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
