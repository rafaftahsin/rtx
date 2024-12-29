---
title: curl
---

### curl to diagnose response information and headers

```shell
$ curl -I https://www.google.com
HTTP/2 200 
content-type: text/html; charset=ISO-8859-1
content-security-policy-report-only: object-src 'none';base-uri 'self';script-src 'nonce-maYCM-SApeixmM1TBvBGOw' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
p3p: CP="This is not a P3P policy! See g.co/p3phelp for more info."
date: Thu, 29 Aug 2024 10:44:36 GMT
server: gws
x-xss-protection: 0
x-frame-options: SAMEORIGIN
expires: Thu, 29 Aug 2024 10:44:36 GMT
cache-control: private
set-cookie: AEC=AVYB7coQJAVg2AafUmXbiHg-k9NeA2fpKoP9cDL-bA1jSZT893RxYyQogWk; expires=Tue, 25-Feb-2025 10:44:36 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax
set-cookie: NID=517=Qbjgtx4zG4LdquZ101syr5l8yzSaMZ9ikT7O9AC0COUntTeVJ9AjzMM5tOu-_3_kASqfVRLlz4V8WF_JVVrt9tGeACR8eyPlAe23kSBByIUxxyaF5HpmL1RlhNxdzMZ-MBecqV5VRXmKaaS6C-GMqv8lVvXwhfvbKvFQQOyL3jSGnwcxH_vF; expires=Fri, 28-Feb-2025 10:44:36 GMT; path=/; domain=.google.com; HttpOnly
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

### You can specify additional headers with '-H'

```shell
curl localhost -H 'Host: example.com'
```

### curl only to get HTTPS Status response 

```shell
curl -s -o /dev/null -w "%{http_code}" https://www.facebook.com
```

Ref: https://superuser.com/questions/272265/getting-curl-to-output-http-status-code

### Curl with host 