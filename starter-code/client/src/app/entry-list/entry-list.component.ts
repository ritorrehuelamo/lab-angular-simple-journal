import { JournalService } from './../services/journal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  journals;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getList()
      .subscribe(j => {
        this.journals = j;
      });
  }

}
