import React, { useContext, useState } from 'react';
import styled from "styled-components";
import { Actions } from "../../context/reducers/serieReducer";
import EpisodeQuickView from "./EpisodeQuickView";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IEpisode } from "../../context/providers/SerieProvider";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { SerieContext } from "../../context/providers/SerieProvider";

const EpisodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    > img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    > h3 {
        margin: 3px 0 5px 0;
        font-size: 17px
    }

    > p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 7px;
        font-size: 12px;
        line-height: 1.5;
    }
`;

const EpisodeIcons = styled.div`
    align-self: flex-end;
    margin-top: auto;

    > .MuiSvgIcon-root {
        cursor: pointer;
        transition: scale 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
            transition: scale 0.3s ease-in-out;
        }

        &:first-child {
            margin-right: 10px;
        }
    }
`;

interface IEpisodeProps {
    episode: IEpisode;
};

const Episode = ({ episode }: IEpisodeProps) => {
    const [isQuickViewOpen, setIsquickViewOpen] = useState(false);
    const { state: { favorites }, dispatch } = useContext(SerieContext)!;

    const handleFavoriteIconClick = () => {
        favorites.includes(episode) ? (
            dispatch({
                type: Actions.REMOVE_TO_FAVORITE,
                payload: episode
            })
        ) : (
            dispatch({
                type: Actions.ADD_TO_FAVORITE,
                payload: episode
            })
        )

        
    };

    const handleMoreInfoClick = () => {
        setIsquickViewOpen(true);
    };

    return (
        <EpisodeContainer>
            <img src={episode.image} alt="Episode thumbnail"/>
            <h3>{episode.name}</h3>
            <p dangerouslySetInnerHTML={{__html: episode.summary}}></p>
            <EpisodeIcons>
                <InfoOutlinedIcon onClick={handleMoreInfoClick} />
                {favorites.includes(episode) ? (
                    <FavoriteIcon onClick={handleFavoriteIconClick}/>
                ) : (
                    <FavoriteBorderIcon onClick={handleFavoriteIconClick}/>
                )}
            </EpisodeIcons>
            {isQuickViewOpen && <EpisodeQuickView episode={episode} setIsquickViewOpen={setIsquickViewOpen}/>}
        </EpisodeContainer>
    );
};

export default Episode;
