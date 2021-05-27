import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import {ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CreateguardGuard implements CanActivate {
  constructor(private route: Router, private Toastrser: ToastrService,private service: SharedService) { }
  toastinfo(){
    this.Toastrser.info('Your are not allowed', 'Info');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('username')!='admin123'){
    
        this.toastinfo()
        return false;
    
      }
      else{
        return true;
    }}
    
  }
  

