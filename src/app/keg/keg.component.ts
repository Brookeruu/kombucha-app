import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {
  public total: number = 124;
  constructor(public brand: string, public name: string, public price: number) { }

  KegComponent.editKeg() {
    this.total -=1;
  }

  // KegComponent.priceColor(currentKombucha){
  //   if (currentKombucha.price < 4){
  //     return "bg-info";
  //   } else {
  //     return "bg-success";
  //   }
  // }

  ngOnInit() {
  }
}
