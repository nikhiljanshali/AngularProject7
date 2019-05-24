import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  //isSubscribed = false;

  contactsMethods = [
    { id: 1001, name: 'Email' },
    { id: 1002, name: 'Phone' }
  ];
  fakeMethods = [
    { id: 2001, name: 'Subscribed' },
    { id: 2002, name: 'Unsubscribed' },
  ]

  log(x) { console.log(x); }
  submit(f) {
    console.log(f);
    console.log(f.value);
  }

}
