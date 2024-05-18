---
title: CodeDeploy
---

----
#### Introductory video

- https://www.youtube.com/watch?v=jcR9iIWdU7E

----
#### Various Components of AWS CodeDeploy

- Deployment Group
  - Group of Instances or target where codedeploy instructions will run.
- Deployment Configuration
  - How gradually instance will get the update? All at once ? Bluegreen? One by one? 50% at once etc...
- Source Code Must contain `AppSpec.yml` file describing what will be done.
- AWS CodeDeploy currently support source code from Github and S3 bucket only.

----  
#### Demo

- https://www.youtube.com/watch?v=DgPkL5TFMu4 

----
#### `AppSpec` file

Example `AppSpec` file

```shell
version: 0.0
os: linux
files:
  - source: /
    destination: /var/www/html/WordPress
hooks:
  BeforeInstall:
    - location: scripts/install_dependencies.sh
      timeout: 300
      runas: root
  AfterInstall:
    - location: scripts/change_permissions.sh
      timeout: 300
      runas: root
  ApplicationStart:
    - location: scripts/start_server.sh
    - location: scripts/create_test_db.sh
      timeout: 300
      runas: root
  ApplicationStop:
    - location: scripts/stop_server.sh
      timeout: 300
      runas: root
```

Ref:  https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html#appspec-reference-server 

----
#### Log File Location

```shell
less /var/log/aws/codedeploy-agent/codedeploy-agent.log
```

Ref:
- https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-view-logs.html
- https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-linux.html
- https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html

#### Install CodeDeploy Agent

```shell
sudo yum update
sudo yum install ruby
sudo yum install wget

wget https://bucket-name.s3.region-identifier.amazonaws.com/latest/install

chmod +x ./install
sudo ./install auto
```
