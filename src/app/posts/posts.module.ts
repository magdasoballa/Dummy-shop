import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "./posts.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { SinglePostComponent } from "./single-post/single-post.component";



@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
