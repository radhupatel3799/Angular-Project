import { Component, OnInit } from '@angular/core'
import { Track } from 'ngx-audio-player'

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
  playlist: Track[] = [
    {
      title: 'My PlayList',
      link: 'assets/music/yoitrax-latte.mp3',
      artist: 'Audio One Artist',
      duration: 126
    },
    {
      title: 'My Play',
      link: 'assets/music/Art-Of-Silence_V2.mp3',
      artist: 'Audio One Artist',
      duration: 253
    },
  ]
  constructor() {}

  ngOnInit(): void {
    // this.playAudio();
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

  playAudio(){
    let audio = new Audio();
    audio.src = "assets/music/yoitrax-latte.mp3";
    audio.load();
    audio.play();
  }
  triggerOnEnded(event: any) {
    console.log(event,'ended')
  }
}
