# Instagram Image Retrieve

## Introduction 

This is a simple JavaScript function for retrieving Instagram images based on a username or hashtag.

It loads the web page using jquery, looks through the scripts in the HTML, one of which has all the data for the images on the page. It then scrapes out the appropriate data by reading it like JSON.

Why I made this: when Instagram closed its API in June 2016, I had to sunset some parts of an app I was building that displayed the most recent images for an account or hashtag. I no longer have that app, but still, find this useful in other applications.

This function retrieves the URLs of the images and returns them (along with other metadata).

##Usage

To retrieve images for the account 'shesatrailblazer':

    getGrams ("shesatrailblazer", false, function(images) {
      console.log(images[]);  
    });

Or to retrieve images for the hashtag 'motorcycle':

    getGrams ("motorcycle", true, function(images) {
      console.log(images[]);  
    });

You'll get an array object that looks like this:

    [{
      caption: "LOVE HER!
    Model: @amieejohnsonn
    #hottestwomenonearth #backtoschool #bae #class #jetski #jeep #dunebuggy #dirtbike #motorcycle #schoolgirl #skateboard #lifeguard #waverunner #wakeboarding #waterski #bts #2wheels #instamoto #school #callofduty #saveme #drone #teacherspet #teacher",
      likes: 0,
      owner: "7623882353",
      taken_at: 1535682521,
      url: "https://scontent-sjc3-1.cdninstagram.com/vp/cecb4394c9e6bc4aad620796be2c6dae/5C1F5605/t51.2885-15/e35/39887438_300724440512938_6262235915851137024_n.jpg"
    }, [...
