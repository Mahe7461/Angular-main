import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from'@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* service */
import {SharedService} from 'src/app/shared.service';
import {RouteguardGuard} from 'src/app/routeguard.guard';
import {CreateguardGuard} from 'src/app/createguard.guard';
/*components*/
import { AppComponent } from './app.component';
import{EmployeeComponent} from 'src/app/employee/employee.component'
import {AddEditEmpComponent} from 'src/app/employee/add-edit-emp/add-edit-emp.component';
import { ShowEmpComponent} from 'src/app/employee/show-emp/show-emp.component';
import {UserComponent} from 'src/app/user/user.component';
import{CreateadminComponent} from 'src/app/adminpage/createadmin/createadmin.component';
import { RegistrationComponent } from './registration/registration.component';
/*material*/
import {MatButtonModule} from '@angular/material/button';
import{MatTabsModule}from '@angular/material/tabs';
import{MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import { MatDrawerContainer, MatDrawerContent, MatSidenavModule} from  '@angular/material/sidenav';
import { MatCheckboxModule} from  '@angular/material/checkbox';
import { MatRadioModule} from  '@angular/material/radio';
import { MatFormFieldModule} from  '@angular/material/form-field';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AdminpageComponent } from './adminpage/adminpage.component';
import {OrderModule} from 'ngx-order-pipe';
import { AdminComponent } from './adminpage/admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { HomeComponent } from 'src/app/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatMenuItem} from '@angular/material/menu/menu-item';
import {MatMenuTrigger} from '@angular/material/menu/menu-trigger';
import {MatMenu} from '@angular/material/menu';
import { UserdataComponent } from './user/userdata/userdata.component';
import { AdminresetComponent } from './adminreset/adminreset.component';

import {ToastModule} from 'primeng/toast';
import {ToastrModule} from 'ngx-toastr';
import {MessageService} from 'primeng/api';
import {MatTableDataSource} from '@angular/material/table/table-data-source';
import { MatSortModule } from '@angular/material/sort';
import {Ng2OrderModule,Ng2OrderPipe} from 'ng2-order-pipe';
import { QuestionComponent } from './question/question.component';
import { QuAnsComponent } from './question/qu-ans/qu-ans.component';
import { AnsTableComponent } from './question/ans-table/ans-table.component';
import {AddEditAnsTableComponent} from './question/add-edit-ans-table/add-edit-ans-table.component';
import { QuesEditComponent } from './question/ques-edit/ques-edit.component';
import { AnsEditComponent } from './question/ans-edit/ans-edit.component';
import { AddQuestComponent } from './question/add-quest/add-quest.component';
import{MyfilterPipe} from '../app/filterpipe';
import { SubAnsComponent } from './sub-ans/sub-ans.component';
@NgModule({    
  declarations: [
    AppComponent,
    MyfilterPipe,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
    RegistrationComponent,
    LoginpageComponent,
    ForgetPasswordComponent,
    LoginComponent,
    
    ResetPasswordComponent,
    AdminpageComponent,
    AdminComponent,
    AccessDeniedComponent,
    HomeComponent,
    UserComponent,
    UserdataComponent,
    AdminresetComponent,
    CreateadminComponent,
    QuestionComponent,
    QuAnsComponent,
    AnsTableComponent,
    AddEditAnsTableComponent,
    QuesEditComponent,
    AnsEditComponent,
    AddQuestComponent,
    SubAnsComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ////BehaviorSubject,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    //MatDrawerContainer,
    //MatDrawerContent,
    //MatTableDataSource,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,  
    OrderModule,
    MatFormFieldModule,
    //MatMenuModule,
    //MatMenu,
    ToastModule,
    ToastrModule.forRoot(),
    MatSortModule,
    Ng2SearchPipeModule,
    //Ng2OrderModule,
    //Ng2OrderPipe,
    
    
    
  ],
  providers: [SharedService, MessageService,//MatTableDataSource,
    Title],
  bootstrap: [AppComponent]
})

export class AppModule { MatSortModule;MatTableDataSource }
