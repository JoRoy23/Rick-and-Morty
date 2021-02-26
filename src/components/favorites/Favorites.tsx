import React from 'react';
import styled from "styled-components";
import Episode from "../episodes/Episode";
import { IEpisode } from "../../context/providers/SerieProvider";

const FavoritesPage = styled.section`
    padding-top: 110px;

    @media screen and (min-width: 1600px) {
        width: 1440px;
        margin: 0 auto;
    }
`;

const FavoritesContainer = styled.div`
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

interface IFavoritesProps {
    favorites: IEpisode[]
};

const Favorites = ({ favorites }: IFavoritesProps) => {
    const renderFavorites = () => {
        return favorites.map(favorite => (
            <Episode 
            key={favorite.id}
            episode={favorite}
            />
        ))
    }

    return (
        <FavoritesPage>
            <h2>Your favorite episodes!!!</h2>
            <FavoritesContainer>
                {renderFavorites()}
            </FavoritesContainer>
        </FavoritesPage>
    );
};

export default Favorites;
