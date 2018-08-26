export function selectBook(book){
    //selectBook is an ActionCreator, it needs to return an Action,
    //an onject with type property
    return{
        type: 'BOOK_SELECTED',
        payload: book
    };

}