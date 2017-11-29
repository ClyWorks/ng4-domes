import {CanDeactivate} from "@angular/router";
import {StockComponent} from '../stock/stock.component';

export class FocusGuard implements CanDeactivate<StockComponent> {
  canDeactivate(component: StockComponent) {
    if (component.isFocus()) {
      return true;
    } else {
      return window.confirm("这么好看的股票，您不要关注么？");
    }

  }
}
