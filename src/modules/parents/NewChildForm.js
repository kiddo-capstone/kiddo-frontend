import React from "react";
import { TitleContainer } from "../../ui/containers/index";
import {
  FormHelperText,
  TextField,
  Button
} from "@material-ui/core";

const NewChildForm = ({addChild}) => {
  const [newChildName, setNewChildName] = React.useState("");

  const handleClick = () => {
    addChild(newChildName)
    setNewChildName('')
  }

  return (
    <>
      <TitleContainer><h1 style={{fontSize: '1em', marginTop: '.4em', marginBottom: '.1em' }}>Add a child</h1></TitleContainer>      
      <FormHelperText style={{margin:'1em', textAlign: 'center'}}>
        Add your KidDo Agents by name and we'll send them your missions! 
      </FormHelperText>
      <TextField
          id="outlined-basic"
          label="KidDo Agent Name"
          variant="outlined"
          value={newChildName}
          onChange={(event) => setNewChildName(event.target.value)}
        />
      <Button style={{margin: '1em'}} onClick={() => handleClick()} disabled={newChildName ? false : true} variant="contained" color="primary">
        {newChildName ? 'Add KidDo Agent!' : 'Add Agent Details'}
      </Button> 
    </>
  );
};

export default NewChildForm;
