import React from 'react';
import {connect} from 'react-redux';
import {starCreate, starFetchRequest} from '../../actions/star-actions';
import StarForm from '../star-form';
import StarItem from '../star-item';

class StarList extends React.Component {
  componentWillMount() {
    this.props.fetchStar(this.props.starType);
  }

  render () {
    return (
      <section>
        <StarForm buttonText='Create' starType={this.props.starType} onComplete={this.props.starCreateStar}/>
        {this.props.stars?
          <ul>
            {/* {this.props.stars[this.props.starType].map(star => <StarItem key={star._id} star={star} />)} */}
          </ul>
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  stars: state.stars,
});

const mapDispatchToProps = (dispatch, getState) => ({
  starCreateStar: star => dispatch(starCreate(star)),
  fetchStar: starType => dispatch(starFetchRequest(starType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarList);