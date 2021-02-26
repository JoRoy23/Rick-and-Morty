import React, { useEffect, useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Episodes from "../../routes/Episodes";
import Favorites from "../../routes/Favorites";
import Navbar from "../navbar/Navbar";
import { fetchEpisodes } from "../../api/fetchEpisodes";
import { SerieContext } from "../../context/providers/SerieProvider";

const AppBody = styled.main`
  padding: 0 30px 10px;
`;

const App = () => {
  const serieContextValue = useContext(SerieContext)!;
 
  useEffect(() => {
    fetchEpisodes(serieContextValue);
  }, [])

  return (
    <AppBody>
      <Navbar />
      <Switch>
        <Route 
        exact 
        path="/" 
        render={() => <Episodes episodes={serieContextValue.state.episodes} />}
        />
        <Route 
        exact 
        path="/favorites" 
        render={() => <Favorites favorites={serieContextValue.state.favorites} />} 
        />
      </Switch>
    </AppBody>
  );
};

export default App;
