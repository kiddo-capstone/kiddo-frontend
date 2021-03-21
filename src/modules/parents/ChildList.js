import React, { useState, useEffect } from 'react';
import {
  FormHelperText,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

const ChildList = ({children, childList, selection, updateSelection}) => {
  const [child, setChild] = React.useState("");

  useEffect(() => {
    if (child !== selection) setChild(selection)
  }, [selection])

  const handleChange = event => {
    console.log(event.target.value)
    setChild(event.target.value);
    updateSelection(event.target.value)
  };

  const renderChildList = () => {
    return childList.map((u) => (
      <MenuItem key={Math.random()} value={u.data}>
        {u.data.attributes.name}
      </MenuItem>
    ));
  };

  return ( 
    <>
      <InputLabel id="demo-simple-select-helper-label">Child</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={child}
        onChange={handleChange}
      >
      <MenuItem key={'no-selection'} value="">
        <em>None</em>
      </MenuItem>
      {renderChildList()}
      </Select>
      <FormHelperText>{children}</FormHelperText>
    </>
   );
}
 
export default React.memo(ChildList);