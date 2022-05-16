import { useEffect } from 'react';
import {CollectionOverviewContainer} from './collection-overview.styles.jsx';

import { useSelector, useDispatch } from 'react-redux';
import CollectionPreview from '../collection-preview/collectionPreview';
import { getShopData } from '../../store/shopSlice';

const CollectionOverview = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShopData());
    },[dispatch]);

    const shop = useSelector(state => state.shop.shop);
    const allCollections = Object.keys(shop).map(key => shop[key]);
    //console.log(allCollections)
    return (
        <CollectionOverviewContainer>
            {
                allCollections.map(item => (
                    <CollectionPreview key={item.id} {...item} />
                ))
            }
        </CollectionOverviewContainer>
    )
}

export default CollectionOverview;