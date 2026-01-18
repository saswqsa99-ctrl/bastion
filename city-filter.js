(function ($) {
    $(document).ready(function () {
        // Function to get URL parameter
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        var cityParam = getUrlParameter('city');

        if (cityParam) {
            console.log('Filtering by city:', cityParam);

            // Normalize city param for comparison (lowercase, trimmed)
            var targetCity = cityParam.toLowerCase().trim();

            // Filter .property-item elements
            $('.property-item').each(function () {
                var locationText = $(this).find('.property--location').text().toLowerCase();

                // If location does not contain the city name, hide it
                if (locationText.indexOf(targetCity) === -1) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });

            // Optional: Update the header or show a message
            // $('.heading--title').text('Properties in ' + cityParam);

            // Try to set the select box value if it matches
            // We might need to wait for locations.js to populate it, but let's try
            setTimeout(function () {
                $('#select-city option').filter(function () {
                    return $(this).text().toLowerCase() === targetCity;
                }).prop('selected', true);
            }, 1000);
        }
    });
})(jQuery);
