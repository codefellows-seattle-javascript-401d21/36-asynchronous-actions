import React from 'react';
import {connect} from 'react-redux';
import {
  seasonFetchRequest,
  seasonCreateRequest} from '../../actions/season-actions';
import {
  champFetchRequest,
  champCreateRequest} from '../../actions/champ-actions';
import SeasonForm from '../season/season-form/season-form';
import SeasonItem from '../season/season-item/season-item';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchSeasons();
    this.props.fetchChamps();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Hello world - League of Legends things</h1>

        <SeasonForm
          buttonText='Create Season'
          onComplete={this.props.createSeason}/>

        {this.props.seasons ?
          this.props.seasons.map(season => {
            return <SeasonItem key={season._id} season={season}/>;
          })
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  seasons: state.seasons,
});

let mapDispatchToProps = dispatch => ({
  fetchSeasons: () => dispatch(seasonFetchRequest()),
  fetchChamps: () => dispatch(champFetchRequest()),
  createSeason: season => dispatch(seasonCreateRequest(season)),
  // deleteSeason: season => dispatch(seasonDeleteRequest(season)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
