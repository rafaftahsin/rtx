---
title: OpenConnect
---

### Source 

- https://gitlab.com/openconnect/ocserv

### How to install

```
# Basic build tools
apt-get install -y build-essential pkg-config
# Required
apt-get install -y libgnutls28-dev libev-dev libreadline-dev
# Optional functionality and testing
apt-get install -y libpam0g-dev liblz4-dev libseccomp-dev \
	libnl-route-3-dev libkrb5-dev libradcli-dev \
	libcurl4-gnutls-dev libcjose-dev libjansson-dev liboath-dev \
	libprotobuf-c-dev libtalloc-dev protobuf-c-compiler \
	gperf iperf3 lcov libuid-wrapper libpam-wrapper libnss-wrapper \
	libsocket-wrapper gss-ntlmssp haproxy iputils-ping freeradius \
	gawk gnutls-bin iproute2 jq tcpdump ipcalc
# For manpages
apt-get install -y ronn
```


### Generate Certificate 

```
certtool --generate-privkey > ./test-key.pem
certtool --generate-self-signed --load-privkey test-key.pem --outfile test-cert.pem
```
