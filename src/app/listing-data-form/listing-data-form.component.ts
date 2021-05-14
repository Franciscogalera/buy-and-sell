import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {Listing} from "../types";

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText;
  @Output() submitted =  new EventEmitter<Listing>();
  @Input() currentName;
  @Input() currentDescription;
  @Input() currentPrice;

  name: string;
  price: string;
  description: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onSubmit(){
    this.submitted.emit( {
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price)
    })
  }

}
