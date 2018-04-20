import { Component, OnInit } from '@angular/core';
import { Town } from '../town';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  
  //town: Town = {id: 1, name: "belfort", temperature:0, icon: "rain"};

  town: Town;
  private townService: TownService;
    
  constructor(private http: HttpClient) {
	  this.townService = new TownService(http)
  }

  ngOnInit() {
      this.townService.getTown(1).subscribe(town => {
        this.town=town;
      });
  }

}
