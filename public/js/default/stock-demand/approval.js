$(function () {
    $('#new_suggested_date').datepicker({
        minDate: 0,
        maxDate: "+5Y",
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true
    });
});

$(function () {
    $('input[type="text"]').keydown(function (e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
            e.preventDefault();         // Prevent character input
        } else {
            var n = e.keyCode;
            if (!((n == 8)              // backspace
                    || (n == 9)                // Tab
                    || (n == 46)                // delete
                    || (n >= 35 && n <= 40)     // arrow keys/home/end
                    || (n >= 48 && n <= 57)     // numbers on keyboard
                    || (n >= 96 && n <= 105))   // number on keypad
                    ) {
                e.preventDefault();     // Prevent character input
            }
        }
    });
});

/*$("#from_date, #to_date").datepicker({
 dateFormat: 'dd/mm/yy',
 changeMonth: true,
 changeYear: true,
 defaultDate: 'dd/mm/yy'
 });
 */
$(function () {
    var startDateTextBox = $('#from_date');
    var endDateTextBox = $('#to_date');

    startDateTextBox.datepicker({
        minDate: "-5Y",
        maxDate: "+5Y",
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        onClose: function (dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datepicker('setDate', testStartDate);
            }
            else {
                endDateTextBox.val(dateText);
            }
        },
        onSelect: function (selectedDateTime) {
            endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
        }
    });

    endDateTextBox.datepicker({
        minDate: "-5Y",
        maxDate: "+5Y",
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        onClose: function (dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datepicker('setDate', testEndDate);
            }
            else {
                startDateTextBox.val(dateText);
            }
        },
        onSelect: function (selectedDateTime) {
            startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
        }
    });
});

$('#reset').click(function () {
    window.location.href = appName + '/stock-demand/approval';
});

$('#cancel').click(function () {
    $("#future_arrival_details").hide('slow');
});

$('.future_arrival_details').click(function () {
    $("#future_arrival_details").hide('slow');

    Metronic.startPageLoading('Please wait...');
    var master_id = $(this).attr("id");
    $.ajax({
        type: "POST",
        url: appName + "/stock-demand/ajax-requisitions-details",
        data: {id: $(this).attr("id")},
        dataType: 'html',
        success: function (data) {
            $('#future_arrival_details').html(data);

            var suggested_date = $('#hnd_suggested_date_' + master_id);
            var newSuggestedDateTextBox = $('#new_suggested_date');
            $('#suggested_date').val(suggested_date.val());
            newSuggestedDateTextBox.datepicker({
                minDate: suggested_date.val(),
                maxDate: "+1Y",
                dateFormat: 'dd/mm/yy',
                changeMonth: true,
                changeYear: true
            });

            $('#new_suggested_date').val(suggested_date.val());

            Metronic.stopPageLoading();
            $("#future_arrival_details").show('slow');

            $('[data-toggle="notyfy"]').click(function () {
                $.notyfy.closeAll();
                var self = $(this);
                var id = self.attr("id");
                notyfy({
                    text: notification[self.data('type')],
                    type: self.data('type'),
                    dismissQueue: true,
                    layout: self.data('layout'),
                    buttons: (self.data('type') != 'confirm') ? false : [
                        {
                            addClass: 'btn btn-success btn-small btn-icon glyphicons ok_2',
                            text: '<i></i> Ok',
                            onClick: function ($notyfy) {
                                var id = self.attr("id");
                                $notyfy.close();
                                $.ajax({
                                    type: "POST",
                                    url: appName + '/stock/ajax-delete-pipeline-consignment?id=' + id,
                                    data: {id: self.data('bind')},
                                    dataType: 'html',
                                    success: function (data) {
                                        notyfy({
                                            force: true,
                                            text: 'Future consignment has been deleted!',
                                            type: 'success',
                                            layout: self.data('layout')
                                        });
                                        self.closest("tr").remove();
                                    }
                                });
                            }
                        },
                        {
                            addClass: 'btn btn-danger btn-small btn-icon glyphicons remove_2',
                            text: '<i></i> Cancel',
                            onClick: function ($notyfy) {
                                $notyfy.close();
                            }
                        }
                    ]
                });
                return false;
            });

            $('#received').click(function () {
                $.notyfy.closeAll();
                notyfy({
                    text: notification["confirm"],
                    type: "confirm",
                    dismissQueue: true,
                    layout: "top",
                    buttons: ("confirm" != 'confirm') ? false : [
                        {
                            addClass: 'btn btn-success btn-small btn-icon glyphicons ok_2',
                            text: '<i></i> Ok',
                            onClick: function ($notyfy) {
                                $notyfy.close();
                                $("#pipeline-form").submit();
                            }
                        },
                        {
                            addClass: 'btn btn-danger btn-small btn-icon glyphicons remove_2',
                            text: '<i></i> Cancel',
                            onClick: function ($notyfy) {
                                $notyfy.close();
                            }
                        }
                    ]
                });
                return false;
            });

            var notification = [];
            notification['confirm'] = 'Do you want to continue?';

            /*$("td[id$='-editable']").dblclick(function (e) {
             e.stopPropagation();      //<-------stop the bubbling of the event here
             var attr_id = $(this).attr("id");
             var id = attr_id.replace("-editable", "");
             
             /*var currentEle = $(this);
             var value = $.trim($(this).html());
             value = value.replace(",", "");
             updateVal(currentEle, value, id);*/
            //});

            /*function updateVal(currentEle, value, id) {
             $(currentEle).html('<input id="' + id + '" class="form-control" type="text" value="' + value + '" />');
             $('#' + id).focus();
             $('#' + id).keyup(function (event) {
             if (event.keyCode == 13) {
             $(currentEle).html($('#' + id).val().trim());
             }
             });
             
             $(document).click(function (event) {
             if (event.target.id == id) {
             return;
             }
             
             if ($(event.target).closest('#' + id).length) {
             return;
             }
             
             if ($('#' + id).val() != '') {
             $(currentEle).html($('#' + id).val().trim());
             $('#' + id + '-received').val($('#' + id + '-editable').html().trim());
             }
             });
             }*/
            
            
            
        }
    });
});






