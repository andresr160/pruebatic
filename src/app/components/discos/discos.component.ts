import { Component, OnInit } from '@angular/core';
import { DiscosService } from '../../service/discos.service';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.scss']
})
export class DiscosComponent implements OnInit {

  discos: any;

  constructor(private discosService: DiscosService) {

    this.discosService.getDiscos()
    .subscribe (data => {
      console.log(data);

      this.discos = data;

    });
   }

  ngOnInit() {
  }

}
