import { useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item';
import {DirectoryMenu} from './directory.styles.jsx';

const Directory = () => {
    const sections = useSelector(state => state.directory.sections);

    const items = sections.map(section => {
        return <MenuItem title={section.title} imageUrl={section.imageUrl} key={section.id} size={section.size} linkUrl={section.linkUrl}/>
    })

    return (
        <DirectoryMenu>
            {items}
        </DirectoryMenu>
    )
}

export default Directory;