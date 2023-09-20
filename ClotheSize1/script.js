$(document).ready(() => {
    let allData = $(".dataTable").html(); // 初始化表格內容

    function updateTableContent() {
        $(".dataTable").html(allData);  // 重置表格內容
        console.log("Updating table content");
        $(".dataTable td:contains('/')").each(function () {
            let text = $(this).text();
            let centimeters = text.split('/')[0];
            let inches = text.split('/')[1];
            console.log("Centimeters:", centimeters, "Inches:", inches);
            $(this).text($(".switch").hasClass("on") ? inches : centimeters);
        });
    }
    

    updateTableContent();

    $(".options").click(() => {
        console.log("Click event fired");
        $(".switch").toggleClass("on");
        updateTableContent();
    });
});
