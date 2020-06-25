import { Component, OnInit, Input } from '@angular/core';
import { Kosmetyk } from '../kosmetyk';
import { KosmetykService } from '../kosmetyk.service';

@Component({
  selector: 'app-kosmetyk-show',
  templateUrl: './kosmetyk-show.component.html',
  styleUrls: ['./kosmetyk-show.component.scss']
})
export class KosmetykShowComponent implements OnInit {

  @Input() kosmetyk: Kosmetyk;
  constructor(private kosmetykService: KosmetykService) { }

  ngOnInit() {
  }

}
