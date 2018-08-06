const initialState = {
    isLoged: false
};

const reducer=(state = initialState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESSFULY': return {
            ...state,
            isLoged: true
        }
        default: return state;
    }
}

export default reducer;