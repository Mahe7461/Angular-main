import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from 'src/app/employee/employee.component';

import {RegistrationComponent} from 'src/app/registration/registration.component';
import {LoginpageComponent} from 'src/app/loginpage/loginpage.component';
import {ForgetPasswordComponent} from 'src/app/forget-password/forget-password.component';
import {LoginComponent} from 'src/app/login/login.component';
import {AdminComponent} from 'src/app/adminpage/admin/admin.component';

import { AdminpageComponent } from './adminpage/adminpage.component';
import {ResetPasswordComponent} from 'src/app/reset-password/reset-password.component';
import {HomeComponent} from 'src/app/home/home.component';
import { RouteguardGuard } from './routeguard.guard';
import { CreateguardGuard } from './createguard.guard';
import { CreateadminComponent } from './adminpage/createadmin/createadmin.component';
import { UserComponent } from './user/user.component';
import { UserdataComponent } from './user/userdata/userdata.component';
import {AdminresetComponent} from 'src/app/adminreset/adminreset.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { QuestionComponent } from './question/question.component';
import { QuAnsComponent } from './question/qu-ans/qu-ans.component';
import { AnsTableComponent } from './question/ans-table/ans-table.component';
import { AddEditAnsTableComponent } from './question/add-edit-ans-table/add-edit-ans-table.component';
import { QuesEditComponent } from './question/ques-edit/ques-edit.component';
import { SubAnsComponent } from './sub-ans/sub-ans.component';

const routes: Routes = [


{path:'registration', component:RegistrationComponent},
{path:'loginpage', component:LoginpageComponent},
{path:'forget', component:ForgetPasswordComponent},
{path:'login', component: LoginComponent},
{path:'employee', component: EmployeeComponent},
{path:'resetpassword', component: ResetPasswordComponent },
{path:'reset', component: AdminresetComponent},
{path:'quesEdit', component: QuesEditComponent},
{path:'question', component: QuestionComponent},
{path:'Answers', component: QuAnsComponent},
{path:'sub-ans', component: SubAnsComponent},
{path:'AnsLink', component: AnsTableComponent},
{path:'Ansedit', component: AddEditAnsTableComponent},
{path:'home', component: HomeComponent,data:{ title: 'HOME'}},
{path:'adminpage', component:AdminpageComponent,data:{ title: 'ADMIN PAGE'}},
{path:'admin', component:AdminComponent, canActivate:[RouteguardGuard],data:{ title: 'ADMIN'}},
{path:'createadmin', component: CreateadminComponent, 
canActivate:[CreateguardGuard],data:{ title: 'CREATE ADMIN '}
},
{path:'', component:HomeComponent,data:{ title: 'HOME'}},
{path:'user', component:UserComponent,data:{ title: 'USER PAGE'}},
{path:'usertable', component:UserdataComponent,data:{ title: 'USER PAGE '}},
{path:'access', component: AccessDeniedComponent},
{path:'emp', component: ShowEmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
