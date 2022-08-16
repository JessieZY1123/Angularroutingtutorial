import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ListAlbumComponent } from './list-album/list-album.component';

const routes: Routes =[
  {path:'add',component:AddAlbumComponent},
  {path:'list',component:ListAlbumComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
  
})
export class AlbumRoutingModule { }
