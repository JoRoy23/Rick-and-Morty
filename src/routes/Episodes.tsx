import React from 'react';
import styled from "styled-components";
import Episode from "../components/episodes/Episode";
import { IEpisode } from "../context/providers/SerieProvider";

const EpisodesPage = styled.section`
    padding-top: 100px;
`;

const EpisodesHeader = styled.header`
    padding: 0 10px;

    @media screen and (min-width: 1600px) {
        width: 1440px;
        margin: 0 auto;
    }

    > h1 {
        margin-bottom: 7px;
    }
`;

const EpisodesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    @media screen and (min-width: 769px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1600px) {
        width: 1440px;
        margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
    }
`;

interface IEpisodesProps {
    episodes: IEpisode[]
};

const Episodes = ({ episodes }: IEpisodesProps) => {
    const renderEpisode = () => {
       return episodes.map((episode: IEpisode) => (
           <Episode 
           key={episode.id}
           episode={episode}
           />
       ))
    };

    return (
        <EpisodesPage>
            <EpisodesHeader>
                <h1>Rick and Morty</h1>
                <p>Pick your favorite episodes!!!</p>
            </EpisodesHeader>
            <EpisodesContainer>
                {renderEpisode()}
            </EpisodesContainer>
        </EpisodesPage>
    );
};

export default Episodes;
