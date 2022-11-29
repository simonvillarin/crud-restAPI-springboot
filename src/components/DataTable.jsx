import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import axios from "axios";

function DataTable({ handleOpenEditModal }) {
  const {
    employees,
    setId,
    setLastName,
    setFirstName,
    setMiddleName,
    setPosition,
    deleted,
    setDeleted,
  } = useContext(EmployeeContext);

  const getEmployee = async (id) => {
    try {
      const res = await axios.get(`/employees/${id}`);
      setId(res.data.id);
      setLastName(res.data.lastName);
      setFirstName(res.data.firstName);
      setMiddleName(res.data.middleName);
      setPosition(res.data.position);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    getEmployee(id);
    handleOpenEditModal();
  };

  const handleDelete = (id) => {
    try {
      const res = axios.delete(`/employees/${id}`);
      setDeleted(!deleted);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "primary.main" }}>
          <TableRow>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Id
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Last Name
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              First Name
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Middle Name
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Position
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {employee.id}
              </TableCell>
              <TableCell align="center">{employee.lastName}</TableCell>
              <TableCell align="center">{employee.firstName}</TableCell>
              <TableCell align="center">{employee.middleName}</TableCell>
              <TableCell align="center">{employee.position}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  sx={{ mr: 2 }}
                  onClick={() => handleUpdate(employee.id)}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(employee.id)}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
