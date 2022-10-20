import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-scaner',
  templateUrl: './scaner.page.html',
  styleUrls: ['./scaner.page.scss'],
})
export class ScanerPage implements OnInit {

  constructor(private router:Router, private loadingCtrl: LoadingController) {}
  
  ngOnInit() {
  }

  //async startScanner(){
     //const result = await BarcodeScanner.startScan();
    // console.log("")
  //}

}
