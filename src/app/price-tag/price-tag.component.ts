import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrls: ['./price-tag.component.css']
})
export class PriceTagComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  plans = [
    {
      
      name: 'FREE',
      price:  '$0',
      users: 'Single User',
      storage: '5GB Storage',
      projects:  'Unlimited Public Projects',
      access:'Community Access',
      privateProj: 'Unlimited Private Projects',
      phoneSupp:'Dedicated Phone Support',
      domain:'Free SubDomain',
      status:'Monthly Status Report',
      last4: true
    },
    {
      name: 'PLUS',
      price: '$9',
      users:  '5 Users',
      storage: '50GB Storage',
      projects: 'Unlimited Public Projects',
      access: 'Community Access',
      privateProj: 'Unlimited Private Projects',
      phoneSupp: 'Dedicated Phone Support',
      domain:'Free SubDomain',
      status:'Monthly Status Report',
      last4:false,
      last1:true


    },
    {
      name: 'PRO',
      price: '$49',
      users:  'Unlimited Users',
      storage: '150GB Storage',
      projects: 'Unlimited Public Projects',
      access: 'Community Access',
      privateProj: 'Unlimited Private Projects',
      phoneSupp: 'Dedicated Phone Support',
      domain:'Free SubDomain',
      status:'Monthly Status Report'
    }
  ];

}
