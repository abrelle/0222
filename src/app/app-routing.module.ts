import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostGuardGuard } from './post-guard.guard';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'post/:id', component: PostDetailsComponent, canActivate: [PostGuardGuard] },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
