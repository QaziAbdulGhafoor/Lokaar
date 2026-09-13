import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationTile({ pages }) {
  console.log(pages);
  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        variant="outlined"
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
}
