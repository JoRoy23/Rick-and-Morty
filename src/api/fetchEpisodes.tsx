import axios from "axios";
import { Actions } from "../context/reducers/serieReducer";
import { IEpisode, IProvidedValue } from "../context/providers/SerieProvider"

const { REACT_APP_API_URL } = process.env;

export async function fetchEpisodes(serieContextValue: IProvidedValue) {
    try {
      if (REACT_APP_API_URL) {
        const response = await axios.get(REACT_APP_API_URL);
        const episodes: IEpisode[] = response.data._embedded.episodes.map((episode: any ) => {
          return {
            id: episode.id,
            name: episode.name,
            summary: episode.summary,
            image: episode.image.original,
            airdate: episode.airdate,
            airtime: episode.airtime,
            number: episode.number,
            season: episode.season
          };
        });

        serieContextValue.dispatch({
            type: Actions.FETCH_DATA,
            payload: episodes 
          })
      } else {
          console.log("Wrong URL");
      }
    } catch (error) {
      console.log(error);
    }
  };