import SHOP_DATA from './shop.data';
import { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collectionPreview';

const Shop = () => {
    const [data, setData] = useState(SHOP_DATA);
    return (
        <div>
            {
                data.map(({id, ...otherData}) => {
                    return <CollectionPreview key={id} {...otherData}/>
                })
            }
        </div>
    )
}

export default Shop;