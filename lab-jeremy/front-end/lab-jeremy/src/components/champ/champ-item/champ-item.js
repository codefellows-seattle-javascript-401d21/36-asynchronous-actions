import React from 'react';
import {connect} from 'react-redux';
import {champUpdateRequest, champDeleteRequest, champCreateRequest} from '../../../actions/champ-actions';
import { renderIf } from '../../../lib/utils';
import ChampForm from '../champ-form/champ-form';

class ChampItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.champ || {};

    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditing() {
    this.setState({editing: !this.state.editing});
  }

  handleUpdate(champ) {
    this.setState({editing: !this.state.editing});
    this.props.ChampItemChampUpdate(champ);
  }

  handleDelete() {
    this.props.ChampItemChampDelete(this.props.champ);
  }

  render(){
    return(
      <li onDoubleClick={this.handleEditing}>
        {renderIf(!this.state.editing, <p>Champ: {this.props.champ.name}</p>)}
        {renderIf(!this.state.editing, <p>Type: {this.props.champ.type}</p>)}
        {renderIf(!this.state.editing, <p>Main lane: {this.props.champ.main_lane}</p>)}
        {renderIf(!this.state.editing, <p>Winrate: {this.props.champ.winrate_percent}%</p>)}
        {renderIf(this.state.editing, <ChampForm
          champ={this.props.champ}
          buttonText="Update champ"
          onComplete={this.handleUpdate}/>)}
        <button type="button" onClick={this.handleDelete}>X</button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  seasons: state.seasons,
  champs: state.champs,
});

const mapDispatchToProps = (dispatch, getState) => ({
  ChampItemChampDelete: champ => dispatch(champDeleteRequest(champ)),
  ChampItemChampUpdate: champ => dispatch(champUpdateRequest(champ)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChampItem);