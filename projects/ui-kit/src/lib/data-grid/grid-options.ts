import { Column, Options } from "devextreme/ui/data_grid";

export class GridOptions implements Options {
    export: any = {enabled: true, fileName: 'fileName', allowExportSelectedData: false};
    columns: Column[] = [];
    filterRow = { visible: true };
    paging: any = { enabled: true, pageSize: 25 };
    pager: any = { allowedPageSizes: [25, 50, 75, 100], showPageSizeSelector: true, showInfo: true, visible: true};
    columnChooser: any = { enabled: true, mode: 'select' };
    searchPanel: any = { visible: true, width: 200 };
    stateStoring: any = { enabled: true, type: 'localStorage', storageKey: 'gridStorage' };
    activeStateEnabled = true;
    hoverStateEnabled = true;
    showColumnLines = false;
    showRowLines = false;
    showBorders = false;
    rowAlternationEnabled = false;
    loadPanel = { enabled: true };
  
    groupPanel = { allowColumnDragging: true, visible: true };
    onToolbarPreparing = (e: any) => {
      e.toolbarOptions.items.forEach((item: any) => {
        if (item.name === 'columnChooserButton') {
          item.showText = 'always';
        }
        if (item.name === 'exportButton') {
  
        }
      });
    };
  
    [index: string]: any;
  
    constructor(options: DataGridOptions) {
      Object.keys(options).forEach((key: any) => {
        this[key] = options[key];
      });
    }
  
    setDataInClass(ojects: any, parentKey: any) {
      Object.keys(ojects).forEach(key => {
        if (!Array.isArray(ojects[key]) && typeof ojects[key] !== 'string' && typeof ojects[key] !== 'number' && typeof ojects[key] !== 'boolean') {
          this.setDataInClass(ojects[key], key);
        } else {
          this[parentKey][key] = ojects[key];
        }
      });
    }
}

export class DataGridOptions implements Options {
    [index: string]: any;
}