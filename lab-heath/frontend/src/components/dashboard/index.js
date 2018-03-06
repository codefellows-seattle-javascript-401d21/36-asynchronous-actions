import React from 'react';
import {connect} from 'react-redux';
import {
  ownerFetchRequest,
  ownerCreateRequest} from '../../actions/owner-actions';
import OwnerItem from '../owner/owner-item/index.js';
import OwnerForm from '../../components/owner/owner-form/index';


class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchOwners();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>CAT and MATCH: a wonderful plave for cats and owners..... i guess</h1>

        <OwnerForm
          buttonText='create'
          onComplete={this.props.createOwner} />

        {this.props.owners ?
          this.props.owners.map(owner =>
            <div key={owner._id}>
              <OwnerItem owner={owner}/>
            </div>)
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  owners: state.owners,
  cats: state.cats,
});

let mapDispatchToProps = dispatch => ({
  fetchOwners: () => dispatch(ownerFetchRequest()),
  createOwner: album => dispatch(ownerCreateRequest(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);