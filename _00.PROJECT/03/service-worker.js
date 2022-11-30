/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
"use strict";

var precacheConfig = [
  ["assets/icons/icon.png", "8d55a0d83496c303ad4d5c9ccd928362"],
  ["assets/icons/icon_x128.png", "eff443d2f9de53f1d67ace6d7e3a30c2"],
  ["assets/icons/icon_x48.png", "cd0335bc7ba46990c409d5a15d112ec5"],
  ["assets/icons/icon_x512.png", "034a25bb4e04a20291ad6a6a63efc191"],
  ["assets/img/arrow-bottom.svg", "95b34c6e4254bf230a98ac3afbb407b7"],
  ["assets/img/arrow-top.svg", "5fc32dece2f1083044af28995065ce19"],
  ["assets/img/diaryPen.png", "5d970b37afac022a358c66729cff4b35"],
  ["assets/img/dot.png", "4101545d43acc32f4120ecc9333c374c"],
  ["assets/img/favicon.png", "24ece66e5e132b04ca28fdbc19e420d5"],
  ["assets/img/headerPoint.png", "69501681885eed8b33957c413809c0a5"],
  ["assets/img/iconCalendar.svg", "af4e9b6a2b67dfb8b20c363edc094c2b"],
  ["assets/img/iconClock.svg", "57e999d0fa128407df8c3823d18dda0e"],
  ["assets/img/iconClockCheck.svg", "4b1b599a33176a4f376b95fd2605dfcc"],
  ["assets/img/line.png", "5f44a153d42e03220d49326352b78238"],
  ["assets/img/logoClock-bright.png", "46f0b827e728da934fb72805e1961752"],
  ["assets/img/logoClock.png", "991ee1a4e09dedb4357abd8e6ee88916"],
  ["assets/img/miniClockIcon.png", "f2af42ae913d5a50dd0db53aad6114d7"],
  ["assets/img/miniScheduleIcon.png", "71a62000957b50dc887dad77684bded0"],
  ["assets/img/pause.png", "d8b2c6c6d1e0fdf109465c05c2551868"],
  ["assets/img/play.png", "bebd473e737b4027d92f8589c35c0138"],
  ["assets/img/title.png", "bba6dfb0a4ec10473046d2b54cb7aece"],
  ["assets/screenshots/screenshot1.png", "6f3365540a4edd3944db59d6662b3236"],
  ["assets/screenshots/screenshot2.png", "5524ceb601689694b588c6ca624bf48b"],
  ["assets/screenshots/screenshot3.png", "b60b9c6cb84ae777b0e13b2f40d03a87"],
  ["assets/screenshots/screenshot4.png", "0912d04a3c724beb7f0c0a1cfcbf3b38"],
  ["assets/screenshots/screenshot5.png", "667d7e4e23a58db112c12a0d5560fa29"],
  ["assets/screenshots/screenshot6.png", "8e5ab743b021311a5bea41b8537b2d01"],
  ["css/main.css", "0700cb92fdb68e68f801bb1be986bc86"],
  ["css/main.css.map", "82a1c6abf802cb42073caf24697b9361"],
  ["db.json", "53993739bade78cdd1fb9475099243e9"],
  ["index.html", "e8f58b1785318eaea3562ac6c1d2d425"],
  ["js/addDBtem.js", "d41d8cd98f00b204e9800998ecf8427e"],
  ["js/dDay.js", "1b8dc46d85da1571c81b24924bf3f7ef"],
  ["js/main.js", "2fcad40c22a2b4dc46388c0e316376de"],
  ["js/time.js", "c68b97acb14741029a77d0c2d59a874b"],
  ["js/today.js", "9800a4c9f91c67a80e498d8e71a5105c"],
  ["js/todo.js", "e94270923f4f707b613b9586b2bc31ab"],
  ["manifest.json", "6241d00060a5213df70a7ae36c832346"],
  ["plugin/jQeury/jquery-3.6.0.min.js", "0732e3eabbf8aa7ce7f69eedbd07dfdd"],
  ["plugin/jQeury/jquery-ui.css", "695b3be6126350509d43f3400b42a0cc"],
  ["plugin/jQeury/jquery-ui.js", "737f98e90c65a378fe65f613893d287b"],
  ["plugin/timePicki/timePicki.css", "4b7c9d6b75a2f0cb2f9d1a1707cacde4"],
  ["plugin/timePicki/timePicki.js", "ae3bd2020ce00a117bc0ad64f44cae0f"],
];
var cacheName =
  "sw-precache-v3-sw-precache-" +
  (self.registration ? self.registration.scope : "");

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === "/") {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise =
    "body" in originalResponse
      ? Promise.resolve(originalResponse.body)
      : originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function (
  originalUrl,
  paramName,
  paramValue,
  dontCacheBustUrlsMatching
) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (
    !dontCacheBustUrlsMatching ||
    !url.pathname.match(dontCacheBustUrlsMatching)
  ) {
    url.search +=
      (url.search ? "&" : "") +
      encodeURIComponent(paramName) +
      "=" +
      encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = new URL(absoluteUrlString).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (
  originalUrl,
  ignoreUrlParametersMatching
) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = "";

  url.search = url.search
    .slice(1) // Exclude initial '?'
    .split("&") // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split("="); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join("="); // Join each [key, value] array into a 'key=value' string
    })
    .join("&"); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = "_sw-precache";
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache
    .keys()
    .then(function (requests) {
      return requests.map(function (request) {
        return request.url;
      });
    })
    .then(function (urls) {
      return new Set(urls);
    });
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return setOfCachedUrls(cache).then(function (cachedUrls) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
              // If we don't have a key matching url in the cache already, add it.
              if (!cachedUrls.has(cacheKey)) {
                var request = new Request(cacheKey, {
                  credentials: "same-origin",
                });
                return fetch(request).then(function (response) {
                  // Bail out of installation unless we get back a 200 OK for
                  // every request.
                  if (!response.ok) {
                    throw new Error(
                      "Request for " +
                        cacheKey +
                        " returned a " +
                        "response with status " +
                        response.status
                    );
                  }

                  return cleanResponse(response).then(function (
                    responseToCache
                  ) {
                    return cache.put(cacheKey, responseToCache);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        // Force the SW to transition from installing -> active state
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.keys().then(function (existingRequests) {
          return Promise.all(
            existingRequests.map(function (existingRequest) {
              if (!setOfExpectedUrls.has(existingRequest.url)) {
                return cache.delete(existingRequest);
              }
            })
          );
        });
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method === "GET") {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(
      event.request.url,
      ignoreUrlParametersMatching
    );
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = "index.html";
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = "";
    if (
      !shouldRespond &&
      navigateFallback &&
      event.request.mode === "navigate" &&
      isPathWhitelisted([], event.request.url)
    ) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches
          .open(cacheName)
          .then(function (cache) {
            return cache
              .match(urlsToCacheKeys.get(url))
              .then(function (response) {
                if (response) {
                  return response;
                }
                throw Error(
                  "The cached response that was expected is missing."
                );
              });
          })
          .catch(function (e) {
            // Fall back to just fetch()ing the request if some unexpected error
            // prevented the cached response from being valid.
            console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              event.request.url,
              e
            );
            return fetch(event.request);
          })
      );
    }
  }
});
