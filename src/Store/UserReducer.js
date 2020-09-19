import {v4 as uuid} from 'uuid';

const initialState = {
    users: [
        {
        id: '1',    
        name:"Nicki Kay",
        email: "nickynic@gmail.com",
    },

    { 
        id: '2',
        name:"Benny Zed",
        email: "Benzy@gmail.com",
    },
    
    {
        id: '3',
        name:"Ron Nald",
        email: "Ronald@gmail.com",
    },

    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let newUser = {
                id: uuid(),
                name: action.payload.name,
                email: action.payload.email,
            };
            return { ...state, users: [...state.users, newUser] };
        case "DELETE_USER":
            const filteredUsers = state.users.filter(user => user.id !== action.payload)
            return { ...state, users: filteredUsers }
        case "EDIT_USER":
            const updatedUserInfo = state.users.map (user => {
                if (user.id === action.user.id){
                    return {...user, ...action.updated_info}
                } else {
                    return user;
                }
            });
            return {...state, users: updatedUserInfo}
        default:
            return state;
    }

};

export default usersReducer