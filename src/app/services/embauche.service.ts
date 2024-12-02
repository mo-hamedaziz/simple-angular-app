import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embaucheList: Cv[] = [];

  getEmbaucheList(): Cv[] {
    return this.embaucheList;
  }

  addToEmbauche(cv: Cv): void {
    if (!this.embaucheList.includes(cv)) {
      this.embaucheList.push(cv);
    }
  }
}
