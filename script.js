$(document).ready(function () {

    $(".toggle-button").click(function () {
        $(".extended-content").toggle();
        $(this).text(function (i, text) {
            return text === "Read More" ? "Read Less" : "Read More";
        });
    });

  
    $("#calculate-roi").click(function () {
        const initialInvestment = parseFloat($("#initial-investment").val());
        const revenue = parseFloat($("#revenue").val());
        const expenses = parseFloat($("#expenses").val());
        const roiResultElement = $("#roi-result");

        if (isNaN(initialInvestment) || isNaN(revenue) || isNaN(expenses)) {
            roiResultElement.text("Please enter valid numeric values for all inputs.");
        } else {
            const roi = ((revenue - expenses - initialInvestment) / initialInvestment) * 100;
            roiResultElement.text(`ROI: ${roi.toFixed(2)}%`);
        }
    });
});
