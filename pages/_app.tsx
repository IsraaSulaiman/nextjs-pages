import Layout from "@/components/Layout";
import { UserContext } from "@/lib/context";
import "@/styles/globals.scss";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import App from "next/app";
import { useCallback, useEffect, useMemo, useState } from "react";

import { cookieManager } from "@/lib/auth";

import { useRouter } from "next/router";
import { getProfile } from "@/lib/data";

export interface UserState {
  isAuth: boolean;
  logout: any;
  user: any;
  loading: boolean;
}

export default function MyApp({
  Component,
  pageProps,
  isAuthenticated,
  user,
}: any) {
  const router = useRouter();
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    async function verifyAndGetUser() {
      const tk = cookieManager.get("TK");
      console.log(tk, "tkk");
      if (!tk) {
        console.log("not logged in");
        setUserState(null);
      } else if (tk && !userState) {
        console.log("get profile use effect");
        const resp: any = await getProfile();
        if (resp.status === 401) {
          // userState.logout();
          // setLoggedOut(true);
          // return;
        } else {
          console.log("logged in and get data success");
          return setUserState(resp);
        }
      }
    }
    verifyAndGetUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>
  );
}
