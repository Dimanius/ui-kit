import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular/ui/all';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { PpDataGridComponent } from './data-grid.component';


@NgModule({
  declarations: [PpDataGridComponent],
  imports: [DxDataGridModule],
  exports: [PpDataGridComponent]
})
export class PpDataGridModule { }
