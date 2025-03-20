import { createContext, useEffect, useState } from "react";
import {
  toggleStatusBill,
  deleteBill,
  fetchBills,
} from "../utils/billsHelpers";

export const BillsContext = createContext();

export const BillsProvider = ({ children }) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getBills();
  }, []);

  const getBills = async () => {
    const data = await fetchBills();
    setBills(data);
  };

  const handleDeleteBill = async (idUser, idBill) => {
    const response = await deleteBill(idUser, idBill);

    if (response) {
      const data = await fetchBills();
      setBills(data);
    }
  };

  const handleToggleStatusBill = async (idBill) => {
    const response = await toggleStatusBill(idBill);

    if (response) {
      const data = await fetchBills();
      setBills(data);
    }
  };

  return (
    <BillsContext.Provider
      value={{
        bills,
        setBills,
        getBills,
        handleDeleteBill,
        handleToggleStatusBill,
      }}
    >
      {children}
    </BillsContext.Provider>
  );
};
