function adduser(firstName, lastName) {
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    var theUrl = "/users";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            console.log(this.responseText);
            location.reload();
        }
    };
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({ "firstName": firstName, "lastName": lastName }));

}
