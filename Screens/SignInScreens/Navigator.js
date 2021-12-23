import React from "react";
import AdminStack from "../../Stacks/AdminStack";
import TechnichianStack from "../../Stacks/TechnichianStack";
const Returnnavigator = ({ route }) => {
  const { type } = route.params;
  if (type === 1) {
    console.log("user is Technician");
    return <TechnichianStack />;
  } else {
    return <AdminStack />;
  }
};

export default Returnnavigator;
