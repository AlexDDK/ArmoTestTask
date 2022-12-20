
interface IAction {
    type: string,
    payload: number
}

interface IState {
    value: number 
}

const initialState : IState = {
    value: 1
}

const pageReducer = (state = initialState.value, action : IAction) => {
    const {type, payload} = action
    switch (type) {
        case 'SETPAGE':
            return payload;
        case 'NEXTPAGE':
            return state + 1;    
        default:
            return state;
    }
}

export default pageReducer