import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  wikipedia: any = []
  constructor(public servicio: WikipediaService){}

  buscarWikipedia(){
    let input: any = document.getElementById('buscar')
    
    let url = "https://es.wikipedia.org/w/api.php?action=opensearch&search="+input.value+"&limit=10&namespace=0&format=json&origin=*";

    this.servicio.getWikipedia(url).subscribe(wikipedia => {
      this.wikipedia = wikipedia[1];
      console.log(wikipedia);
    });
  }

  verContribuidores(){

  }
}
