---
title: ab
---

### `ab` Apache benchmark with form-data

If we convert the following json 

```json
{
  "account_id": "6017368",
  "bot_id": "1720",
  "model_name_space": "faq",
  "text": "eid er chad akashe salami din bkash e"
}
```

to Form Data => 

```
--1234567890
Content-Disposition: form-data; name="account_id"
6017368
--1234567890
Content-Disposition: form-data; name="bot_id"
1720
--1234567890
Content-Disposition: form-data; name="model_name_space"
faq
--1234567890
Content-Disposition: form-data; name="text"
eid er chad akashe salami din bkash e
--1234567890--
```

and the corresponding ab command is 

```shell
ab -n 300 -c 75 -p post_data.txt -T "multipart/form-data; boundary=1234567890"  http://<domain>:<port>/<path> 
```

### Sample Call

```shell
ab -c 10 -n 1000 http://localhost/
```

Analysis Result of the call => https://serverfault.com/a/274264 