import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Router,Routes,RouterModule} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

//Angular Firebase
import {AngularFireModule}  from 'angularfire2';
import {AngularFireDatabase}  from 'angularfire2/database';
import {AngularFireAuth}  from 'angularfire2/Auth';
// Componets import
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
//Service imports
import {ClientService} from './services/client.service'

const appRoutes:Routes = [
  {path:'',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'add-client',component:AddclientComponent}
]

export const firebaseConfig = {
  apiKey: "AIzaSyDy_TR5ILKUlPMxox45tMIjFaRhtVTp21U",
    authDomain: "client-panel-f38cb.firebaseapp.com",
    databaseURL: "https://client-panel-f38cb.firebaseio.com",
    projectId: "client-panel-f38cb",
    storageBucket: "client-panel-f38cb.appspot.com",
    messagingSenderId: "601254800523"

};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientdetailsComponent,
    AddclientComponent,
    EditclientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
        FormsModule,
        FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
