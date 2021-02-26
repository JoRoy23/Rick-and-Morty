 import { IState, IEpisode } from "../providers/SerieProvider";

export enum Actions {
    FETCH_DATA = "fetch_data",
    ADD_TO_FAVORITE = "add_to_favorite",
    REMOVE_TO_FAVORITE = "remove_to_favorite"
};

export type IAction = 
| {type: Actions, payload: IEpisode | IEpisode[]}

export const serieReducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "fetch_data":
            return {...state, episodes: (action.payload as IEpisode[])};

        case "add_to_favorite":
            return {...state, favorites: [...state.favorites, (action.payload as IEpisode)]};

        case "remove_to_favorite":
            const favoritesUpdated = state.favorites.filter(favorite => (
                favorite.id !== (action.payload as IEpisode).id
            ));

            return {...state, favorites: favoritesUpdated};
            
        default:
            return state;
    };
};
