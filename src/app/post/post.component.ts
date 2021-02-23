import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from "../shared/post";
import { postList } from '../shared/post-list';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  

  constructor() { 
  }

  ngOnInit(): void {
  }

}
