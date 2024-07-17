import React from "react";
import { SpinnerCircular } from "spinners-react";

export default function Spinner() {
  return (
    <div className="w-[100%] flex items-center justify-center min-h-[50vh]">
      <SpinnerCircular
        size={100}
        thickness={100}
        speed={100}
        color="#295091"
        secondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
}
