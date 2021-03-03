import { useContext, useState } from "react";
import AppContext from "../App/AppContext";

const LoginForm = () => {
  const [state, dispatch] = useContext(AppContext);
  const [email, setEmail] = useState(null);

  const login = () => {
    const user = state.users.find(user => {
      return user.attributes.email === email
    })
    if (user) {
      const action = { type: "SET_CURRENT_USER", currentUser: user }
      dispatch(action)
    } else {
      alert("We can't seem to find your account. If this is your first time using KidDo, please sign up!")
    }
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login}>LOG IN</button>
    </form>
  )
}

export default LoginForm