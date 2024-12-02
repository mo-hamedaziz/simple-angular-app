import { Component } from '@angular/core';
import { EmbaucheService } from '../services/embauche.service';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-hired-list',
  templateUrl: './hired-list.component.html',
  styleUrls: ['./hired-list.component.css']
})
export class HiredListComponent{
  embaucheList: Cv[] = [];

  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {
    this.embaucheList = this.embaucheService.getEmbaucheList();
  }
}
