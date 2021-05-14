import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {fakeListings} from "../fake-data";
import {Listing} from "../types";

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  public selectedListing: Listing;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.selectedListing = fakeListings.find(resp => resp.id === id);
  }

  submitted(){
    alert('item was edited')
    this.router.navigateByUrl('/my')
  }

}
