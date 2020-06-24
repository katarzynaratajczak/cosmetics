import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KosmetykService } from '../kosmetyk.service';
import { Router } from '@angular/router';
import { KosmetykPropertiesService } from '../kosmetyk-properties.service';
@Component({
  selector: 'app-add-kosmetyk',
  templateUrl: './add-kosmetyk.component.html',
  styleUrls: ['./add-kosmetyk.component.scss']
})
export class AddKosmetykComponent implements OnInit {

  kosmetykForm: FormGroup;
  categories: string[];
  components: string[];


  constructor(private kosmetykService: KosmetykService,
    private router: Router, private kosmetykPropertiesService: KosmetykPropertiesService) {

  }

  ngOnInit() {
    this.categories = this.kosmetykPropertiesService.categories;
    this.components = this.kosmetykPropertiesService.components;
    this.createNewFormGroup();
  }

  save(): void {
    const kosmetykFormForm = this.kosmetykForm.value;
    this.kosmetykService.saveKosmetyk(kosmetykFormForm).subscribe(
      () => this.router.navigate(['../..']),
      () => alert('Nie udało się zapisać auta')
    );
  }
  createNewFormGroup() {
    this.kosmetykForm = new FormGroup({
      id: new FormControl(),
      categoty: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      component: new FormControl('', Validators.required)
    });
  }
}
