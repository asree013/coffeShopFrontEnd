import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id = ''
  constructor(
    private router:Router,
    private activateRout: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.activateRout.params.subscribe(params => {
      this.id = params['id']
    })
  }

}
