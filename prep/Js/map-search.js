function initMap() {
  var input = document.getElementById('searchInput');
  var autocomplete = new google.maps.places.Autocomplete(input, { types: ['(regions)'], componentRestrictions: {country: ["us", 'pr']} });
  autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      window.location.href='https://www.pleaseprepme.org/find-a-provider?lat='+place.geometry.location.lat()+'&lng='+place.geometry.location.lng();
  });
  autocomplete.addListener('keydown')
  var selectFirstOnEnter = function(input){      // store the original event binding function
      var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;
      function addEventListenerWrapper(type, listener) { // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected, and then trigger the original listener.
      if (type === "keydown") {
        var orig_listener = listener;
        listener = function (event) {
        var suggestion_selected = jQuery(".pac-item-selected").length > 0;
          if (event.which === 13 && !suggestion_selected) {
            var simulated_downarrow = jQuery.Event("keydown", {keyCode:40, which:40}); orig_listener.apply(input, [simulated_downarrow]);
            if (event) {
              event.preventDefault();
            }
          }
          orig_listener.apply(input, [event]);
        };
      }
      _addEventListener.apply(input, [type, listener]); // add the modified listener
    }
    if (input.addEventListener) { input.addEventListener = addEventListenerWrapper; } else if (input.attachEvent) { input.attachEvent = addEventListenerWrapper; }
  }
  selectFirstOnEnter(input);
}
