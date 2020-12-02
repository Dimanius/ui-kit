import { AfterContentInit, ElementRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { DxComponent, DxDataGridComponent, DxTemplateHost, IterableDifferHelper, NestedOptionHost, WatcherHelper } from 'devextreme-angular';
import { Column, Options } from 'devextreme/ui/data_grid';
import { GridOptions } from './grid-options';

@Component({
  selector: 'pp-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.less']
})
export class PpDataGridComponent extends DxDataGridComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild(DxDataGridComponent, {static: true}) 
  grid!: DxDataGridComponent;

  @Input() columns: any;
  @Input() dataSource:any;
  @Input() options: GridOptions = new GridOptions({});

  constructor(
    private eRef: ElementRef,
    ngZone: NgZone, 
    private templateHost: DxTemplateHost, 
    _watcherHelper: WatcherHelper,
    transferState: TransferState,
    _idh: IterableDifferHelper,
    optionHost: NestedOptionHost,
  ) 
  { 
    super(eRef, ngZone, templateHost, _watcherHelper, _idh, optionHost, transferState, null);
  }

  ngOnInit(): void {
  }
  
  ngAfterContentInit(): void {
    this.templates.forEach(template => this.grid.templates.push(template));
  }

  ngAfterViewInit(): void {
    this.grid.instance.option(this.options);
    this.instance = this.grid.instance;
  }
}