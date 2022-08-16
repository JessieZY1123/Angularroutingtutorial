import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.scss']
})
export class ListAlbumComponent implements OnInit {

  albumCollection: any=[]

  constructor(private albumService:AlbumService) { }


  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data=>{
      this.albumCollection = data;
      console.log(this.albumCollection)
    })
  }

}
