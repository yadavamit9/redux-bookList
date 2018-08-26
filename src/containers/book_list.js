import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=> {
            return (
                <li 
                    key={book.title}
                    onClick={()=> this.props.selectBook(book)} 
                    className="list-group-item" > 
                    {book.title}
                </li>
            );
        });
    }


render()
{
    return (
        <ul className= "list-group col-sm-4" >
        {this.renderList()}
        </ul>

    )
}
}
function mapStateToProps(state)
{
    //whatever is returned will show up as props inside of booklist
    return {
        books: state.books

        //books can be accessed as props in this.props 
    };
}

//Anything returned form this fuction will end up as props inside BookList container

function mapDispatchToProps(dispatch){
    //whenever select book is called, the result should be passed to all of our reducers 
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//promote BookList from component to a container - it needs to know about this new dispatch
// method selectBook. Make it avaiable as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);

//Promote componenet as container => when component need to be aware of application state (reduc side of app)

//we do this by adding 3 things in container --> connect from 'react-redux'
// import {connect} from 'react-redux';
//function mapStateToProps(state)
//export default connect(mapStateToProps)(BookList);


// connect --> BookList --> to redux store here
//export default connect(mapStateToProps)(BookList);

//now BookList is connnected to redux store



//container is a normal react component that gets bonded to the applicaion state  (we connect the 2 here)