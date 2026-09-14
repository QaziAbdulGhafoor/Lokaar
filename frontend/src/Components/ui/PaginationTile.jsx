import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    blue: {
      main: "#2563EB",
      light: "#2563EB",
      dark: "#2563EB",
      contrastText: "#ffffff",
    },
  },
});

export default function PaginationTile({ pages = 10, setPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={pages}
          shape="rounded"
          color="blue"
          onChange={handleChange}
        />
      </Stack>
    </ThemeProvider>
  );
}
