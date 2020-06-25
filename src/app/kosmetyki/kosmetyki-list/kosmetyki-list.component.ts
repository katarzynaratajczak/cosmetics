import { Component, OnInit } from '@angular/core';
import { Kosmetyk } from '../kosmetyk';
import { KosmetykService } from '../kosmetyk.service';
import { KosmetykPropertiesService } from '../kosmetyk-properties.service';

@Component({
  selector: 'app-kosmetyki-list',
  templateUrl: './kosmetyki-list.component.html',
  styleUrls: ['./kosmetyki-list.component.scss']
})
export class KosmetykiListComponent implements OnInit {
  kosmetyki: Kosmetyk[] = [];
  columnsToDisplay = [
    'category',
    'name',
    'cost',
    'component'
  ];
  categories: string[] = ['Pielęgnacja', 'Makijaż', 'Zapachy', 'Ciało', 'Włosy'];
  atrCategory: any;

  constructor(private kosmetykService: KosmetykService, private kosmetykPropertiesService: KosmetykPropertiesService) { }

  ngOnInit() {
    this.getKosmetykiList();
  }
  getKosmetykiList() {
    this.kosmetykService.getKosmetyki().subscribe({
      next: (kosmetyki) => this.kosmetyki = kosmetyki,
      error: () => alert('Nie udało się pobrać listy kosmetyków')
    });
  }

  filterKosmetykiByCategory(atrCategory: any) {
    const tempKosmetyki = [];
    for (const kosmetyk of this.kosmetyki) {
      if (kosmetyk.category.toString() === atrCategory.toString()) {
        tempKosmetyki.push(kosmetyk);
      }
    }
    this.kosmetyki = tempKosmetyki;
  }
}
