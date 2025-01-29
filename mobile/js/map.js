if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const container = document.getElementById('map');

    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    const currentMarkerImage = new kakao.maps.MarkerImage(
      "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
      new kakao.maps.Size(35, 32)
    );

    const currentMarker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
      map: map,
      image: currentMarkerImage
    });

    const ps = new kakao.maps.services.Places();

    let markers = [];
    let currentOpenInfoWindow = null;  // 현재 열린 인포윈도우

    function searchStores() {
      ps.keywordSearch('지코바 치킨', function (data, status) {
        if (status === kakao.maps.services.Status.OK && data.length > 0) {
          displayMarkers(data);
        } else {
          alert("근처에 매장을 찾을 수 없습니다.");
        }
      }, {
        location: new kakao.maps.LatLng(lat, lng),
        radius: 10000
      });
    }

    function displayMarkers(places) {
      removeMarkers();

      const storeMarkerImage = new kakao.maps.MarkerImage(
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
        new kakao.maps.Size(30, 40)
      );

      for (let i = 0; i < places.length; i++) {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(places[i].y, places[i].x),
          map: map,
          image: storeMarkerImage
        });

        markers.push(marker);

        const infoWindowContent = `
        <div class="custom-infowindow">
          <strong class="infowindow-title">${places[i].place_name}</strong><br>
          ${places[i].road_address_name || places[i].address_name}<br>
          <span class="infowindow-phone">전화번호: ${places[i].phone || '정보 없음'}</span>
        </div>
      `;

        const infowindow = new kakao.maps.InfoWindow({
          content: infoWindowContent,
          removable: false
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          closeAllInfoWindows();
          infowindow.open(map, marker);
          currentOpenInfoWindow = infowindow;
        });
      }

      map.setCenter(new kakao.maps.LatLng(lat, lng));
    }

    function removeMarkers() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    function closeAllInfoWindows() {
      if (currentOpenInfoWindow) {
        currentOpenInfoWindow.close();
      }
    }

    kakao.maps.event.addListener(map, 'click', function() {
      closeAllInfoWindows();
    });

    searchStores();
  }, function (error) {
    console.error("현재 위치를 가져올 수 없습니다.", error);
  });
} else {
  alert("Geolocation을 지원하지 않는 브라우저입니다.");
}