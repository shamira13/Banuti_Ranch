import React, { useState, useRef, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';


import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';
import AppMenu from './AppMenu';
import AppBreadcrumb from './AppBreadcrumb';
import AppInlineProfile from './AppInlineProfile';

import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Roles from './pages/Roles';
import Cases from './pages/Cases';
import Users from './pages/SystemUsers';
import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import SystemUsers from './pages/SystemUsers';
import MenuDemo from './pages/MenuDemo';
import ViewCase from './pages/ViewCase';
import CaseDemo from './components/menu/CaseDemo';
import InformationBank from './pages/InformationBank';

const App = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuMode, setMenuMode] = useState('slim');
    const [darkMenu, setDarkMenu] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [inlineMenuActive, setInlineMenuActive] = useState(false);
    const [profileMode, setProfileMode] = useState('popup');
    const [configActive, setConfigActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(false);
    const copyTooltipRef = useRef();
    const location = useLocation();

    const navigate = useNavigate();

    let menuClick = false;
    let configClick = false;
    let topbarItemClick = false;
    let inlineMenuClick = false;

    const breadcrumb = [
        { path: '/', parent: 'Dashboard', label: 'Dashboard' },
        { path: '/InformationBank', parent: 'InformationBank', label: 'Information Bank' },
        //{ path: '/Users', parent: 'Users', label: 'Users' },
        // { path: '/Clients', parent: 'Clients', label: 'Clients' },
        // { path: '/Roles', parent: 'Roles', label: 'Roles' },
        // { path: '/MenuDemo', parent: 'Clients', label: 'View Client' },
        // { path: '/ViewCase', parent: 'ViewCase', label: 'View Case' },
        // { path: '/SystemUsers', parent: 'SystemUsers', label: 'System Users' },
        // { path: '/Cases', parent: 'Cases', label: 'Cases' },
        // { path: '/menu', parent: 'UI Kit', label: 'Company Information' },
        // { path: '/menu/seat', parent: 'UI Kit', label: 'Contact Person' },
        // { path: '/menu/payment', parent: 'UI Kit', label: 'Product Lines' },
        // { path: '/menu/confirmation', parent: 'UI Kit', label: 'Communications' },
        // { path: '/menu/case', parent: 'UI Kit', label: 'Cases' },
    ];

    const menu = [
        {
            label: 'Home Page',
            icon: 'pi pi-fw pi-home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Information Bank',
            icon: 'pi pi-fw pi-home',
            items: [{ label: 'Information Bank', icon: 'pi pi-fw pi-home', to: '/InformationBank' }]
        }
        // {
        //     label: 'Accounts',
        //     icon: 'pi pi-fw pi-user',
        //     items: [
        //     { label: 'Clients', icon: 'pi pi-fw pi-shopping-cart', to: '/Clients' },
        //     { label: 'System Users', icon: 'pi pi-fw pi-credit-card', to: '/SystemUsers' },
        // ]
        // },
        // {
        //     label: 'Client Support',
        //     icon: 'pi pi-fw pi-shield',
        //     items: [
        //         { label: 'Cases', icon: 'pi pi-fw pi-sign-in', to: '/Cases' },
        //     ]
        // },
        // {
        //     label: 'System Settings',
        //     icon: 'pi pi-fw pi-cog',
        //     items: [
        //       { label: 'Roles', icon: 'pi pi-fw pi-list', to: '/Roles' },
        //     ]
        // },
       
       
    ];

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    let meta = breadcrumb.find((obj) => {
        return obj.path === location.pathname;
    });

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onMenuModeChange = (e) => {
        setMenuMode(e.value);
        setStaticMenuDesktopInactive(false);
        setOverlayMenuActive(false);

        if (e.value === 'horizontal') {
            setProfileMode('popup');
        }
    };

    const onMenuColorChange = (e) => {
        setDarkMenu(e.value);
    };

    const onProfileChange = (e) => {
        setProfileMode(e.value);
    };

    const onDocumentClick = () => {
        if (!topbarItemClick) {
            setActiveTopbarItem(null);
            setTopbarMenuActive(false);
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
            }
            hideOverlayMenu();
        }

        if (!inlineMenuClick && profileMode === 'inline' && isSlim() && !isMobile()) {
            setInlineMenuActive(false);
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        inlineMenuClick = false;
        configClick = false;
        topbarItemClick = false;
        menuClick = false;
    };

    const onMenuitemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();

            if (isSlim() || isHorizontal()) {
                setMenuActive(false);
            }
        }
    };

    const onRootMenuitemClick = () => {
        setMenuActive((prevMenuActive) => !prevMenuActive);
    };

    const onMenuClick = () => {
        menuClick = true;

        if (inlineMenuActive && !inlineMenuClick) {
            setInlineMenuActive(false);
        }
    };

    const isMenuVisible = () => {
        if (isDesktop()) {
            if (menuMode === 'static') return !staticMenuDesktopInactive;
            else if (menuMode === 'overlay') return overlayMenuActive;
            else return true;
        } else {
            return true;
        }
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;
        setTopbarMenuActive(false);

        if (isOverlay() && !isMobile()) {
            setOverlayMenuActive((prevOverlayMenuActive) => !prevOverlayMenuActive);
        } else {
            if (isDesktop()) {
                setStaticMenuDesktopInactive((prevStaticMenuDesktopInactive) => !prevStaticMenuDesktopInactive);
            } else {
                setStaticMenuMobileActive((prevStaticMenuMobileActive) => !prevStaticMenuMobileActive);
            }
        }

        event.preventDefault();
    };

    const onProfileButtonClick = (event) => {
        setInlineMenuActive((prevInlineMenuActive) => !prevInlineMenuActive);
        inlineMenuClick = true;

        if (isSlim() || isHorizontal()) {
            setMenuActive(false);
        }
    };

    const onTopbarMenuButtonClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive((prevTopbarMenuActive) => !prevTopbarMenuActive);

        hideOverlayMenu();

        event.preventDefault();
    };

    const onTopbarItemClick = (event, item) => {
        topbarItemClick = true;

        if (activeTopbarItem === item) {
            setActiveTopbarItem(null);
        } else {
            setActiveTopbarItem(item);
        }

        event.preventDefault();
    };

    const onConfigClick = () => {
        configClick = true;
    };

    const onConfigButtonClick = () => {
        setConfigActive((prevConfigActive) => !prevConfigActive);
        configClick = true;
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
    };

    const isDesktop = () => {
        return window.innerWidth > 896;
    };

    const isMobile = () => {
        return window.innerWidth <= 896;
    };

    const isOverlay = () => {
        return menuMode === 'overlay';
    };

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    };

    const isSlim = () => {
        return menuMode === 'slim';
    };

    const isStatic = () => {
        return menuMode === 'static';
    };

    const hasInlineProfile = profileMode === 'inline' && !isHorizontal();

    const containerClassName = classNames('layout-wrapper', {
        'layout-static': isStatic(),
        'layout-overlay': isOverlay(),
        'layout-overlay-active': overlayMenuActive,
        'layout-horizontal': isHorizontal(),
        'layout-slim': isSlim(),
        'layout-static-inactive': staticMenuDesktopInactive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-menu-dark': darkMenu,
        'layout-menu-light': !darkMenu,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple
    });

    const menuContainerClassName = classNames('layout-menu-container', { 'layout-menu-container-inactive': !isMenuVisible() });

    return (
        <div className={containerClassName} onClick={onDocumentClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            <AppTopbar
                // topbarMenuActive={topbarMenuActive}
                // activeTopbarItem={activeTopbarItem}
                // onMenuButtonClick={onMenuButtonClick}
                // onTopbarMenuButtonClick={onTopbarMenuButtonClick}
                // onTopbarItemClick={onTopbarItemClick}
                // isHorizontal={isHorizontal()}
                // profileMode={profileMode}
                isMobile={isMobile}
                
            />
            

            <div className={menuContainerClassName} onClick={onMenuClick}>
                <div className="layout-menu-logo">
                    <button className="p-link" onClick={() => navigate('/')}>                        
                        <img id="layout-menu-logo" src="assets/layout/images/logo-white.png" style={{height: '70%'}} library="babylon-layout" alt="babylon-logo" />
                    </button>
                </div>
                <div className="layout-menu-wrapper">
                    <div className="menu-scroll-content">
                        {hasInlineProfile && <AppInlineProfile inlineMenuActive={inlineMenuActive} onProfileButtonClick={onProfileButtonClick} />}
                        <AppMenu model={menu} menuMode={menuMode} active={menuActive} onMenuitemClick={onMenuitemClick} onRootMenuitemClick={onRootMenuitemClick} />
                    </div>
                </div>
            </div>

            <div className="layout-main">
                {/* <AppBreadcrumb meta={meta} /> */}

                <div className="layout-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/InformationBank" element={<InformationBank />} />
                        {/* <Route path="/Users" element={<Users />} />
                        <Route path="/Clients" element={<Clients />} />
                        <Route path="/Cases" element={<Cases />} />
                        <Route path="/SystemUsers" element={<SystemUsers />} />
                        <Route path="/Roles" element={<Roles />} />                       
                        <Route path="/menu/*" element={<MenuDemo />} /> 
                        <Route path="/ViewCase" element={<ViewCase />} />                        */}
                    </Routes>
                </div>

                <AppFooter />
            </div>

            <AppConfig
                configActive={configActive}
                menuMode={menuMode}
                onMenuModeChange={onMenuModeChange}
                isDarkMenu={darkMenu}
                onMenuColorChange={onMenuColorChange}
                profileMode={profileMode}
                onProfileChange={onProfileChange}
                onConfigClick={onConfigClick}
                onConfigButtonClick={onConfigButtonClick}
                rippleActive={ripple}
                onRippleChange={onRippleChange}
                inputStyle={inputStyle}
                onInputStyleChange={onInputStyleChange}
            ></AppConfig>

            {staticMenuMobileActive && <div className="layout-mask"></div>}
        </div>
    );
};

export default App;
