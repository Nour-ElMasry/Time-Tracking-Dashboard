const tmp = [
    [workCur, workPrev],
    [playCur, playPrev],
    [studyCur, studyPrev],
    [exCur, exPrev],
    [socialCur, socialPrev],
    [selfCur, selfPrev]
];

document.body.onload = function() {
    display("Weekly");
};

$('.daily').click(function() {
    display('Daily');
});
$('.weekly').click(function() {

    display('Weekly');
});
$('.monthly').click(function() {

    display('Monthly');
});

function display(name) {
    switch (name) {
        case "Daily":
            $('.daily').addClass('clicked');
            $('.weekly').removeClass('clicked');
            $('.monthly').removeClass('clicked');
            for (var i = 0; i < tmp.length; i++) {
                tmp[i][0].innerHTML = data[i].timeframes.daily.current.toString();
                tmp[i][1].innerHTML = data[i].timeframes.daily.previous.toString();
            }
            break;
        case "Weekly":
            $('.weekly').addClass('clicked');
            $('.daily').removeClass('clicked');
            $('.monthly').removeClass('clicked');
            for (var i = 0; i < tmp.length; i++) {
                tmp[i][0].innerHTML = data[i].timeframes.weekly.current.toString();
                tmp[i][1].innerHTML = data[i].timeframes.weekly.previous.toString();
            }
            break;
        case "Monthly":
            $('.monthly').addClass('clicked');
            $('.weekly').removeClass('clicked');
            $('.daily').removeClass('clicked');
            for (var i = 0; i < tmp.length; i++) {
                tmp[i][0].innerHTML = data[i].timeframes.monthly.current.toString();
                tmp[i][1].innerHTML = data[i].timeframes.monthly.previous.toString();
            }
            break;

        default:
            console.log("wrong input");
    }
}