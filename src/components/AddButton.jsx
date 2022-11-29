import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddButton({ handleOpenAddModal }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleOpenAddModal}
      >
        Add Employee
      </Button>
    </Box>
  );
}

export default AddButton;
