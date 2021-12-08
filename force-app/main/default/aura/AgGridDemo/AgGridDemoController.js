({
    doInit: function (cmp, event, helper) {
        const columnDefs = [
            { field: "make" },
            { field: "model" },
            { field: "price" }
        ];

        // specify the data
        const rowData = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];

        const gridOptions = {
            columnDefs: columnDefs,
            rowData: rowData
        };

        var gridDiv = document.querySelector('#myGrid');
        new agGrid.Grid(gridDiv, gridOptions);
    }
})