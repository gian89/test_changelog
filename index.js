const start = async () => {
    try {
        console.log('starting');
        let res = await test1();
        console.log(res);
        // await test1();
    } catch (e) {
        console.log('ERROR***:', e);
    }
}

const test1 = async () => {
    console.log('test1');
    return test2();
};



const test2 = () => {
    // return new Promise((resolve, reject) => {
    //     reject(new Error('test2'))
    // })
    //
    // try {
    //     console.log('test2');
    //     throw new Error('test2');
    // }catch (e) {
    //     return e;
    // }
    console.log('test2');
    return new Error('test2');


}

start()
    .then((result) => {
        console.log('final result');
        console.log(result);
    })
    .catch((err) => {
        console.log('final err');
        console.log(err);
    });

