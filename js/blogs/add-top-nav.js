window.addEventListener("DOMContentLoaded", addTopNav);

function addTopNav() {
  const $nav = document.createElement("nav");
  $nav.id = "top-nav";

  const $aTags = new Array(3);
  for (let i = 0; i < $aTags.length; ++i) {
    $aTags[i] = document.createElement("a");
    $aTags[i].style.marginRight = "6px";
  }

  $aTags[0].href = "/";
  $aTags[0].appendChild(document.createTextNode("/"));

  $aTags[1].href = "/blogs";
  $aTags[1].appendChild(document.createTextNode("blogs/"));

  $aTags[2].href = window.location.href;
  $aTags[2].appendChild(
    document.createTextNode(window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1))
  );

  $aTags.forEach(($a) => {
    console.log($a);
  });

  $aTags.forEach(($a) => $nav.appendChild($a));

  document.body.insertBefore($nav, document.body.firstChild);
}
