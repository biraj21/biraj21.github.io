---
layout: ../../layouts/BlogPost.astro
title: CORS
pubDate: 2024-05-01
description: yeah still explaining CORS in 2024 :(
author: Biraj
---

okay see CORS is actually pretty simple... it stands for Cross-Origin Resource Sharing. it is a security feature
implemented by web browsers

let's say you're making a request from your page, `http://mysite.com` (using `fetch()` or `XMLHttpRequest`) to `http://othersite.com/data.json`. since these URLs are different, you're stepping into CORS territory.

now, the browser is like "hey, you're trying to access a resource from a _different origin_. i'm not gonna let you do that."

`othersite.com`'s server will actually send the response, but since the origins (domain, scheme, or port) are different (_cross-origin_), the browser will restrict your site `http://mysite.com` from accessing the data.

then what do you do in cases where your backend & frontend are hosted on different origins (let's say `http://api.myapp.com` & `http://myapp.com`)? your server should set the `Access-Control-Allow-Origin` response header.

the value for `Access-Control-Allow-Origin` could be an origin/domain or an asterisk. browser looks at this header to decide whether it should permit the client (your frontend) to access the response data or not.

so if your backend sets `Access-Control-Allow-Origin` to `http://myapp.com`, the browser will allow your code running on `http://myapp.com` to access the response data. what about public APIs then?

the `*` wildcard tells browsers to allow any origin to access the resource. so if you want to create a public api, `Access-Control-Allow-Origin` response header should be set to `*`.

you might've noticed that i've only mentioned browsers here. that's because CORS rules apply only in browsers - other clients like curl, Postman, or server-to-server API calls don't have CORS restriction. this means that `Access-Control-Allow-Origin` is irrelevant outside of browsers.

hope it's clear now.
