import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../Bussiness';
import { BusinessService } from '../business.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];
  @Input() gridList = false;
  @Input() showOnlyData = false;

  constructor(
    private bs: BusinessService,
    private spinner: NgxSpinnerService) {

  }

  allBussiness(): void {
    this.bs.getAllBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
    })
  }

  deleteBusiness(business: Business) {
    this.spinner.show();
    this.bs.deleteBusiness(business).subscribe(res => {
      setTimeout(() => {
        this.spinner.hide();
        this.allBussiness();
      }, 5000);
    })
  }


  ngOnInit() {
    // this.bs.getAllBusiness().subscribe((data: Business[]) => {
    //   this.businesses = data;
    // });
    this.allBussiness();
    if (this.gridList == true) {
      this.viewToggle('grid');
    } else {
      this.viewToggle('list');
    }
  }

  viewToggle(view) {
    if (view === 'grid') {
      this.gridList = true;
    } else {
      this.gridList = false
    }
  }
}
