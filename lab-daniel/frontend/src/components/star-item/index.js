import React from 'react';
import StarForm from '../star-form/';
import {connect} from 'react-redux';
import {starUpdate, starDelete} from '../../actions/star-actions';
import {renderIf} from '../../lib/utils';

class StarItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editing: false,
    };
    Object.getOwnPropertyNames(StarItem.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }
  
  handleEditComplete (state) {
    this.props.starUpdateStar(state);
    this.setState({editing: false});
  }

  handleEditing () {
    this.setState({editing: !this.state.editing});
  }

  handleDelete() {
    this.props.starDeleteStar(this.props.star);
  }

  render() {
    return (
      <li className='star-list-item'>
        <section onDoubleClick={this.handleEditing}>
          <h4>{this.props.star.name}</h4>
          <p>{this.props.star.cost}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </section>
        {renderIf(this.state.editing, <StarForm buttonText='Update' star={this.props.star} onComplete={this.handleEditComplete} onCancel={this.handleEditing}/>)}
      </li>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, getState) => ({
  starUpdateStar: star => dispatch(starUpdate(star)),
  starDeleteStar: star => dispatch(starDelete(star)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarItem);