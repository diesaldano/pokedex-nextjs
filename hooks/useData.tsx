//create a useData hook 
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const url = 'https://pokeapi.co/api/v2/pokemon';

const useData = (url: string, limit:string
  
  ) => {
  // const uri = name ? `${API_URL}/${name}` : `${API_URL}?limit=${PAGE_LIMIT}`;
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};

export default useData;