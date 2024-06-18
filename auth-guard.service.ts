// import { Injectable } from '@angular/core';
// import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { RestService } from '../rest.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService{
//   private readonly urlSkipList: string[] = [
//     "/leave-details",
   
//   ];

//   constructor(
//     private router: Router,
//     private restService: RestService,
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean | UrlTree> {
//     const urlName = state.url;
//     // if (sessionStorage.getItem('employeeId')) {
//       // if (urlName != null && !this.checkPartialUrlMatch(urlName)) {
//       //   return this.roleAccessService
//       //     .getRoleAccess(
//       //       urlName,
//       //       sessionStorage.getItem('employeeId'),
//       //       sessionStorage.getItem('roleId')
//       //     )
//       //     .then((accessControl: any) => {
//       //       if (accessControl != null && accessControl.moduleAccess == 1) {
//       //         return true;
//       //       } else {
//       //         this.notify.showError('Access Denied', '');
//       //         this.logOut();
//       //         return false;
//       //       }
//       //     });
//       // } else {
//       //   return Promise.resolve(true);
//       // }
//     // }

//     // Redirect to the login page
//     this.router.navigateByUrl('/login');
//     return Promise.resolve(false);
//   }

//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Promise<boolean | UrlTree> {
//     return this.canActivate(childRoute, state);
//   }

//   private checkPartialUrlMatch(url: string): boolean {
//     return this.urlSkipList.some((item) => url.includes(item));
//   }
//   // logOut(): void {
//   //   const email = sessionStorage.getItem('email');
//   //   if (email) {
//   //     this.restService
//   //       .getModel(`/screen/logout/${email}/${'denied'}`)
//   //       .subscribe({
//   //         next: () => {
//   //           this.restService.setUserLoggedIn(false);
//   //           sessionStorage.clear();
//   //           this.router.navigateByUrl('/403-page');
//   //         },
//   //         error: (err) => console.error('An error occurred:', err),
//   //       });
//   //   } else {
//   //     console.error('Email Not Found In Session Storage.');
//   //     this.router.navigateByUrl('/403-page');
//   //   }
//   // }
// }
