import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([200, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Box sx={{ width: 200 }} className=" ml-3">
      <p>
        Rs {valuetext(value[0])}-{valuetext(value[1])}
      </p>
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
