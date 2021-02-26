import React from 'react';
import { serieReducer, IAction } from "../reducers/serieReducer";

export type IEpisode = {
    id: number;
    name: string;
    summary: string;
    image: string;
    airdate: string;
    airtime: string;
    number: number;
    season: number;
};

export type IState = {
    episodes: IEpisode[];
    favorites: IEpisode[];
};

const initialState: IState = {
    episodes: [],
    favorites: []
};

export type IProvidedValue = {
    state: IState;
    dispatch: React.Dispatch<IAction>;
};

export const SerieContext = React.createContext<IProvidedValue | null>(null);

export const SerieProvider = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    const [state, dispatch] = React.useReducer(serieReducer, initialState);
    
    return (
        <SerieContext.Provider value={{state, dispatch}}>
            {children}
        </SerieContext.Provider>
    );
};
