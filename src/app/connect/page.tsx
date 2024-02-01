import { Connect } from "@/components/connect/connect";
import React from "react";

function ConnectPage() {
  return (
    <div className="flex flex-col gap-8 mt-4">
      <h1 className="text-center text-4xl font-medium">Contact Me</h1>

      <Connect />
    </div>
  );
}

export default ConnectPage;
