import { Injectable } from '@angular/core';
import { Post } from './shared/post';
import { postList } from './shared/post-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, find} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  loadPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(' http://localhost:3000/posts').pipe(map(posts => posts.filter(post => post.img)));
  }

  findPost(id: string): Observable<Post> {
    return this.httpClient.get<Post>('http://localhost:3000/${id}');
  }

  addLike(post: Post): Observable<Post> {
    post.likes += 1;
    return this.httpClient.put<Post>('/api/post/${post.id}', post);
  }

  removeLike(post: Post):Observable<Post>{
  
      if (post.likes != 0) {
        post.likes -= 1;
    return this.httpClient.put<Post>('/api/post/${post.id}', post);
    

  }
}
}
