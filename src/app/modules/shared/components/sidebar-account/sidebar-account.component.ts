import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-account',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-account.component.html'
})
export class SidebarAccountComponent {
  open = true;
  openSubMenu = false;

  itemsOfMenu: any = [
    { title: 'Dashboard', icon: 'dashboard', link: '/dashboard', submenu: [] },
    { title: 'Usuarios', icon: 'group', link: '/users', submenu: [] },
    { title: 'Roles', icon: 'engineering', link: '/roles', submenu: [] },
    { title: 'Permisos', icon: 'folder_managed', link: '/permissions', submenu: [] },
    // {
    //   title: 'Compras', icon: 'settings', link: '/purchases', submenu: [
    //     { title: 'Mantenimiento', link: '/purchases/maintenance' },
    //     { title: 'Reportes', link: '/purchases/reports' }

    //   ]
    // },
  ]

  toggleOpen() {
    this.open = !this.open;
  }

  toggleOpenSubMenu() {
    this.openSubMenu = !this.openSubMenu;
  }
}
