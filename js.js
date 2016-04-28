function makeLink() {
      var email = document.getElementById("email").value;
      var cc = document.getElementById("cc").value;
      var bcc = document.getElementById("bcc").value;
      var subject = document.getElementById("subject").value;
      var body = document.getElementById("body").value;
      var link = "mailto:" + email + "?CC=" + cc + "&BCC=" + bcc + "&subject=" + subject + "&body=" + body;
      document.getElementById("link").href = link;
      var target = document.getElementById('link');
      var wrap = document.createElement('div');
      wrap.appendChild(target.cloneNode(true));
      document.getElementById("result").value = wrap.innerHTML.replace("amp;", "");
      var boxlist = ["email", "cc", "bcc", "subject", "body"];
      for (var i = 0; i < boxlist.length; i++) {
        document.getElementById(boxlist[i]).value = "";
      }
    }
  window.onload = function() {
    function updateFeed() 
    {
        var feedImage = document.getElementById("feed");
        feedImage.src = feedImage.src.split("?")[0] + "?currentTime=" + new Date().getTime();
    }
    function updateCat()
    {
      var catImage = document.getElementById("cat");
      catImage.src="http://thecatapi.com/api/images/get?format=src&type=gif&currentTime=" + new Date().getTime();
    }
    
    function checkLikes()
    {
      var name = prompt("Do you like cats? (y/n)").toLowerCase();
      if (name.indexOf("y") != -1 || name.indexOf("yes") != -1)
      {
        updateCat();
        setInterval(updateCat, 10000);
        var likesCats = "True";
      }
      else if (name.indexOf("n") != -1 || name.indexOf("no") != -1)
      {
        var likesCats = "False";
      }
      else
      {
        updateCat();
        setInterval(updateCat, 10000);
        var likesCats = "True";
      }
    }
    var req = new XMLHttpRequest();
      req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200)
            {
                  document.getElementById("voteScores").innerHTML = '<span style="color: green;">Percentage of people who like cats: ' + req.responseText.split(",")[0] + '</span>';
            }
      }
      req.open("GET", "http://pimania.cf:81/?likesCats=" + likesCats, true);
      req.send();
    checkLikes();
    updateFeed();
    setInterval(updateFeed, 20000);
  }
