import Button from "../../ui/button/Button"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <input type="text"/>
      <input type="text" />
      <Button>Login</Button>
    </form>
  )
}

export default LoginForm;