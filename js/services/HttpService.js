class HttpService {
    get(url) {
        return new Promise((resolve, reject) => {
            let regexStatus2xx = /^2\d\d/ig;
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    debugger;
                    if (regexStatus2xx.test(xhr.status)) {
                        return resolve("Requisição realizada com sucesso");
                    }
                    else {
                        return reject("Houve um erro na requisição.");
                    }
                }
            }

            xhr.send();
        });
    }

    request(url, method, data) {
        return new Promise((resolve, reject) => {
            let regexStatus2xx = /^2\d\d/ig;
            let xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onreadystatechange = function () {
                debugger;
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