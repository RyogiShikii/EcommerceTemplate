import CollectionOverview from "../../components/collection-overview/collection-overview";
import Collection from "../collection/collection";

import { Route } from "react-router";

const Shop = ({match}) => {
    return (
        <div>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}

export default Shop;