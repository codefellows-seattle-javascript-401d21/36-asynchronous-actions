import React from 'react';
import {connect} from 'react-redux';
import {seasonUpdateRequest, seasonDeleteRequest} from '../../../actions/season-actions';
import { renderIf } from '../../../lib/utils';
import SeasonForm from '../season-form/season-form';
import ChampForm from '../../champ/champ-form/champ-form';
import { champCreateRequest } from '../../../actions/champ-actions';
import ChampItem from '../../champ/champ-item/champ-item';

class SeasonItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.season || {};

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.handleAddChamp = this.handleAddChamp.bind(this);
  }

  handleUpdateForm() {
    this.setState({editing: !this.state.editing});
  }

  handleUpdate(season) {
    this.setState({editing: !this.state.editing});
    this.props.SeasonItemSeasonUpdate(season);

  }

  handleDelete() {
    this.props.SeasonItemSeasonDelete(this.state);
  }

  handleAddChamp(champ) {
    this.props.SeasonItemChampCreate(champ);
  }
  
  render(){
    return(
      <div className="season-item" key={this.props.season._id}>
        {renderIf(this.state.editing, <SeasonForm
          season={this.props.season}
          buttonText='Update season'
          onComplete={this.handleUpdate}/>)}
        {renderIf(!this.state.editing, <h3 onDoubleClick={this.handleUpdateForm}>Season: {this.props.season.name}</h3>)}
        <ul>
          {this.props.champs[this.props.season._id] 
            ? 
            this.props.champs[this.props.season._id].map(champ => {
              return <ChampItem key={champ._id} champ={champ}/>;
            })
            :
            undefined
          }
        </ul>
        <ChampForm 
          season={this.props.season}
          buttonText='Add champ'
          onComplete={this.handleAddChamp}/>
        <button className="season-delete-button" type="button" onClick={this.handleDelete}>Delete season</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  seasons: state.seasons,
  champs: state.champs,
});

const mapDispatchToProps = (dispatch, getState) => ({
  SeasonItemSeasonUpdate: season => dispatch(seasonUpdateRequest(season)),
  SeasonItemSeasonDelete: season => dispatch(seasonDeleteRequest(season)),
  SeasonItemChampCreate: champ => dispatch(champCreateRequest(champ)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonItem);