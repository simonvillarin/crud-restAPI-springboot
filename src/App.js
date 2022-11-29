import { useState } from "react";
import Navbar from "./components/Navbar";
import AddButton from "./components/AddButton";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import DataTable from "./components/DataTable";
import { Container } from "@mui/system";
import { EmployeeProvider } from "./context/EmployeeContext";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleClosEditModal = () => setOpenEditModal(false);

  return (
    <div className="App">
      <EmployeeProvider>
        <Navbar />
        <Container fixed maxWidth="lg" sx={{ mt: 16 }}>
          <AddButton handleOpenAddModal={handleOpenAddModal} />
          <AddModal open={openAddModal} handleClose={handleCloseAddModal} />
          <EditModal open={openEditModal} handleClose={handleClosEditModal} />
          <DataTable handleOpenEditModal={handleOpenEditModal} />
        </Container>
      </EmployeeProvider>
    </div>
  );
}

export default App;
