import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { EmployeeContext } from "../context/EmployeeContext";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 2,
  boxShadow: 24,
};

function EditModal({ open, handleClose }) {
  const {
    id,
    setId,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    position,
    setPosition,
  } = useContext(EmployeeContext);

  const handleClear = () => {
    setId("");
    setLastName("");
    setFirstName("");
    setMiddleName("");
    setPosition("");

    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let payload = {
        id: id,
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        position: position,
      };

      const res = axios.put(`/employees/${id}`, payload);
    } catch (err) {
      console.log(err);
    }

    handleClear();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Edit Employee</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider></Divider>
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                fullWidth
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                fullWidth
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                fullWidth
                label="Middle Name"
                variant="outlined"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                fullWidth
                label="Position"
                variant="outlined"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              sx={{ mr: 2 }}
              onClick={handleClear}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditModal;
