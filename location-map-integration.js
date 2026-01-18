/**
 * Location-Map Integration Script
 * Connects location dropdowns with Google Maps for property filtering
 */

(function ($) {
    'use strict';

    var LocationMapIntegration = {
        map: null,
        markers: [],
        infoWindows: [],

        // Sample property data with locations (this should come from your database)
        properties: [
            {
                id: 1,
                title: "Luxury Villa in Abdoun",
                price: "$850,000",
                type: "for sale",
                image: "assets/images/gmap/address.png",
                country: "Jordan",
                state: "Amman",
                city: "Amman City",
                locality: "Abdoun",
                neighborhood: "North Abdoun",
                lat: 31.9454,
                lng: 35.8784
            },
            {
                id: 2,
                title: "Modern Apartment in Sweifieh",
                price: "$320,000",
                type: "for sale",
                image: "assets/images/gmap/address.png",
                country: "Jordan",
                state: "Amman",
                city: "Amman City",
                locality: "Sweifieh",
                neighborhood: "Wakalat Street",
                lat: 31.9342,
                lng: 35.8617
            },
            {
                id: 3,
                title: "Penthouse in Shmeisani",
                price: "$1,200,000",
                type: "for sale",
                image: "assets/images/gmap/address.png",
                country: "Jordan",
                state: "Amman",
                city: "Amman City",
                locality: "Shmeisani",
                neighborhood: "Business District",
                lat: 31.9682,
                lng: 35.9016
            },
            {
                id: 4,
                title: "Family Home in Khalda",
                price: "$450,000",
                type: "for rent",
                image: "assets/images/gmap/address.png",
                country: "Jordan",
                state: "Amman",
                city: "Amman City",
                locality: "Khalda",
                neighborhood: "Area 1",
                lat: 31.9823,
                lng: 35.8456
            },
            {
                id: 5,
                title: "Office Space in Abdali",
                price: "$2,500/month",
                type: "for rent",
                image: "assets/images/gmap/address.png",
                country: "Jordan",
                state: "Amman",
                city: "Amman City",
                locality: "Shmeisani",
                neighborhood: "Housing Bank Area",
                lat: 31.9721,
                lng: 35.9087
            }
        ],

        init: function () {
            this.bindLocationFilters();
            this.initializeMap();
        },

        bindLocationFilters: function () {
            var self = this;

            // Listen to location dropdown changes
            $('#select-country, #select-state, #select-city, #select-locality, #select-neighborhood').on('change', function () {
                self.filterPropertiesByLocation();
            });
        },

        filterPropertiesByLocation: function () {
            var country = $('#select-country').val();
            var state = $('#select-state').val();
            var city = $('#select-city').val();
            var locality = $('#select-locality').val();
            var neighborhood = $('#select-neighborhood').val();

            var filteredProperties = this.properties.filter(function (property) {
                if (country && property.country !== country) return false;
                if (state && property.state !== state) return false;
                if (city && property.city !== city) return false;
                if (locality && property.locality !== locality) return false;
                if (neighborhood && property.neighborhood !== neighborhood) return false;
                return true;
            });

            this.updateMapMarkers(filteredProperties);
            this.centerMapOnProperties(filteredProperties);
            this.updatePropertyCount(filteredProperties.length);
        },

        initializeMap: function () {
            var self = this;

            // Wait for Google Maps to load
            if (typeof google === 'undefined' || !$('#googleMap').length) {
                console.log('Google Maps not loaded or map container not found');
                return;
            }

            // Initialize map with all properties
            this.updateMapMarkers(this.properties);
        },

        updateMapMarkers: function (properties) {
            var self = this;

            // Clear existing markers
            this.clearMarkers();

            if (!$('#googleMap').length) return;

            // Get map reference
            var mapRef = $('#googleMap').data('gMap.reference');
            if (!mapRef) {
                // Map not initialized yet, initialize it
                this.createMap(properties);
                return;
            }

            // Add new markers
            properties.forEach(function (property, index) {
                var markerIcon = self.getMarkerIcon(property.type, index);
                var infoWindowContent = self.createInfoWindowContent(property);

                var marker = new google.maps.Marker({
                    position: { lat: property.lat, lng: property.lng },
                    map: mapRef,
                    title: property.title,
                    icon: markerIcon,
                    animation: google.maps.Animation.DROP
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: infoWindowContent
                });

                marker.addListener('click', function () {
                    // Close all other info windows
                    self.infoWindows.forEach(function (iw) {
                        iw.close();
                    });
                    infoWindow.open(mapRef, marker);
                });

                self.markers.push(marker);
                self.infoWindows.push(infoWindow);
            });
        },

        createMap: function (properties) {
            if (!$('#googleMap').length) return;

            var markers = properties.map(function (property, index) {
                return {
                    latitude: property.lat,
                    longitude: property.lng,
                    html: this.createInfoWindowContent(property),
                    icon: {
                        image: this.getMarkerIconPath(property.type, index),
                        iconsize: [52, 75],
                        iconanchor: [26, 75]
                    }
                };
            }.bind(this));

            $('#googleMap').gMap({
                zoom: 12,
                maptype: 'ROADMAP',
                markers: markers,
                latitude: properties.length > 0 ? properties[0].lat : 31.9454,
                longitude: properties.length > 0 ? properties[0].lng : 35.9284
            });
        },

        clearMarkers: function () {
            this.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            this.markers = [];
            this.infoWindows = [];
        },

        centerMapOnProperties: function (properties) {
            if (properties.length === 0 || !$('#googleMap').length) return;

            var mapRef = $('#googleMap').data('gMap.reference');
            if (!mapRef) return;

            if (properties.length === 1) {
                // Center on single property
                mapRef.setCenter({ lat: properties[0].lat, lng: properties[0].lng });
                mapRef.setZoom(15);
            } else {
                // Fit bounds to show all properties
                var bounds = new google.maps.LatLngBounds();
                properties.forEach(function (property) {
                    bounds.extend({ lat: property.lat, lng: property.lng });
                });
                mapRef.fitBounds(bounds);
            }
        },

        createInfoWindowContent: function (property) {
            return "<div class='address-map'>" +
                "<div class='address-map-img'><img src='" + property.image + "'></div>" +
                "<div class='address-map-date'>" +
                "<span class='address-map-type'>" + property.type + "</span>" +
                "<h4 class='address-map-title'><a href='property-single-gallery.html'>" + property.title + "</a></h4>" +
                "<div class='address-map-info'>" + property.locality + ", " + property.city + "</div>" +
                "<div class='address-map-price'>" + property.price + "</div>" +
                "</div></div>";
        },

        getMarkerIcon: function (type, index) {
            var iconPath = this.getMarkerIconPath(type, index);
            return {
                url: iconPath,
                scaledSize: new google.maps.Size(52, 75),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(26, 75)
            };
        },

        getMarkerIconPath: function (type, index) {
            var markerNumber = (index % 4) + 1;
            return "assets/images/gmap/marker" + markerNumber + ".png";
        },

        updatePropertyCount: function (count) {
            // Update property count display if element exists
            if ($('#property-count').length) {
                $('#property-count').text(count + ' ' + (count === 1 ? 'Property' : 'Properties') + ' Found');
            }
        }
    };

    // Initialize when document is ready
    $(document).ready(function () {
        // Wait a bit for Google Maps to load
        setTimeout(function () {
            LocationMapIntegration.init();
        }, 1000);
    });

})(jQuery);
