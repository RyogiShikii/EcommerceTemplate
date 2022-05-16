import {CollectionPreviewContainer, PreviewItem} from './collectionpreview.styles.jsx';
import { withRouter } from 'react-router';

import CollectionItem from '../collection-item/collectionItem';

const CollectionPreview = (props) => {
    return (
        <CollectionPreviewContainer>
            <h1
                onClick={
                    () => {
                        props.history.push(`/shop/${props.title.toLowerCase()}`);
                        window.scrollTo(0,0)
                    }
                }
            >
                {props.title.toUpperCase()}
            </h1>
            <PreviewItem>
                {
                    props.items.filter((item,index) => index < 4).map( ({id,...otherItemnProps}) => {
                        return <CollectionItem key={id} {...otherItemnProps} id={id}/>
                    })
                }
            </PreviewItem>
        </CollectionPreviewContainer>
    )
}

export default withRouter(CollectionPreview);