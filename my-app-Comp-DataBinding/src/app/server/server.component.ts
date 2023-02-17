import { Component, Input } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  // @Input() elemento: {
  //   nome: String,
  //   tipo: String,
  //   descrizione: String
  // }

  @Input() elemento: Server;
}
