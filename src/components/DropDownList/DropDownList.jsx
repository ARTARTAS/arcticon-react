import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function DropDownList(props) {
  const [item, setItem] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target);
  };

  var categories = props.list.map((item, index) => (
    <MenuItem key={index} value={item}>
      {item}
    </MenuItem>
  ));

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
