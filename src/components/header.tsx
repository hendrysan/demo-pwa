"use client";

import { Search } from "lucide-react";
import { useState } from "react";

// Import your components (replace paths as needed)
// import Search from '@/components/header/Search';
// import HeaderLogo from '@/components/header/HeaderLogo';
// import HeaderNotice from '@/components/header/HeaderNotice';
// import HeaderLanguage from '@/components/header/HeaderLanguage';
// import ToggleScreen from '@/components/header/ToggleScreen';
// import SvgIcon from '@/components/common/SvgIcon';
// import HeaderBookmark from '@/components/header/HeaderBookmark';
// import ModeToggle from '@/components/header/ModeToggle';
// import HeaderCart from '@/components/header/HeaderCart';
// import HeaderNotification from '@/components/header/HeaderNotification';
// import Profile from '@/components/header/Profile';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleLanguage = () => {
    setIsLanguageOpen((prev) => !prev);
  };

  const clickOutside = () => {
    setIsLanguageOpen(false);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  return (
    <div className="header-wrapper grid grid-cols-12 m-0">
      {/* Search */}
      <form className={`form-inline search-full ${isSearchOpen ? "open" : ""}`}>
        {/* <Search /> */}S
      </form>

      {/* Logo */}
      <div className="header-logo-wrapper hidden col-auto p-0 lg:block">
        {/* <HeaderLogo icon="align-center" type="header" /> */}Logo
      </div>

      {/* Left Header */}
      <div className="left-header col-span-5 xxl:col-span-6 xl:col-span-5 lg:col-span-4 md:col-span-3">
        {/* <HeaderNotice /> */}Notc
      </div>

      {/* Right Navigation */}
      <div className="nav-right col-span-7 xxl:col-span-6 xl:col-span-7 md:col-span-11 float-right right-header p-0 ms-auto">
        <ul className="nav-menus flex items-center gap-4">
          {/* Language */}
          <li
            className="language-nav relative"
            onClick={toggleLanguage}
            onBlur={clickOutside}
          >
            {/* <HeaderLanguage isOpen={isLanguageOpen} /> */}Language
          </li>

          {/* Fullscreen */}
          <li className="fullscreen-body">{/* <ToggleScreen /> */}On/Off</li>

          {/* Search Icon */}
          <li>
            <span className="header-search cursor-pointer">
              {/* <SvgIcon icon="search" onClick={openSearch} /> */}D
            </span>
          </li>

          {/* Bookmark */}
          <li className="onhover-dropdown">{/* <HeaderBookmark /> */}B</li>

          {/* Theme Mode */}
          <li>{/* <ModeToggle /> */}A</li>

          {/* Cart */}
          <li className="cart-nav onhover-dropdown">{/* <HeaderCart /> */}A</li>

          {/* Notifications */}
          <li className="onhover-dropdown">{/* <HeaderNotification /> */}S</li>

          {/* Profile */}
          <li className="profile-nav onhover-dropdown pe-0 py-0">
            {/* <Profile /> */}F
          </li>
        </ul>
      </div>
    </div>
  );
}
