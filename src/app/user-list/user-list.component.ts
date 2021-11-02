import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { User } from '../models/user'
import { AuthService } from '../services/auth.service'
import swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  p: number = 1
  formateData = {
    page: 1,
    limit: 350,
    search: '',
    phonenumber: '',
  }

  users: User[]
  userData: any[]
  dtOptions: DataTables.Settings = {}
  searchText: any
  searchNumber: number
  id: string
  loading = false
  submitted = false

  constructor(
    private listService: AuthService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
    }
    this.getUserData()
  }
  getUserData() {
    this.listService
      .getUserList(this.formateData)
      .pipe(first())
      .subscribe((res) => {
        this.users = res.data
        this.userData = this.users
      })
  }
  deleteUser(id: any) {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-warning',
      },
      buttonsStyling: true,
    })
    swalWithBootstrapButtons
      .fire({
        showCloseButton: true,
        title: ' Delete Record',
        text: 'Are you sure you want to delete this record ?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.value) {
          const user = this.users.find((x) => x._id === id)
          user.isDeleting = true
          this.listService
            .deleteUserData(id)
            .pipe(first())
            .subscribe(() => {
              this.toastr.success('Delete Successfully', 'Success!')
              this.users = this.users.filter((x) => x._id !== id)
            })
          return
        }
      })
  }

  closeResult = ''

  open(id: any, content: any) {
    this.listService.getById(id).subscribe((x) => {
      console.log(x.data, 'user')
      this.users = x.data
    })
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
        },
      )
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }

  Submit() {
    this.listService
      .updateUserData(this.id, this.users)
      .pipe(first())
      .subscribe(
        (data) => {
          this.toastr.success('Update Successfully', 'Success!')
          this.getUserData()
          this.modalService.dismissAll()
        },
        (error) => {
          this.toastr.error('Not Update Data', 'Error!')
          this.loading = false
        },
      )
  }
}
