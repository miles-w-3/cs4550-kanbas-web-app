import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    console.debug(`sending account info ${JSON.stringify(credentials)}`)
    const account = await client.signin(credentials);
    // navigate to account page if we successfully signed in
    if (account) {
      console.debug(`Signed in as user ${account.username}`)
      navigate("/Kanbas/account");
    } else {
      console.log(`Didn't get an account back`)
    }
  };
  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button disabled={credentials.password === '' || credentials.username === ''} onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;