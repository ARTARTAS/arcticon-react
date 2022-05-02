import * as React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function DropDownList(props) {
  const handleChange = (event) => {
    props.change(event.target.innerText);
  };

  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={props.list}
      sx={{ minWidth: 220, maxWidth: 400 }}
      renderInput={(params) => <TextField {...params} label={props.title} />}
      onChange={handleChange}
    />
  );
}
