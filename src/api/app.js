
export const getAppName = () => {
    return new Promise((resolve, reject) => {
        const err = null;
        setTimeout(() => {
            if(!err) {
                resolve({ code: 200, info: { appName: 'newAppName 22 3' } })
            } else {
                reject(err);
            }
        })
    })
}
