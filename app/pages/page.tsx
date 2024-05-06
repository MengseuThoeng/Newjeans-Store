
import { ReactNode } from "react";
import React from "react";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import Login from "../(auth)/login/page";

interface Props {
  Component: ReactNode;
  pageProps: any;
}
function MyApp({ Component, pageProps }: Props) {
  const router = useRouter();
  const accessToken = router.query.accessToken as string;

  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default MyApp;

