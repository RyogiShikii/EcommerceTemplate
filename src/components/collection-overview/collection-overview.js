import './collection-overview.styles.scss';

import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collectionPreview';

const CollectionOverview = () => {
    const shop = useSelector(state => state.shop.shop); 
    return (
        <div className='collection-overview'>
            {
                shop.map(item => (
                    <CollectionPreview key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default CollectionOverview;