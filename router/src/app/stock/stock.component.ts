import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private ispord: boolean;


  private stockId: number;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 通过[queryParams]="{id:1}"方式传递参数取出方法  快照
    // this.stockId = this.routeInfo.snapshot.queryParams["id"];
    // 通过 {path: 'stock/:id', component: StockComponent}, 和 [routerLink]="['/stock',1] 方式传递参数取出方法 快照
    // this.stockId = this.routeInfo.snapshot.params["id"]
    // 当前组件路由当前组件  用订阅的方式取出参数才会重新赋值给this.id 用快照的方式  不会重新赋值
    this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"]);
    this.ispord = this.routeInfo.snapshot.data[0]["ispod"];

  }


}
