import { Component, OnInit } from '@angular/core';
import { JournalService } from './../services/journal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  journal;
  constructor(private router:Router, 
    private route:ActivatedRoute,
    private journalService:JournalService ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getJournalDetails(params['id'])
    })
  }

  getJournalDetails(id){
    this.journalService.get(id)
    .subscribe( journal => {this.journal = journal})
  }

}
