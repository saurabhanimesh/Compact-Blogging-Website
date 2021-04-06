
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "",
  authDomain: "snehavikash-a9acc.firebaseapp.com",
  projectId: "snehavikash-a9acc",
  storageBucket: "snehavikash-a9acc.appspot.com",
  messagingSenderId: "931669091414",
  appId: "1:931669091414:web:a2f56cdc8fab3b077d47f7",
  measurementId: "G-WM3VTZ5PS4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();


let checkbuttonpress1 = 0;
let checkbuttonpress2 = 0;
let checkbuttonpress3 = 0;
const readmore1 = document.getElementById("viewfullblog1");
const readmore2 = document.getElementById("viewfullblog2");
const readmore3 = document.getElementById("viewfullblog3");
const latestblogimage1 = document.getElementById("latestblogimage1");
const latestblogimage2 = document.getElementById("latestblogimage2");
const latestblogimage3 = document.getElementById("latestblogimage3");
const blog1imageconnect = document.getElementById("blog1imageconnect");
const blog2imageconnect = document.getElementById("blog2imageconnect");
const blog3imageconnect = document.getElementById("blog3imageconnect");
const sellbook = document.getElementById("sellbook");
const hireImgae = document.getElementById("hireImgae");
const aboutImage = document.getElementById("aboutImage");

const reviewName1 = document.getElementById("reviewName1");
const reviewName2 = document.getElementById("reviewName2");
const reviewName3 = document.getElementById("reviewName3");
const starsRate1 = document.getElementById("starsRate1");
const starsRate2 = document.getElementById("starsRate2");
const starsRate3 = document.getElementById("starsRate3");
const review1comment1 = document.getElementById("review1comment1");
const review1comment2 = document.getElementById("review1comment2");
const review1comment3 = document.getElementById("review1comment3");
const hireform = document.getElementById("hireform");
const input1shopxx = document.getElementById("clientname");
const input2shopxx = document.getElementById("clientemail");
const input3shopxx = document.getElementById("clientnumber");
const input4shopxx = document.getElementById("clienttext");
const thankyoumessage1xx = document.getElementById("thankyoumessage1");
const thankyoumessage2xx = document.getElementById("thankyoumessage2");
const homebookdetailx = document.getElementById("homebookdetail");
const disclaimer = document.getElementById("disclaimer");
const eshopnowhome = document.getElementById("eshopnowhome");


disclaimer.addEventListener("click", () => {
  disclaimer.style.display = "none";
  var dis = document.createElement("p");
  var disnode = document.createTextNode("Disclaimer: The content on this page is the personal opinion of the writer and it is not to offend anyone.");
  dis.appendChild(disnode);
  dis.id = "distext";
  eshopnowhome.appendChild(dis);
});



sellbook.addEventListener("mouseover", () => {
  hireform.style.display = "none";
  var docRefblogBookD = db.collection("BookDetail").doc("book1detail");

  docRefblogBookD.get().then(function (doc) {
    if (doc.exists) {
      var detailsreview = doc.data();
      var bddiv = document.createElement("div");
      var bdhead = document.createElement("h");
      var bdheadnode = document.createTextNode("Description");
      bdhead.appendChild(bdheadnode);
      var bdcontent = document.createElement("p");
      var bdcontentnode = document.createTextNode(detailsreview.Description);
      bdcontent.appendChild(bdcontentnode);

      bddiv.id = "bddiv";
      bdcontent.id = "bdcontent";
      bdhead.id = "bdhead";

      bddiv.appendChild(bdhead);
      bddiv.appendChild(bdcontent);
      sellbook.style.marginRight = "50px"
      homebookdetailx.appendChild(bddiv);

    } else {
      // doc.data() will be undefined in this case
      bdcontent.innerHTML = "Check Your Internet Connection";
      bdhead.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    bdcontent.innerHTML = "Check Your Internet Connection";
    bdhead.innerHTML = "Check Your Internet Connection";
  });
});


sellbook.addEventListener("mouseout", () => {
  hireform.style.display = "flex";
  var removedivbd = document.getElementById("bddiv");
  homebookdetailx.removeChild(removedivbd);
  sellbook.style.marginRight = "220px"
});


// var bookim= document.getElementById("mainsign");
// const im="GONU.jpg";

// var bi1=document.createElement("img");
// bi1.src="blog1.jpg";

//  var file;
//  var input = document.createElement("input");
//    input.type="file";
//    input.accept="image/*";

// input.onchange = e =>{
//   file = e.target.files[0];
//   }
//  input.click(); 

//   var metadeta={
//      contentType: 'image/png', 
//     };


// var storageRef = firebase.storage().ref('BlogUploads');
// var uploadTask = storageRef.put(file);

// uploadTask.on('state_changed',function (snapshot){
//     var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
//      console.log("upload is "+ progress + " done" ); },
//      function(error){
//       console.log(error.message);
//      }
// );



function myFunction() {
  setInterval(function () {
    setTimeout(function () {

      var oldstar1 = document.getElementById("starcreate1");
      var oldstar2 = document.getElementById("starcreate2");
      var oldstar3 = document.getElementById("starcreate3");
      var oldstar4 = document.getElementById("starcreate4");
      var oldstar5 = document.getElementById("starcreate5");
      starsRate1.removeChild(oldstar1);
      starsRate1.removeChild(oldstar2);
      starsRate1.removeChild(oldstar3);
      starsRate1.removeChild(oldstar4);
      starsRate1.removeChild(oldstar5);

      let starscheck1 = 1;


      var docRefblogReview1 = db.collection("ReviewsShow").doc("Review1");
      var docRefblogReview2 = db.collection("ReviewsShow").doc("Review2");
      var docRefblogReview3 = db.collection("ReviewsShow").doc("Review3");

      docRefblogReview1.get().then(function (doc) {
        if (doc.exists) {
          var detailsreview = doc.data();
          reviewName1.innerHTML = detailsreview.Name;
          var starsInteger = parseInt(detailsreview.stars);
          while (starscheck1 <= starsInteger) {
            var starcreate = document.createElement("img");
            starcreate.src = "star.png";
            starcreate.alt = "*";
            starcreate.className = "starcreate1";
            starcreate.id = "starcreate" + starscheck1;
            starsRate1.appendChild(starcreate);
            starscheck1++;
          }
          review1comment1.innerHTML = detailsreview.comment;
        } else {
          // doc.data() will be undefined in this case
          reviewName1.innerHTML = "Check Your Internet Connection";
          review1comment1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        reviewName1.innerHTML = "Check Your Internet Connection";
        review1comment1.innerHTML = "Check Your Internet Connection";
      });
    }, 0);

    var delayInMilliseconds2 = 5000; //1 second

    setTimeout(function () {
      var oldstar1 = document.getElementById("starcreate1");
      var oldstar2 = document.getElementById("starcreate2");
      var oldstar3 = document.getElementById("starcreate3");
      var oldstar4 = document.getElementById("starcreate4");
      var oldstar5 = document.getElementById("starcreate5");
      starsRate1.removeChild(oldstar1);
      starsRate1.removeChild(oldstar2);
      starsRate1.removeChild(oldstar3);
      starsRate1.removeChild(oldstar4);
      starsRate1.removeChild(oldstar5);

      let starscheck2 = 1;

      docRefblogReview2.get().then(function (doc) {
        if (doc.exists) {
          var detailsreview = doc.data();
          reviewName1.innerHTML = detailsreview.Name;
          var starsInteger = parseInt(detailsreview.stars);
          while (starscheck2 <= starsInteger) {
            var starcreate = document.createElement("img");
            starcreate.src = "star.png";
            starcreate.alt = "*";
            starcreate.className = "starcreate2";
            starcreate.id = "starcreate" + starscheck2;
            starsRate1.appendChild(starcreate);
            starscheck2++;
          }
          review1comment1.innerHTML = detailsreview.comment;
        } else {
          // doc.data() will be undefined in this case
          reviewName1.innerHTML = "Check Your Internet Connection";
          review1comment1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        reviewName1.innerHTML = "Check Your Internet Connection";
        review1comment1.innerHTML = "Check Your Internet Connection";
      });
    }, delayInMilliseconds2);


    var delayInMilliseconds3 = 10000; //1 second

    setTimeout(function () {

      var oldstar1 = document.getElementById("starcreate1");
      var oldstar2 = document.getElementById("starcreate2");
      var oldstar3 = document.getElementById("starcreate3");
      var oldstar4 = document.getElementById("starcreate4");
      var oldstar5 = document.getElementById("starcreate5");
      starsRate1.removeChild(oldstar1);
      starsRate1.removeChild(oldstar2);
      starsRate1.removeChild(oldstar3);
      starsRate1.removeChild(oldstar4);
      starsRate1.removeChild(oldstar5);

      let starscheck3 = 1;


      docRefblogReview3.get().then(function (doc) {
        if (doc.exists) {
          var detailsreview = doc.data();
          reviewName1.innerHTML = detailsreview.Name;
          var starsInteger = parseInt(detailsreview.stars);
          while (starscheck3 <= starsInteger) {
            var starcreate = document.createElement("img");
            starcreate.src = "star.png";
            starcreate.alt = "*";
            starcreate.className = "starcreate3";
            starcreate.id = "starcreate" + starscheck3;
            starsRate1.appendChild(starcreate);
            starscheck3++;
          }
          review1comment1.innerHTML = detailsreview.comment;
        } else {
          // doc.data() will be undefined in this case
          reviewName1.innerHTML = "Check Your Internet Connection";
          review1comment1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        reviewName1.innerHTML = "Check Your Internet Connection";
        review1comment1.innerHTML = "Check Your Internet Connection";
      });
    }, delayInMilliseconds3);
  }, 15000);
}


let starscheck1 = 1;

var docRefblogReview1 = db.collection("ReviewsShow").doc("Review1");
var docRefblogReview2 = db.collection("ReviewsShow").doc("Review2");
var docRefblogReview3 = db.collection("ReviewsShow").doc("Review3");

docRefblogReview1.get().then(function (doc) {
  if (doc.exists) {
    var detailsreview = doc.data();
    reviewName1.innerHTML = detailsreview.Name;
    var starsInteger = parseInt(detailsreview.stars);
    while (starscheck1 <= starsInteger) {
      var starcreate = document.createElement("img");
      starcreate.src = "star.png";
      starcreate.alt = "*";
      starcreate.className = "starcreate1";
      starcreate.id = "starcreate" + starscheck1;
      starsRate1.appendChild(starcreate);
      starscheck1++;
    }
    review1comment1.innerHTML = detailsreview.comment;
  } else {
    // doc.data() will be undefined in this case
    reviewName1.innerHTML = "Check Your Internet Connection";
    review1comment1.innerHTML = "Check Your Internet Connection";
  }
}).catch(function (error) {
  reviewName1.innerHTML = "Check Your Internet Connection";
  review1comment1.innerHTML = "Check Your Internet Connection";
});


var delayInMilliseconds2 = 5000; //1 second

setTimeout(function () {
  var oldstar1 = document.getElementById("starcreate1");
  var oldstar2 = document.getElementById("starcreate2");
  var oldstar3 = document.getElementById("starcreate3");
  var oldstar4 = document.getElementById("starcreate4");
  var oldstar5 = document.getElementById("starcreate5");
  starsRate1.removeChild(oldstar1);
  starsRate1.removeChild(oldstar2);
  starsRate1.removeChild(oldstar3);
  starsRate1.removeChild(oldstar4);
  starsRate1.removeChild(oldstar5);

  let starscheck2 = 1;

  docRefblogReview2.get().then(function (doc) {
    if (doc.exists) {
      var detailsreview = doc.data();
      reviewName1.innerHTML = detailsreview.Name;
      var starsInteger = parseInt(detailsreview.stars);
      while (starscheck2 <= starsInteger) {
        var starcreate = document.createElement("img");
        starcreate.src = "star.png";
        starcreate.alt = "*";
        starcreate.className = "starcreate2";
        starcreate.id = "starcreate" + starscheck2;
        starsRate1.appendChild(starcreate);
        starscheck2++;
      }
      review1comment1.innerHTML = detailsreview.comment;
    } else {
      // doc.data() will be undefined in this case
      reviewName1.innerHTML = "Check Your Internet Connection";
      review1comment1.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    reviewName1.innerHTML = "Check Your Internet Connection";
    review1comment1.innerHTML = "Check Your Internet Connection";
  });
}, delayInMilliseconds2);



var delayInMilliseconds3 = 10000; //1 second

setTimeout(function () {

  var oldstar1 = document.getElementById("starcreate1");
  var oldstar2 = document.getElementById("starcreate2");
  var oldstar3 = document.getElementById("starcreate3");
  var oldstar4 = document.getElementById("starcreate4");
  var oldstar5 = document.getElementById("starcreate5");
  starsRate1.removeChild(oldstar1);
  starsRate1.removeChild(oldstar2);
  starsRate1.removeChild(oldstar3);
  starsRate1.removeChild(oldstar4);
  starsRate1.removeChild(oldstar5);

  let starscheck3 = 1;


  docRefblogReview3.get().then(function (doc) {
    if (doc.exists) {
      var detailsreview = doc.data();
      reviewName1.innerHTML = detailsreview.Name;
      var starsInteger = parseInt(detailsreview.stars);
      while (starscheck3 <= starsInteger) {
        var starcreate = document.createElement("img");
        starcreate.src = "star.png";
        starcreate.alt = "*";
        starcreate.className = "starcreate3";
        starcreate.id = "starcreate" + starscheck3;
        starsRate1.appendChild(starcreate);
        starscheck3++;
      }
      review1comment1.innerHTML = detailsreview.comment;
    } else {
      // doc.data() will be undefined in this case
      reviewName1.innerHTML = "Check Your Internet Connection";
      review1comment1.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    reviewName1.innerHTML = "Check Your Internet Connection";
    review1comment1.innerHTML = "Check Your Internet Connection";
  });
}, delayInMilliseconds3);

myFunction();



var checkownerbutton = 1;
var checkwronginput = 1;
var checkwronginput2 = 1;
var checkwronginput3 = 1;

var storage = firebase.storage();
var storageRef = storage.ref();

var image1Ref = storageRef.child('BlogImages/b1.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  blog1imageconnect.src = url;
}).catch(function (error) {
  blog1imageconnect.alt = "Image1";
});


var image2Ref = storageRef.child('BlogImages/b2.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  blog2imageconnect.src = url;
}).catch(function (error) {
  blog2imageconnect.alt = "Image2";
});

var image3Ref = storageRef.child('BlogImages/b3.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  blog3imageconnect.src = url;
}).catch(function (error) {
  blog1imageconnect.alt = "Image3";
});

var imageShopRef = storageRef.child('ShopImages/book1.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  sellbook.src = url;
}).catch(function (error) {
  sellbook.alt = "Book Image";
});

var imageHireRef = storageRef.child('HireImages/Hire2.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  hireImgae.src = url;
}).catch(function (error) {
  hireImgae.alt = "Image";
});

var imageAboutRef = storageRef.child('AboutImages/aboutme.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  aboutImage.src = url;
}).catch(function (error) {
  aboutImage.alt = "Image";
});


