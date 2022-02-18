import CollectionItem from "../../components/collection-item/collectionItem";
import './collection.styles.scss';

import { useSelector } from "react-redux";

const Collection = (props) => {
    const shop = useSelector(state => state.shop.shop);
    const collections = shop.filter(item => item.routeName === props.match.params.collectionId);
    return (
        <div className='collection-page'>
            <h1 className='title'>{collections[0].title.toUpperCase()}</h1>
            <div className='items'>
                {
                    collections[0].items.map( ({id,...otherItemnProps}) => {
                        return <CollectionItem key={id} {...otherItemnProps} id={id}/>
                    })
                }
            </div>
        </div>
    )
};

export default Collection;