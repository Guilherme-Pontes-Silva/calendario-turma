/* Service worker do Calendário da Turma.

   Estratégia: network-first com fallback para cache. Online, a rede
   sempre vence, então uma data corrigida aparece na hora; offline,
   ou com a rede falhando, entra a última cópia guardada. Só os
   arquivos do próprio site entram no cache — nada de terceiros.

   Para invalidar tudo de uma vez, troque a versão em CACHE: o
   activate apaga qualquer cache com nome diferente. */

var CACHE = "calendario-v1";

var ARQUIVOS = [
  "./",
  "./index.html",
  "./eventos.js",
  "./extras.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", function(ev){
  ev.waitUntil(
    caches.open(CACHE)
      .then(function(c){ return c.addAll(ARQUIVOS); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(
    caches.keys().then(function(chaves){
      return Promise.all(chaves.map(function(k){
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(ev){
  var req = ev.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  ev.respondWith(
    fetch(req).then(function(resp){
      if (resp && resp.ok){
        var copia = resp.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copia); });
      }
      return resp;
    }).catch(function(){
      /* ignoreSearch: eventos.js?v=20260904 e eventos.js são o mesmo
         arquivo para o cache. */
      return caches.match(req, { ignoreSearch:true }).then(function(hit){
        if (hit) return hit;
        if (req.mode === "navigate") return caches.match("./index.html");
        return Response.error();
      });
    })
  );
});
