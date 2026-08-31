import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NativeSelectDemo() {
  const id = React.useId();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor={`${id}-select`}>
          Distance
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: `${id}-select`,
          }}
        >
          <option value={1}>1km</option>
          <option value={5}>5km</option>
          <option value={10}>10km</option>
          <option value={15}>15km</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
