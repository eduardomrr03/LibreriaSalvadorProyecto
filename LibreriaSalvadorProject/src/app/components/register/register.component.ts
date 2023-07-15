import { Component } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

 
  constructor(private registroService: RegistroService) { }

  
  
}
