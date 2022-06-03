
var weatherApp = angular.module('weatherApp', []);


    weatherApp.controller('WeatherCtrl', function ($scope, $http) {
    $http.get('https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=00e0f887920c8aacf38be67f536d2550&units=metric')
        .success(function (data) {
            if (data) {
                $scope.current = data.main.temp;
                $scope.temp_min = data.main.temp_min;
                $scope.temp_max = data.main.temp_max;
                $scope.wind_speed = data.wind.speed;
                $scope.clouds = data.clouds ? data.clouds.all : undefined;
                $scope.icon = data.weather ? data.weather[0].icon : undefined;

                //lay anh thoi tiet
                $scope.img_url = 'http://openweathermap.org/img/wn/'+ $scope.icon + '@2x.png';
            }
        })
        .error(function (data, status) {
            console.log(data);
        });
})