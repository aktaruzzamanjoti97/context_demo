// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                users: action.result,
                error: '',
            };
        case 'ERROR':
            return {
                loading: false,
                users: [],
                error: 'There was a problem fetching!',
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => {
                    return user.id !== action.payload;
                })
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case 'EDIT_USER':
            // console.log(action.payload);
            const updateUser = action.payload;


            const updateUsers = state.users.map(user => {
                console.log(typeof (user.id))
                if (user.id === parseInt(updateUser.id)) {
                    return updateUser;
                }
                return user;
                
            })
            return { ...state, users: updateUsers }
        default:
            return state;
    }
}
