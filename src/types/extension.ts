export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface InitialExtensions {
  initialExtensions: Extension[];
  loadingExtensions: boolean;
  errorLoadingExtensions: string | null;
}

export const ExtensionSelectionEnum = {
  ALL: "All",
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

export type ExtensionSelection =
  (typeof ExtensionSelectionEnum)[keyof typeof ExtensionSelectionEnum];
