import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { DefaultImgNamePipe } from './default-img-name.pipe';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { RainbowTextDirective } from './rainbow-text.directive';
import { CvComponent } from './cv/cv.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { HiredListComponent } from './hired-list/hired-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ParentComponent,
    ChildComponent,
    MiniWordComponent,
    DefaultImgNamePipe,
    CarteVisiteComponent,
    RainbowTextDirective,
    CvComponent,
    CvDetailComponent,
    CvItemComponent,
    CvListComponent,
    HiredListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
