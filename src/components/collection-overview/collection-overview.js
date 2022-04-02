import './collection-overview.styles.scss';

import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collectionPreview';

const CollectionOverview = () => {
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