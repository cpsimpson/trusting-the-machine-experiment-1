function make_code(length) {
    let result = '';
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function pauseBeforeNext(time_ms) {
    jQuery("#NextButton").hide();
    setTimeout(function() { jQuery("#NextButton").show(); }, time_ms);
}

function adjustSliderLabels() {
    jQuery(".slider-container .statement-container label").each(function(index, element) {
        // // Log the text content of the <span> inside the current label
        // console.log(jQuery("span", this).text());

        // Split the content by '-' to separate the two parts of the label
        let labels = jQuery("span", this).text().split('|');
        // console.log(labels);

        // Replace the current <span> content with two separate spans
        jQuery("span", this).replaceWith(
            "<span>" + labels[0] + "</span>" +
            "<span style='float: right'>" + labels[1] + "</span>"
        );
    });
}

