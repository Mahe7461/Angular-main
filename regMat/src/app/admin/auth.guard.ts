import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,
Router } from '@angular/router';
//import { AuthService } from '../model/auth.service';
import {SharedService} from 'src/app/shared.service';
@Injectable()
export class AuthGuard {

    constructor(private router: Router,
    private auth: SharedService) { }

    canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        if (!this.auth.adminlogin) {
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
        }
}
