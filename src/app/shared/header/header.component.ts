import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mostrarSidebar() {
    const sidebar = document.querySelector('#sidebarContainer');

    if (sidebar?.classList.contains('ocultar')) {
      sidebar?.classList.remove('ocultar');
      sidebar?.classList.add('animate__bounceInLeft');
      sidebar?.classList.remove('animate__backOutLeft');
    } else {
      sidebar?.classList.remove('animate__bounceInLeft');
      sidebar?.classList.add('animate__backOutLeft');
      sidebar?.classList.add('ocultar');
    }
  }
}
