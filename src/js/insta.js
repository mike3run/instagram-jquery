// Load jQuery First!!!
function instaPics (userID, accessToken) {
  // First we select our specially id'd div to hustle on
  var insta = $('#instagram');
  var html = '';

  // Now we construct our Instagram API access call
  // Get your data here
  // http://www.pinceladasdaweb.com.br/instagram/access-token/

  var url = 'https://api.instagram.com/v1/users/'+ userID + '/media/recent?access_token=' + accessToken;

  // Main loop to actually build the markup for us
  function loop (pictures) {
    // You can change the i<12 if you want to load more pics, instagram gives you the latest 20 by default.
    for (var i = 0; i<12; i++) {
      var currentPicture = pictures.data[i];
      // Tried to build the markup in an HTML friendly version to look at :)
      html+= '<div class="instagram__foto">'
            + '<a class="instagram__foto--link" href="' + currentPicture.link + '">'
              + '<img src="' + currentPicture.images.standard_resolution.url + '" alt="' + currentPicture.caption.text+ '">'
            + '</a>'
            + '<div class="instagram__foto--descripcion">'
              + '<span>' + currentPicture.caption.text + '</span>'
            +'</div>'
          +'</div>';
    }
    insta.html(html);
  }

// Now it's time to make the AJAX call with the help of jQuery
  $.ajax({
    url: url,
    dataType: 'jsonp',
    crossDomain: true,
    success: loop
  });

}
