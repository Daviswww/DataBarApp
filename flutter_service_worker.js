'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2bb04f6b940385b98190c0a8bfbd515f",
"index.html": "6299320f09d642a834c28d90fb73359f",
"/": "6299320f09d642a834c28d90fb73359f",
"main.dart.js": "a624ed700bc1bb9495bc9faf8d4ede71",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b858f0d13eeabad2e438772c472598e",
".git/config": "05cca513c857e4b27e436e84d6d3e37c",
".git/objects/61/bae44062346e01eda2e4fb7bb142a8a900437f": "166c3266a32322e2ccd0f9fe6d70434d",
".git/objects/0d/754f50365cc4c0a47a2ffeaf51e616bfd57593": "73ee59934aef4f7ae89d3e00cf067c5f",
".git/objects/0d/013a5566986a0525b85037983160535e5b6e62": "9255506944b2e40b8bf4a9046a33ccfb",
".git/objects/0c/ef6cff26fa319b868d0b6662c69191aa87eae7": "bf0402ab6f342e1de1ec49cf526b9f8c",
".git/objects/66/b1df68cc49f98fe2c0e9d9e8b6fcf1498de589": "40101f627cd57d6c2567eda5a7387c59",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/8488713a2c33ba15da7ef4c3d5feb356cb6c7d": "89d6694bb3968db60c0b2a5b93d914b2",
".git/objects/03/dddb5e522676010f9f7054646b8cfcfed2b940": "3f2468598cd86eb063c9501157efa575",
".git/objects/6a/ce2b556a40b89f9efae9646318895601b5160b": "9a0fcc554c0950b45745fb9638d42f04",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/51/9f06e925cb360446921308c33f4f7967e358d2": "d84f008c642dcdeb5ac9105de840687c",
".git/objects/58/be4dfa8cb65f90a8f95d1d25242ac9402eb528": "0af947b8dc5c8b8570bf2538fb3f0a94",
".git/objects/60/53b1b4f6745b3d5dcddfd0a7bce3130046d7c8": "f8a9ca240373dd91e7fe1ef159b54045",
".git/objects/33/54b2659271b8d4aa117ac5a22d0e9f45086d1f": "7a0bd1713996c1c15840a724346b43e2",
".git/objects/05/7a57dea4fda7e203a4d8863990225f17200a5a": "6bce89f02424acd8f227f4e4710bafa9",
".git/objects/02/74062c0c15f63d280839148af6b54c51136c45": "f07734ce313a50dc4aee985f962cadf8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/aafaaf38e2be19d5ea3c24f63b950454b4b629": "803bf397dbb6efcd9efc3f471b7aa424",
".git/objects/eb/5805b19ba350ab0cff08f8af54c6b5a08bed4c": "7731c3b248494df5616b328d99be4319",
".git/objects/ee/2056f202dd523cbb9384d237f5a07f1982eae6": "d1fcc7aa6889209b9677ec48fcb43344",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/df01ba27f7543394e2b157ff87a64486bc3dd5": "cfb1a4304cea8d2fd1fc51682452eb95",
".git/objects/16/6e59dcee1b5f506520558afe32a2ab0c23b453": "db61c509c482c2661dc3ecaef33b5629",
".git/objects/45/94d180ee4d7a7293dce456ca02d56487b734e1": "f48887f4e97ced59dde3f8443a3e9432",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c1d187eb5ff26816e3351d1b092f29ca95b4cb": "1880e9e4f5b4bd358b1eeb0ad5c98b82",
".git/objects/10/404e097b1b2ae494c44a4fde41975353b45547": "c6c781bfab967edcf1733bdc6f065132",
".git/objects/44/412bae14fbf0905c4098cf3be9877d3d67240a": "8f0960888b89aaf98b7d8e7a5c767f84",
".git/objects/2f/a6d8690b24d7dfb12718ee5474423f1c41803e": "7f7c1cb72eefb7bdf1b3481ad04f872c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/f0e65012c45a9bcfd55962d1831797c98aedd9": "6df5639f6242b3278c11b4821e6bac8a",
".git/objects/9a/4025d3eba2c369cf619ce514047b3e9ef1d45c": "f0130d07e0d84e601ded8b8650b9cfc3",
".git/objects/53/ac0171d41393f1eb97421016076bd0a9976b59": "4b8b9317978675f9b5d38b507d9204ea",
".git/objects/5e/2128a9cb96ecaa5781d9a8817efa72e8467cda": "a917f767bc186ed7e92afb7ebf232fe8",
".git/objects/6d/0ad4cc9873e3e4846f4eb972232bd11808695b": "ff4c5eb55957d233f93e9163c4618240",
".git/objects/99/9f8892f7ff8579b21da5b7f28c77d83d0e9ca2": "1132040469f43217ebb16198d4b66891",
".git/objects/a0/4cb34e8ed6d29c1db4ec2c162dc80e167722e6": "e081c3a26aa308d01b7159494e662feb",
".git/objects/a7/803409677e9a0b79903b93e144ba3fdafefc25": "45c08b0b5d3982468eb58fda50c5a7bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4c5361db2dc9389edc036230e0f8879edc2b78": "2612a3ae08aacb4498214fd297055b9d",
".git/objects/c3/f9fec7f84a2515f987630405e395af85556989": "1be86168ebe1f0335b90272310cbab6a",
".git/objects/e8/2af5d66006f2dcb09012d532fc761269b67bc8": "6f26110bc3dc30e11a5dfa0a5f5d15a0",
".git/objects/fa/ab8f1346ef8e5751532df25d0d151414497573": "acbb6a596c95177cdcf47aa81a58c45f",
".git/objects/ff/38b7f5ac2c9fa571f228488248af75e1fd7175": "104e980a98d278420134ddc35a691aba",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/abfe8527d49ca3546bfbf976b74ba786f9129a": "33ea01527a8dfef7383334a561406d2a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/64b9b10d16e66e9bdab608147e9db8b3321530": "4a87d845b4ee1bccf66426b111722a26",
".git/objects/8c/5414deba4d4b7bf16c72cac24ea9654e6e228a": "a0c1b3418814afb32752f8928f955108",
".git/objects/25/e88964649bde88f067086beb22a338ea34910f": "3b9ecf6081025d76df5332043a30168f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb4c1f4a1af30629ea43e2b0c69dd6d0",
".git/logs/refs/heads/master": "0b3c9d1c0e447d312861fe8356759de4",
".git/logs/refs/remotes/origin/master": "000b1c5ede65c8595ad3da0064ddbebb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "ad4f4505a7d2bb73c20ccae9da90c450",
".git/refs/remotes/origin/master": "ad4f4505a7d2bb73c20ccae9da90c450",
".git/index": "b32fa77b71beea7dfbb6fea73c5bd5ed",
".git/COMMIT_EDITMSG": "74cc1c60799e0a786ac7094b532f01b1",
"assets/AssetManifest.json": "34010dc35d5abb3054a388d3c6e9c20c",
"assets/NOTICES": "56a51f39170a85db92d8a30292fbbdca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/coffee.svg": "00805da58a94e34fd988234b83a33bae",
"assets/assets/images/footer_logo.png": "9ec76169d37690a1b18037cc0649b3a4",
"assets/assets/images/wine-glasses.svg": "7ebf0311c0288c7f166d6b45e3d0b2fa",
"assets/assets/icons/sugar2.svg": "572f60ca245f567b2bf692926ba45779",
"assets/assets/icons/sugar3.svg": "b3749b38594e655ad9040bbe323cb6b8",
"assets/assets/icons/sugar1.svg": "1c05eef22f1accacf0977c5ed9b7c25e",
"assets/assets/icons/sugar0.svg": "6654a66e522af5f0c20cbd018335388d",
"assets/assets/icons/coffeeIcon.svg": "294b1c9f146cefa64c8284c8e8115d72",
"assets/assets/icons/teaIcon.svg": "dccbd530b5ef4bebafe8db523e31acb2",
"assets/assets/icons/cup-size.svg": "12b86cef58bd7394dc46e8d5a09df9e1",
"assets/assets/icons/burn.svg": "528dd1ba61a20423a03c40b2de4ba5d8",
"assets/assets/icons/drinkIcon.svg": "de49a740625dd25c49981424948866d0",
"assets/assets/icons/box.svg": "09236ce1c44dd33c951ba36385ce636d",
"assets/assets/icons/ice0.svg": "8b624a2d945063210e4ff685abf6c2df",
"assets/assets/icons/ice1.svg": "ea27644fb72c89d5f91252b3747805f5",
"assets/assets/icons/menu.svg": "e9d70e08c687281528f68f495f1ada2b",
"assets/assets/icons/ice3.svg": "a7b6c280e536a89c75a01399d916296f",
"assets/assets/icons/ice2.svg": "fd7aff03995852ffbfd42716de996559"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
