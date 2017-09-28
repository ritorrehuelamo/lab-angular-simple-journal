import { JournalService } from './../services/journal.service';
import { Component, OnInit } from '@angular/core';

interface LogJournal {
  title: string;
  content: string;
}

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  journalObject;
  constructor(private journalService: JournalService) { }

  ngOnInit() {
  }

  addJournal(journal){
    this.journalObject = {
      title: journal.value.title,
      content: journal.value.content,
    }
    this.journalService.newJournal(this.journalObject)
    .subscribe(res => console.log(res))
    console.log(journal.value)
  }

}
