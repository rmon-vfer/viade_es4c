import React from "react";
import { useWebId } from "@inrupt/solid-react-components";

const MyRoutesComponent = () => {
  const webID = useWebId();
  return (
      <div>
          <h1>My routes</h1>
      </div>
  );
};

export default MyRoutesComponent;