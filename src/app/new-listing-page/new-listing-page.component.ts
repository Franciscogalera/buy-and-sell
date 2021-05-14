import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  name: string;
  price: string;
  description: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.name, this.description, this.price);
    alert('item was added');
    this.router.navigateByUrl('/my')
  }

}
