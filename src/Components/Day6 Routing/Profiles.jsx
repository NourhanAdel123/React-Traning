import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profiles = () => {
  const profilesList = [1, 2, 3]; // Example profile data

  return (
    <div className="flex gap-2">
      <div>
        {profilesList.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <h2>Profile {profile}</h2>
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Profiles;
