import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-first',
  templateUrl: './add-first.component.html',
  styleUrls: ['./add-first.component.css'],
})
export class AddFirstComponent implements OnInit {
  second = false
  third = false
  dataList = [
    {
      id: 1,
      name: 'abc',
      age: 20,
    },
    {
      id: 2,
      name: 'Riya',
      age: 30,
    },
    {
      id: 3,
      name: 'Radhu',
      age: 20,
    },
    {
      id: 4,
      name: 'Niru',
      age: 20,
    },
    {
      id: 5,
      name: 'xyz',
      age: 50,
    },
    {
      id: 6,
      name: 'Siya',
      age: 30,
    },
    {
      id: 7,
      name: 'Kriya',
      age: 50,
    },
    {
      id: 8,
      name: 'Rey',
      age: 30,
    },
    {
      id: 9,
      name: 'Rahil',
      age: 30,
    },
    {
      id: 10,
      name: 'rst',
      age: 50,
    },
  ]
  check = 30
  constructor() {}

  ngOnInit(): void {
    let filterData = this.dataList.filter((value, index) => {
      return value.age === this.check
    })
    console.log(filterData.length, 'CONTAINS')
    this.dataList.map((x: any) => {
      if (x.age === this.check) {
        return (x['Status'] = true)
      } else {
        return (x['Status'] = false)
      }
    })
    console.log(this.dataList, 'DataList==========')
  }

  SecondPage() {
    this.second = true
    this.third = false
  }

  ThirdPage() {
    this.third = true
    this.second = false
  }
}
