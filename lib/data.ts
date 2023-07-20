import { LoginRequest, LoginResponse } from "@/pages/login";
import instance from "./axios.interceptors";

export async function getCategories() {
  const API = "https://api.escuelajs.co/api/v1/categories?limit=5";
  return await instance.get(API);
}

export async function getProducts() {
  const API = "https://api.escuelajs.co/api/v1/products?limit=25&offset=0";
  return await instance.get(API);
}

export async function getProductDetails(id: string) {
  const API = "https://api.escuelajs.co/api/v1/products/";
  return await instance.get(API + id);
}

export async function getProfile(options?: any) {
  console.log('get profile')
  const API = "https://api.escuelajs.co/api/v1/auth/profile";

  return await instance.get(API, options);
}

export async function login(body: LoginRequest) {
  const API = "https://api.escuelajs.co/api/v1/auth/login";
  return await instance.post(API, body);
}
