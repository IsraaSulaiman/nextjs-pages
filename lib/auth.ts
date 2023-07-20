import {
  CookieValueTypes,
  deleteCookie,
  getCookie,
  hasCookie,
  setCookie,
} from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";

export const cookieManager: {
  TK: string;
  REFRESH_TK: string;
  get: (name: string, context?: any) => CookieValueTypes;
  set: (
    cookie: {
      name: string;
      body: string;
    },
    context?: any
  ) => void;
  delete: (name: string, context?: any) => void;
  hasCookie: (name: string, context?: any) => void;
} = {
  TK: "",
  REFRESH_TK: "",
  get: (name: string, context?: any): CookieValueTypes => {
    return getCookie(name, getContext(context));
  },
  set: (
    cookie: { name: string; body: string; expires?: string },
    context?: any
  ) => {
    setCookie(cookie.name, cookie.body, getContext(context));
  },

  delete: (name: string, context?: any) => {
    deleteCookie(name, getContext(context));
  },

  hasCookie: (name: string, context?: any) => {
    hasCookie(name, getContext(context));
  },
};

const getContext = (context: any): OptionsType => {
  if (context) {
    const req = context.req ? context.req : context.ctx.req;
    const res = context.req ? context.res : context.ctx.res;
    return { req, res };
  }
  return {};
};

export function isAuthenticated() {
  let tk: CookieValueTypes = cookieManager.TK;
  if (!tk) {
    tk = cookieManager.get("TK");
  }

  return !!tk;
}

interface CookieManager {
  TK: string;
  REFRESH_TK: string;
  get: any;
  context: any;
  set: any;

  delete: any;

  hasCookie: any;
}
