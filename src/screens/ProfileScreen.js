import React from "react";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./profileScreen.css";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";
function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar_profile"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>

            <div className="profileScreeen_plans">
              <h3>Plans (Current Plan: Free)</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
