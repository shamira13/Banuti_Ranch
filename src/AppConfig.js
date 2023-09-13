import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';

const AppConfig = (props) => {
    const [themeColor, setThemeColor] = useState('blue');
    const [checkboxValue, setCheckboxValue] = useState([]);

    const onCheckboxChange = (e) => {
        let selectedValue = [...checkboxValue];
        if (e.checked) selectedValue.push(e.value);
        else selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };

    const componentThemes = [
        { name: 'Amber Accent', file: 'amber', color: '#FFC107' },
        { name: 'Blue Accent', file: 'blue', color: '#2196F3' },
        { name: 'Blue Gray Accent', file: 'bluegray', color: '#607D8B' },
        { name: 'Brown Accent', file: 'brown', color: '#795548' },
        { name: 'Cyan Accent', file: 'cyan', color: '#00BCD4' },
        { name: 'Deep Orange Accent', file: 'deeporange', color: '#FF5722' },
        { name: 'Deep Purple Accent', file: 'deeppurple', color: '#673AB7' },
        { name: 'Green Accent', file: 'green', color: '#4CAF50' },
        { name: 'Indigo Accent', file: 'indigo', color: '#3F51B5' },
        { name: 'Light Blue Accent', file: 'lightblue', color: '#03A9F4' },
        { name: 'Light Green Accent', file: 'lightgreen', color: '#8BC34A' },
        { name: 'Lime Accent', file: 'lime', color: '#CDDC39' },
        { name: 'Orange Accent', file: 'orange', color: '#FF9800' },
        { name: 'Pink Accent', file: 'pink', color: '#E91E63' },
        { name: 'Purple Accent', file: 'purple', color: '#9C27B0' },
        { name: 'Teal Accent', file: 'teal', color: '#00796B' },
        { name: 'Yellow Accent', file: 'yellow', color: '#FFEB3B' }
    ];

    const onConfigButtonClick = (event) => {
        props.onConfigButtonClick(event);
        event.preventDefault();
    };

    const changeComponentTheme = (theme) => {
        changeStyleSheetUrl('theme-css', theme, 'theme-');
        changeStyleSheetUrl('layout-css', theme, 'layout-');
        setThemeColor(theme);
    };

    const changeStyleSheetUrl = (id, value, prefix) => {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + value + '.css';
        let newURL = urlTokens.join('/');
        replaceLink(element, newURL);

        let topbarLogo = document.getElementById('layout-topbar-logo');
        let menuLogo = document.getElementById('layout-menu-logo');

        if (value.localeCompare('yellow') === 0 || value.localeCompare('lime') === 0) {
            topbarLogo.src = 'assets/layout/images/logo-black.png';
            menuLogo.src = 'assets/layout/images/logo-black.png';
        } else {
            topbarLogo.src = 'assets/layout/images/logo-white.png';
            menuLogo.src = 'assets/layout/images/logo-white.png';
        }
    };

    const replaceLink = (linkElement, href) => {
        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();
            const _linkElement = document.getElementById(id);
            _linkElement && _linkElement.remove();
            cloneLinkElement.setAttribute('id', id);
        });
    };

    const getComponentThemes = () => {
        return (
            <div className="layout-themes">
                {componentThemes.map((theme) => {
                    return (
                        <div key={theme.name}>
                            <button type="button" className="p-link" style={{ cursor: 'pointer', backgroundColor: theme.color }} onClick={() => changeComponentTheme(theme.file)} title={theme.file}>
                                {themeColor === theme.file && <i className="pi pi-check"></i>}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };

    const componentThemesElement = getComponentThemes();
    const configClassName = classNames('layout-config', { 'layout-config-active': props.configActive });
    return (
        <div id="layout-config">
            <button type="button" id="layout-config-button" className="layout-config-button p-link" onClick={onConfigButtonClick}>
                <i className="pi pi-plus"></i>
            </button>
            <div className={configClassName} onClick={props.onConfigClick}>

                <h5>New Role</h5>
                <div className="field col-12 md:col-12 ">
                    <label htmlFor="firstname2">Name</label>
                    <InputText id="firstname2" type="text" />
                </div>

                <div className="field col-12">
                    <label htmlFor="firstname2">Description</label>
                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                </div>
                <div className="field col-12 md:col-12 ">
                    <label htmlFor="firstname2">Permissions</label>
                </div>
                <div className="grid">                                    
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption1" name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption1">Export Clients</label>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption2" name="option" value="Los Angeles" checked={checkboxValue.indexOf('Los Angeles') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption2">Edit Clients</label>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption3" name="option" value="New York" checked={checkboxValue.indexOf('New York') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption3">Delete Clients</label>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <div className="field-checkbox">
                                            <Checkbox inputId="checkOption3" name="option" value="New York" checked={checkboxValue.indexOf('New York') !== -1} onChange={onCheckboxChange} />
                                            <label htmlFor="checkOption3">View Clients</label>
                                        </div>
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default AppConfig;
