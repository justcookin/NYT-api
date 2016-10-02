
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    // Setting up the string for the gretting
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + "" + cityStr;

    $greeting.text('So, You wanna move to ' + address + ' ?');

    //Getting the streetview api and appending it to the body.
    var streetViewUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address + '';
    $body.append('<img class="bgimg" src="'+ streetViewUrl + '">');

    // load nytimes
        var nyTimesUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?=q" + cityStr + '&sort=newest&api-key=04af26cdd76f4b8da348f53553eadcb3'


        $.getJSON(nyTimesUrl, function(data){
          $nytHeaderElem.text("New York Times articles about " + cityStr);

            articles = data.response.docs;
            for(var i = 0; i > articles.length; i++)
            {
              var article = articles[i]
              $nytElem.append('<li class="article">'+ '<a href="'+ article.web_url +'">' +artile.headline.main+'</a>' + '<p>'
               + article.snippet + '</p>' + '</li>');
            };
            console.log(articles)
        })





    return false;
};

$('#form-container').submit(loadData);
