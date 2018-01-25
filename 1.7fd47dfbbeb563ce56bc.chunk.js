webpackJsonp([1],{782:function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),e.d(r,"MainPagesModule",function(){return P});var a=e(1),t=e(270),i=e(168),o=e(166),s=e(100),c=e(8),l=e(31),d=e(2),m=e(950),u=e(789),p=e(790),g=e(791),v=e(792),f=e(793),h=e(794),b=e(795),y=e(796),C=e(62),P=function(){function MainPagesModule(){}return MainPagesModule=a.a([Object(d.NgModule)({imports:[m.a,l.FormsModule,i.a,l.ReactiveFormsModule,c.CommonModule],declarations:[u.a,p.a,g.a,v.a,f.a,h.a,b.a,y.a],exports:[i.a],providers:[s.a,o.a,t.a,C.a]})],MainPagesModule)}()},789:function(n,r,e){"use strict";e.d(r,"a",function(){return g});var a=e(1),t=e(270),i=e(62),o=e(51),s=e(166),c=e(100),l=e(31),d=e(169),m=e(39),u=e(2),p=e(171),g=function(){function PageLoginComponent(n,r,e,a,t,i,o){this.router=n,this.authenticateProvider=r,this.eeloading=e,this.eetoast=a,this.errorHandler=t,this.formBuilder=i,this.dataStg=o}return PageLoginComponent.prototype.ngOnInit=function(){this.dataStg.deleteValue("access_token"),this.dataStg.deleteAll(),this.buildForm()},PageLoginComponent.prototype.buildForm=function(){this.loginForm=this.formBuilder.group({username:this.formBuilder.control(null,[l.Validators.required]),password:this.formBuilder.control(null,[l.Validators.required])})},PageLoginComponent.prototype.onSubmit=function(){var n=this;this.eeloading.open(),this.authenticateProvider.login(this.loginForm.value).subscribe(function(r){n.authenticateProvider.loadResidencias(n.loginForm.value.username).subscribe(function(e){if(o.a.rol=r.rol,n.dataStg.setValue("rol",r.rol),o.a.user=r.userName,e){n.dataStg.setValue("residencias",JSON.stringify(e));var a={nombre:e[0].nombre,id:e[0].residenciaID,ic_logo:"assets/images/ee-ger/ic_"+p.a.removeAccents(e[0].nombre)+".png",iw_logo:"assets/images/ee-ger/iw_"+p.a.removeAccents(e[0].nombre)+".png"};n.dataStg.setValue("residenciaObj",JSON.stringify(a)),o.a.brand.id=a.id,o.a.brand.nombre=a.nombre,o.a.brand.ic_logo="assets/images/ee-ger/ic_"+p.a.removeAccents(a.nombre)+".png",o.a.brand.iw_logo="assets/images/ee-ger/iw_"+p.a.removeAccents(a.nombre)+".png"}o.a.userImage="assets/images/ee-ger/us_"+r.userName+".png",n.dataStg.setValue("access_token",r.access_token),n.dataStg.setValue("residencia",o.a.brand.id),n.dataStg.setValue("username",n.loginForm.value.username),n.router.navigate(["/app/dashboard"]),n.eeloading.close()},function(r){n.eeloading.close(),n.errorHandler.handleError(r)})},function(r){if(n.eeloading.close(),r&&r.body&&r.body.description)n.errorHandler.handleError(r);else{var e={body:{description:"Usuario y/o contraseña incorrecto/s"}};n.errorHandler.handleError(e)}})},PageLoginComponent.prototype.removeAccentsXXX=function(n){return n.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u")},PageLoginComponent=a.a([Object(u.Component)({selector:"my-page-login",styles:[],template:e(951)}),a.c("design:paramtypes",[m.f,d.a,c.a,s.a,t.a,l.FormBuilder,i.a])],PageLoginComponent)}()},790:function(n,r,e){"use strict";e.d(r,"a",function(){return i});var a=e(1),t=e(2),i=function(){function PageSignUpComponent(){}return PageSignUpComponent=a.a([Object(t.Component)({selector:"my-page-sign-up",styles:[],template:e(952)})],PageSignUpComponent)}()},791:function(n,r,e){"use strict";e.d(r,"a",function(){return i});var a=e(1),t=e(2),i=function(){function PageForgotPasswordComponent(){}return PageForgotPasswordComponent=a.a([Object(t.Component)({selector:"my-page-forgot-password",styles:[],template:e(953)})],PageForgotPasswordComponent)}()},792:function(n,r,e){"use strict";e.d(r,"a",function(){return i});var a=e(1),t=e(2),i=function(){function Page404Component(){}return Page404Component=a.a([Object(t.Component)({selector:"my-page-404",styles:[],template:e(954)})],Page404Component)}()},793:function(n,r,e){"use strict";e.d(r,"a",function(){return i});var a=e(1),t=e(2),i=function(){function Page500Component(){}return Page500Component=a.a([Object(t.Component)({selector:"my-page-500",styles:[],template:e(955)})],Page500Component)}()},794:function(n,r,e){"use strict";e.d(r,"a",function(){return i});var a=e(1),t=e(2),i=function(){function PageConfirmEmailComponent(){}return PageConfirmEmailComponent=a.a([Object(t.Component)({selector:"my-page-confirm-email",styles:[],template:e(956)})],PageConfirmEmailComponent)}()},795:function(n,r,e){"use strict";e.d(r,"a",function(){return o});var a=e(1),t=e(2),i=e(51),o=function(){function PageLockScreenComponent(){}return PageLockScreenComponent.prototype.ngOnInit=function(){this.AppConfig=i.a},PageLockScreenComponent=a.a([Object(t.Component)({selector:"my-page-lock-screen",styles:[],template:e(957)})],PageLockScreenComponent)}()},796:function(n,r,e){"use strict";e.d(r,"a",function(){return o});var a=e(1),t=e(2),i=e(51),o=function(){function PageMaintenanceComponent(){}return PageMaintenanceComponent.prototype.ngOnInit=function(){this.AppConfig=i.a},PageMaintenanceComponent=a.a([Object(t.Component)({selector:"my-page-maintenance",styles:[],template:e(958)})],PageMaintenanceComponent)}()},950:function(n,r,e){"use strict";e.d(r,"a",function(){return p});var a=e(39),t=e(789),i=e(790),o=e(791),s=e(792),c=e(793),l=e(794),d=e(795),m=e(796),u=[{path:"",children:[{path:"",redirectTo:"/app/dashboard",pathMatch:"full"},{path:"login",component:t.a},{path:"sign-up",component:i.a},{path:"forgot-password",component:o.a},{path:"404",component:s.a},{path:"500",component:c.a},{path:"confirm-email",component:l.a},{path:"lock-screen",component:d.a},{path:"maintenance",component:m.a}]}],p=a.g.forChild(u)},951:function(n,r){n.exports='<div class="page-auth">\r\n  <div class="main-body">\r\n    <div class="card card-white">\r\n      <div class="card-content">\r\n        <div class="logo">\r\n          <a [routerLink]="[\'/\']">Iniciar sesión</a>\r\n        </div>\r\n        <form [formGroup]="loginForm" name="material_login_form" class="mat-form-auth form-validation" (ngSubmit)="onSubmit()">\r\n          <fieldset>\r\n            <div class="form-group">\r\n              <mat-input-container class="full-width mat-icon-left">\r\n                <mat-icon class="material-icons">perm_identity</mat-icon>\r\n                <input required matInput type="email" formControlName="username" placeholder="Usuario">\r\n              </mat-input-container>\r\n            </div>\r\n            <div class="form-group">\r\n              <mat-input-container class="full-width mat-icon-left">\r\n                <mat-icon class="material-icons">lock_outline</mat-icon>\r\n                <input required matInput type="password" formControlName="password" placeholder="Contraseña">\r\n              </mat-input-container>\r\n            </div>\r\n\r\n            <button mat-raised-button type="submit" [disabled]="!loginForm.valid" color="primary" class="float-right">Aceptar</button>\r\n          </fieldset>\r\n        </form>\r\n\r\n        <div class="additional-info">\r\n          <a [routerLink]="[\'/sign-up\']">Sign up</a>\r\n          <span class="divider-h"></span>\r\n          <a [routerLink]="[\'/forgot-password\']">Forgot your password?</a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},952:function(n,r){n.exports='<div class="page-auth">\r\n  <div class="main-body">\r\n    <div class="card card-white">\r\n      <div class="card-content">\r\n        <div class="logo">\r\n          <a [routerLink]="[\'/\']">Sign Up</a>\r\n        </div>\r\n\r\n        <form name="material_signup_form" class="mat-form-auth">\r\n          <fieldset>\r\n            <div class="form-group">\r\n              <mat-input-container class="full-width mat-icon-left">\r\n                <mat-icon class="material-icons">perm_identity</mat-icon>\r\n                <input required matInput type="text" name="name" placeholder="Username">\r\n              </mat-input-container>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <mat-input-container class="full-width mat-icon-left">\r\n                <mat-icon class="material-icons">mail_outline</mat-icon>\r\n                <input required matInput type="email" name="email" placeholder="Email">\r\n              </mat-input-container>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <mat-input-container class="full-width mat-icon-left no-margin-bottom">\r\n                <mat-icon class="material-icons">lock_outline</mat-icon>\r\n                <input required matInput type="password" name="password" placeholder="Password">\r\n              </mat-input-container>\r\n            </div>\r\n            <p class="text-small no-margin" style="padding-left: 36px;">By clicking on sign up, you agree to <a href="javascript:;"><i>terms</i></a> and <a href="javascript:;"><i>privacy policy</i></a></p>\r\n\r\n            <div class="divider divider-mat"></div>\r\n            <button [routerLink]="[\'/\']" mat-raised-button type="button" color="primary" class="float-right">Sign Up</button>\r\n          </fieldset>\r\n        </form>\r\n\r\n        <div class="additional-info">\r\n          <a [routerLink]="[\'/main/login\']">Login</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},953:function(n,r){n.exports='<div class="page-auth">\r\n  <div class="main-body">\r\n    <div class="card card-white">\r\n      <div class="card-content">\r\n        <div class="logo">\r\n          <a [routerLink]="[\'/\']">Reset</a>\r\n        </div>\r\n\r\n        <form name="material_login_form" class="mat-form-auth form-validation">\r\n          <fieldset>\r\n            <div class="form-group">\r\n              <mat-input-container class="full-width mat-icon-left no-margin-bottom">\r\n                <mat-icon class="material-icons">mail_outline</mat-icon>\r\n                <input required matInput placeholder="Email" type="email" name="email">\r\n              </mat-input-container>\r\n            </div>\r\n            <p class="text-center text-small no-margin">\r\n              Enter your email address that you used to register. We\'ll send you an email with your username and a link to reset your password.\r\n            </p>\r\n\r\n            <div class="divider divider-mat"></div>\r\n            <button [routerLink]="[\'/\']" mat-raised-button type="button" color="primary" class="float-right">Reset</button>\r\n          </fieldset>\r\n        </form>\r\n\r\n        <div class="additional-info">\r\n          <a [routerLink]="[\'/main/login\']">Login</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},954:function(n,r){n.exports='<div class="page-err">\r\n  <div class="err-container text-center">\r\n    <div class="err">\r\n      <h1>404</h1>\r\n      <h2>Sorry, page not found</h2>\r\n    </div>\r\n\r\n    <div class="err-body">\r\n      <a mat-raised-button [routerLink]="[\'/\']" class="btn-lg">Go Back to Home Page</a>\r\n    </div>\r\n  </div>\r\n</div>'},955:function(n,r){n.exports='<div class="page-err">\r\n  <div class="err-container text-center">\r\n    <div class="err">\r\n      <h1>500</h1>\r\n      <h2>Sorry, server goes wrong</h2>\r\n    </div>\r\n\r\n    <div class="err-body">\r\n      <a mat-raised-button [routerLink]="[\'/\']" class="btn-lg">Go Back to Home Page</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n'},956:function(n,r){n.exports='<div class="page-auth page-confirm-email">\r\n  <div class="main-body">\r\n    <div class="card card-white">\r\n      <div class="card-content">\r\n        <div class="logo text-center">\r\n          <a [routerLink]="[\'/\']">Confirm Email</a>\r\n        </div>\r\n\r\n        <div>\r\n          <p class="confirm-mail-icon"><span class="material-icons">mail_outline</span></p>\r\n          <p class="text-center text-small no-margin">\r\n            An email has been send to <strong>username@mail.com</strong>. Please check for an email from us and click on\r\n            the included link to reset your password.\r\n          </p>\r\n        </div>\r\n\r\n        <div class="additional-info">\r\n          <span>Return to <a [routerLink]="[\'/main/login\']">Login</a></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},957:function(n,r){n.exports='<div class="page-lock">\r\n\r\n  <div class="lock-centered clearfix">\r\n    <div class="lock-container">\r\n      <section class="lock-box">\r\n        <div class="lock-user">{{AppConfig.user}}</div>\r\n        <div class="lock-img"><img src="assets/images/g1.jpg" alt=""></div>\r\n        <div class="lock-pwd">\r\n          <form>\r\n            <div class="form-group">\r\n              <input type="password" placeholder="Password" class="form-control">\r\n              <a [routerLink]="[\'/\']" class="btn-submit">\r\n                <i class="material-icons">keyboard_arrow_right</i>\r\n              </a>\r\n            </div>\r\n          </form>\r\n        </div>      \r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>'},958:function(n,r){n.exports='<div class="page-maintenance">\r\n\r\n  <header class="top-header text-center">\r\n    <a [routerLink]="[\'/\']" class="logo">{{AppConfig.brand.nombre}}</a>\r\n  </header>\r\n\r\n  <div class="content">\r\n    <div class="main-content text-center">\r\n      <h1>Site is Under Maintenance</h1>\r\n      <p class="text-muted">It will take about 10-15 minutes</p>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="col-xl-4">\r\n        <div class="icon-box ibox-center ibox-lg ibox-light ibox-plain">\r\n          <div class="ibox-icon">\r\n            <i class="material-icons">info_outline</i>\r\n          </div>\r\n          <h3>Why is the Site Down?</h3>\r\n          <p>The site is under maintenance because we are integrating new features to it.</p>\r\n        </div>\r\n      </div>\r\n      <div class="col-xl-4">\r\n        <div class="icon-box ibox-center ibox-lg ibox-light ibox-plain">\r\n          <div class="ibox-icon">\r\n            <i class="material-icons">access_time</i>\r\n          </div>\r\n          <h3>What is the Downtime?</h3>\r\n          <p>Normally, it takes about 10-15 minutes, however sometimes it may need a few hours or more.</p>\r\n        </div>\r\n      </div>\r\n      <div class="col-xl-4">\r\n        <div class="icon-box ibox-center ibox-lg ibox-light ibox-plain">\r\n          <div class="ibox-icon">\r\n            <i class="material-icons">mail_outline</i>\r\n          </div>\r\n          <h3>Do you need Support?</h3>\r\n          <p>You may send us an Email at <a href="mailto:mail@site.com">mail@site.com</a> if you need urgent support.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n'}});
//# sourceMappingURL=1.7fd47dfbbeb563ce56bc.chunk.js.map