import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  constructor(private route: ActivatedRoute){}

  titleForm = this.route.snapshot.params['title'];

  postoGasolina = new FormControl('');
}


