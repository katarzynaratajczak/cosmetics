import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosmetykPropertiesService {

  categories: string[] = ['Pielęgnacja', 'Makijaż', 'Zapachy', 'Ciało', 'Włosy'];
  components: string[] = ['Owoc', 'Kwiat', 'Minerał', 'Przyprawa', 'Warzywo'];
  constructor() { }
}