var contentblog1 = document.getElementById("contentblog1");
var contentblog2 = document.getElementById("contentblog2");
var contentblog3 = document.getElementById("contentblog3");
var headingblog1 = document.getElementById("headingblog1");
var headingblog2 = document.getElementById("headingblog2");
var headingblog3 = document.getElementById("headingblog3");


var docRefblog1 = db.collection("BlogsData").doc("Blog1");

docRefblog1.get().then(function (doc) {
  if (doc.exists) {
    var detailsblog1 = doc.data();
    var detailsblog1sliced = detailsblog1.BLOG.slice(0, 250);
    contentblog1.innerHTML = detailsblog1sliced + "...";
    headingblog1.innerHTML = detailsblog1.BLOGHEAD;
  } else {
    // doc.data() will be undefined in this case
    contentblog1.innerHTML = "Check Your Internet Connection";
    headingblog1.innerHTML = "Check Your Internet Connection";
  }
}).catch(function (error) {
  contentblog1.innerHTML = "Check Your Internet Connection";
  headingblog1.innerHTML = "Check Your Internet Connection";
});

var docRefblog2 = db.collection("BlogsData").doc("Blog2");

docRefblog2.get().then(function (doc) {
  if (doc.exists) {
    var detailsblog2 = doc.data();
    var detailsblog1sliced2 = detailsblog2.BLOG.slice(0, 250);
    contentblog2.innerHTML = detailsblog1sliced2 + "...";
    headingblog2.innerHTML = detailsblog2.BLOGHEAD;
  } else {
    // doc.data() will be undefined in this case
    contentblog2.innerHTML = "Check Your Internet Connection";
    headingblog2.innerHTML = "Check Your Internet Connection";
  }
}).catch(function (error) {
  contentblog2.innerHTML = "Check Your Internet Connection";
  headingblog2.innerHTML = "Check Your Internet Connection";
});

var docRefblog3 = db.collection("BlogsData").doc("Blog3");

docRefblog3.get().then(function (doc) {
  if (doc.exists) {
    var detailsblog3 = doc.data();
    var detailsblog1sliced3 = detailsblog3.BLOG.slice(0, 250);
    contentblog3.innerHTML = detailsblog1sliced3 + "...";
    headingblog3.innerHTML = detailsblog3.BLOGHEAD;
  } else {
    // doc.data() will be undefined in this case
    contentblog3.innerHTML = "Check Your Internet Connection";
    headingblog3.innerHTML = "Check Your Internet Connection";
  }
}).catch(function (error) {
  contentblog3.innerHTML = "Check Your Internet Connection";
  headingblog3.innerHTML = "Check Your Internet Connection";
});

let aboutcontent = document.getElementById("aboutcontent");
var docRefabout = db.collection("AboutData").doc("meabout");


