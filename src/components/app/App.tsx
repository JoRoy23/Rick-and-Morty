import React, { useEffect, useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Actions } from "../../context/reducers/serieReducer";
import Episodes from "../../routes/Episodes";
import Favorites from "../../routes/Favorites";
import { IEpisode } from "../../context/providers/SerieProvider";
import { IEpisodeResponse } from "../../api/useFetch";
import Navbar from "../navbar/Navbar";
import { SerieContext } from "../../context/providers/SerieProvider";
import useFetch from "../../api/useFetch";

const AppBody = styled.main`
  padding: 0 30px 10px;
`;

const { REACT_APP_API_URL } = process.env;

const App = () => {
  const { state: { episodes }, state: { favorites }, dispatch} = useContext(SerieContext)!;
  const { data } = useFetch(REACT_APP_API_URL!);

  useEffect(() => {
    const episodes = data.map((episode: IEpisodeResponse): IEpisode => ({
      id: episode.id,
      name: episode.name,
      summary: episode.summary,
      image: episode.image.original,
      airdate: episode.airdate,
      airtime: episode.airtime,
      number: episode.number,
      season: episode.season
    }));

    dispatch({
      type: Actions.FETCH_DATA,
      payload: episodes 
    })
  }, [data])

  return (
    <AppBody>
      <Navbar />
      <Switch>
        <Route 
        exact 
        path="/" 
        render={() => {return episodes.length !== 0 && <Episodes episodes={episodes} />}}
        />
        <Route 
        exact 
        path="/favorites" 
        render={() => <Favorites favorites={favorites} />} 
        />
      </Switch>
    </AppBody>
  );
};

export default App;
