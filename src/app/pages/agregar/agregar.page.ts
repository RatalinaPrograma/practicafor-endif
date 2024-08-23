import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  Comuna: string = "";
  Edad: number = 0;
  Usuario: string = "";
  constructor(private router: Router, private activedroute: ActivatedRoute) {
    //realizar la captura de info que viene por navigationExtras
    this.activedroute.queryParams.subscribe();
  }

  ngOnInit() {
  }

}
