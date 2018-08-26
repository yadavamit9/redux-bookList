//state argument is not an applicaion state, only the state this reducer is responsile for

export default function(state=null,action){
    //state=num === first time, if state come as undefined, it will set it to null
    //it will set it to null, only if it is undefined
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}