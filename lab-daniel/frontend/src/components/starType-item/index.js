import React from 'react';
import StarTypeForm from '../starType-form/';
import StarList from '../star-list/';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import {starTypeUpdate, starTypeDelete} from '../../actions/starType-actions';

class StarTypeItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {editing: false};
    Object.getOwnPropertyNames(StarTypeItem.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }
  
  handleEditing () {
    this.setState({editing: !this.state.editing});
  }

  handleDelete () {
    this.props.starTypeItemStarTypeDelete(this.props.starType);
  }

  render() {
    return (
      <section>
        <div className='starType-item' onDoubleClick={this.handleEditing}>
          <h3>Star Type: {this.props.starType.name}</h3>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <div className='star-list'>
          {renderIf(this.state.editing, <StarTypeForm starType={this.props.starType} buttonText='Update' onComplete={this.props.starTypeItemStarTypeUpdate} onCancel={this.handleEditing}/>)}
          <StarList starType={this.props.starType._id}/>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  starTypes: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  starTypeItemStarTypeUpdate: starType => dispatch(starTypeUpdate(starType)),
  starTypeItemStarTypeDelete: starType => dispatch(starTypeDelete(starType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarTypeItem);