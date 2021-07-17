let markerPosition = new kakao.maps.LatLng(
  37.77314540507449,
  128.9473011767911
);
let mapContainer = document.getElementById('map'),
  mapOption = {
    center: markerPosition, // coordinates of the center of the map
    level: 3, // Magnification level of the map
  };

// Create a map
let map = new kakao.maps.Map(mapContainer, mapOption);
let imageSrc =
  'https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/2021_05_free_parents/sparta-marker.png';
let imageSize = new kakao.maps.Size(65, 86);
let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
let marker = new kakao.maps.Marker({
  map: map,
  position: markerPosition,
  image: markerImage,
});
