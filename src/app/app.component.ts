import { Component } from '@angular/core';
import { ElementService } from './element.service';

@Component({
  selector: 'app.component',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})

export class AppComponent {
  title = 'Practica';
  datos: any[] = [];

  constructor(private elementService: ElementService){}
  ngOnInit(): void {
    this.elementService.getDatos().subscribe(
      (datos) => this.datos = datos,
      (error) => console.error('Error con los datos', error)
    );
  }
}
