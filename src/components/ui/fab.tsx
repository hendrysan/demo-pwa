/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dReRYJ47hZq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "./button-custom";
import React from "react";

const FabButton = ({ displayname, ...props }) => {
  return (
    <div className="fixed bottom-6 right-6">
      <Button
        // @ts-ignore
        variant="fab"
        size="lg"
        className="rounded-full bg-mainColor text-gray-50 shadow-lg border-none"
        {...props}
      >
        {displayname}
      </Button>
    </div>
  );
};

export { FabButton };
