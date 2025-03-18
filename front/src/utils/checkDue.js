export const isOverdueBill = (date) => {
  const isOverdue = parseInt(date) < new Date().getDate();
  return isOverdue;
};

export const getOverdueBills = (bills) => {
  const unpaidBills = bills.filter((bill) => bill.completed !== true);
  const overdueBills = unpaidBills.map((bill) => isOverdueBill(bill.dueDate));

  return overdueBills;
};
