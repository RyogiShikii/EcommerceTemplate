import {useState} from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';

const Directory = () => {
    const [sections, setSections] = useState([
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'mens'
        }
      ]);

    const items = sections.map(section => {
        return <MenuItem title={section.title} imageUrl={section.imageUrl} key={section.id} size={section.size} linkUrl={section.linkUrl}/>
    })

    return (
        <div className='directory-menu'>
            {items}
        </div>
    )
}

export default Directory;