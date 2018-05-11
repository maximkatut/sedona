"use strict";

var ZOOM = 7;
var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
var image;

if (isIE11) {
  image = 'img/map-marker.png';
} else {
  image = 'img/icon-map-marker.svg';
}

function initMap() {
  var uluru = {lat: 34.8713762, lng: -111.7648569};
  var gllacy = {lat: 34.8713762, lng: -111.7648569};
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: ZOOM,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: gllacy,
    map: map,
    icon: image
  });
};
