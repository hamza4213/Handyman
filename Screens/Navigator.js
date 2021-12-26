import React from "react";
import AdminStack from "../Stacks/AdminStack";
import TechnichianStack from "../Stacks/Technicianstack";
const Returnnavigator = ({ route }) => {
  const { type } = route.params;
  if (type === 2) {
    console.log("user is admin");
    return <AdminStack />;
  } else {
    return <TechnichianStack />;
  }
};

export default Returnnavigator;
