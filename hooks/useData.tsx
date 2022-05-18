//create a useData hook 
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const useData = (URL: string, LIMIT:string) => {
  const uri = (!LIMIT || LIMIT == '0') ? `${URL}` : `${URL}?limit=${LIMIT}`;
  const { data, error } = useSWR(uri, fetcher);
  return { data, error };
};

export default useData;