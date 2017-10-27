import React, { Component } from 'react';
import './NavMobile.css';
import SwipeableViews from 'react-swipeable-views';
import { slide as Menu } from 'react-burger-menu';
import UserInfo from './UserInfo/UserInfo';
import ListMobile from './ListMobile/ListMobile';
import UserNavMobile from './UserNavMobile/UserNavMobile';
import CerrarSesion from './CerrarSesion/CerrarSesion';
import DropLines from '../DropLines/DropLines';
class NavMobile extends Component {
  render() {
    return (
      <div className="navmobile">
        <Menu bodyClassName={ "menu-open" }>
          <SwipeableViews>
            <div>
                <div className="sidebar-head"><a href="#" id="btn-right"><i className="fa fa-angle-right"></i></a><UserInfo /></div>
                <ListMobile />
                <CerrarSesion />
            </div>
            <div>
                <div className="sidebar-head"><a href="#" id="btn-left"><i className="fa fa-angle-left"></i></a><UserInfo /></div>
                <UserNavMobile />
                <CerrarSesion />
            </div>
          </SwipeableViews>
        </Menu>
        <ul className="pull-right"><DropLines /></ul>
      </div>
      );
  }
}
export default NavMobile;
