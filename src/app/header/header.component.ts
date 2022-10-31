import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() routeSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(siteToShow: string) {
    this.routeSelected.emit(siteToShow);
  }
}
