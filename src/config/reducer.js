import { Messages } from '../actions';
import { DEFAULT_STATE } from './defaultState';

export default function(state = DEFAULT_STATE, action) {
    if (action.type === Messages.ADD_SERIES) {
        return {
            ...state,
            series: [...state.series, action.payload],
        };
    }
    return state;
}
