import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-image-loop',
  templateUrl: './image-loop.component.html',
  styleUrls: ['./image-loop.component.css'],
})
export class ImageLoopComponent {
  images: string[] = [];
  imageWidth: number = 200;
  imageHeight: number = 200;
  intervalTime: number = 1000;

  currentImage$: Observable<string> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;

    this.images = params['images']
      ? params['images'].split(',')
      : [
          'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:16x9/messi-1805.jpg',
          'https://imageio.forbes.com/specials-images/imageserve/6491a41e82867c2b3f8901ca/Neymar-could-possibly-return-to-FC-Barcelona-this-summer-/960x0.jpg?format=jpg&width=960',
          'https://e0.365dm.com/16/03/1600x900/luis-suarez-barcelona-arsenal_3432451.jpg?20160316212314',
        ];

    this.intervalTime = +params['intervalTime'] || 1000;
    this.imageWidth = params['imageWidth'] || '200px';
    this.imageHeight = params['imageHeight'] || '200px';

    this.currentImage$ = interval(this.intervalTime).pipe(
      startWith(0),
      map((index) => this.images[index % this.images.length])
    );
  }
}
