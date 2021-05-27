import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { createAction, props } from '@ngrx/store';
import {LoginRequestPayload} from 'src/app/login';
//import {bcrypt} from 'bcryptjs';
import { EmailValidator } from '@angular/forms';
import {ApiResponse} from 'src/app/_models/api'
import { catchError,map,retry } from 'rxjs/operators';
import { ResetRequestPayload } from './reset-request.payload';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";

auth_token:string;

  constructor(private http:HttpClient,private Toastrser:ToastrService) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/department/');
  }
  getQuesList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/question/');
  }
  login(logindata):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.APIUrl +'/api/login/', logindata)//.pipe(
     // retry(1), catchError(this.handleError)
     
    //);
    
    
  }
  adminlogin(logindata):Observable<ApiResponse>{
    debugger;
    return this.http.post<ApiResponse>(this.APIUrl +'/AdminAngular/api/login/', logindata)
    .pipe(
      retry(1), catchError(this.handleError)
    );
    
  }
  
  adminreg(logindata:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.APIUrl +'/api/register/', logindata)
    //.pipe(
      //retry(1), catchError(this.handleError)
      
    //); 
    
  }

  toastsuccess(){
    this.Toastrser.success('Registered successfully', 'Success');
  }
  
  toasterror(){
    this.Toastrser.error('Invaild username or password', 'Error');
  }
  
  
  handleError(error){
    let errorMess='';
    window.localStorage.setItem('status',error.status)
    if(error.error instanceof ErrorEvent){
      errorMess=`Error Code: ${error.status.message}`;
    }else{
      errorMess=`Error code: ${error.status}\nMessage:${error.message}`;

    }
       
    window.localStorage.setItem('error',errorMess);
    return throwError(errorMess);
    
    }
 
  addDepartment(val:any){
    return this.http.post(this.APIUrl + '/emp/department/',val);
    const passw= val.Password
    //bcrypt.genSalt(10, function(err, salt) {
      //bcrypt.hash(passw, salt, function(err, hash) {
          // Store hash in your password DB.
        //  console.log(hash)
      //});
  //});
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl + '/emp/department/',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + '/emp/department/'+val);
  }
  addQuestion(val:any){
    return this.http.post(this.APIUrl + '/emp/question/',val);
    const passw= val.Password
   
  }

  updateQuestion(val:any){
    return this.http.put(this.APIUrl + '/emp/question/',val);
  }

  deleteQuestion(val:any){
    return this.http.delete(this.APIUrl + '/emp/question/'+val);
  }

  addOption(val:any){
    return this.http.post(this.APIUrl + '/emp/option/',val);
    const passw= val.Password
   
  }

  updateOption(val:any){
    return this.http.put(this.APIUrl + '/emp/option/',val);
  }

  deleteOption(val:any){
    return this.http.delete(this.APIUrl + '/emp/option/'+val);
  }



  getOptList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/option/');
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/employee/');
  }


  addEmployee(values:any){
    return this.http.post(this.APIUrl + '/emp/employee/',values);
  }

  updateEmployee(values:any){
    return this.http.put(this.APIUrl + '/emp/employee/',values);
  }

  deleteEmployee(values:any){
    return this.http.delete(this.APIUrl + '/emp/employee/'+values);
  }
  getallemail():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/emp/employee/');

  } 


  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/emp/department/');
  }
  putPassword(values:any){
    return this.http.put(this.APIUrl + '/api/change-password/',values);
  }
  
 
  resetPassword(data:any){
    debugger;
    let Authorizationt= 'token'+window.localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': Authorizationt
      })
       
    };
    httpOptions.headers =
  httpOptions.headers.set('Authorization', Authorizationt);
  const headers = new HttpHeaders({ 'Authorization': 'Bearer my-toke', 'My-Custom-Header': 'foobar' })
    //let reqheader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}).set('Authorization',this.Authorization);
    return this.http.put(this.APIUrl + '/AdminAngular/api/change-password/',data,httpOptions);
  }
  
}