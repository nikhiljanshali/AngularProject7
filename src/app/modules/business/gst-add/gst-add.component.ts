import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import { Business } from '../Bussiness';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.scss']
})
export class GstAddComponent implements OnInit {
  angForm: FormGroup;
  businesses: Business[];
  //result: Object;
  constructor(
    private fb: FormBuilder,
    private bs: BusinessService,
    private router: Router,
    private spinner: NgxSpinnerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }

  allBussiness(): void {
    this.bs.getAllBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
    })
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    this.spinner.show();
    const obj = {
      _id: '',
      person_name: person_name,
      business_name: busines_name,
      business_gst_number: business_gst_number,
      active: false
    };
    // console.log(obj);
    // console.log(this.angForm.value);
    this.bs.addBusiness(obj).subscribe(data => {
      if (Object.keys(data).length > 0) {
        setTimeout(() => {
          this.spinner.hide();
          this.allBussiness();
          console.info('Record Inserted : ', data);
        }, 2000);
      } else {
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      }
      //this.result = data;
    }, err => {
      setTimeout(() => {
        this.spinner.hide();
        console.log(err);
      }, 2000);
    })
  }

  ngOnInit() {
    // this.bs.getAllBusiness().subscribe((data: Business[]) => {
    //   this.businesses = data;
    // })
    //this.allBussiness();
  }
}
