let api_status = 400;

switch (api_status) {

    case 200:
        console.log("OK");
        break;

    case 201:
        console.log("Created");
        break;

    case 202:
        console.log("Accepted");
        break;

    case 400:
        console.log("Bad Request");
        break;

    case 500:
        console.log("Internal server error");
        break;

    default:
        console.log("No status code match");

}