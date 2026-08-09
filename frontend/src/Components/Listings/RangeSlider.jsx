import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue((prev) => ({
      ...prev,
      min: newValue[0],
      max: newValue[1],
    }));
  };

  return (
    <Box sx={{ width: 200 }} className="ml-3">
      Rs {value[0]}-{value[1]}
      <Slider
        getAriaLabel={() => "price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={200}
        max={10000}
        step={100}
      />
    </Box>
  );
}
