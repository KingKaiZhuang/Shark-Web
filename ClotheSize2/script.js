$(document).ready(() => {
    let allData = $(".dataTable").html(); // 初始化表格內容
    let scrollTable = ".scrollTable";
    let scrollTable_h2 = ".scrollTable .title h2";
    function updateTableContent() {
        $(".dataTable").html(allData);  // 重置表格內容
        console.log("Updating table content");
        $(".dataTable td:contains('/')").each(function () {
            let text = $(this).text();
            let centimeters = text.split('/')[0];
            let inches = text.split('/')[1];
            console.log("Centimeters:", centimeters, "Inches:", inches);
            if($(".switch").hasClass("on")) {
                $(this).text(inches);
                $(scrollTable).css("background-color","#00094e");
                $(scrollTable_h2).text("成人 修身TEE/通用褲");
                $("#clotheData > div.scrollTable > table > tbody > tr:nth-child(8) > td").css(
                    {
                        "background-color" : "#fff",
                        "color" : "#000"
                    }
                )
            }else{
                $(this).text(centimeters);
                $(scrollTable).css("background-color","#ff7300")
                $(scrollTable_h2).text("成人");
            }
        });
    }
    

    updateTableContent();

    $(".options").click(() => {
        console.log("Click event fired");
        $(".switch").toggleClass("on");
        updateTableContent();
    });
});
