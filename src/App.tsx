import { FormEventHandler } from "react";
import "./index.css";

function App() {
  const formAction: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    signInWithEmailAndPassword(email, password);
  };

  function signInWithEmailAndPassword(email, password) {
    console.log(email, password);
  }
  return (
    <div className="flex flex-col bg-slate-200 w-[400px] m-10">
      <div className="text-lg text-center">sign in</div>
      <form onSubmit={formAction} className="flex flex-col p-5">
        <input name="email" type="text" />
        <br />
        <input name="password" type="text" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
