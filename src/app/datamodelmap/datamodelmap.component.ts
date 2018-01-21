import { Component, OnInit } from '@angular/core';
import { Datamodelmap } from '../models/datamodelmap';
import { DatamodelmapService } from '../datamodelmap.service'

@Component({
  selector: 'app-datamodelmap',
  templateUrl: './datamodelmap.component.html',
  styleUrls: ['./datamodelmap.component.css']
})
export class DatamodelmapComponent implements OnInit {
  datamodels: Datamodelmap[]

  constructor(private dataModelMapService: DatamodelmapService) { }

  getAllBase():void{
    this.dataModelMapService.getAllBase().then(datamodels=>this.datamodels = datamodels)
    console.log(this.datamodels)
  }

  getAllBaseObs(): void {
         this.dataModelMapService.getAllBaseObs()
             .subscribe(
                 resultArray => this.datamodels = resultArray,
                 error => console.log("Error :: " + error)
             )
     }
 
  ngOnInit(): void {
     this.getAllBase();
  }

}
