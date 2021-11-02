import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { first } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  users: any = {}
  id: string
  isAddMode: boolean
  loading = false
  submitted = false
  imageUrl: any = 'assets/images/add.png'
  editFile: boolean = true
  removeUpload: boolean = false
  @ViewChild('fileInput') el: ElementRef
  @ViewChild('myForm', { static: false }) myForm: NgForm
  imageFile: any
  dropdownList: any = []
  selectedItems: any = []
  dropdownSettings = {}

  files: File[] = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: AuthService,
    private toastr: ToastrService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.isAddMode = !this.id

    if (!this.isAddMode) {
      this.userService.getById(this.id).subscribe((x) => {
        this.users = x.data
      })
    }

    // Multiselect Dropdown
    this.dropdownList = [
      { id: 1, itemName: 'Singing' },
      { id: 2, itemName: 'Dancing' },
      { id: 3, itemName: 'Reading' },
      { id: 4, itemName: 'Playing' },
      { id: 5, itemName: 'Traveling' },
    ]
    this.selectedItems = [{ id: 2, itemName: 'Dancing' }]
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Your Hobby',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
    }
  }

  Submit() {
    if (this.isAddMode) {
      // FormData
      // let formData = new FormData();
      // formData.append('name',this.users.name);
      // formData.append('username',this.users.username);
      // formData.append('phone_number',this.users.phone_number);
      // formData.append('email',this.users.email);
      // formData.append('password',this.users.password);
      // formData.append('file',this.file);
      // formData.forEach((value,key) => {
      //   console.log(key+" => "+value)
      // });

      // Inser user
      this.userService
        .createUser(this.users)
        .pipe(first())
        .subscribe(
          () => {
            this.toastr.success('User Register Successfully', 'Success!')
            this.router.navigateByUrl('/login')
          },
          (error) => {
            this.toastr.error('Not Register', 'Error!')
          },
        )
    } else {
      // Update User
      this.userService
        .updateUserData(this.id, this.users)
        .pipe(first())
        .subscribe(
          (data) => {
            this.toastr.success('Update Successfully', 'Success!')
            this.router.navigateByUrl('/user-list')
          },
          (error) => {
            this.toastr.error('Not Update Data', 'Error!')
            this.loading = false
          },
        )
    }
  }

  //Image Upload
  uploadFile(event: any) {
    let reader = new FileReader() // HTML5 FileReader API
    this.imageFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(this.imageFile)
      // console.log(this.file,"file")
      reader.onload = () => {
        this.imageUrl = reader.result
        // console.log(this.imageUrl,"imageUrl")
        this.editFile = false
        this.removeUpload = true
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.changeDetectorRef.markForCheck()
    }
  }

  // Remove uploaded Image
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files)
    this.imageUrl = 'assets/images/add.png'
    this.editFile = true
    this.removeUpload = false
  }

  // Multiselect Dropdown  functions
  onSelect(event: any) {
    this.files.push(...event.addedFiles)
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1)
  }

  onItemSelect(item: any) {
    console.log(item)
    console.log(this.selectedItems)
  }
  OnItemDeSelect(item: any) {
    console.log(item)
    console.log(this.selectedItems)
  }
  onSelectAll(items: any) {
    console.log(items)
  }
  onDeSelectAll(items: any) {
    console.log(items)
  }

  //upload pdf file
  handleFileSelect(event: any) {
    this.files = event.target.files // FileList object
    var file = this.files[0]
    console.log(file)
    let fileURL = window.URL.createObjectURL(file.name);
    window.open(fileURL ,"_blank");
    this.removeUpload = true
  }

  openFile(){
    // var fileURL = URL.createObjectURL(file);
    // window.open(fileURL);
  }
}
