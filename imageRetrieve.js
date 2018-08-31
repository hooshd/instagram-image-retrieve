function IGImageRetrieve(lookup, isHashtag, response) {
// lookup is either the hashtag or the account name you want to get images for.
// isHashtag is either true or false.
// response is an array object containing the image objects

  var url;
  if (isHashtag === true) {
    url = "https://www.instagram.com/explore/tags/"+lookup+"/";
  } else {
    url = "https://www.instagram.com/"+lookup+"/"
  }
  var images = [];
  $.get(url, function(page) {
    var re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    var match;
    var matchString = "window._sharedData = ";
    var script;
    while (match = re.exec(page)) {
      if (match[1].substr(0,matchString.length) === matchString) {
        script = match[1].substr(matchString.length, match[1].length - matchString.length -1);
      }
    }
    var data = JSON.parse(script);
    var rawImages;
    console.log(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media);
    if (isHashtag === true) {
      rawImages = data.entry_data.TagPage[0].graphql.hashtag.edge_hashtag_to_media.edges;
    } else {
      rawImages = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
    }
    for (var i in rawImages) {
      images.push({
        url: rawImages[i].node.display_url,
        caption: rawImages[i].node.edge_media_to_caption.edges[0].node.text,
        taken_at: rawImages[i].node.taken_at_timestamp,
        likes: rawImages[i].node.edge_liked_by.count,
        owner: rawImages[i].node.owner.id
      });
    }
  response(images);
});
  
}