docRefabout.get().then(function (doc) {
  if (doc.exists) {
    var detailsabout = doc.data();
    aboutcontent.innerHTML = detailsabout.aboutdetail;
  } else {
    // doc.data() will be undefined in this case
    aboutcontent.innerHTML = "Check Your Internet Connection";
  }
}).catch(function (error) {
  aboutcontent.innerHTML = "Check Your Internet Connection";
});


var sharesocail1 = document.getElementById("sharesocail1");
var sharesocail2 = document.getElementById("sharesocail2");
var sharesocail3 = document.getElementById("sharesocail3");
var sharingplatforms1 = document.getElementById("sharingplatforms1");
var sharingplatforms2 = document.getElementById("sharingplatforms2");
var sharingplatforms3 = document.getElementById("sharingplatforms3");
var sharesocail1check = 1;
var sharesocail2check = 1;
var sharesocail3check = 1;



sharesocail1.addEventListener("click", () => {

  if (sharesocail1check == 1) {
    sharingplatforms1.style.display = "flex";
    sharesocail1check = 0;
  }
  else {
    sharingplatforms1.style.display = "none";
    sharesocail1check = 1;
  }

});

sharesocail2.addEventListener("click", () => {
  if (sharesocail2check == 1) {
    sharingplatforms2.style.display = "flex";
    sharesocail2check = 0;
  }
  else {
    sharingplatforms2.style.display = "none";
    sharesocail2check = 1;
  }
});

sharesocail3.addEventListener("click", () => {
  if (sharesocail3check == 1) {
    sharingplatforms3.style.display = "flex";
    sharesocail3check = 0;
  }
  else {
    sharingplatforms3.style.display = "none";
    sharesocail3check = 1;
  }
});

var checkreadmore = 0;
var nextblog = document.getElementById("nextblog");
var previousblog = document.getElementById("previousblog");


readmore1.addEventListener("click", () => {

  if (checkreadmore == 0) {
    var blogbuttons = document.getElementById("blogbuttons");


    if (checkbuttonpress1 == 0) {
      nextblog.style.display = "none";
      previousblog.style.display = "none";

      var editbutton = document.createElement("button");
      var editbuttonnode = document.createTextNode("owner edit");
      editbutton.appendChild(editbuttonnode);
      blogbuttons.appendChild(editbutton);

      editbutton.className = "editButton";
      editbutton.id = "editButton";
      latestblogimage2.style.display = "none";
      latestblogimage3.style.display = "none";
      checkbuttonpress1 = 1;

      docRefblog1.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog1 = doc.data();
          var detailsblog1sliced = detailsblog1.BLOG;
          contentblog1.innerHTML = detailsblog1sliced;
          headingblog1.innerHTML = detailsblog1.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });

      editbutton.addEventListener("click", () => {

        var blogmainsection = document.getElementById("blog");
        var autoclickblog1 = document.createElement("a");
        autoclickblog1.href = "#blog";
        autoclickblog1.click();

        if (true) {
          let shopbox = document.getElementById("shopbox");
          let xshopbox = document.getElementById("xshopbox");
          let aboutbox = document.getElementById("about");
          let bloghomepageimages = document.getElementById("bloghomepageimages");
          latestblogimage1.style.display = "none";
          latestblogimage2.style.display = "none";
          latestblogimage3.style.display = "none";

          let ownerloginboxusername = document.createElement("input");
          ownerloginboxusername.placeholder = "userId";
          ownerloginboxusername.type = "name";
          ownerloginboxusername.id = "ownerusername";

          let ownerloginboxpassword = document.createElement("input");
          ownerloginboxpassword.placeholder = "Password";
          ownerloginboxpassword.type = "password";
          ownerloginboxpassword.id = "ownerpassword";

          let ownerloginbutton = document.createElement("button");
          let ownerloginbuttonnode = document.createTextNode("Login");
          ownerloginbutton.appendChild(ownerloginbuttonnode);
          ownerloginbutton.id = "ownerloginbutton";

          let ownerbackbutton = document.createElement("button");
          let ownerbackbuttonnode = document.createTextNode("back");
          ownerbackbutton.appendChild(ownerbackbuttonnode);
          ownerbackbutton.id = "ownerbackbutton";


          bloghomepageimages.appendChild(ownerloginboxusername);
          bloghomepageimages.appendChild(ownerloginboxpassword);
          bloghomepageimages.appendChild(ownerloginbutton);
          bloghomepageimages.appendChild(ownerbackbutton);

          bloghomepageimages.style.flexDirection = "column";

          ownerbackbutton.addEventListener("click", () => {

            if (checkwronginput == 0) {
              let wronginputmessage1 = document.getElementById("wronginputmessage");
              bloghomepageimages.removeChild(wronginputmessage1);
              checkwronginput = 1;
            }

            let ownerloginboxusernameremove = document.getElementById("ownerusername");
            let ownerloginboxpasswordremove = document.getElementById("ownerpassword");
            let ownerloginbuttonremove = document.getElementById("ownerloginbutton");
            let ownerbackbuttonremove = document.getElementById("ownerbackbutton");

            bloghomepageimages.removeChild(ownerloginboxusernameremove);
            bloghomepageimages.removeChild(ownerloginboxpasswordremove);
            bloghomepageimages.removeChild(ownerloginbuttonremove);
            bloghomepageimages.removeChild(ownerbackbuttonremove);

            latestblogimage1.style.display = "flex";
            bloghomepageimages.style.flexDirection = "row";
            // checkownerbutton=0;
          });

          //  checkownerbutton=0;

          ownerloginbutton.addEventListener("click", () => {
            if (true) {

              firebase.auth().signInWithEmailAndPassword(ownerloginboxusername.value, ownerloginboxpassword.value)
                .then((user) => {
                  if (checkwronginput == 0) {
                    let wronginputmessage1 = document.getElementById("wronginputmessage");
                    bloghomepageimages.removeChild(wronginputmessage1);
                    checkwronginput = 1;
                  }
                  let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                  let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                  let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                  let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                  bloghomepageimages.removeChild(ownerloginboxusernameremove2);
                  bloghomepageimages.removeChild(ownerloginboxpasswordremove2);
                  bloghomepageimages.removeChild(ownerloginbuttonremove2);
                  bloghomepageimages.removeChild(ownerbackbuttonremove2);

                  var docRef = db.collection("BlogsData").doc("Blog1");

                  docRef.get().then(function (doc) {
                    if (doc.exists) {
                      var blog1details = doc.data();
                      var blog1head = document.createElement("input");
                      blog1head.value = blog1details.BLOGHEAD;
                      blog1head.id = "blog1head";

                      var blog1content = document.createElement("textarea");
                      blog1content.value = blog1details.BLOG;
                      blog1content.id = "blog1content";

                      var blog1update = document.createElement("button");
                      var blog1updatenode = document.createTextNode("update");
                      blog1update.appendChild(blog1updatenode);
                      blog1update.id = "blog1update";


                      bloghomepageimages.appendChild(blog1head);
                      bloghomepageimages.appendChild(blog1content);
                      bloghomepageimages.appendChild(blog1update);
                      bloghomepageimages.style.flexDirection = "column";

                      blog1update.addEventListener("click", () => {

                        db.collection("BlogsData").doc("Blog1").set({
                          BLOG: blog1content.value,
                          BLOGHEAD: blog1head.value
                        }).then(function () {
                          location.reload();
                        });
                      });
                    } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                  }).catch(function (error) {
                    console.log("Error getting document:", error);
                  });
                })
                .catch((error) => {
                  if (checkwronginput == 1) {
                    let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                    let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                    let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                    let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                    let wronginputmessage = document.createElement("p");
                    let wronginputmessagenode = document.createTextNode("Wrong Input, Please Try Again");
                    wronginputmessage.appendChild(wronginputmessagenode);

                    wronginputmessage.id = "wronginputmessage";

                    bloghomepageimages.appendChild(wronginputmessage);
                    checkwronginput = 0;
                  }
                });
            }
          });
        }
      });
    }
    else {
      nextblog.style.display = "flex";
      var blogmainsection = document.getElementById("blog");
      var autoclickblog1 = document.createElement("a");
      autoclickblog1.href = "#blog";
      autoclickblog1.click();
      const editbuttonremove = document.getElementById("editButton");
      blogbuttons.removeChild(editbuttonremove);
      latestblogimage2.style.display = "flex";
      latestblogimage3.style.display = "flex";

      docRefblog1.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog1 = doc.data();
          var detailsblog1sliced = detailsblog1.BLOG.slice(0, 250);
          contentblog1.innerHTML = detailsblog1sliced + "...";
          headingblog1.innerHTML = detailsblog1.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });
      checkbuttonpress1 = 0;
    }
  }
  else {

    var docRefblog4 = db.collection("BlogsData").doc("Blog4");


    var blogbuttons = document.getElementById("blogbuttons");


    if (checkbuttonpress1 == 0) {
      nextblog.style.display = "none";
      previousblog.style.display = "none";

      var editbutton = document.createElement("button");
      var editbuttonnode = document.createTextNode("owner edit");
      editbutton.appendChild(editbuttonnode);
      blogbuttons.appendChild(editbutton);

      editbutton.className = "editButton";
      editbutton.id = "editButton";
      latestblogimage2.style.display = "none";
      latestblogimage3.style.display = "none";
      checkbuttonpress1 = 1;

      docRefblog4.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog1 = doc.data();
          var detailsblog1sliced = detailsblog1.BLOG;
          contentblog1.innerHTML = detailsblog1sliced;
          headingblog1.innerHTML = detailsblog1.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });

      editbutton.addEventListener("click", () => {

        var blogmainsection = document.getElementById("blog");
        var autoclickblog1 = document.createElement("a");
        autoclickblog1.href = "#blog";
        autoclickblog1.click();

        if (true) {
          let shopbox = document.getElementById("shopbox");
          let xshopbox = document.getElementById("xshopbox");
          let aboutbox = document.getElementById("about");
          let bloghomepageimages = document.getElementById("bloghomepageimages");
          latestblogimage1.style.display = "none";
          latestblogimage2.style.display = "none";
          latestblogimage3.style.display = "none";

          let ownerloginboxusername = document.createElement("input");
          ownerloginboxusername.placeholder = "userId";
          ownerloginboxusername.type = "name";
          ownerloginboxusername.id = "ownerusername";

          let ownerloginboxpassword = document.createElement("input");
          ownerloginboxpassword.placeholder = "Password";
          ownerloginboxpassword.type = "password";
          ownerloginboxpassword.id = "ownerpassword";

          let ownerloginbutton = document.createElement("button");
          let ownerloginbuttonnode = document.createTextNode("Login");
          ownerloginbutton.appendChild(ownerloginbuttonnode);
          ownerloginbutton.id = "ownerloginbutton";

          let ownerbackbutton = document.createElement("button");
          let ownerbackbuttonnode = document.createTextNode("back");
          ownerbackbutton.appendChild(ownerbackbuttonnode);
          ownerbackbutton.id = "ownerbackbutton";


          bloghomepageimages.appendChild(ownerloginboxusername);
          bloghomepageimages.appendChild(ownerloginboxpassword);
          bloghomepageimages.appendChild(ownerloginbutton);
          bloghomepageimages.appendChild(ownerbackbutton);

          bloghomepageimages.style.flexDirection = "column";

          ownerbackbutton.addEventListener("click", () => {

            if (checkwronginput == 0) {
              let wronginputmessage1 = document.getElementById("wronginputmessage");
              bloghomepageimages.removeChild(wronginputmessage1);
              checkwronginput = 1;
            }

            let ownerloginboxusernameremove = document.getElementById("ownerusername");
            let ownerloginboxpasswordremove = document.getElementById("ownerpassword");
            let ownerloginbuttonremove = document.getElementById("ownerloginbutton");
            let ownerbackbuttonremove = document.getElementById("ownerbackbutton");

            bloghomepageimages.removeChild(ownerloginboxusernameremove);
            bloghomepageimages.removeChild(ownerloginboxpasswordremove);
            bloghomepageimages.removeChild(ownerloginbuttonremove);
            bloghomepageimages.removeChild(ownerbackbuttonremove);

            latestblogimage1.style.display = "flex";
            bloghomepageimages.style.flexDirection = "row";
            // checkownerbutton=0;
          });

          //  checkownerbutton=0;

          ownerloginbutton.addEventListener("click", () => {
            if (true) {

              firebase.auth().signInWithEmailAndPassword(ownerloginboxusername.value, ownerloginboxpassword.value)
                .then((user) => {
                  if (checkwronginput == 0) {
                    let wronginputmessage1 = document.getElementById("wronginputmessage");
                    bloghomepageimages.removeChild(wronginputmessage1);
                    checkwronginput = 1;
                  }
                  let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                  let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                  let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                  let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                  bloghomepageimages.removeChild(ownerloginboxusernameremove2);
                  bloghomepageimages.removeChild(ownerloginboxpasswordremove2);
                  bloghomepageimages.removeChild(ownerloginbuttonremove2);
                  bloghomepageimages.removeChild(ownerbackbuttonremove2);

                  var docRef = db.collection("BlogsData").doc("Blog4");

                  docRef.get().then(function (doc) {
                    if (doc.exists) {
                      var blog1details = doc.data();
                      var blog1head = document.createElement("input");
                      blog1head.value = blog1details.BLOGHEAD;
                      blog1head.id = "blog1head";

                      var blog1content = document.createElement("textarea");
                      blog1content.value = blog1details.BLOG;
                      blog1content.id = "blog1content";

                      var blog1update = document.createElement("button");
                      var blog1updatenode = document.createTextNode("update");
                      blog1update.appendChild(blog1updatenode);
                      blog1update.id = "blog1update";


                      bloghomepageimages.appendChild(blog1head);
                      bloghomepageimages.appendChild(blog1content);
                      bloghomepageimages.appendChild(blog1update);
                      bloghomepageimages.style.flexDirection = "column";

                      blog1update.addEventListener("click", () => {

                        db.collection("BlogsData").doc("Blog4").set({
                          BLOG: blog1content.value,
                          BLOGHEAD: blog1head.value
                        }).then(function () {
                          location.reload();
                        });
                      });
                    } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                  }).catch(function (error) {
                    console.log("Error getting document:", error);
                  });
                })
                .catch((error) => {
                  if (checkwronginput == 1) {
                    let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                    let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                    let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                    let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                    let wronginputmessage = document.createElement("p");
                    let wronginputmessagenode = document.createTextNode("Wrong Input, Please Try Again");
                    wronginputmessage.appendChild(wronginputmessagenode);

                    wronginputmessage.id = "wronginputmessage";

                    bloghomepageimages.appendChild(wronginputmessage);
                    checkwronginput = 0;
                  }
                });
            }
          });
        }
      });
    }
    else {
      previousblog.style.display = "flex";
      var blogmainsection = document.getElementById("blog");
      var autoclickblog1 = document.createElement("a");
      autoclickblog1.href = "#blog";
      autoclickblog1.click();
      const editbuttonremove = document.getElementById("editButton");
      blogbuttons.removeChild(editbuttonremove);
      latestblogimage2.style.display = "flex";
      latestblogimage3.style.display = "flex";

      docRefblog4.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog1 = doc.data();
          var detailsblog1sliced = detailsblog1.BLOG.slice(0, 250);
          contentblog1.innerHTML = detailsblog1sliced + "...";
          headingblog1.innerHTML = detailsblog1.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });
      checkbuttonpress1 = 0;
    }
  }
});




