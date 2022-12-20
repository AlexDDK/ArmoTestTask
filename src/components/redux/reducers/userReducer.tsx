import { IUser } from '../../../interfaces/user.interface';

interface IAction {
    type: string,
    payload: Array<IUser> | number | IUser
}

interface IState {
    value: Array<IUser> 
}

const initialState : IState = {
    value: []
}

const userReducer = (state = initialState.value, action : IAction) => {
    const {type, payload} = action
    switch (type) {
        case 'ADDUSERS':
            return payload;
        case 'DELUSER':
            return state.filter(el => el.id != payload);    
        default:
            return state;
    }
}

export default userReducer