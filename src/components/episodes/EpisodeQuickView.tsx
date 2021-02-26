import React from 'react';
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import { IEpisode } from "../../context/providers/SerieProvider";

const BackgroundBlur = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0.90;
    background-color: #fff;
`;

const EpisodeQuickViewContainer = styled.div`
    width: 100%;
    max-width: 700px;
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    padding: 40px;
    transform: translate(-50%, -50%);
    box-shadow: 0 15px 10px #777;
;
    background-color: #fff;

    > img {
        width: 100%;
        object-fit: cover;
    }

    > .MuiSvgIcon-root {
        margin-bottom: 10px;
        cursor: pointer;
    }
`;

const EpisodeQuickViewInfo = styled.div`
    > h3 {
        margin: 3px 0 5px 0;
    }

    > p {
        font-size: 12px;
        line-height: 1.5
    }

    > p:not(:last-of-type) {
        font-weight: 700;
    }

    > p:last-of-type {
        margin-top: 7px;
    }
`;

type EpisodeQuickViewProps = {
    episode: IEpisode;
    setIsquickViewOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EpisodeQuickView = ({ episode, setIsquickViewOpen }: EpisodeQuickViewProps) => {
    const handleCloseButton = () => {
        setIsquickViewOpen(false);
    };

    return (
        <React.Fragment>
            <BackgroundBlur></BackgroundBlur>
            <EpisodeQuickViewContainer>
            <CloseIcon onClick={handleCloseButton}/>
            <img src={episode.image} alt="Episode thumbnail" />
                <EpisodeQuickViewInfo>
                    <h3>{episode.name}</h3>
                    <p>Episode launched at {episode.airtime}, {episode.airdate}</p>
                    <p>Season {episode.season}: Episode {episode.number}</p>
                    <p dangerouslySetInnerHTML={{__html: episode.summary}}></p>
                </EpisodeQuickViewInfo>
            </EpisodeQuickViewContainer>
        </React.Fragment>
        
    );
};

export default EpisodeQuickView;