readmore2.addEventListener("click", () => {

  if (checkreadmore == 0) {
    var blogbuttons = document.getElementById("blogbuttons2");


    if (checkbuttonpress2 == 0) {
      nextblog.style.display = "none";
      previousblog.style.display = "none";

      var editbutton = document.createElement("button");
      var editbuttonnode = document.createTextNode("owner edit");
      editbutton.appendChild(editbuttonnode);
      blogbuttons.appendChild(editbutton);

      docRefblog2.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog2 = doc.data();
          contentblog2.innerHTML = detailsblog2.BLOG;
          headingblog2.innerHTML = detailsblog2.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog2.innerHTML = "Check Your Internet Connection";
          headingblog2.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog2.innerHTML = "Check Your Internet Connection";
        headingblog2.innerHTML = "Check Your Internet Connection";
      });


      editbutton.className = "editButton";
      editbutton.id = "editButton";
      latestblogimage1.style.display = "none";
      latestblogimage3.style.display = "none";
      checkbuttonpress2 = 1;

      editbutton.addEventListener("click", () => {

        var blogmainsection = document.getElementById("blog");
        var autoclickblog1 = document.createElement("a");
        autoclickblog1.href = "#blog";
        autoclickblog1.click();

        if (true) {
          let shopbox = document.getElementById("shopbox");
          let xshopbox = document.getElementById("xshopbox");
          let aboutbox = document.getElementById("about");
          let bloghomepageimages = document.getElementById("bloghomepageimages");
          latestblogimage1.style.display = "none";
          latestblogimage2.style.display = "none";
          latestblogimage3.style.display = "none";

          let ownerloginboxusername = document.createElement("input");
          ownerloginboxusername.placeholder = "userId";
          ownerloginboxusername.type = "name";
          ownerloginboxusername.id = "ownerusername";

          let ownerloginboxpassword = document.createElement("input");
          ownerloginboxpassword.placeholder = "Password";
          ownerloginboxpassword.type = "password";
          ownerloginboxpassword.id = "ownerpassword";

          let ownerloginbutton = document.createElement("button");
          let ownerloginbuttonnode = document.createTextNode("Login");
          ownerloginbutton.appendChild(ownerloginbuttonnode);
          ownerloginbutton.id = "ownerloginbutton";

          let ownerbackbutton = document.createElement("button");
          let ownerbackbuttonnode = document.createTextNode("back");
          ownerbackbutton.appendChild(ownerbackbuttonnode);
          ownerbackbutton.id = "ownerbackbutton";


          bloghomepageimages.appendChild(ownerloginboxusername);
          bloghomepageimages.appendChild(ownerloginboxpassword);
          bloghomepageimages.appendChild(ownerloginbutton);
          bloghomepageimages.appendChild(ownerbackbutton);

          bloghomepageimages.style.flexDirection = "column";

          ownerbackbutton.addEventListener("click", () => {

            if (checkwronginput2 == 0) {
              let wronginputmessage1 = document.getElementById("wronginputmessage");
              bloghomepageimages.removeChild(wronginputmessage1);
              checkwronginput2 = 1;
            }

            let ownerloginboxusernameremove = document.getElementById("ownerusername");
            let ownerloginboxpasswordremove = document.getElementById("ownerpassword");
            let ownerloginbuttonremove = document.getElementById("ownerloginbutton");
            let ownerbackbuttonremove = document.getElementById("ownerbackbutton");

            bloghomepageimages.removeChild(ownerloginboxusernameremove);
            bloghomepageimages.removeChild(ownerloginboxpasswordremove);
            bloghomepageimages.removeChild(ownerloginbuttonremove);
            bloghomepageimages.removeChild(ownerbackbuttonremove);

            latestblogimage2.style.display = "flex";
            bloghomepageimages.style.flexDirection = "row";
            // checkownerbutton=0;
          });

          //  checkownerbutton=0;

          ownerloginbutton.addEventListener("click", () => {
            if (true) {

              firebase.auth().signInWithEmailAndPassword(ownerloginboxusername.value, ownerloginboxpassword.value)
                .then((user) => {
                  if (checkwronginput2 == 0) {
                    let wronginputmessage1 = document.getElementById("wronginputmessage");
                    bloghomepageimages.removeChild(wronginputmessage1);
                    checkwronginput2 = 1;
                  }
                  let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                  let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                  let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                  let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                  bloghomepageimages.removeChild(ownerloginboxusernameremove2);
                  bloghomepageimages.removeChild(ownerloginboxpasswordremove2);
                  bloghomepageimages.removeChild(ownerloginbuttonremove2);
                  bloghomepageimages.removeChild(ownerbackbuttonremove2);

                  var docRef = db.collection("BlogsData").doc("Blog2");

                  docRef.get().then(function (doc) {
                    if (doc.exists) {
                      var blog2details = doc.data();
                      var blog2head = document.createElement("input");
                      blog2head.value = blog2details.BLOGHEAD;
                      blog2head.id = "blog2head";

                      var blog2content = document.createElement("textarea");
                      blog2content.value = blog2details.BLOG;
                      blog2content.id = "blog2content";

                      var blog2update = document.createElement("button");
                      var blog2updatenode = document.createTextNode("update");
                      blog2update.appendChild(blog2updatenode);
                      blog2update.id = "blog2update";


                      bloghomepageimages.appendChild(blog2head);
                      bloghomepageimages.appendChild(blog2content);
                      bloghomepageimages.appendChild(blog2update);
                      bloghomepageimages.style.flexDirection = "column";

                      blog2update.addEventListener("click", () => {

                        db.collection("BlogsData").doc("Blog5").set({
                          BLOG: blog2content.value,
                          BLOGHEAD: blog2head.value
                        }).then(function () {
                          location.reload();
                        });;
                      });
                    } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                  }).catch(function (error) {
                    console.log("Error getting document:", error);
                  });

                })
                .catch((error) => {
                  if (checkwronginput2 == 1) {
                    let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                    let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                    let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                    let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                    let wronginputmessage = document.createElement("p");
                    let wronginputmessagenode = document.createTextNode("Wrong Input, Please Try Again");
                    wronginputmessage.appendChild(wronginputmessagenode);

                    wronginputmessage.id = "wronginputmessage";

                    bloghomepageimages.appendChild(wronginputmessage);
                    checkwronginput2 = 0;
                  }
                });
            }
          });
        }
      });
    }
    else {
      nextblog.style.display = "flex";
      var blogmainsection = document.getElementById("blog");
      var autoclickblog1 = document.createElement("a");
      autoclickblog1.href = "#blog";
      autoclickblog1.click();
      const editbuttonremove = document.getElementById("editButton");
      blogbuttons.removeChild(editbuttonremove);
      latestblogimage1.style.display = "flex";
      latestblogimage3.style.display = "flex";

      docRefblog2.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog2 = doc.data();
          var detailsblog1sliced2 = detailsblog2.BLOG.slice(0, 250);
          contentblog2.innerHTML = detailsblog1sliced2 + "...";
          headingblog2.innerHTML = detailsblog2.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });
      checkbuttonpress2 = 0;
    }
  }
  else {

    var docRefblog5 = db.collection("BlogsData").doc("Blog5");


    var blogbuttons = document.getElementById("blogbuttons2");


    if (checkbuttonpress2 == 0) {
      nextblog.style.display="none";
      previousblog.style.display="none";

      var editbutton = document.createElement("button");
      var editbuttonnode = document.createTextNode("owner edit");
      editbutton.appendChild(editbuttonnode);
      blogbuttons.appendChild(editbutton);

      docRefblog5.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog2 = doc.data();
          contentblog2.innerHTML = detailsblog2.BLOG;
          headingblog2.innerHTML = detailsblog2.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog2.innerHTML = "Check Your Internet Connection";
          headingblog2.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog2.innerHTML = "Check Your Internet Connection";
        headingblog2.innerHTML = "Check Your Internet Connection";
      });


      editbutton.className = "editButton";
      editbutton.id = "editButton";
      latestblogimage1.style.display = "none";
      latestblogimage3.style.display = "none";
      checkbuttonpress2 = 1;

      editbutton.addEventListener("click", () => {

        var blogmainsection = document.getElementById("blog");
        var autoclickblog1 = document.createElement("a");
        autoclickblog1.href = "#blog";
        autoclickblog1.click();

        if (true) {
          let shopbox = document.getElementById("shopbox");
          let xshopbox = document.getElementById("xshopbox");
          let aboutbox = document.getElementById("about");
          let bloghomepageimages = document.getElementById("bloghomepageimages");
          latestblogimage1.style.display = "none";
          latestblogimage2.style.display = "none";
          latestblogimage3.style.display = "none";

          let ownerloginboxusername = document.createElement("input");
          ownerloginboxusername.placeholder = "userId";
          ownerloginboxusername.type = "name";
          ownerloginboxusername.id = "ownerusername";

          let ownerloginboxpassword = document.createElement("input");
          ownerloginboxpassword.placeholder = "Password";
          ownerloginboxpassword.type = "password";
          ownerloginboxpassword.id = "ownerpassword";

          let ownerloginbutton = document.createElement("button");
          let ownerloginbuttonnode = document.createTextNode("Login");
          ownerloginbutton.appendChild(ownerloginbuttonnode);
          ownerloginbutton.id = "ownerloginbutton";

          let ownerbackbutton = document.createElement("button");
          let ownerbackbuttonnode = document.createTextNode("back");
          ownerbackbutton.appendChild(ownerbackbuttonnode);
          ownerbackbutton.id = "ownerbackbutton";


          bloghomepageimages.appendChild(ownerloginboxusername);
          bloghomepageimages.appendChild(ownerloginboxpassword);
          bloghomepageimages.appendChild(ownerloginbutton);
          bloghomepageimages.appendChild(ownerbackbutton);

          bloghomepageimages.style.flexDirection = "column";

          ownerbackbutton.addEventListener("click", () => {

            if (checkwronginput2 == 0) {
              let wronginputmessage1 = document.getElementById("wronginputmessage");
              bloghomepageimages.removeChild(wronginputmessage1);
              checkwronginput2 = 1;
            }

            let ownerloginboxusernameremove = document.getElementById("ownerusername");
            let ownerloginboxpasswordremove = document.getElementById("ownerpassword");
            let ownerloginbuttonremove = document.getElementById("ownerloginbutton");
            let ownerbackbuttonremove = document.getElementById("ownerbackbutton");

            bloghomepageimages.removeChild(ownerloginboxusernameremove);
            bloghomepageimages.removeChild(ownerloginboxpasswordremove);
            bloghomepageimages.removeChild(ownerloginbuttonremove);
            bloghomepageimages.removeChild(ownerbackbuttonremove);

            latestblogimage2.style.display = "flex";
            bloghomepageimages.style.flexDirection = "row";
            // checkownerbutton=0;
          });

          //  checkownerbutton=0;

          ownerloginbutton.addEventListener("click", () => {
            if (true) {

              firebase.auth().signInWithEmailAndPassword(ownerloginboxusername.value, ownerloginboxpassword.value)
                .then((user) => {
                  if (checkwronginput2 == 0) {
                    let wronginputmessage1 = document.getElementById("wronginputmessage");
                    bloghomepageimages.removeChild(wronginputmessage1);
                    checkwronginput2 = 1;
                  }
                  let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                  let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                  let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                  let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                  bloghomepageimages.removeChild(ownerloginboxusernameremove2);
                  bloghomepageimages.removeChild(ownerloginboxpasswordremove2);
                  bloghomepageimages.removeChild(ownerloginbuttonremove2);
                  bloghomepageimages.removeChild(ownerbackbuttonremove2);

                  var docRef = db.collection("BlogsData").doc("Blog5");

                  docRef.get().then(function (doc) {
                    if (doc.exists) {
                      var blog2details = doc.data();
                      var blog2head = document.createElement("input");
                      blog2head.value = blog2details.BLOGHEAD;
                      blog2head.id = "blog2head";

                      var blog2content = document.createElement("textarea");
                      blog2content.value = blog2details.BLOG;
                      blog2content.id = "blog2content";

                      var blog2update = document.createElement("button");
                      var blog2updatenode = document.createTextNode("update");
                      blog2update.appendChild(blog2updatenode);
                      blog2update.id = "blog2update";


                      bloghomepageimages.appendChild(blog2head);
                      bloghomepageimages.appendChild(blog2content);
                      bloghomepageimages.appendChild(blog2update);
                      bloghomepageimages.style.flexDirection = "column";

                      blog2update.addEventListener("click", () => {

                        db.collection("BlogsData").doc("Blog5").set({
                          BLOG: blog2content.value,
                          BLOGHEAD: blog2head.value
                        }).then(function () {
                          location.reload();
                        });;
                      });
                    } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                  }).catch(function (error) {
                    console.log("Error getting document:", error);
                  });

                })
                .catch((error) => {
                  if (checkwronginput2 == 1) {
                    let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                    let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                    let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                    let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                    let wronginputmessage = document.createElement("p");
                    let wronginputmessagenode = document.createTextNode("Wrong Input, Please Try Again");
                    wronginputmessage.appendChild(wronginputmessagenode);

                    wronginputmessage.id = "wronginputmessage";

                    bloghomepageimages.appendChild(wronginputmessage);
                    checkwronginput2 = 0;
                  }
                });
            }
          });
        }
      });
    }
    else {
      previousblog.style.display="flex";
      var blogmainsection = document.getElementById("blog");
      var autoclickblog1 = document.createElement("a");
      autoclickblog1.href = "#blog";
      autoclickblog1.click();
      const editbuttonremove = document.getElementById("editButton");
      blogbuttons.removeChild(editbuttonremove);
      latestblogimage1.style.display = "flex";
      latestblogimage3.style.display = "flex";

      docRefblog5.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog2 = doc.data();
          var detailsblog1sliced2 = detailsblog2.BLOG.slice(0, 250);
          contentblog2.innerHTML = detailsblog1sliced2 + "...";
          headingblog2.innerHTML = detailsblog2.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });
      checkbuttonpress2 = 0;
    }
  }
});


