import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumRoutingModule } from './album-routing.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../service/album.service';
import { ListAlbumComponent } from './list-album/list-album.component';



@NgModule({
  declarations: [AddAlbumComponent,ListAlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    FormsModule
  ],
  //providers:[AlbumService]
})
export class AlbumModule { }
