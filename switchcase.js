let islem = 2;

switch (islem) {
    case 1:
        console.log("1 numaralı işlem yapıldı")
        break;

    case 2:
        console.log("2 numaralı işlem yapıldı")
        break;

    case 3:
        console.log("3 numaralı işlem yapıldı")
        break;

    case 4:
        console.log("4 numaralı işlem yapıldı")
        break;

    case 5:
        console.log("5 numaralı işlem yapıldı")
        break;

    default:
        console.log("Herhangi bir işlem yapılmadı")
}


let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
        break;

}

console.log(day);