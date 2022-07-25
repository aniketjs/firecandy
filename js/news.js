const url = "https://newsapi.org/v2/top-headlines?" +
                "category=technology&" +
                "apiKey=30a74e880ff74ebaac6263c8a3741ebc";

const req = new Request(url);

fetch(req).then(function(response) {
    console.log(response.json());
});