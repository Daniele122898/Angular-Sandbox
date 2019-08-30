import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onEditedPost(post: Post) {
    this.posts.forEach((p, i) => {
      if (post.id == p.id) {
        this.posts.splice(i, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    })
  }

  removePost(post: Post) {
    if (!confirm('Are you sure?')) return;

    this._postService.removePost(post.id).subscribe(() => {
      this.posts.forEach((p, i) => {
        if (post.id == p.id) {
          this.posts.splice(i, 1);
        }
      })
    });

  }

}
