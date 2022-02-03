import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collectionPreview';

const Shop = () => {
    const shop = useSelector(state => state.shop.shop)
    return (
        <div>
            {
                shop.map(({id, ...otherData}) => {
                    return <CollectionPreview key={id} {...otherData}/>
                })
            }
        </div>
    )
}

export default Shop;