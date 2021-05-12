import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Listing} from "../types";
import {fakeListings} from "../fake-data";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  listing: Listing;
  message: string;
  email: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.listing = fakeListings.find(resp => resp.id === id);
    this.message = `Hi, i am interessted in your ${this.listing.name}`;
    this.email = '';
  }

  send(){
    alert('the message has been send!')
    console.log(this.message);
    console.log(this.email);
    this.router.navigateByUrl('/listings');
  }

}
