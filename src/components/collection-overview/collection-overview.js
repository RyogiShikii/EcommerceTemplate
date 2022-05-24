import { useEffect } from 'react';
import {CollectionOverviewContainer} from './collection-overview.styles.jsx';

import { useSelector, useDispatch } from 'react-redux';
import CollectionPreview from '../collection-preview/collectionPreview';
import { getShopData } from '../../store/shopSlice';


import { getDataFromFirebase } from '../../firebase/firebase.utils.js';

const CollectionOverview = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShopData());
    },[dispatch]);

    useEffect(() => {
        const createData = async () => {
            await getDataFromFirebase()
        }
        createData();
        console.log('test')
    },[])
    
    const shop = useSelector(state => state.shop.shop);
    const allCollections = Object.keys(shop).map(key => shop[key]);
    //console.log('shop-data',allCollections)
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