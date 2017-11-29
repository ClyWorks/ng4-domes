import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mailist',
  templateUrl: './mailist.component.html',
  styleUrls: ['./mailist.component.css']
})
export class MailistComponent implements OnInit {
  private maiId:number;
  constructor( private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.maiId=this.routerInfo.snapshot.queryParams["id"];
  }

}
