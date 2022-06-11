import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterAventureroComponent } from './register-aventurero/register-aventurero.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterAdminComponent,

    RegisterAventureroComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
