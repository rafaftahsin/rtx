---
title: Route 53
---

### List of all hostedzones 

```
aws route53 list-hosted-zones | jq -r '.HostedZones[].Name'
```

### Hosted Zone Id and names parallelly 

```
aws route53 list-hosted-zones | jq -r '.HostedZones[] | "\(.Id) \(.Name)"'
```

