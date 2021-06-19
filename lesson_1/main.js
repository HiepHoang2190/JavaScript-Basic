// do/while loop

// var i = 0;

// do {
//     i++;

//     console.log(i);
// } while (i < 10);


var i = 0;

var isSuccess = false;
do {
    i++;

    console.log('Nạp thẻ lần ' + i);
    //Nạp thẻ thành công
    // if (true) {
    //     isSuccess = true;
    // }

    // nạp thẻ thất bại
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 3);