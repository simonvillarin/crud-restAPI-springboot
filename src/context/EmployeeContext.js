import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [id, setId] = useState(0);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [position, setPosition] = useState("");
  const [deleted, setDeleted] = useState(false);

  const getEmployees = async () => {
    try {
      const res = await axios.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, [lastName, deleted]);

  return (
    <EmployeeContext.Provider
      value={{
        id,
        setId,
        employees,
        setEmployees,
        lastName,
        setLastName,
        firstName,
        setFirstName,
        middleName,
        setMiddleName,
        position,
        setPosition,
        deleted,
        setDeleted,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
