import axios from 'axios';
import Cookies from 'js-cookie';

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(url, { headers: { token: Cookies.get('token') as string }, ...params }),
  post: <T>(url: string, data: object) =>
    axios.post<T>(url, data, { headers: { token: Cookies.get('token') as string } }),
  put: <T>(url: string, data: object) =>
    axios.put<T>(url, data, { headers: { token: Cookies.get('token') as string } }),
  delete: <T>(url: string) =>
    axios.delete<T>(url, { headers: { token: Cookies.get('token') as string } }),
};
