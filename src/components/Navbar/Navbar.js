import React from "react";
import { auth } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../SignIn/SignIn";
import LogOut from "../LogOut/LogOut";

const styles = {
  nav: "fixed top-0 z-50 w-full h-24 bg-violet-400 shadow-xl px-6 flex justify-between items-center",
  title: "text-4xl text-white font-bold ",
};

function Navbar() {
  const [user] = useAuthState(auth)
  return (
    <>
      <div className={styles.nav}>
        <h1 className={styles.title}>Chat Suwi</h1>
        {user ? <LogOut /> : <SignIn />}
        
      </div>
    </>
  );
}

export default Navbar;
