import React, { useReducer, createContext } from 'react';
import { serieReducer, IAction } from "../reducers/serieReducer";

export interface IEpisode {
    id: number;
    name: string;
    summary: string;
    image: string;
    airdate: string;
    airtime: string;
    number: number;
    season: number;
};

export interface IState {
    episodes: IEpisode[];
    favorites: IEpisode[];
};

const initialState: IState = {
    episodes: [],
    favorites: []
};

export interface IProvidedValue {
    state: IState;
    dispatch: React.Dispatch<IAction>;
};

export const SerieContext = createContext<IProvidedValue | null>(null);

export const SerieProvider = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
    const [state, dispatch] = useReducer(serieReducer, initialState);
    
    return (
        <SerieContext.Provider value={{state, dispatch}}>
            {children}
        </SerieContext.Provider>
    );
};
