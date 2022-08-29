import {CollectionOverviewContainer} from './collection-overview.styles.jsx';
import Spinner from '../spinner/spinner';

import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collectionPreview';

const CollectionOverview = () => {
    const shopData = useSelector(state => state.shop.shop);
    const isLoading = useSelector(state => state.shop.status);
    const items = Object.keys(shopData).map(key => {
        const data = shopData[key];
        return (
            <CollectionPreview key={key} title={key} items={data} />
        )
    });
    return (
        <CollectionOverviewContainer>
            {isLoading === 'loading'?<Spinner/>:items}
        </CollectionOverviewContainer>
    )
}

export default CollectionOverview;