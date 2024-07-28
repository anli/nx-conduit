
import { client, paths } from "../../../shared/api";
import { useQuery } from '@tanstack/react-query'

type RequiredKeysOf<BaseType extends object> = Exclude<{
  [Key in keyof BaseType]: BaseType extends Record<Key, BaseType[Key]>
  ? Key
  : never
}[keyof BaseType], undefined>;
type HasRequiredKeys<BaseType extends object> = RequiredKeysOf<BaseType> extends never ? false : true;
type DefaultParamsOption = {
  params?: {
    query?: Record<string, unknown>;
  };
}

type ParamsOption<T> = T extends {
  parameters: any;
} ? HasRequiredKeys<T["parameters"]> extends never
  ? { params?: T["parameters"] }
  : { params: T["parameters"] }
  : DefaultParamsOption;

type UseQueryOptions<T> = ParamsOption<T> & {
  // add your custom options here
  reactQuery?: {
    enabled: boolean; // Note: React Query type’s inference is difficult to apply automatically, hence manual option passing here
    // add other React Query options as needed
  };
};

export const useLoaderData = (props?: UseQueryOptions<paths['/articles']["get"]>) => {
  const { params, reactQuery } = props ?? {}

  return useQuery({
    ...reactQuery,
    queryKey: [
      '/articles',
      params
    ],
    queryFn: async ({ signal }) => {
      const response = await client.get("/articles", {
        params,
        signal,
      });
      return response.data;
    },
  })
}
