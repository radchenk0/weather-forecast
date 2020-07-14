# weather-forecast
Weather forecast based on capitals

# API

## WeatherApi
### [source](https://www.weatherapi.com/)
Method: `POST`
Endpoint: `http://api.weatherapi.com/v1/current.json?key={secret}&q={city}`
Secret: `b7ae3e050da14c6cbb973717200707`
Response:
``` 
{
    "location": {
        "name": "Ростов-На-Дону",
        "country": "Россия",
        "localtime": "2020-07-07 10:33"
    },
    "current": {
        "temp_c": 26.9,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        },
        "wind_kph": 13.3,
        "humidity": 40,
    }
}
```

## REST COUNTRIES
### [source](https://restcountries.eu/)
Method: `GET`
Endpoint: `https://restcountries.eu/rest/v2/name/{query}`
Response:
``` 
[
    {
        "name": "Belarus",
        "topLevelDomain": [
            ".by"
        ],
        "alpha2Code": "BY",
        "alpha3Code": "BLR",
        "callingCodes": [
            "375"
        ],
        "capital": "Minsk",
        "altSpellings": [
            "BY",
            "Bielaruś",
            "Republic of Belarus",
            "Белоруссия",
            "Республика Беларусь",
            "Belorussiya",
            "Respublika Belarus’"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "population": 9498700,
        "latlng": [
            53.0,
            28.0
        ],
        "demonym": "Belarusian",
        "area": 207600.0,
        "gini": 26.5,
        "timezones": [
            "UTC+03:00"
        ],
        "borders": [
            "LVA",
            "LTU",
            "POL",
            "RUS",
            "UKR"
        ],
        "nativeName": "Белару́сь",
        "numericCode": "112",
        "currencies": [
            {
                "code": "BYN",
                "name": "New Belarusian ruble",
                "symbol": "Br"
            },
            {
                "code": "BYR",
                "name": "Old Belarusian ruble",
                "symbol": "Br"
            }
        ],
        "languages": [
            {
                "iso639_1": "be",
                "iso639_2": "bel",
                "name": "Belarusian",
                "nativeName": "беларуская мова"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Русский"
            }
        ],
        "translations": {
            "de": "Weißrussland",
            "es": "Bielorrusia",
            "fr": "Biélorussie",
            "ja": "ベラルーシ",
            "it": "Bielorussia",
            "br": "Bielorrússia",
            "pt": "Bielorrússia",
            "nl": "Wit-Rusland",
            "hr": "Bjelorusija",
            "fa": "بلاروس"
        },
        "flag": "https://restcountries.eu/data/blr.svg",
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": [
                    "EAEU"
                ],
                "otherNames": []
            }
        ],
        "cioc": "BLR"
    },
   ]
```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
