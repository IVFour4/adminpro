import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {tiulo: 'Dashboard', url: '/dashboard'},
        {tiulo: 'Progressbar', url: '/progress'},
        {tiulo: 'Graficas', url: '/graficas1'}
      ]
    }
  ];

  constructor() { }
}
