import '@/styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Loader from './../components/layouts/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);


  return (
    <div>
      {pageLoading ? <Loader/> : <Component {...pageProps} />}
    </div>

  )
}
