import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import * as React from "react";
import type { Extension } from "../types/extension.ts";

interface ExtensionsContextProps {
  extensions: Extension[];
  updateExtensions: Dispatch<SetStateAction<Extension[]>>;
  updateExtension: (
    extensionName: string,
    extension: Partial<Extension>,
  ) => void;
  removeExtension: (extensionName: string) => void;
}

const ExtensionsContext = createContext<ExtensionsContextProps | null>(null);

export const ExtensionsProvider: React.FC<{
  initialExtensions: Extension[];
  children: ReactNode | ReactNode[];
}> = ({ initialExtensions, children }) => {
  const [extensions, setExtensions] = useState<Extension[]>(
    initialExtensions || [],
  );

  const value = useMemo(
    () => ({
      extensions,
      updateExtensions: setExtensions,
      updateExtension: (
        extensionName: string,
        extension: Partial<Extension>,
      ) => {
        setExtensions((prev) =>
          prev.map((e) =>
            e.name === extensionName ? { ...e, ...extension } : e,
          ),
        );
      },
      removeExtension: (extensionName: string) => {
        setExtensions((prev) => prev.filter((e) => e.name !== extensionName));
      },
    }),
    [extensions, setExtensions],
  );
  return (
    <ExtensionsContext.Provider value={value}>
      {children}
    </ExtensionsContext.Provider>
  );
};

export const useExtensionsContext = (): ExtensionsContextProps => {
  const context = useContext(ExtensionsContext);
  if (!context) {
    throw new Error("Using extensions context outside of its scope");
  }
  return context;
};
