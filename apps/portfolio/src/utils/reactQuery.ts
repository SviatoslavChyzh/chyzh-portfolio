import { api } from './api';
import { QueryFunctionContext, useQuery, UseQueryOptions } from '@tanstack/react-query';

type QueryKeyT = [string, object | undefined] | any;

export const fetcher = <T>({
  queryKey,
  pageParam,
}: Partial<QueryFunctionContext<QueryKeyT>>): Promise<T> => {
  const [url, params] = queryKey;
  return api.get<T>(url, { params: { ...params, pageParam } }).then((res) => res.data);
};

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKeyT>
) => {
  const context = useQuery<T, Error, T, QueryKeyT>(
    [url, params],
    ({ queryKey }) => fetcher({ queryKey }),
    {
      enabled: !!url,
      ...config,
    }
  );

  return context;
};
