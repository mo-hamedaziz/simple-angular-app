import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ImageLoopComponent } from './image-loop/image-loop.component';

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
    HiredListComponent,
    HeaderComponent,
    AuthFormComponent,
    ImageLoopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
