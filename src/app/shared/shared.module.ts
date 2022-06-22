import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SidebarComponent, HeaderComponent],
})
export class SharedModule {}
