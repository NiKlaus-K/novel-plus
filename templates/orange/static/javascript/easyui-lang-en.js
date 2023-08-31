if ($.fn.pagination) {
    $.fn.pagination.defaults.beforePageText = 'Page';
    $.fn.pagination.defaults.afterPageText = '{pages} Pages In Total';
    $.fn.pagination.defaults.displayMsg = 'Page {from} To {to},{total} Records In Total';
}
if ($.fn.datagrid) {
    $.fn.datagrid.defaults.loadMsg = 'Loading…';
}
if ($.fn.treegrid && $.fn.datagrid) {
    $.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager) {
    $.messager.defaults.ok = 'Confirm';
    $.messager.defaults.cancel = 'Cancel';
}
if ($.fn.validatebox) {
    $.fn.validatebox.defaults.missingMessage = 'The input item is mandatory';
    $.fn.validatebox.defaults.rules.email.message = 'Please enter a valid email address';
    $.fn.validatebox.defaults.rules.url.message = 'Please enter a valid URL';
    $.fn.validatebox.defaults.rules.length.message = 'The input length must be between {0} and {1}';
    $.fn.validatebox.defaults.rules.remote.message = 'Please fix this field';
}
if ($.fn.numberbox) {
    $.fn.numberbox.defaults.missingMessage = 'The input item is mandatory';
}
if ($.fn.combobox) {
    $.fn.combobox.defaults.missingMessage = 'The input item is mandatory';
}
if ($.fn.combotree) {
    $.fn.combotree.defaults.missingMessage = 'The input item is mandator';
}
if ($.fn.combogrid) {
    $.fn.combogrid.defaults.missingMessage = 'The input item is mandator';
}
if ($.fn.calendar) {
    $.fn.calendar.defaults.weeks = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    $.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox) {
    $.fn.datebox.defaults.currentText = 'Today';
    $.fn.datebox.defaults.closeText = 'Close';
    $.fn.datebox.defaults.okText = 'Confirm';
    $.fn.datebox.defaults.missingMessage = 'The input item is mandator';
    $.fn.datebox.defaults.formatter = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
    };
    $.fn.datebox.defaults.parser = function (s) {
        if (!s) return new Date();
        var ss = s.split('-');
        var y = parseInt(ss[0], 10);
        var m = parseInt(ss[1], 10);
        var d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        } else {
            return new Date();
        }
    };
}
if ($.fn.datetimebox && $.fn.datebox) {
    $.extend($.fn.datetimebox.defaults, {
        currentText: $.fn.datebox.defaults.currentText,
        closeText: $.fn.datebox.defaults.closeText,
        okText: $.fn.datebox.defaults.okText,
        missingMessage: $.fn.datebox.defaults.missingMessage
    });
}
