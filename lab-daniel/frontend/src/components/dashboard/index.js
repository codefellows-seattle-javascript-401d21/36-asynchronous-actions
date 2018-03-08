import React from 'react';
import {connect} from 'react-redux';
import {starTypeFetchRequest, starTypeCreateRequest} from '../../actions/starType-actions';
import StarTypeForm from '../starType-form';
import StarTypeItem from '../starType-item';

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.fetchStarType();
  }

  render() {
    return (
      <div className='dashboard-container'>
        <h1>Welcome To My Starboard.</h1>
        <StarTypeForm buttonText='Create' onComplete={this.props.createStarType} />
        {this.props.starTypes ?
          this.props.starTypes.map(starType =>
            <StarTypeItem key={starType._id} starType={starType} />
          )
          :
          undefined

        }
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  starTypes: state.starTypes,
});

let mapDispatchToProps = (dispatch, getState) => ({
  fetchStarType: () => dispatch(starTypeFetchRequest()),
  createStarType: () => dispatch(starTypeCreateRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);