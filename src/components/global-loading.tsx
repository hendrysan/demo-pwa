"use client";

import { CSSProperties } from "react";
import { SyncLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <SyncLoader
        color="#7636d7ff"
        loading={true}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
