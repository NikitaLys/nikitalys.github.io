ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 14,
        controls: []
    });


    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);

    // // Создадим пользовательский макет ползунка масштаба.
    // ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" +
    //         "<div id='zoom-in' class='btn'>+<i class='icon-plus'></i></div><br>" +
    //         "<div id='zoom-out' class='btn'>-<i class='icon-minus'></i></div>" +
    //         "</div>", {
    //             // Переопределяем методы макета, чтобы выполнять дополнительные действия
    //             // при построении и очистке макета.
    //             build: function() {
    //                 // Вызываем родительский метод build.
    //                 ZoomLayout.superclass.build.call(this);

    //                 // Привязываем функции-обработчики к контексту и сохраняем ссылки
    //                 // на них, чтобы потом отписаться от событий.
    //                 this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
    //                 this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

    //                 // Начинаем слушать клики на кнопках макета.
    //                 $('#zoom-in').bind('click', this.zoomInCallback);
    //                 $('#zoom-out').bind('click', this.zoomOutCallback);
    //             },

    //             clear: function() {
    //                 // Снимаем обработчики кликов.
    //                 $('#zoom-in').unbind('click', this.zoomInCallback);
    //                 $('#zoom-out').unbind('click', this.zoomOutCallback);

    //                 // Вызываем родительский метод clear.
    //                 ZoomLayout.superclass.clear.call(this);
    //             },

    //             zoomIn: function() {
    //                 var map = this.getData().control.getMap();
    //                 map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
    //             },

    //             zoomOut: function() {
    //                 var map = this.getData().control.getMap();
    //                 map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
    //             }
    //         }),
    //     zoomControl = new ymaps.control.ZoomControl({ options: { layout: ZoomLayout } });
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: 'small',
            float: 'right',
            position: 'right'
        }
    });

    myMap.controls.add(zoomControl);

    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            noPlacemark: true,
            position: "right"
        }
    });
    geolocationControl.events.add('locationchange', function(event) {
        var position = event.get('position'),
            // При создании метки можно задать ей любой внешний вид.
            locationPlacemark = new ymaps.Placemark(position);

        myMap.geoObjects.add(locationPlacemark);
        // Установим новый центр карты в текущее местоположение пользователя.
        myMap.panTo(position);
    });
    myMap.controls.add(geolocationControl);
}