import React from "react";
import { useAuth } from "./Auth";

const Profile = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>User: {auth.user}</h2>
      <button onClick={() => auth.logout()} className="border p-2">
        Logout
      </button>
    </div>
  );
};

export default Profile;
