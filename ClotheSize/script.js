let originalTableData; // 存儲原始表格內容

// 在文檔準備好後執行
$(document).ready(function () {
    // 複製原始表格內容
    originalTableData = $("#sizeTable").html();
    $("#sizeTable td:contains('/')").each(function () {
        let text = $(this).text();
        let newText = text.split(' / ')[0]; // 取得英吋部分
        $(this).text(newText);
    });
});

// 當切換按鈕狀態改變時
$("#sizeSwitch").change(function () {
    if (this.checked) {
        $("#sizeTable").html(originalTableData);
        // 切換按鈕打開，顯示英吋，隱藏公分
        $("#sizeTable td:contains('/')").each(function () {
            let text = $(this).text();
            let newText = text.split(' / ')[1]; // 取得英吋
            $(this).text(newText);
        });
    } else {
        // 切換按鈕被關閉，顯示原始表格內容
        $("#sizeTable").html(originalTableData);

        $("#sizeTable td:contains('/')").each(function () {
            let text = $(this).text();
            let newText = text.split(' / ')[0]; // 取得公分
            $(this).text(newText);
        });
    }
});