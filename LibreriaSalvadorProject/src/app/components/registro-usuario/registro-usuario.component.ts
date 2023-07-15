import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Create } from 'src/app/interfaces/create';
import { CreateServiceService } from 'src/app/services/create-service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent{
  /*
  myForm!: FormGroup;
  color = "accent";

  constructor(
    private fb: FormBuilder,
    private createService: CreateServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      peso: ['', [Validators.required, Validators.maxLength(3)]],
      altura: ['', [Validators.required, Validators.maxLength(3)]],
    })
  }

  saveCreate() {

    const create: Create = {
      id: 0,
      name: this.myForm.get('name')?.value,
      password: this.myForm.get('password')?.value,
      email: this.myForm.get('email')?.value,
      peso: this.myForm.get('peso')?.value,
      altura: this.myForm.get('altura')?.value
    };

    this.createService.addCreate(create)
      .subscribe({
        next: (data) => {
          this.snackBar.open("Registro OK", '', {
            duration: 3000,
          })
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
 */ 
}
