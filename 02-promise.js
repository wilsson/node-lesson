const fetchApi = (time) => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('se resolvio la promesa!')
            }, time);
        } else {
            reject('no se resolvio la promesa')
        }
    })
}

/*
fetchApi()
    .then((result) => {
        console.log('exito>>', result)
    })
    .catch((result) => {
        console.log('error>>', result)
    })
*/

// Promise.all - Promise.allSettled

(() => {
    fetchApi(3000).then((result) => console.log('result1>', result))
    fetchApi(4000).then((result) => console.log('result2>', result))
    fetchApi(2000).then((result) => console.log('result3>', result))
})()