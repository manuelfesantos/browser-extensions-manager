import { useExtensionsContext } from "../contexts/extensionsContext.tsx";
import type { Extension } from "../types/extension.ts";
import "./Toggle.css";
import * as React from "react";

export const Toggle: React.FC<{ extension: Extension }> = ({ extension }) => {
  const { updateExtension } = useExtensionsContext();
  const toggleActivation = () => {
    updateExtension(extension.name, { isActive: !extension.isActive });
  };
  return (
    <div className={`Toggle ${extension.isActive ? "active" : ""} focus`}>
      <button
        type="button"
        className={`Toggle-btn ${extension.isActive ? "active" : ""}`}
        onClick={toggleActivation}
      />
    </div>
  );
};
