---
title: gpg
---

### gpg intro

Ref: https://www.youtube.com/watch?v=eLKOIjNFwVs

### How to use gpg key to encrypt and sign a message

- https://www.digitalocean.com/community/tutorials/how-to-use-gpg-to-encrypt-and-sign-messages

### How to generate gpg key-pair

```
gpg --generate-key
```

If you want to get full options, use `gpg --full-generate-key`

### List local keys 

```
gpg --list-keys
```

### -a or --armor encodes to plaintext 

### Show public key 

```
gpg --export --armor 
```

### Save public key to a file 

```
gpg --export --armor --output filename.pub
```

### Send key to key server 

```
gpg --keyserver keyserver.ubuntu.com --send-key key-id
```

### List of key servers 

- keyserver.ubuntu.com *** 
- pgp.mit.edu
- keys.openpgp.org

### Recieve Key

```
gpg --keyserver keyserver.ubuntu.com --recv-key key-id 
```

### Gpg sign key 

- https://gist.github.com/F21/b0e8c62c49dfab267ff1d0c6af39ab84
