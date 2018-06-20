(function ($) {
    $.fn.PastableTagBox = function (options) {
        var _id = $(this)[0].id;
        var tagBox, dataGrid, popover;
        var _default = {
            dxTagBoxSettings: {
                acceptCustomValue: true,
                openOnFieldClick: false,
                deferRendering: false,
                showClearButton: true,
                onSelectionChanged: function (e) {
                    if (dataGrid) {
                        var tb_items = e.component.option("value");
                        dataGrid.selectRows(tb_items, false);
                    }
                }
            },
            dxPopoverSettings: {
                target: "#" + _id,
                showEvent: "dxclick",
                position: "bottom",
                closeOnOutsideClick: true,
                showCloseButton: true,
                animation: {
                    show: {
                        type: "pop",
                        from: { scale: 0 },
                        to: { scale: 1 }
                    },
                    hide: {
                        type: "fade",
                        from: 1,
                        to: 0
                    }
                },
                contentTemplate: function (e) {
                    var value = tagBox.option("selectedItems");
                    var __settings = {
                        dataSource: settings.dxDataGridSettings.dataSource ? settings.dxDataGridSettings.dataSource : tagBox.option("dataSource"),
                        selectedRowKeys: value,
                        onSelectionChanged: function (selectedItems) {
                            var keys = selectedItems.selectedRowKeys;
                            tagBox.option("value", keys);
                        }
                    }
                    var innerSetting = $.extend(__settings, settings.dxDataGridSettings)
                    var _dataGrid = $("<div id='" + _id + "_dataGrid'>").dxDataGrid(innerSetting).appendTo(e);

                    dataGrid = _dataGrid.dxDataGrid("instance");
                }
            },
            dxDataGridSettings: {
                selection: {
                    mode: "multiple"
                },
                filterRow: {
                    visible: true
                },
                scrolling: {
                    mode: "infinite"
                }
            }
        };
        var settings = $.extend(true, {}, _default, options);
        var popover_id = _id + "_popover";
        $('<div />', {
            id: popover_id
        }).appendTo("body");
        tagBox = $(this).dxTagBox(settings.dxTagBoxSettings).dxTagBox("instance");
        popover = $("#" + popover_id).dxPopover(settings.dxPopoverSettings).dxPopover("instance");
        $(this).on("paste", function (e) {
            var pastedData = e.originalEvent.clipboardData.getData('text');
            var arrPastedData = pastedData.split('\n');
            if (tagBox) {
                var ds = tagBox.option("dataSource");
                var selected = [];
                $.each(arrPastedData, function (index, pasted_item) {
                    var found_item = $.grep(ds, function (item) {
                        return item.id == pasted_item || item.caption.trim().toLowerCase() == pasted_item.trim().toLowerCase();
                    });
                    if (found_item) {
                        selected.push(found_item[0].id);
                    }
                })
                tagBox.option("value", selected);
            }

            e.preventDefault();
        });

        return {
            dxTagBox: tagBox,
            dxDataGrid: dataGrid,
            dxPopover: popover
        }
    }
}(jQuery));