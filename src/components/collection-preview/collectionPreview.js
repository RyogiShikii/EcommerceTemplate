import './collectionpreview.styles.scss';

import CollectionItem from '../collection-item/collectionItem';

const CollectionPreview = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    props.items.filter((item,index) => index < 4).map( ({id,...otherItemnProps}) => {
                        return <CollectionItem key={id} {...otherItemnProps} id={id}/>
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview;