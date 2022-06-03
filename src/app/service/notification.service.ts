import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {config} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  public showSnackBar(message: string): void{
    // @ts-ignoren
    this.snackBar.open(message,null,{
      duration:2000
    });
  }
}
