import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PRPartidoComponent } from './p-rpartido/p-rpartido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,PRPartidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
