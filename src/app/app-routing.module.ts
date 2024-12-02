import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ParentComponent } from './parent/parent.component';
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

const routes: Routes = [
  { path: '', redirectTo: '/color', pathMatch: 'full' },
  { path: 'color', component: ColorComponent },
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'cv', component: CvComponent },
  { path: 'mini-word', component: MiniWordComponent },
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
