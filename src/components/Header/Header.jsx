import React from 'react';
import logo from '../../../public/images/Logo.svg'

const Header = () => {
    return (
      <div className="bg-neutral">
        <div className="navbar w-11/12 mx-auto">
          <div className="flex-1">
            <img className="w-[25%]" src={logo} alt="nav logo" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-white">
              <li>
                <a className="hover:text-green-600">Order</a>
              </li>
              <li>
                <a className="hover:text-green-600">Order Review</a>
              </li>
              <li>
                <a className="hover:text-green-600">Manage Inventory</a>
              </li>
              <li>
                <a className="hover:text-green-600">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;