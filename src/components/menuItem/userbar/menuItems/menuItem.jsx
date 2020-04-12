import React from 'react';
import './menuItem.css';


function MenuItem(menuItems) {
    return <div className='verticalList'>{menuItems.menuItem.map((category) => {
        return (<div className='listItem'>
            {category.categoryName}
        </div>)
    })}</div>;
};

export default MenuItem;
