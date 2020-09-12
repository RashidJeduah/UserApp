const initialState = {
    users: [
        {
        name:"Nicki Kay",
        email: "nickynic@gmail.com",
    },

    { 
        name:"Benny Zed",
        email: "Benzy@gmail.com",
    },
    
    {
        name:"Ron Nald",
        email: "Ronald@gmail.com",
    },

    ]
};

const usersReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let newUser={
                name:action.payload.name, 
                email:action.payload.email, 
            };
            return {...state, users: [...state.users, newUser]};    
        default:
            return state;
    }

};

export default usersReducer