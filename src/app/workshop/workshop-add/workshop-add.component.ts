import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkshopModule } from '../workshop.module';
import { WorkshopEntry } from '../shared/model/model';
import { FormControl } from '@angular/forms';
import { WorkshopService } from '../shared/services/workshop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ws-workshop-add',
  templateUrl: './workshop-add.component.html',
  styleUrls: ['./workshop-add.component.css']
})
export class WorkshopAddComponent implements OnInit {

  urlPattern=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;
  entry: WorkshopEntry = {};
  @ViewChild('form') form:FormControl;

  constructor(private workshopService: WorkshopService, private router: Router) { }

  ngOnInit(): void {
  }

  submit():void{
    if(this.form.valid){
      this.workshopService.addWorkshopEntry(this.entry);
      this.router.navigate(['/']);
    }
  }

  cancel():void{
    this.router.navigate(['/']);
  }

}
