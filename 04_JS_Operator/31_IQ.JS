
let code = 400;
let status =
    code === 200 ? "OK" :
        code === 201 ? "Created" :
            code === 202 ? "Accepted" :
                code === 400 ? "Bad Request" :
                    code === 401 ? "Unauthorized" :
                        code === 403 ? "Forbidden" :
                            code === 500 ? "Internal Server Error" : "Server Error"
console.log(`${code} : ${status}`);



//   Real time example  //below example not teach by pramod

let code1 = 200;

const statusMessages = {
    200: "OK",
    201: "Created",
    202: "Accepted",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    500: "Internal Server Error"
};

let status1 = statusMessages[code1] || "Server Error";
console.log(`${code1} : ${status1}`);