(function($){
    $(function(){
        $('#id_0').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "DD-MM-YYYY HH:mm",
            "locale": "es",
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-check',
                clear: 'glyphicon glyphicon-trash',
                close: 'fa fa-times'
            }
        });
        $('#id_1').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "DD-MM-YYYY HH:mm",
            "locale": "es",
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-check',
                clear: 'glyphicon glyphicon-trash',
                close: 'fa fa-times'
            }
        });
        $("#id_02").on("dp.change", function (e) {
        $('#id_12').data("DateTimePicker").minDate(e.date);
        });
        $("#id_12").on("dp.change", function (e) {
        $('#id_02').data("DateTimePicker").maxDate(e.date);
       });
       

    });
})(jQuery);

