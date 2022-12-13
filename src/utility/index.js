function transform(num) {
    return num >= 10 ? num : "0" + num;
}

export const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = transform(a.getDate());
    var hour = transform(a.getHours());
    var min = transform(a.getMinutes());
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}