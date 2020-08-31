"use strict";

var ZOOM = 7;
var MIN_WIDTH = 320;
var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
var image;
var mapBlock = document.querySelector('.map');

if (isIE11) {
  image = "img/map-marker.png";
} else {
  image = "img/icon-map-marker.svg";
}


window.addEventListener("resize", function () {
  if (window.innerWidth < MIN_WIDTH) {
    mapBlock.style.width = "100%";
    mapBlock.style.marginLeft = "0";
    mapBlock.style.left = "0";
  }

  if (window.innerWidth > MIN_WIDTH) {
    setStyleMap();
  }
});

function setStyleMap() {
  mapBlock.style.width = "99.225vw";
  mapBlock.style.marginLeft = "-49.59vw";
  mapBlock.style.left = "50%";
};

function initMap() {
  var uluru = {lat: 34.8713762, lng: -111.7648569};
  var gllacy = {lat: 34.8713762, lng: -111.7648569};
  var map = new google.maps.Map(mapBlock, {
    zoom: ZOOM,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: gllacy,
    map: map,
    icon: image
  });
};

setStyleMap();
