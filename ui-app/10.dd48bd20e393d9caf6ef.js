(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{fkVE:function(n,t,o){"use strict";o.r(t),o.d(t,"LoginModule",function(){return d});var e=o("3Pt+"),i=o("fXoL");let r=(()=>{class n{constructor(){}login(n){return"sajan@gmail.com"===n.emailId&&"12345"===n.password}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=i.Fb({token:n,factory:n.\u0275fac}),n})();var c=o("tyNb"),l=o("ofXK");function a(n,t){1&n&&(i.Ob(0,"span",15),i.ic(1,"* Email is not vaild"),i.Nb())}function s(n,t){1&n&&(i.Ob(0,"span",15),i.ic(1,"* Password required"),i.Nb())}let b=(()=>{class n{constructor(n,t,o){this.router=n,this.fb=t,this.loginService=o,this.credentialsInvalid=!1}ngOnInit(){this.credentails=this.fb.group({emailId:["",[e.j.required,e.j.email]],password:["",[e.j.required]]})}login(){this.credentails.valid&&(this.loading=!0,this.loginService.login(this.credentails.value)?this.router.navigate(["/dashboard"],{replaceUrl:!0}):this.credentialsInvalid=!0)}}return n.\u0275fac=function(t){return new(t||n)(i.Jb(c.e),i.Jb(e.c),i.Jb(r))},n.\u0275cmp=i.Db({type:n,selectors:[["virat-app-login"]],features:[i.xb([r])],decls:26,vars:4,consts:[["id","login"],[1,"text-center","text-white","pt-5"],[1,"container"],["id","login-row",1,"row","justify-content-center","align-items-center"],["id","login-column",1,"col-md-6"],["id","login-box",1,"col-md-12"],["id","login-form",1,"form",3,"formGroup"],[1,"text-center","text-info"],[1,"form-group"],["for","username",1,"text-info"],["type","text","formControlName","emailId",1,"form-control"],["class","error-msg",4,"ngIf"],["for","password",1,"text-info"],["type","password","formControlName","password",1,"form-control"],[1,"btn","btn-info","btn-md",3,"disabled","click"],[1,"error-msg"]],template:function(n,t){1&n&&(i.Ob(0,"body"),i.Ob(1,"div",0),i.Ob(2,"h3",1),i.ic(3,"Todo App"),i.Nb(),i.Ob(4,"div",2),i.Ob(5,"div",3),i.Ob(6,"div",4),i.Ob(7,"div",5),i.Ob(8,"form",6),i.Ob(9,"h3",7),i.ic(10,"Login"),i.Nb(),i.Ob(11,"div",8),i.Ob(12,"label",9),i.ic(13,"Username:"),i.Nb(),i.Kb(14,"br"),i.Kb(15,"input",10),i.hc(16,a,2,0,"span",11),i.Nb(),i.Ob(17,"div",8),i.Ob(18,"label",12),i.ic(19,"Password:"),i.Nb(),i.Kb(20,"br"),i.Kb(21,"input",13),i.hc(22,s,2,0,"span",11),i.Nb(),i.Ob(23,"div",8),i.Ob(24,"button",14),i.Vb("click",function(){return t.login()}),i.ic(25,"Submit"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&n&&(i.yb(8),i.Yb("formGroup",t.credentails),i.yb(8),i.Yb("ngIf",t.credentails.get("emailId").touched&&t.credentails.get("emailId").invalid),i.yb(6),i.Yb("ngIf",t.credentails.get("password").touched&&t.credentails.get("password").invalid),i.yb(2),i.Yb("disabled",t.credentails.invalid))},directives:[e.k,e.h,e.e,e.b,e.g,e.d,l.i],styles:["body[_ngcontent-%COMP%]{background-color:#17a2b8;height:100vh}#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]{margin-top:120px;max-width:600px;height:320px;border:1px solid #9c9c9c;background-color:#eaeaea}#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]{padding:10px}#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]   #register-link[_ngcontent-%COMP%]{margin-top:-85px}.error-msg[_ngcontent-%COMP%]{font-size:small;color:red;display:flex;align-items:center}"]}),n})(),d=(()=>{class n{}return n.\u0275mod=i.Hb({type:n}),n.\u0275inj=i.Gb({factory:function(t){return new(t||n)},imports:[[l.b,e.f,e.i,c.f.forChild([{path:"",component:b}])]]}),n})()}}]);