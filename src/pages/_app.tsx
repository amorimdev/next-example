import type { AppProps, NextWebVitalsMetric } from 'next/app';

const app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // tslint:disable-next-line no-console
  console.log(metric);
}

export default app;
