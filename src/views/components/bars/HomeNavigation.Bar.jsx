import React from 'react';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import {Badge} from 'primereact/badge';
import {Avatar} from 'primereact/avatar';

const HomeNavigationBar = () => {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon}/>
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge}/>}
            {item.shortcut && <span
                className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Ana Sayfa',
            icon: 'pi pi-home',
            url: '#HOME',
        },
        {
            label: 'Galeri',
            icon: 'pi pi-images',
            url: '#GALLERY',
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: '#CONTACT'
        }
    ];

    return (
        <div className="card">
            <Menubar className='justify-between'
                     model={items}
                     start={HomeNavigationBarStart}/>
        </div>
    );
};

const HomeNavigationBarStart = () => {
    return (
        <div className='font-bold'>
            AYŞ BUNGALOV
        </div>
    );
};

export default HomeNavigationBar;
        