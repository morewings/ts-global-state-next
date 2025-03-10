import {useSelector} from '@/src/state';

import {Context} from './Context';
import type {State, Action} from './Reducer';

export const useCountValue = () => {
    return useSelector<State, Action, number>(Context, state => state.value);
};
