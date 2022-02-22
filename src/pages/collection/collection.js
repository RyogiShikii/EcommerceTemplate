import CollectionItem from "../../components/collection-item/collectionItem";
import './collection.styles.scss';

import { useSelector } from "react-redux";

const Collection = (props) => {
    const shop = useSelector(state => state.shop.shop);
    console.log(shop)
    const collections = shop[props.match.params.collectionId];
    console.log(collections.items)
    return (
        <div className='collection-page'>
            <h1 className='title'>{collections.title}</h1>
            <div className='items'>
                {collections.items.map(({id,...otherItemProps}) => (
                    <CollectionItem key={id} id={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
};

export default Collection;