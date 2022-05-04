import { useEffect } from 'react';
import './collection-overview.styles.scss';

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
        <div className='collection-overview'>
            {
                allCollections.map(item => (
                    <CollectionPreview key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default CollectionOverview;