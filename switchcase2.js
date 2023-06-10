let hour = 11;

switch (true) {
    case (hour >= 6 && hour <= 12):
        console.log("Good Morning!");
        break;

    case (hour >= 13 && hour <= 17):
        console.log("Have a good day!");
        break;

    case (hour >= 18 && hour <= 24):
        console.log("Good evening!");
        break;

    default:
        console.log("Geçersiz Zaman!");
        break;

}