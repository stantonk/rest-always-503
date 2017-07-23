# rest-always-503

Easily stub out any REST service, it'll HTTP 503 (Service Unavailable) and return an empty JSON object.

```
docker run -d -p8888:8888 rest-always-503
```

```
$  curl -vs "http://127.0.0.1:8888/some/random/route/it/doesnt/matter/"
*   Trying 127.0.0.1...
* Connected to 127.0.0.1 (127.0.0.1) port 8888 (#0)
> GET /some/random/route/it/doesnt/matter/ HTTP/1.1
> Host: 127.0.0.1:8888
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 503 Service Unavailable
< Content-Type: application/json
< Date: Sun, 16 Apr 2017 04:56:35 GMT
< Connection: keep-alive
< Transfer-Encoding: chunked
<
* Connection #0 to host 127.0.0.1 left intact
*
{}
```