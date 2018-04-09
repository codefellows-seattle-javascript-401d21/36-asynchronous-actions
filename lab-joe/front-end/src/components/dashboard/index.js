import React from 'react';
import { connect } from 'react-redux';
import { breedFetchRequest, breedDeleteRequest, breedCreateRequest } from '../../action/breed-action';
import { dogFetchRequest } from '../../action/dog-action';
import BreedForm from '../breed-form';
import BreedItem from '../breed-item';

class Dashboard extends React.Component {
    componentWillMount() {
        console.log('__DASHBOARD__: component will mount');
        this.props.breedsGet();
        this.props.dogsGet();
    }

    render() {
        return (
            <section>
                <h1>Dog List</h1>

                <BreedForm
                    buttonText='create'
                    onComplete={this.props.breedCreate} />

                <ul>
                    {this.props.breeds ?
                        this.props.breeds.map(breedItem => {
                            return <breedItem
                                key={breedItem._id}
                                breedItem={breedItem}
                                dogs={breedItem.dogs}
                                onClick={this.props.breedDelete} />;
                        })
                        :
                        undefined
                    }
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    breeds: state.breeds,
    dogs: state.dogs,
});

const mapDispatchToProps = (dispatch, getState) => ({
    breedsGet: () => dispatch(breedFetchRequest()),
    dogsGet: () => dispatch(dogFetchRequest()),
    breedCreate: breed => dispatch(breedCreateRequest(breed)),
    breedDelete: breed => dispatch(breedDeleteRequest(breed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);