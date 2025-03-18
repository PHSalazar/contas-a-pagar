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
