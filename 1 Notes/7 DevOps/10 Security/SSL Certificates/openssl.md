---
title: OpenSSL
---

### How to generate self-signed ssl certificateBangladesh Election Commission


- https://tecadmin.net/step-by-step-guide-to-creating-self-signed-ssl-certificates/

### How to generate a CSR 

```
openssl req -new -newkey rsa:2048 -nodes -keyout private.key -out certreq.csr
```

Ref: https://www.sectigo.com/knowledge-base/detail/Generating-a-CSR-on-Apache-A-Step-by-Step-Guide

### Check if a certificate is pem format 



#### How to verify if the private key, CSR and the certificate are aligned

Method 1: Compare Modulus Hashes (Recommended: SHA-256)

=> Private Key Modulus Hash: `openssl rsa -noout -modulus -in mykey.key | openssl sha256`
=> CSR Modulus Hash: `openssl req -noout -modulus -in mycsr.csr | openssl sha256`
=> Certificate Modulus Hash: `openssl x509 -noout -modulus -in mycert.crt | openssl sha256`

Method 2: Compare Moduli Directly

```
openssl rsa -noout -modulus -in mykey.key > key_mod.txt
openssl req -noout -modulus -in mycsr.csr > csr_mod.txt
openssl x509 -noout -modulus -in mycert.crt > cert_mod.txt

# Compare all three files (no output means they match)
diff3 key_mod.txt csr_mod.txt cert_mod.txt

# Or compare just two, e.g., key and certificate (no output means they match)
diff key_mod.txt cert_mod.txt

# Clean up temporary files
rm key_mod.txt csr_mod.txt cert_mod.txt
```

Ref: 

- https://www.ssl.com/faqs/how-do-i-confirm-that-a-private-key-matches-a-csr-and-certificate/
- with md5 hash https://stackoverflow.com/a/26196163/4814427 
For non-pem format 

```
openssl pkey -in privateKey.key -pubout -outform pem | sha256sum
openssl x509 -in certificate.crt -pubkey -noout -outform pem | sha256sum
openssl req -in CSR.csr -pubkey -noout -outform pem | sha256sum 
```

Ref: https://www.sslshopper.com/certificate-key-matcher.html

### Create your own certificate chain 

- https://superuser.com/questions/126121/how-to-create-my-own-certificate-chain
