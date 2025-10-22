import { useExtensionsContext } from "../contexts/extensionsContext.tsx";
import { ExtensionComponent } from "./ExtensionComponent.tsx";
import { useState } from "react";
import "./ExtensionsList.css";
import {
  type ExtensionSelection,
  ExtensionSelectionEnum,
} from "../types/extension.ts";
import * as React from "react";

export const ExtensionsList = () => {
  const [selection, setSelection] = useState<ExtensionSelection>(
    ExtensionSelectionEnum.ALL,
  );
  const { extensions } = useExtensionsContext();
  return (
    <div className="ExtensionsList">
      <div className="ExtensionsList-header">
        <h2>Extensions List</h2>
        <div className="ExtensionsList-filters">
          <ExtensionsListButton
            currentSelection={selection}
            selection={ExtensionSelectionEnum.ALL}
            setSelection={setSelection}
          />
          <ExtensionsListButton
            currentSelection={selection}
            selection={ExtensionSelectionEnum.ACTIVE}
            setSelection={setSelection}
          />
          <ExtensionsListButton
            currentSelection={selection}
            selection={ExtensionSelectionEnum.INACTIVE}
            setSelection={setSelection}
          />
        </div>
      </div>
      <ul className="ExtensionsList-list">
        {extensions
          .filter((e) => {
            if (selection === ExtensionSelectionEnum.ALL) return true;
            if (selection === ExtensionSelectionEnum.ACTIVE) return e.isActive;
            return !e.isActive;
          })
          .map((extension) => (
            <ExtensionComponent extension={extension} />
          ))}
      </ul>
    </div>
  );
};

const ExtensionsListButton: React.FC<{
  selection: ExtensionSelection;
  currentSelection: ExtensionSelection;
  setSelection: (selection: ExtensionSelection) => void;
}> = ({ selection, currentSelection, setSelection }) => {
  const isActive = selection === currentSelection;
  return (
    <button
      type="button"
      className={`button ExtensionsList-filter ${isActive ? "active" : ""} focus`}
      onClick={() => setSelection(selection)}
    >
      {selection}
    </button>
  );
};
