({
    doInit: function (cmp, event, helper) {
        const columnDefs = [
            { field: "Name" },
            { field: "AccountNumber" },
            {
                field: "NumberOfEmployees",
                valueFormatter: params => {
                    return params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            },
            { field: "Industry" },
            {
                field: "Rating",
                cellStyle: params => {
                    if (params.value === 'Hot') {
                        return { backgroundColor: 'lightgreen' };
                    }
                    else if (params.value === 'Warm') {
                        return { backgroundColor: 'lightyellow' };
                    }
                    else if (params.value === 'Cold') {
                        return { backgroundColor: 'orangered' };
                    }
                    return null;
                }
            },
            { field: "Type" }
        ];

        const gridOptions = {
            columnDefs: columnDefs,
        };
        var action = cmp.get("c.getAccountsData");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                const rowData = JSON.parse(response.getReturnValue());
                gridOptions.rowData = rowData;
                var gridDiv = document.querySelector('#myGrid');
                const grid = new agGrid.Grid(gridDiv, gridOptions);
                grid.gridOptions.api.sizeColumnsToFit();
            }
            else {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    }
})