readmore3.addEventListener("click", () => {

  if (checkreadmore == 0) {

    var blogbuttons = document.getElementById("blogbuttons3");


    if (checkbuttonpress3 == 0) {

      nextblog.style.display="none";
      previousblog.style.display="none";

      var editbutton = document.createElement("button");
      var editbuttonnode = document.createTextNode("owner edit");
      editbutton.appendChild(editbuttonnode);
      blogbuttons.appendChild(editbutton);

      docRefblog3.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog3 = doc.data();
          contentblog3.innerHTML = detailsblog3.BLOG;
          headingblog3.innerHTML = detailsblog3.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog3.innerHTML = "Check Your Internet Connection";
          headingblog3.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog3.innerHTML = "Check Your Internet Connection";
        headingblog3.innerHTML = "Check Your Internet Connection";
      });



      editbutton.className = "editButton";
      editbutton.id = "editButton";
      latestblogimage1.style.display = "none";
      latestblogimage2.style.display = "none";
      checkbuttonpress3 = 1;

      editbutton.addEventListener("click", () => {

        var blogmainsection = document.getElementById("blog");
        var autoclickblog1 = document.createElement("a");
        autoclickblog1.href = "#blog";
        autoclickblog1.click();

        if (true) {
          let shopbox = document.getElementById("shopbox");
          let xshopbox = document.getElementById("xshopbox");
          let aboutbox = document.getElementById("about");
          let bloghomepageimages = document.getElementById("bloghomepageimages");
          latestblogimage1.style.display = "none";
          latestblogimage2.style.display = "none";
          latestblogimage3.style.display = "none";

          let ownerloginboxusername = document.createElement("input");
          ownerloginboxusername.placeholder = "userId";
          ownerloginboxusername.type = "name";
          ownerloginboxusername.id = "ownerusername";

          let ownerloginboxpassword = document.createElement("input");
          ownerloginboxpassword.placeholder = "Password";
          ownerloginboxpassword.type = "password";
          ownerloginboxpassword.id = "ownerpassword";

          let ownerloginbutton = document.createElement("button");
          let ownerloginbuttonnode = document.createTextNode("Login");
          ownerloginbutton.appendChild(ownerloginbuttonnode);
          ownerloginbutton.id = "ownerloginbutton";

          let ownerbackbutton = document.createElement("button");
          let ownerbackbuttonnode = document.createTextNode("back");
          ownerbackbutton.appendChild(ownerbackbuttonnode);
          ownerbackbutton.id = "ownerbackbutton";


          bloghomepageimages.appendChild(ownerloginboxusername);
          bloghomepageimages.appendChild(ownerloginboxpassword);
          bloghomepageimages.appendChild(ownerloginbutton);
          bloghomepageimages.appendChild(ownerbackbutton);

          bloghomepageimages.style.flexDirection = "column";

          ownerbackbutton.addEventListener("click", () => {

            if (checkwronginput3 == 0) {
              let wronginputmessage1 = document.getElementById("wronginputmessage");
              bloghomepageimages.removeChild(wronginputmessage1);
              checkwronginput3 = 1;
            }

            let ownerloginboxusernameremove = document.getElementById("ownerusername");
            let ownerloginboxpasswordremove = document.getElementById("ownerpassword");
            let ownerloginbuttonremove = document.getElementById("ownerloginbutton");
            let ownerbackbuttonremove = document.getElementById("ownerbackbutton");

            bloghomepageimages.removeChild(ownerloginboxusernameremove);
            bloghomepageimages.removeChild(ownerloginboxpasswordremove);
            bloghomepageimages.removeChild(ownerloginbuttonremove);
            bloghomepageimages.removeChild(ownerbackbuttonremove);


            latestblogimage3.style.display = "flex";
            bloghomepageimages.style.flexDirection = "row";
            // checkownerbutton=0;
          });

          //  checkownerbutton=0;

          ownerloginbutton.addEventListener("click", () => {
            if (true) {

              firebase.auth().signInWithEmailAndPassword(ownerloginboxusername.value, ownerloginboxpassword.value)
                .then((user) => {

                  if (checkwronginput3 == 0) {
                    let wronginputmessage1 = document.getElementById("wronginputmessage");
                    bloghomepageimages.removeChild(wronginputmessage1);
                    checkwronginput3 = 1;
                  }
                  let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                  let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                  let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                  let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                  bloghomepageimages.removeChild(ownerloginboxusernameremove2);
                  bloghomepageimages.removeChild(ownerloginboxpasswordremove2);
                  bloghomepageimages.removeChild(ownerloginbuttonremove2);
                  bloghomepageimages.removeChild(ownerbackbuttonremove2);

                  var docRef = db.collection("BlogsData").doc("Blog3");

                  docRef.get().then(function (doc) {
                    if (doc.exists) {
                      var blog3details = doc.data();
                      var blog3head = document.createElement("input");
                      blog3head.value = blog3details.BLOGHEAD;
                      blog3head.id = "blog3head";

                      var blog3content = document.createElement("textarea");
                      blog3content.value = blog3details.BLOG;
                      blog3content.id = "blog3content";

                      var blog3update = document.createElement("button");
                      var blog3updatenode = document.createTextNode("update");
                      blog3update.appendChild(blog3updatenode);
                      blog3update.id = "blog3update";


                      bloghomepageimages.appendChild(blog3head);
                      bloghomepageimages.appendChild(blog3content);
                      bloghomepageimages.appendChild(blog3update);
                      bloghomepageimages.style.flexDirection = "column";

                      blog3update.addEventListener("click", () => {

                        db.collection("BlogsData").doc("Blog3").set({
                          BLOG: blog3content.value,
                          BLOGHEAD: blog3head.value
                        }).then(function () {
                          location.reload();
                        });;
                      });
                    } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                  }).catch(function (error) {
                    console.log("Error getting document:", error);
                  });
                })
                .catch((error) => {
                  if (checkwronginput3 == 1) {
                    let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                    let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                    let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                    let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                    let wronginputmessage = document.createElement("p");
                    let wronginputmessagenode = document.createTextNode("Wrong Input, Please Try Again");
                    wronginputmessage.appendChild(wronginputmessagenode);

                    wronginputmessage.id = "wronginputmessage";

                    bloghomepageimages.appendChild(wronginputmessage);
                    checkwronginput3 = 0;

                  }
                });
            }
          });
        }
      });
    }
    else {
      nextblog.style.display="flex";
      var blogmainsection = document.getElementById("blog");
      var autoclickblog1 = document.createElement("a");
      autoclickblog1.href = "#blog";
      autoclickblog1.click();
      const editbuttonremove = document.getElementById("editButton");
      blogbuttons.removeChild(editbuttonremove);
      latestblogimage1.style.display = "flex";
      latestblogimage2.style.display = "flex";

      docRefblog3.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog3 = doc.data();
          var detailsblog1sliced3 = detailsblog3.BLOG.slice(0, 250);
          contentblog3.innerHTML = detailsblog1sliced3 + "...";
          headingblog3.innerHTML = detailsblog3.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });
      checkbuttonpress3 = 0;
    }

  }
  else {
    var docRefblog6 = db.collection("BlogsData").doc("Blog6");


    var blogbuttons = document.getElementById("blogbuttons3");


    if (checkbuttonpress3 == 0) {
      nextblog.style.display="none";
      previousblog.style.display="none";

      var editbutton = document.createElement("button");
      var editbuttonnode = document.createTextNode("owner edit");
      editbutton.appendChild(editbuttonnode);
      blogbuttons.appendChild(editbutton);

      docRefblog6.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog3 = doc.data();
          contentblog3.innerHTML = detailsblog3.BLOG;
          headingblog3.innerHTML = detailsblog3.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog3.innerHTML = "Check Your Internet Connection";
          headingblog3.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog3.innerHTML = "Check Your Internet Connection";
        headingblog3.innerHTML = "Check Your Internet Connection";
      });



      editbutton.className = "editButton";
      editbutton.id = "editButton";
      latestblogimage1.style.display = "none";
      latestblogimage2.style.display = "none";
      checkbuttonpress3 = 1;

      editbutton.addEventListener("click", () => {

        var blogmainsection = document.getElementById("blog");
        var autoclickblog1 = document.createElement("a");
        autoclickblog1.href = "#blog";
        autoclickblog1.click();

        if (true) {
          let shopbox = document.getElementById("shopbox");
          let xshopbox = document.getElementById("xshopbox");
          let aboutbox = document.getElementById("about");
          let bloghomepageimages = document.getElementById("bloghomepageimages");
          latestblogimage1.style.display = "none";
          latestblogimage2.style.display = "none";
          latestblogimage3.style.display = "none";

          let ownerloginboxusername = document.createElement("input");
          ownerloginboxusername.placeholder = "userId";
          ownerloginboxusername.type = "name";
          ownerloginboxusername.id = "ownerusername";

          let ownerloginboxpassword = document.createElement("input");
          ownerloginboxpassword.placeholder = "Password";
          ownerloginboxpassword.type = "password";
          ownerloginboxpassword.id = "ownerpassword";

          let ownerloginbutton = document.createElement("button");
          let ownerloginbuttonnode = document.createTextNode("Login");
          ownerloginbutton.appendChild(ownerloginbuttonnode);
          ownerloginbutton.id = "ownerloginbutton";

          let ownerbackbutton = document.createElement("button");
          let ownerbackbuttonnode = document.createTextNode("back");
          ownerbackbutton.appendChild(ownerbackbuttonnode);
          ownerbackbutton.id = "ownerbackbutton";


          bloghomepageimages.appendChild(ownerloginboxusername);
          bloghomepageimages.appendChild(ownerloginboxpassword);
          bloghomepageimages.appendChild(ownerloginbutton);
          bloghomepageimages.appendChild(ownerbackbutton);

          bloghomepageimages.style.flexDirection = "column";

          ownerbackbutton.addEventListener("click", () => {

            if (checkwronginput3 == 0) {
              let wronginputmessage1 = document.getElementById("wronginputmessage");
              bloghomepageimages.removeChild(wronginputmessage1);
              checkwronginput3 = 1;
            }

            let ownerloginboxusernameremove = document.getElementById("ownerusername");
            let ownerloginboxpasswordremove = document.getElementById("ownerpassword");
            let ownerloginbuttonremove = document.getElementById("ownerloginbutton");
            let ownerbackbuttonremove = document.getElementById("ownerbackbutton");

            bloghomepageimages.removeChild(ownerloginboxusernameremove);
            bloghomepageimages.removeChild(ownerloginboxpasswordremove);
            bloghomepageimages.removeChild(ownerloginbuttonremove);
            bloghomepageimages.removeChild(ownerbackbuttonremove);


            latestblogimage3.style.display = "flex";
            bloghomepageimages.style.flexDirection = "row";
            // checkownerbutton=0;
          });

          //  checkownerbutton=0;

          ownerloginbutton.addEventListener("click", () => {
            if (true) {

              firebase.auth().signInWithEmailAndPassword(ownerloginboxusername.value, ownerloginboxpassword.value)
                .then((user) => {

                  if (checkwronginput3 == 0) {
                    let wronginputmessage1 = document.getElementById("wronginputmessage");
                    bloghomepageimages.removeChild(wronginputmessage1);
                    checkwronginput3 = 1;
                  }
                  let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                  let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                  let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                  let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                  bloghomepageimages.removeChild(ownerloginboxusernameremove2);
                  bloghomepageimages.removeChild(ownerloginboxpasswordremove2);
                  bloghomepageimages.removeChild(ownerloginbuttonremove2);
                  bloghomepageimages.removeChild(ownerbackbuttonremove2);

                  var docRef = db.collection("BlogsData").doc("Blog6");

                  docRef.get().then(function (doc) {
                    if (doc.exists) {
                      var blog3details = doc.data();
                      var blog3head = document.createElement("input");
                      blog3head.value = blog3details.BLOGHEAD;
                      blog3head.id = "blog3head";

                      var blog3content = document.createElement("textarea");
                      blog3content.value = blog3details.BLOG;
                      blog3content.id = "blog3content";

                      var blog3update = document.createElement("button");
                      var blog3updatenode = document.createTextNode("update");
                      blog3update.appendChild(blog3updatenode);
                      blog3update.id = "blog3update";


                      bloghomepageimages.appendChild(blog3head);
                      bloghomepageimages.appendChild(blog3content);
                      bloghomepageimages.appendChild(blog3update);
                      bloghomepageimages.style.flexDirection = "column";

                      blog3update.addEventListener("click", () => {

                        db.collection("BlogsData").doc("Blog6").set({
                          BLOG: blog3content.value,
                          BLOGHEAD: blog3head.value
                        }).then(function () {
                          location.reload();
                        });;
                      });
                    } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                  }).catch(function (error) {
                    console.log("Error getting document:", error);
                  });
                })
                .catch((error) => {
                  if (checkwronginput3 == 1) {
                    let ownerloginboxusernameremove2 = document.getElementById("ownerusername");
                    let ownerloginboxpasswordremove2 = document.getElementById("ownerpassword");
                    let ownerloginbuttonremove2 = document.getElementById("ownerloginbutton");
                    let ownerbackbuttonremove2 = document.getElementById("ownerbackbutton");

                    let wronginputmessage = document.createElement("p");
                    let wronginputmessagenode = document.createTextNode("Wrong Input, Please Try Again");
                    wronginputmessage.appendChild(wronginputmessagenode);

                    wronginputmessage.id = "wronginputmessage";

                    bloghomepageimages.appendChild(wronginputmessage);
                    checkwronginput3 = 0;

                  }
                });
            }
          });
        }
      });
    }
    else {
      previousblog.style.display="flex";
      var blogmainsection = document.getElementById("blog");
      var autoclickblog1 = document.createElement("a");
      autoclickblog1.href = "#blog";
      autoclickblog1.click();
      const editbuttonremove = document.getElementById("editButton");
      blogbuttons.removeChild(editbuttonremove);
      latestblogimage1.style.display = "flex";
      latestblogimage2.style.display = "flex";

      docRefblog6.get().then(function (doc) {
        if (doc.exists) {
          var detailsblog3 = doc.data();
          var detailsblog1sliced3 = detailsblog3.BLOG.slice(0, 250);
          contentblog3.innerHTML = detailsblog1sliced3 + "...";
          headingblog3.innerHTML = detailsblog3.BLOGHEAD;
        } else {
          // doc.data() will be undefined in this case
          contentblog1.innerHTML = "Check Your Internet Connection";
          headingblog1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        contentblog1.innerHTML = "Check Your Internet Connection";
        headingblog1.innerHTML = "Check Your Internet Connection";
      });
      checkbuttonpress3 = 0;
    }
  }
});


