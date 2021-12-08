import { LightningElement } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import agGridCommunityJs from '@salesforce/resourceUrl/agGridCommunityJs';

export default class Aggriddemolwc extends LightningElement {
    columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
    ];

    rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ];

    gridOptions = {};

    connectedCallback() {
        this.gridOptions = { columnDefs: this.columnDefs, rowData: this.rowData };
    }

    renderedCallback() {
        loadScript(this, agGridCommunityJs)
            .then(() => {
                const eGridDiv = this.template.querySelector("div[data-id='myGrid']");
                new agGrid.Grid(eGridDiv, this.gridOptions);
            })
            .catch(error => {
                console.log('error ' + error);
            })

    }
}