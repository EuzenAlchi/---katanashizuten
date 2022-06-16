import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterAventureroComponent } from './register-aventurero/register-aventurero.component';
import { CloudsComponent } from './components/clouds/clouds.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterAdminComponent,
    RegisterAventureroComponent,
    CloudsComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, RouterModule],
})
export class AuthModule {}
