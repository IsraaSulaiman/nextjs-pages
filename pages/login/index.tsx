import { UserContext } from "@/lib/context";
import { useRouter } from "next/router";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import style from "./login.module.scss";
import { getProfile, login } from "@/lib/data";
import { cookieManager } from "@/lib/auth";
import Head from "next/head";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const context: any = useContext(UserContext);
  const [loginCreds, setLoginCreds] = useState<LoginRequest>({
    email: "john@mail.com",
    password: "changeme",
  });
  if (loggedIn) {
    console.log(loggedIn, "products redirect");
    router.push("/products");
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const resp: any = await login(loginCreds);
    cookieManager.set({ name: "TK", body: resp.access_token });
    // get user info
    console.log("login");
    const profile = await getProfile();
    if (profile) {
      context.setUser(profile);
      setLoggedIn(true);
    }
  };

  const handleOnChange = (event: ChangeEvent) => {
    const { name, value } = event.target as any;
    if (name === "email") {
      setLoginCreds({ ...loginCreds, email: value });
    }
    if (name === "password") {
      setLoginCreds({ ...loginCreds, password: value });
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='Login testtttttt' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <h2 className='centered'>Login to your account to start shopping</h2>
        <form className={style.loginForm} onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label className={style.formLabel}>Email</label>
            <input
              onChange={handleOnChange}
              className={style.formInput}
              value={loginCreds.email}
              type='email'
              name='email'
              placeholder='enter your email'
            />
          </div>
          <div className={style.formGroup}>
            <label className={style.formLabel}>Password</label>
            <input
              onChange={handleOnChange}
              name='password'
              value={loginCreds.password}
              className={style.formInput}
              type='password'
              placeholder='enter your password'
              minLength={6}
            />
          </div>
          <div className={style.formGroup}>
            <button className='tt-btn primary' type='submit'>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
