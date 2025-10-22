import { useInitialExtensions } from "./hooks/useInitialExtensions.tsx";
import { ExtensionsProvider } from "./contexts/extensionsContext.tsx";
import { ExtensionsList } from "./components/ExtensionsList.tsx";
import { Header } from "./components/Header.tsx";
import { useThemeContext } from "./contexts/themeContext.tsx";
import "./App.css";
import "./index.css";

function App() {
  const { initialExtensions, loadingExtensions, errorLoadingExtensions } =
    useInitialExtensions();
  const { theme } = useThemeContext();
  return (
    <div className="App" data-theme={theme}>
      <Header />

      {loadingExtensions && <h2>Loading extensions...</h2>}
      {errorLoadingExtensions && <h2>{errorLoadingExtensions}</h2>}
      {!loadingExtensions && !errorLoadingExtensions && (
        <ExtensionsProvider initialExtensions={initialExtensions}>
          <ExtensionsList />
        </ExtensionsProvider>
      )}
    </div>
  );
}

export default App;
