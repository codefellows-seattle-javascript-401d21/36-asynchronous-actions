import React from 'react';
import {connect} from 'react-redux';
import { renderIf } from '../../../lib/utils';
import OwnerForm from '../owner-form/index';
import { ownerDeleteRequest, ownerUpdateRequest } from '../../../actions/owner-actions';

import CatItem from '../../cat/cat-item';
import CatForm from '../../cat/cat-form/index';
import { catCreateRequest } from '../../../actions/cat-actions';



class OwnerItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.owners ?
      this.props.owners :
      {
        name: '',
        updating: false,
      };

    let memberFunctions = Object.getOwnPropertyNames(OwnerItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleDelete() {
    this.props.OwnerDelete(this.props.owner);
  }

  handleUpdate(owner) {
    this.props.OwnerUpdate(owner);
    this.setState({updating: false});
  }

  render(){

    return(
      <div className={this.state.updating === true ? 'invis' : undefined}>
        <section className={this.state.updating === true ? 'items' : 'normal'} onDoubleClick={() => this.setState({updating: !this.state.updating})}>

          <h2>Owner Name: {this.props.owner.name}</h2>

          <button
            className='delete_btn'
            type='button'
            value={this.props.owner._id}
            onClick={this.handleDelete}
          >delete</button>

          {renderIf(this.state.updating === false,
            <CatForm
              ownerId={this.props.owner._id}
              buttonText='Add Cat'
              onComplete={this.props.catCreate} />
          )}

          {renderIf(this.state.updating === true,
            <OwnerForm 
              owners={this.props.owner}
              buttonText='update'
              onComplete={this.handleUpdate} />
          )}
          
          {this.props.cats[this.props.owner._id] ?
            this.props.cats[this.props.owner._id].map(cats => 
              <CatItem key={cats._id} cats={cats}/>) : undefined
          }

        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats,
  
});

const mapDispatchToProps = (dispatch, getState) => ({
  OwnerDelete: owner => dispatch(ownerDeleteRequest(owner)),
  OwnerUpdate: owner => dispatch(ownerUpdateRequest(owner)),

  catCreate: cat => dispatch(catCreateRequest(cat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnerItem);
