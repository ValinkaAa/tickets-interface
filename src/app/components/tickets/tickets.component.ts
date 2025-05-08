import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  imports: [ReactiveFormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  ticketForm = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    egn: new FormControl("", [Validators.required, Validators.pattern(/^\d{10}$/)]),
    idCardNum: new FormControl("", [Validators.required]),
    mobile: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    country: new FormControl("", [Validators.required]),
    region: new FormControl("", [Validators.required]),
    municipality: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    street: new FormControl(""),
    ticketType: new FormControl("", [Validators.required]),
    validity: new FormControl("", [Validators.required])
  });

  onSubmit()
  {
    alert("Успешно закупихте билета си.")
  }

}

