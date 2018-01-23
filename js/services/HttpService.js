class HttpService {
    request(url, method, data) {
        return new Promise((resolve, reject) => {
            let regexStatus2xx = /^2\d\d/ig;
            let xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (regexStatus2xx.test(xhr.status)) {
                        return resolve(JSON.parse(xhr.responseText));
                    }
                    else {
                        console.log(xhr.responseText);
                        return reject(`Request failed with status ${xhr.status}.`);
                    }
                }
            }
            xhr.send(data ? JSON.stringify(data) : null);
        });
    }
}