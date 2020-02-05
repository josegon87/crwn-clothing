import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from './collection.component'



const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionContainer;