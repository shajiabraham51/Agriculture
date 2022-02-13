import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  userDetail: any;

  constructor(private router: Router) { }

  canActivate() {

    const userData = JSON.parse(localStorage.getItem('loggedUserDetails') || "{}");
    if (userData && userData.type) {
      return true;
    } else {
      alert("Not authenticated, Please login again")
      return this.router.navigate([`/login`]);
    }
  }

}
