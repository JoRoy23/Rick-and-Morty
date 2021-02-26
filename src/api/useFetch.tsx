import { useState, useEffect } from "react";
import axios from "axios";

export interface IEpisodeResponse {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
};

const useFetch = (url: string) => {
  const [data, setData] = useState<IEpisodeResponse[]>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(url);
        const fetchData: IEpisodeResponse[] = response.data._embedded.episodes.map((data: IEpisodeResponse ) => {
          return data;
        });
    
        setData(fetchData);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [url])

  return {data, setData};
};

export default useFetch;
