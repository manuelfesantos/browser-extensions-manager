import * as React from "react";
import type { Extension } from "../types/extension.ts";
import { useExtensionsContext } from "../contexts/extensionsContext.tsx";
import { useEffect } from "react";
import "./ExtensionComponent.css";
import { Toggle } from "./Toggle.tsx";

export const ExtensionComponent: React.FC<{ extension: Extension }> = ({
  extension,
}) => {
  const { removeExtension } = useExtensionsContext();

  const remove = () => {
    removeExtension(extension.name);
  };
  useEffect(() => {
    console.log("loading extension component");
  });
  return (
    <div className="ExtensionComponent">
      <div className="ExtensionComponent-content">
        <img
          src={extension.logo}
          alt={`${extension.name} logo image`}
          height={70}
          width={70}
        />
        <div>
          <h3>{extension.name}</h3>
          <p>{extension.description}</p>
        </div>
      </div>
      <div className="ExtensionComponent-buttons">
        <button
          type={"button"}
          onClick={remove}
          className="button ExtensionComponent-button focus"
        >
          Remove
        </button>
        <Toggle extension={extension} />
      </div>
    </div>
  );
};
