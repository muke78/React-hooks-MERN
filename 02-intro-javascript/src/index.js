// Consumo de API en JS

const url =
  "https://twitter154.p.rapidapi.com/search/search/continuation?query=%23python&section=top&min_retweets=20&limit=5&continuation_token=DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA&min_likes=20&start_date=2022-01-01&language=en";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e3753f2511msh28a4adb66dd02e5p1091bcjsnc72de0f499a3",
    "x-rapidapi-host": "twitter154.p.rapidapi.com",
  },
};

const peticion = fetch(url, options);

peticion
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    // Los dos tipos de desestructuracion de objetos y de arreglos segun la estructura que contenga
    const [p0] = data.results[0].media_url;
    const { profile_pic_url } = data.results[0].user;

    const img = document.createElement("img");
    const imgProfile = document.createElement("img");

    img.src = p0;
    imgProfile.src = profile_pic_url;

    document.body.append(img);
    document.body.append(imgProfile);
  })
  .catch(console.warn);
