import { useContext } from "react";
import { BillsContext } from "../contexts/BillsContext";

const useBills = () => useContext(BillsContext);

export default useBills;
