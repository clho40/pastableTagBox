# PastableTagBox
A combination of DevExtreme components - dxTagBox, dxPopover, dxDataGrid to handle user paste input, deliminated by new lines ("\n")

## Dependencies
- jQuery 3.1
- DevExtreme 17.2.7

## API
- dxTagBoxSettings ([Documentation](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTagBox/))
- dxDataGridSettings ([Documentation](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/))
- dxPopoverSettings ([Documentation](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPopover/))

## Include
```sh
<script src="assets/js/plx.PastableTagBox.js"></script>
```

## Usage
```sh
var component = $("#dropdownbox").PastableTagBox({
        dxTagBoxSettings: {
            dataSource: sampleData,
            valueExpr: "id",
            displayExpr: "caption",
            width: 500
        },
        dxDataGridSettings: {
            dataSource: sampleData,
            keyExpr: "id",
            columns: [{
                dataField: "id",
                caption: "ID"
            }, {
                dataField: "caption",
                caption: "Caption"
            }]
        },
        dxPopoverSettings: {
            width: 500
        }
    });
```
## Getting/Setting Values - Same as working with a DevExtreme instance
```sh
    var tagBoxInstance = component.dxTagBox;
    var tagBoxValues = tagBoxInstance.option("values");
    
    var dataGridInstance = component.dxDataGrid;
    var dataGridSource = dataGridInstance.option("dataSource");
    
    var popOverInstance = component.dxPopover;
    popOverInstance.option("position","bottom");
```
## Demo
![demo](https://i.imgur.com/rEJ7h14.gif)
