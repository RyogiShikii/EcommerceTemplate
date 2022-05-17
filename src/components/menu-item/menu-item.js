import {BackgroundContainer, ContentContainer, Title, Subtitle, MenuItemContainer} from './menu-item.styles.jsx';
import { withRouter } from 'react-router';

const MenuItem = (props) => {
    return (
        <MenuItemContainer
            onClick={() => {props.history.push(`${props.match.url}${props.linkUrl}`)}}
        >
            <BackgroundContainer imageUrl={props.imageUrl} />
            <ContentContainer>
                <Title>{props.title.toUpperCase()}</Title>
                <Subtitle>Shop Now</Subtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);