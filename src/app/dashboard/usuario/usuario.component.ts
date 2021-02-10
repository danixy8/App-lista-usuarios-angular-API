import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  categories: string;
  loading = true;
  constructor(private aRoute: ActivatedRoute,
              private usuarioService: UsuarioService) {

    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      const {name, image, price, description, categories} = data.data;
      this.name = name;
      this.image = image;
      this.price = price;
      this.description = description;
      this.categories = categories.map(category => category.name);
      this.loading = false;
    });
  }

}
