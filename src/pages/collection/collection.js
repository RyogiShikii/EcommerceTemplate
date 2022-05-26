import CollectionItem from "../../components/collection-item/collectionItem";
import {CollectionContainer, Items} from './collection.styles.jsx';

import { useSelector } from "react-redux";

const Collection = (props) => {
    const shop = useSelector(state => state.shop.shop);
    //console.log(shop)
    const collections = shop[props.match.params.collectionId];
    //console.log(collections)
    return (
        <CollectionContainer>
            <h1>{props.match.params.collectionId.toUpperCase()}</h1>
            <Items>
                {collections.map(({id,...otherItemProps}) => (
                    <CollectionItem key={id} id={id} {...otherItemProps} />
                ))}
            </Items>
        </CollectionContainer>
    )
};

export default Collection;