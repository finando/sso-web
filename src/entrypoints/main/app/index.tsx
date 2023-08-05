import { StyleSheetManager } from 'styled-components';

import ThemeProvider from '@finando/theme';

export default function App() {
  return (
    <StyleSheetManager enableVendorPrefixes>
      <ThemeProvider>
        <h1>Finando!</h1>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
