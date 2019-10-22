import reducers from '../reducers';

const INITIAL_STATE = {
    wishList: ['wish1'],
    users: ['user']
};

it('handles ADD_WISH', () => {
    const nextAction = {
        type: "ADD_WISH",
        wish: "bicycle"
    }

    const reducerUpdatedState = reducers(INITIAL_STATE, nextAction)

    const expectedState = {
        wishList: ['wish1', 'bicycle'],
        users: ['user']
    }
    expect(expectedState).toStrictEqual(reducerUpdatedState)
});
