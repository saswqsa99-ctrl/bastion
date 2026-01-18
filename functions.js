/*global jQuery */
/* Contents
// ------------------------------------------------>
    1.  BACKGROUND INSERT
    2.  NAV MODULE
    3.	MOBILE MENU
    4.  HEADER AFFIX
    5.  OWL CAROUSEL
    6.  MAGNIFIC POPUP
    7.  MAGNIFIC POPUP VIDEO
    8.  SWITCH GRID
    9.  SCROLL TO
    10. SLIDER RANGE
    11. Dropzone UPLOAD
    12. REMOVE PROFILE PHOTO
    13. SHOW OPTIONS

*/
(function ($) {
    "use strict";

    /* ------------------  Background INSERT ------------------ */

    var $bgSection = $(".bg-section");
    var $bgPattern = $(".bg-pattern");
    var $colBg = $(".col-bg");

    $bgSection.each(function () {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    $bgPattern.each(function () {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-pattern");
        $(this).remove();
    });

    $colBg.each(function () {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("col-bg");
        $(this).remove();
    });

    /* ------------------  NAV MODULE  ------------------ */

    var $moduleIcon = $(".module-icon"),
        $moduleCancel = $(".module-cancel");
    $moduleIcon.on("click", function (e) {
        $(this).parent().siblings().removeClass('module-active'); // Remove the class .active form any sibiling.
        $(this).parent(".module").toggleClass("module-active"); //Add the class .active to parent .module for this element.
        e.stopPropagation();
    });
    // If Click on [ Search-cancel ] Link
    $moduleCancel.on("click", function (e) {
        $(".module").removeClass("module-active");
        e.stopPropagation();
    });

    $(".side-nav-icon").on("click", function () {
        if ($(this).parent().hasClass('module-active')) {
            $(".wrapper").addClass("hamburger-active");
            $(this).addClass("module-hamburger-close");
        } else {
            $(".wrapper").removeClass("hamburger-active");
            $(this).removeClass("module-hamburger-close");
        }
    });

    // If Click on [ Document ] and this click outside [ hamburger panel ]
    $(document).on("click", function (e) {
        if ($(e.target).is(".hamburger-panel,.hamburger-panel .list-links,.hamburger-panel .list-links a,.hamburger-panel .social-share,.hamburger-panel .social-share a i,.hamburger-panel .social-share a,.hamburger-panel .copywright") === false) {
            $(".wrapper").removeClass("page-transform"); // Remove the class .active form .module when click on outside the div.
            $(".module-side-nav").removeClass("module-active");
            e.stopPropagation();
        }
    });

    // If Click on [ Document ] and this click outside [ module ]
    $(document).on("click", function (e) {
        if ($(e.target).is(".module, .module-content, .search-form input,.cart-control .btn,.cart-overview a.cancel,.cart-box") === false) {
            $module.removeClass("module-active"); // Remove the class .active form .module when click on outside the div.
            e.stopPropagation();
        }
    });

    /* ------------------  MOBILE MENU ------------------ */

    var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
        $module = $(".module");
    $dropToggle.on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("open");
        $(this).parent().toggleClass("open");
    });

    $module.on("click", function () {
        $(this).toggleClass("toggle-module");
    });

    $module.find("input.form-control", ".btn", ".module-cancel").on("click", function (e) {
        e.stopPropagation();
    });

    /* ------------------ HEADER AFFIX ------------------ */

    var $navAffix = $(".header-fixed .navbar-fixed-top");
    $navAffix.affix({
        offset: {
            top: 50
        }
    });

    /* ------------------ OWL CAROUSEL ------------------ */

    $(".carousel").each(function () {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            center: $Carousel.data('center'),
            dotsSpeed: $Carousel.data('speed'),
            thumbs: $Carousel.data('thumbs'),
            thumbsPrerendered: $Carousel.data('thumbs'),
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: $Carousel.data('slide-rs'),
                },
                1000: {
                    items: $Carousel.data('slide'),
                }
            }
        });
    });

    /* ------------------ MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });
    $('.img-gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */

    $('.popup-video,.popup-gmaps').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /* ------------------  SWITCH GRID ------------------ */

    $('#switch-list').on("click", function (event) {
        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
        $(".properties").each(function () {
            $(this).addClass('properties-list');
            $(this).removeClass('properties-grid');
        });

    });

    $('#switch-grid').on("click", function (event) {

        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass("active");
        $(".properties").each(function () {
            $(this).addClass('properties-grid');
            $(this).removeClass('properties-list');
        });

    });

    /* ------------------  SCROLL TO ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
            if ($(this).hasClass("menu-item")) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        }
    });

    /* ------------------ SLIDER RANGE WITH CURRENCY SUPPORT ------------------ */

    var $sliderRange = $(".slider-range"),
        $sliderAmount = $(".amount");

    // Detect if page is RTL
    var isRTL = $('html').attr('dir') === 'rtl' || $('body').hasClass('rtl');

    // Currency data: exchange rates relative to USD (Approximate)
    var currencyData = {
        'USD': { symbol: '$', rate: 1, name_ar: 'دولار أمريكي', name_en: 'US Dollar', name_tr: 'ABD Doları' },
        'EUR': { symbol: '€', rate: 0.92, name_ar: 'يورو', name_en: 'Euro', name_tr: 'Euro' },
        'TRY': { symbol: '₺', rate: 32.50, name_ar: 'ليرة تركية', name_en: 'Turkish Lira', name_tr: 'Türk Lirası' },
        'SAR': { symbol: '﷼', rate: 3.75, name_ar: 'ريال سعودي', name_en: 'Saudi Riyal', name_tr: 'Suudi Riyali' },
        'AED': { symbol: 'د.إ', rate: 3.67, name_ar: 'درهم إماراتي', name_en: 'UAE Dirham', name_tr: 'BAE Dirhemi' },
        'EGP': { symbol: 'ج.م', rate: 30.90, name_ar: 'جنيه مصري', name_en: 'Egyptian Pound', name_tr: 'Mısır Lirası' },
        'KWD': { symbol: 'د.ك', rate: 0.31, name_ar: 'دينار كويتي', name_en: 'Kuwaiti Dinar', name_tr: 'Kuveyt Dinarı' },
        'BHD': { symbol: ' .د.ب', rate: 0.38, name_ar: 'دينار بحريني', name_en: 'Bahraini Dinar', name_tr: 'Bahreyn Dinarı' },
        'OMR': { symbol: 'ر.ع.', rate: 0.38, name_ar: 'ريال عماني', name_en: 'Omani Rial', name_tr: 'Umman Riyali' },
        'QAR': { symbol: 'ر.ق', rate: 3.64, name_ar: 'ريال قطري', name_en: 'Qatari Riyal', name_tr: 'Katar Riyali' },
        'JOD': { symbol: 'د.ا', rate: 0.71, name_ar: 'دينار أردني', name_en: 'Jordanian Dinar', name_tr: 'Ürdün Dinarı' },
        'GBP': { symbol: '£', rate: 0.79, name_ar: 'جنيه إسترليني', name_en: 'British Pound', name_tr: 'İngiliz Sterlini' },
        'CAD': { symbol: 'C$', rate: 1.36, name_ar: 'دولار كندي', name_en: 'Canadian Dollar', name_tr: 'Kanada Doları' },
        'AUD': { symbol: 'A$', rate: 1.52, name_ar: 'دولار أسترالي', name_en: 'Australian Dollar', name_tr: 'Avustralya Doları' },
        'NGN': { symbol: '₦', rate: 1550, name_ar: 'نايرا نيجيري', name_en: 'Nigerian Naira', name_tr: 'Nijerya Nairası' }
    };

    // Map countries to currencies
    var countryCurrencyMap = {
        // Middle East & North Africa
        'Saudi Arabia': 'SAR', 'المملكة العربية السعودية': 'SAR', 'Suudi Arabistan': 'SAR',
        'Turkey': 'TRY', 'Türkiye': 'TRY', 'Turkiye': 'TRY', 'تركيا': 'TRY',
        'Egypt': 'EGP', 'مصر': 'EGP', 'Mısır': 'EGP',
        'United Arab Emirates': 'AED', 'UAE': 'AED', 'الإمارات': 'AED', 'BAE': 'AED',
        'Kuwait': 'KWD', 'الكويت': 'KWD', 'Kuveyt': 'KWD',
        'Bahrain': 'BHD', 'البحرين': 'BHD', 'Bahreyn': 'BHD',
        'Oman': 'OMR', 'عمان': 'OMR', 'Umman': 'OMR',
        'Qatar': 'QAR', 'قطر': 'QAR', 'Katar': 'QAR',
        'Jordan': 'JOD', 'الأردن': 'JOD', 'Ürdün': 'JOD',
        'Lebanon': 'USD', 'لبنان': 'USD', // Default to USD widely used
        'Iraq': 'USD', 'العراق': 'USD',
        'Libya': 'USD', 'ليبيا': 'USD', // Often use USD/EUR for real estate
        'Sudan': 'USD', 'السودان': 'USD',
        'Morocco': 'EUR', 'المغرب': 'EUR', // EUR widely used
        'Tunisia': 'EUR', 'تونس': 'EUR',
        'Algeria': 'EUR', 'الجزائر': 'EUR',

        // Europe
        'United Kingdom': 'GBP', 'بريطانيا': 'GBP', 'İngiltere': 'GBP',
        'Germany': 'EUR', 'ألمانيا': 'EUR', 'Almanya': 'EUR',
        'France': 'EUR', 'فرنسا': 'EUR', 'Fransa': 'EUR',
        'Spain': 'EUR', 'إسبانيا': 'EUR', 'İspanya': 'EUR',
        'Italy': 'EUR', 'إيطاليا': 'EUR', 'İtalya': 'EUR',
        'Netherlands': 'EUR', 'هولندا': 'EUR', 'Hollanda': 'EUR',
        'Belgium': 'EUR', 'بلجيكا': 'EUR', 'Belçika': 'EUR',
        'Austria': 'EUR', 'النمسا': 'EUR', 'Avusturya': 'EUR',
        'Sweden': 'EUR', // Use EUR for simplicity or add SEK
        'Switzerland': 'EUR', // Use EUR for simplicity or add CHF
        'Portugal': 'EUR', 'البرتغال': 'EUR', 'Portekiz': 'EUR',
        'Russia': 'USD', 'روسيا': 'USD', 'Rusya': 'USD', // USD common

        // Americas & Others
        'United States': 'USD', 'USA': 'USD', 'الولايات المتحدة': 'USD', 'ABD': 'USD',
        'Canada': 'CAD', 'كندا': 'CAD', 'Kanada': 'CAD',
        'Australia': 'AUD', 'أستراليا': 'AUD', 'Avustralya': 'AUD',
        'Brazil': 'USD', 'البرازيل': 'USD', 'Brezilya': 'USD',
        'South Africa': 'USD', 'جنوب أفريقيا': 'USD', 'Güney Afrika': 'USD',
        'Nigeria': 'NGN', 'نيجيريا': 'NGN', 'Nijerya': 'NGN',

        // Asia
        'China': 'USD', 'الصين': 'USD', 'Çin': 'USD',
        'India': 'USD', 'الهند': 'USD', 'Hindistan': 'USD',
        'Japan': 'USD', 'اليابان': 'USD', 'Japonya': 'USD',
        'Indonesia': 'USD',
        'Malaysia': 'USD',
        'Singapore': 'USD',
        'Thailand': 'USD',
        'South Korea': 'USD'
    };

    // Current currency (default USD)
    var currentCurrency = 'USD';

    // Use logarithmic scale for better control
    var minp = 0;
    var maxp = 1000;
    var minv = Math.log(1);
    var maxv = Math.log(100000000); // $100M
    var scale = (maxv - minv) / (maxp - minp);

    // Convert slider position to price
    function sliderToPrice(position) {
        if (position === 0) return 0;
        return Math.round(Math.exp(minv + scale * (position - minp)));
    }

    // Convert price to different currency
    function convertCurrency(priceUSD, toCurrency) {
        if (!currencyData[toCurrency]) return priceUSD;
        return Math.round(priceUSD * currencyData[toCurrency].rate);
    }

    // Format price with currency symbol
    function formatPrice(price, currency) {
        var symbol = currencyData[currency] ? currencyData[currency].symbol : '$';
        var formatted = price.toLocaleString('en-US');
        return symbol + formatted;
    }

    $sliderRange.each(function () {
        var $this = $(this);
        var $amountField = $(this).closest('.filter').find($sliderAmount);

        // Check RTL status dynamically
        var isRTL = $('html').attr('lang') === 'ar';

        $this.slider({
            range: true,
            min: 0,
            max: 1000,
            values: isRTL ? [1000, 1000] : [0, 0], // Start at Right (1000) for RTL, Left (0) for LTR
            slide: function (event, ui) {
                var pos0 = ui.values[0];
                var pos1 = ui.values[1];
                var priceUSD0, priceUSD1;

                if (isRTL) {
                    // Invert for RTL: Right side (1000) is 0, Left side (0) is Max
                    // pos0 is Left Handle, pos1 is Right Handle
                    // We want Right Handle (pos1) to represent the Lower Value (Start)
                    // We want Left Handle (pos0) to represent the Higher Value (End)

                    priceUSD0 = sliderToPrice(1000 - pos1); // From Right (Low)
                    priceUSD1 = sliderToPrice(1000 - pos0); // From Left (High)
                } else {
                    // Standard LTR
                    priceUSD0 = sliderToPrice(pos0);
                    priceUSD1 = sliderToPrice(pos1);
                }

                // Convert to current currency
                var price0 = convertCurrency(priceUSD0, currentCurrency);
                var price1 = convertCurrency(priceUSD1, currentCurrency);

                // Format and display
                $amountField.val(formatPrice(price0, currentCurrency) + " - " + formatPrice(price1, currentCurrency));
            }
        });

        // Initialize display value
        $amountField.val(formatPrice(0, currentCurrency) + " - " + formatPrice(0, currentCurrency));
    });

    // Get current language for currency names
    var currentLang = $('html').attr('lang') || 'en';
    var langSuffix = currentLang === 'ar' ? 'name_ar' : (currentLang === 'tr' ? 'name_tr' : 'name_en');

    // Update currency dropdown options based on country
    function updateCurrencyOptions(localCurrency) {
        var $currencySelect = $('#select-currency');
        if ($currencySelect.length === 0) return;

        var options = [];
        var addedCurrencies = new Set(); // Track added currencies to prevent duplicates

        // Helper to add currency option
        function addOption(code) {
            if (currencyData[code] && !addedCurrencies.has(code)) {
                options.push({
                    value: code,
                    symbol: currencyData[code].symbol,
                    name: currencyData[code][langSuffix] + ' (' + code + ')'
                });
                addedCurrencies.add(code);
            }
        }

        // 1. Add Local Currency (Priority 1)
        if (localCurrency) {
            addOption(localCurrency);
        }

        // 2. Add USD (Priority 2)
        addOption('USD');

        // 3. Add EUR (Priority 3)
        addOption('EUR');

        // Populate dropdown
        $currencySelect.empty();
        options.forEach(function (opt) {
            $currencySelect.append(
                $('<option></option>')
                    .attr('value', opt.value)
                    .attr('data-symbol', opt.symbol)
                    .text(opt.name)
            );
        });

        // Set current currency as selected (default to Local or USD)
        // If the previously selected currency is in the new list, keep it.
        // Otherwise switch to the local currency (first option).
        if (addedCurrencies.has(currentCurrency)) {
            $currencySelect.val(currentCurrency);
        } else {
            // If local currency is valid, switch to it
            if (options.length > 0) {
                currentCurrency = options[0].value;
                $currencySelect.val(currentCurrency);
            }
        }

        // Trigger generic change to update slider immediately
        $currencySelect.trigger('change-internal');
    }

    // Update currency when country changes
    $(document).on('change', '#select-country', function () {
        var selectedCountry = $(this).val();
        // Use the map to find the currency, or default to USD if not found
        // Ensure we handle potential casing or spacing issues by trimming
        var key = selectedCountry ? selectedCountry.trim() : '';
        var newCurrency = countryCurrencyMap[key] || 'USD';

        // Update the dropdown options (Local -> USD -> EUR)
        // This function also handles setting 'currentCurrency'
        updateCurrencyOptions(newCurrency);
    });

    // Update currency when manually selected
    $(document).on('change change-internal', '#select-currency', function (e) {
        // Only update currentCurrency if it's a user interaction or explicit change
        if ($(this).val()) {
            currentCurrency = $(this).val();
        }

        // Update slider display
        $sliderRange.each(function () {
            // Force slider update
            if ($(this).slider("instance")) {
                var values = $(this).slider("values");
                $(this).slider("option", "slide").call(this, null, { values: values });
            }
        });
    });

    // Initialize currency dropdown on page load
    $(document).ready(function () {
        // Check if a country is already selected (e.g. from previous session or default)
        var initiallySelectedCountry = $('#select-country').val();
        var initialCurrency = initiallySelectedCountry ? (countryCurrencyMap[initiallySelectedCountry] || 'USD') : 'USD';

        // Initialize
        currentCurrency = initialCurrency;
        updateCurrencyOptions(initialCurrency);
    });




    /*-------------------  Dropzone UPLOAD ---------------------*/

    if ($("#dZUpload").length > 0) {
        Dropzone.autoDiscover = false;
        $("#dZUpload").dropzone({
            url: "hn_SimpeFileUploader.ashx",
            addRemoveLinks: true,
            autoProcessQueue: false, // Prevent valid upload attempt on static site
            success: function (file, response) {
                var imgName = response;
                file.previewElement.classList.add("dz-success");
                console.log("Successfully uploaded :" + imgName);
            },
            error: function (file, response) {
                file.previewElement.classList.add("dz-error");
            }
        });
    }

    /*------------ REMOVE PROFILE PHOTO --------*/

    $('.delete--img').on("click", function () {
        $('.output--img').remove();
        event.preventDefault();
    });

    /*------------ SHOW OPTIONS --------*/

    $('.less--options').on("click", function () {
        $('.option-hide').slideToggle('slow');
        $(this).toggleClass('active');
        event.preventDefault();
    });

}(jQuery));