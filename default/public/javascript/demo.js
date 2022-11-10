(function($){
    $(function(){
        $('#id_0').datetimepicker({
            // Formats
            // follow MomentJS docs: https://momentjs.com/docs/#/displaying/format/
            format: 'DD-MM-YYYY HH:mm',
            // Your Icons
            // as Bootstrap 4 is not using Glyphicons anymore
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-check',
                clear: 'fa fa-trash',
                close: 'fa fa-times'
            },
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
        });
        $('#id_1').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "DD/MM/YYYY HH:mm",
            "locale": "es",
        });
        $('#id_2').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "hh:mm:ss A",
        });
        $('#id_3').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "HH:mm:ss",
        });
        $('#id_4').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "MM/DD/YYYY",
        });
        $("#id_3").on("dp.change", function (e) {
        $('#id_4').data("DateTimePicker").minDate(e.date);
        });
        $("#id_4").on("dp.change", function (e) {
        $('#id_3').data("DateTimePicker").maxDate(e.date);
       });
    });
})(jQuery);

