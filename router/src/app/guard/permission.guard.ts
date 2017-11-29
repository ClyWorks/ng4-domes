import {CanActivate} from "@angular/router";

export class PermissionGuard  implements CanActivate{
  canActivate(){
    var haspermissionGuard = Math.random() < 0.5;
    if(!haspermissionGuard){
      console.log("您没有操作权限")
    }

    return haspermissionGuard;
  }
}
