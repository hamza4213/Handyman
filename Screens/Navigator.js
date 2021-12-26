import React from "react";
import AdminStack from "../Stacks/AdminStack";
import TechnichianStack from "../Stacks/Technicianstack";
import UserStack from "../Stacks/UserStack";
const Returnnavigator = ({ route }) => {
  const { type } = route.params;
  if (type === 1) {
    console.log("user is admin");
    return <AdminStack />;
  } else if (type === 2) {
    return <TechnichianStack />;
  } else {
    return <UserStack />;
  }
};

export default Returnnavigator;
