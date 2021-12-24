import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public searchEmmit(val: String){
    //vai emitir um valor, que no caso é uma string!
    this.emmitSearch.emit(val);
  }

}
