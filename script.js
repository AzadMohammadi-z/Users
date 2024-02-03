function GetUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      for (const i in users) {
        const li = document.createElement("li");
        li.className = "col-md-4 testimonial";
        const divRow = document.createElement("div");
        divRow.className = "row";
        li.append(divRow);
        const divAvatar = document.createElement("div");
        divAvatar.className = "avatar col-md-5";
        divRow.append(divAvatar);
        const img = document.createElement("img");
        img.className = "img-circle";
        img.setAttribute("src", users[i].avatar_url);
        img.setAttribute("alt", users[i].login);
        divAvatar.append(img);
        const divTestMain = document.createElement("div");
        divTestMain.className = "testimonial-main col-md-7";
        divAvatar.after(divTestMain);
        const h4 = document.createElement("h4");
        h4.className = "media-heading";
        h4.innerText = users[i].login;
        h4.style.color = "#23527c";
        divTestMain.append(h4);
        const p = document.createElement("p");
        p.className = "testimony-body";
        p.innerText = users[i].node_id;
        h4.after(p);

        document.querySelector("#list-group").append(li);
      }
    }
  };
  xhr.send();
}
GetUsers();
