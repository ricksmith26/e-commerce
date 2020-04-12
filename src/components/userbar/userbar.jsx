import React, { Component } from 'react';
import './userbar.css';
import { menuItems } from '../../shared/dev-data';
import MenuItem from './menuItems/index';

class Userbar extends Component {

    render() {
        return <div className='userbarContainer'>
            {
                menuItems.map((menuItem) => {
                    return (
                        <div id="menuName">

                            <div className='menuItemName'>{menuItem.item}</div>
                            {
                                menuItem.categories ?
                                    <div className='vertical-sub-menu'><MenuItem menuItem={menuItem.categories}></MenuItem></div>
                                : null
                            }
                        </div>
                    )
                })
            }
        </div>

    }

};

export default Userbar;
