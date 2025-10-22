import { useEffect, useState } from "react";
import type { Extension, InitialExtensions } from "../types/extension.ts";

export const useInitialExtensions = (): InitialExtensions => {
  const [initialExtensions, setInitialExtensions] = useState<Extension[]>([]);
  const [loadingExtensions, setLoadingExtensions] = useState<boolean>(false);
  const [errorLoadingExtensions, setErrorLoadingExtensions] = useState<
    string | null
  >(null);

  useEffect(() => {
    const loadExtensions = async () => {
      setLoadingExtensions(true);
      const result = await fetch("/data/data.json");
      if (!result.ok) {
        setLoadingExtensions(false);
        setErrorLoadingExtensions("An error occurred while loading extensions");
      }
      setInitialExtensions(await result.json());
      setLoadingExtensions(false);
      console.log("Successfully loaded extensions");
    };
    loadExtensions();
  }, []);

  return {
    initialExtensions,
    loadingExtensions,
    errorLoadingExtensions,
  };
};
