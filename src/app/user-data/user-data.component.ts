import { Component, Input, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { first } from 'rxjs/operators'
import { User } from '../models/user'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  @Input() myData: any
  displayedColumns = ['name', 'username', 'gender', 'email', 'phone_number']
  start: number = 0
  limit: number = 15
  end: number = this.limit + this.start
  selectedRowIndex: number = null
  formateData = {
    page: 1,
    limit: 350,
    search: '',
    phonenumber: '',
  }
  users: User[]
  constructor(
    private listService: AuthService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.listService
      .getUserList(this.formateData)
      .pipe(first())
      .subscribe((res) => {
        this.users = res.data
        console.log(this.users, 'data')
      })
    this.users = this.getTableData(this.start, this.end)
    this.updateIndex()
    // console.log(this.myData, 'hey')
  }

  onTableScroll(event: any) {
    console.log(event)
    const tableViewHeight = event.target.offsetHeight
    const tableScrollHeight = event.target.scrollHeight 
    const scrollLocation = event.target.scrollTop
    const buffer = 50
    const limit = tableScrollHeight - tableViewHeight - buffer
    if (scrollLocation > limit) {
      let data = this.getTableData(this.start, this.end)
      this.users = this.users.concat(data)
      this.updateIndex()
    }
  }

  getTableData(start: any, end: any) {
    return this.users.filter((value, index) => index >= start && index < end)
  }

  updateIndex() {
    this.start = this.end
    this.end = this.limit + this.start
  }
}
