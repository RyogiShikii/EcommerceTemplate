import './menu-item.styles.scss';

const MenuItem = (props) => {
    return (
        <div className={`menu-item ${props.size}`} >
            <div className='background' style={{backgroundImage: `url(${props.imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>{props.title.toUpperCase()}</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;