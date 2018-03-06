import React from 'react';
import {connect} from 'react-redux';
import { renderIf } from '../../../lib/utils';
import cat from '../../../reducers/cat';
import CatForm from '../../cat/cat-form/index';
import { catUpdateRequest, catDeleteRequest} from '../../../actions/cat-actions';



class CatItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cat: this.props.cats ? 
        this.props.cats : 
        {
          name: '',
          age: 0,
          color: '',
          categoryId: this.props.categoryId,
        },
      updating: false,

    };

    let memberFunctions = Object.getOwnPropertyNames(CatItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleDelete() {
    this.props.catDelete(this.props.cats);
  }

  handleUpdate(cat) {
    this.props.catUpdate(cat);
    this.setState({updating: false});
  }

  render(){
    return(
      <div className={this.state.updating === true ? 'invis' : 'sub-item'}>
        <div className={this.state.updating === true ? 'expenses' : 'sub-item'} onDoubleClick={(e) => {
          e.stopPropagation();
          this.setState({updating: !this.state.updating});
        }
        }>

          <p>name: {this.props.cats.name}</p>
          <p>age: {this.props.cats.age}</p>
          <p>color: ${this.props.cats.color}</p>
          <button
            className='delete_btn'
            type='button'
            value={this.props.cats._id}
            onClick={this.handleDelete}
          >delete</button>

          {renderIf(this.state.updating === true,
            <CatForm
              cats={this.props.cats}
              buttonText='update'
              onComplete={this.handleUpdate} />
          )}

        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, getState) => ({
  catDelete: cat => dispatch(catDeleteRequest(cat)),
  catUpdate: cat => dispatch(catUpdateRequest(cat)),
});

export default connect(null, mapDispatchToProps)(CatItem);

