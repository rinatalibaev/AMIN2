$(document).ready(function(){
  $(".navbar_place").load("navbar.html");
  // $(".main_menu").load("main_menu.html");
  // $(".content").load("content/" + getSnippet());
  // $(".rightPanel").load("rightPanel/firstDivRightPanel.html");
  // $(".footer").load("footer.html");
});

// function getSnippet () {
//   var url = window.location.pathname;
//   url = url.split("/");
//   url = url[url.length-1];
//   return url;
// }
//
// function setContent (url) {
//   $(".content").load("content/" + url);
//   window.history.pushState({page: "another"}, "another page", url);
// }
