import React from "react";
import { auth } from "../Firebase/firebase";

const style = {
  button: "bg-gray-800 text-white font-semibold rounded-md px-4 py-2 hover:bg-gray-900",
};

function LogOut() {
  const signout = () => {
    signout(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Cerrar sesión
    </button>
  );
}

export default LogOut;
