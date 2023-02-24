

import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';


@Injectable({
  providedIn: `root`
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router,
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url) {

    }

    return next.handle(req);
  }
}
