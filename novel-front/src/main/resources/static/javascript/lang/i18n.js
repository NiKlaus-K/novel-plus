$(document).ready(function () {
    /*默认语言*/
    var defaultLang = "en";
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        filePath: "/javascript/lang/",
        filePrefix: "",
        fileSuffix: "",
        forever: true,
        callback: function () {
            console.log("i18n is ready.");
        }
    });
});