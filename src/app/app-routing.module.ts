import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ImageLoopComponent } from './image-loop/image-loop.component';

const routes: Routes = [
  { path: '', redirectTo: '/color', pathMatch: 'full' },
  { path: 'color', component: ColorComponent },
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: CvDetailComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'auth-form', component: AuthFormComponent },
  { path: 'image-loop', component: ImageLoopComponent },
  { path: '**', redirectTo: '/color', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
