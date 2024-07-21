import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {CounterProvider, CounterActions} from '@/src/features/counter';
import * as newState from '@/src/newState';

import {Counter} from './Counter';

const dispatchMock = jest.fn();

jest.mock('@/src/newState', () => ({
    __esModule: true,
    ...jest.requireActual('@/src/newState'),
}));

jest.spyOn(newState, 'useDispatch').mockReturnValue(dispatchMock);

describe('components > Counter', () => {
    const initialState = {
        value: 6 as const,
    };

    beforeEach(() => {
        dispatchMock.mockClear();
    });

    it('renders without crashing', () => {
        const {asFragment, getByText} = render(<Counter />, {
            wrapper: ({children}) => (
                <CounterProvider initialState={initialState}>{children}</CounterProvider>
            ),
        });

        expect(asFragment()).toMatchSnapshot();

        expect(getByText(initialState.value)).toBeInTheDocument();
    });

    it('dispatches an action on button click', async () => {
        const {getByRole} = render(<Counter />, {
            wrapper: ({children}) => (
                <CounterProvider initialState={initialState}>{children}</CounterProvider>
            ),
        });

        fireEvent.click(getByRole('button'));

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock.mock.calls[0][0]).toEqual({
            type: CounterActions.INCREMENT_COUNTER,
            value: initialState.value + 1,
        });
    });
});
