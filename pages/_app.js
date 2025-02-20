import '../src/styles/globals.css';
import Layout from '../src/components/layout';

// Add Font Awesome configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { useEffect } from 'react';

config.autoAddCss = false; // Tell Font Awesome to skip adding CSS automatically
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // This suppresses the hydration warning
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0].includes('Warning: Expected server HTML to contain a matching')) {
        return;
      }
      originalError.apply(console, args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}