// usersubmitshop.addEventListener("click",()=>{

//   console.log(useraddress+" "+username+" "+usernumber)

// });



nextblog.addEventListener("click", () => {


  var image1Ref = storageRef.child('BlogImages/b4.jpg').getDownloadURL().then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'
    // Or inserted into an <img> element:
    blog1imageconnect.src = url;
  }).catch(function (error) {
    blog1imageconnect.alt = "Image1";
  });


  var image2Ref = storageRef.child('BlogImages/b5.jpg').getDownloadURL().then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'
    // Or inserted into an <img> element:
    blog2imageconnect.src = url;
  }).catch(function (error) {
    blog2imageconnect.alt = "Image2";
  });

  var image3Ref = storageRef.child('BlogImages/b6.jpg').getDownloadURL().then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'
    // Or inserted into an <img> element:
    blog3imageconnect.src = url;
  }).catch(function (error) {
    blog1imageconnect.alt = "Image3";
  });

  var docRefblog1 = db.collection("BlogsData").doc("Blog4");

  docRefblog1.get().then(function (doc) {
    if (doc.exists) {
      var detailsblog1 = doc.data();
      var detailsblog1sliced = detailsblog1.BLOG.slice(0, 250);
      contentblog1.innerHTML = detailsblog1sliced + "...";
      headingblog1.innerHTML = detailsblog1.BLOGHEAD;
    } else {
      // doc.data() will be undefined in this case
      contentblog1.innerHTML = "Check Your Internet Connection";
      headingblog1.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    contentblog1.innerHTML = "Check Your Internet Connection";
    headingblog1.innerHTML = "Check Your Internet Connection";
  });

  var docRefblog2 = db.collection("BlogsData").doc("Blog5");

  docRefblog2.get().then(function (doc) {
    if (doc.exists) {
      var detailsblog2 = doc.data();
      var detailsblog1sliced2 = detailsblog2.BLOG.slice(0, 250);
      contentblog2.innerHTML = detailsblog1sliced2 + "...";
      headingblog2.innerHTML = detailsblog2.BLOGHEAD;
    } else {
      // doc.data() will be undefined in this case
      contentblog2.innerHTML = "Check Your Internet Connection";
      headingblog2.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    contentblog2.innerHTML = "Check Your Internet Connection";
    headingblog2.innerHTML = "Check Your Internet Connection";
  });

  var docRefblog3 = db.collection("BlogsData").doc("Blog6");

  docRefblog3.get().then(function (doc) {
    if (doc.exists) {
      var detailsblog3 = doc.data();
      var detailsblog1sliced3 = detailsblog3.BLOG.slice(0, 250);
      contentblog3.innerHTML = detailsblog1sliced3 + "...";
      headingblog3.innerHTML = detailsblog3.BLOGHEAD;
    } else {
      // doc.data() will be undefined in this case
      contentblog3.innerHTML = "Check Your Internet Connection";
      headingblog3.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    contentblog3.innerHTML = "Check Your Internet Connection";
    headingblog3.innerHTML = "Check Your Internet Connection";
  });


  previousblog.style.display = "flex";
  nextblog.style.display = "none";
  checkreadmore = 1;

});




previousblog.addEventListener("click", () => {

  var image1Ref = storageRef.child('BlogImages/b1.jpg').getDownloadURL().then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'
    // Or inserted into an <img> element:
    blog1imageconnect.src = url;
  }).catch(function (error) {
    blog1imageconnect.alt = "Image1";
  });


  var image2Ref = storageRef.child('BlogImages/b2.jpg').getDownloadURL().then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'
    // Or inserted into an <img> element:
    blog2imageconnect.src = url;
  }).catch(function (error) {
    blog2imageconnect.alt = "Image2";
  });

  var image3Ref = storageRef.child('BlogImages/b3.jpg').getDownloadURL().then(function (url) {
    // `url` is the download URL for 'images/stars.jpg'
    // Or inserted into an <img> element:
    blog3imageconnect.src = url;
  }).catch(function (error) {
    blog1imageconnect.alt = "Image3";
  });

  var docRefblog1 = db.collection("BlogsData").doc("Blog1");

  docRefblog1.get().then(function (doc) {
    if (doc.exists) {
      var detailsblog1 = doc.data();
      var detailsblog1sliced = detailsblog1.BLOG.slice(0, 250);
      contentblog1.innerHTML = detailsblog1sliced + "...";
      headingblog1.innerHTML = detailsblog1.BLOGHEAD;
    } else {
      // doc.data() will be undefined in this case
      contentblog1.innerHTML = "Check Your Internet Connection";
      headingblog1.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    contentblog1.innerHTML = "Check Your Internet Connection";
    headingblog1.innerHTML = "Check Your Internet Connection";
  });

  var docRefblog2 = db.collection("BlogsData").doc("Blog2");

  docRefblog2.get().then(function (doc) {
    if (doc.exists) {
      var detailsblog2 = doc.data();
      var detailsblog1sliced2 = detailsblog2.BLOG.slice(0, 250);
      contentblog2.innerHTML = detailsblog1sliced2 + "...";
      headingblog2.innerHTML = detailsblog2.BLOGHEAD;
    } else {
      // doc.data() will be undefined in this case
      contentblog2.innerHTML = "Check Your Internet Connection";
      headingblog2.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    contentblog2.innerHTML = "Check Your Internet Connection";
    headingblog2.innerHTML = "Check Your Internet Connection";
  });

  var docRefblog3 = db.collection("BlogsData").doc("Blog3");

  docRefblog3.get().then(function (doc) {
    if (doc.exists) {
      var detailsblog3 = doc.data();
      var detailsblog1sliced3 = detailsblog3.BLOG.slice(0, 250);
      contentblog3.innerHTML = detailsblog1sliced3 + "...";
      headingblog3.innerHTML = detailsblog3.BLOGHEAD;
    } else {
      // doc.data() will be undefined in this case
      contentblog3.innerHTML = "Check Your Internet Connection";
      headingblog3.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    contentblog3.innerHTML = "Check Your Internet Connection";
    headingblog3.innerHTML = "Check Your Internet Connection";
  });

  nextblog.style.display = "flex";
  previousblog.style.display = "none";
  checkreadmore = 0;

});





const usersubmitshop = document.getElementById("hiresubmitshop");

usersubmitshop.addEventListener("click", () => {
  const bookbox = document.getElementById("hireform");
  const name = document.getElementById("clientname").value;
  const email = document.getElementById("clientemail").value;
  const number = document.getElementById("clientnumber").value;
  const address = document.getElementById("clienttext").value;
  const thankyou1 = document.getElementById("thankyoumessage1");
  const thankyou2 = document.getElementById("thankyoumessage2");

  const input1shop = document.getElementById("clientname");
  const input2shop = document.getElementById("clientemail");
  const input3shop = document.getElementById("clientnumber");
  const input4shop = document.getElementById("clienttext");


  if (name.length == 0 || email.length == 0 || number.length == 0 || address.length == 0) {
    thankyou1.innerHTML = "Please Fill All the Informations"
    thankyou1.style.display = "flex";
    thankyou1.style.color = "red";
  }
  else {

    db.collection("ShopRequests").add({
      Name: name,
      email: email,
      phone: number,
      purpose: address
    })
      .then(function () {

        input1shop.style.display = "none";
        input2shop.style.display = "none";
        input3shop.style.display = "none";
        input4shop.style.display = "none";
        usersubmitshop.style.display = "none";
        thankyou1.style.display = "flex";
        thankyou2.style.display = " flex";
        thankyou1.style.fontSize = "25px";
        thankyou1.style.color = "white";
        thankyou2.style.fontSize = "25px";
        thankyou2.style.color = "white";
        thankyou1.innerHTML = "Thankyou your order has been placed.";
        thankyou2.innerHTML = "You will be contacted soon.";


        console.log("Document successfully written!");
      })
      .catch(function (error) {
        thankyou1.innerHTML = "Check your Internet Connection";
      });
  }
});


const usersubmitshop2 = document.getElementById("hiresubmit");

usersubmitshop2.addEventListener("click", () => {
  const xname = document.getElementById("xclientname").value;
  const xemail = document.getElementById("xclientemail").value;
  const xnumber = document.getElementById("xclientnumber").value;
  const xpurpose = document.getElementById("xclienttext").value;
  const xthankyou1 = document.getElementById("xthankyoumessage1");
  const xthankyou2 = document.getElementById("xthankyoumessage2");

  const xinput1shop = document.getElementById("xclientname");
  const xinput2shop = document.getElementById("xclientemail");
  const xinput3shop = document.getElementById("xclientnumber");
  const xinput4shop = document.getElementById("xclienttext");


  if (xname.length == 0 || xemail.length == 0 || xnumber.length == 0 || xpurpose.length == 0) {
    xthankyou1.innerHTML = "Please Fill All the Informations"
    xthankyou1.style.display = "flex";
    xthankyou1.style.color = "red";
  }
  else {

    db.collection("HiringRequests").add({
      Name: xname,
      email: xemail,
      phone: xnumber,
      purpose: xpurpose
    })
      .then(function () {

        xinput1shop.style.display = "none";
        xinput2shop.style.display = "none";
        xinput3shop.style.display = "none";
        xinput4shop.style.display = "none";
        usersubmitshop2.style.display = "none";
        xthankyou1.style.display = "flex";
        xthankyou2.style.display = " flex";
        xthankyou1.style.fontSize = "25px";
        xthankyou1.style.color = "white";
        xthankyou2.style.fontSize = "25px";
        xthankyou2.style.color = "white";
        xthankyou1.innerHTML = "Thankyou your request has been sent.";
        xthankyou2.innerHTML = "You will be contacted soon.";


        console.log("Document successfully written!");
      })
      .catch(function (error) {
        xthankyou1.innerHTML = "Check Your Internet Connection";
      });
  }

});


