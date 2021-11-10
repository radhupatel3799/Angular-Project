import { Component, OnInit } from '@angular/core'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {
  startDate = new Date()
  endDate = new Date()
  minDate: any
  today = new Date()
  constructor() {
    const current = new Date()
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    }
  }

  ngOnInit(): void {}
}
