import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
  providers:[AlbumService]
})
export class AddAlbumComponent implements OnInit {
  album ={
    title:"",
    description: "",
    genre:""
  }

  constructor() { }

  ngOnInit(): void {


  }
  saveAlbum(albumForm:NgForm){
    console.log(albumForm.value)
  }
  resetForm(albumForm:NgForm){
    albumForm.reset()
  }
  loadData(albumForm:NgForm){
    let albumData={
      title:"demo",
      description: "demo description",
      genre:"Drama"
    }
    albumForm.setValue(albumData)
  }

}
