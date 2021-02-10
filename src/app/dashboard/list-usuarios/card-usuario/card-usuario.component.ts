import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  imgUrl: string;
  name: string;
  price: string;
  id: number;
  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.user.image;
    this.name = this.user.name;
    this.price = this.user.price;
    this.id = this.user.id;
    // this.imgUrl = this.user._links.avatar.href;
  }

}
