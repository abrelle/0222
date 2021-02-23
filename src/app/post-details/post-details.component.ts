import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../shared/post';
import { postList } from "../shared/post-list";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  id: string;
  post: Post;
  isLikePressed: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.postService.findPost(this.id).subscribe(post => this.post = post);
  }

  changeLikeValue() {
    if (this.isLikePressed) {
      this.postService.removeLike(this.post).subscribe(post => this.post = post);
    }
    else {
      this.postService.addLike(this.post).subscribe(post => this.post = post);
    }
    this.isLikePressed = !this.isLikePressed;
  }

}
