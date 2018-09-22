export const Messages = {
    ADD_SERIE: 'ADD_SERIE',
};

export function addSerie(serie) {
    return {
        type: Messages.ADD_SERIE,
        payload: serie,
    };
}
