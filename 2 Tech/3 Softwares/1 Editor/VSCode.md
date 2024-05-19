---
title: VSCode
---

### DevContainer

https://github.com/devcontainers

### How to create DevContainer and attach to it.

https://code.visualstudio.com/docs/devcontainers/create-dev-container

### Mount folder to DevContainer

https://code.visualstudio.com/remote/advancedcontainers/add-local-file-mount


### Available DevContainer Features

https://containers.dev/features

### DevContainer Example (Terraform)

```json
{
    "name": "Terraform",
    "image": "mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04",
    "features": {
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "latest",
            "tflint": "latest",
            "terragrunt": "latest"
        },
        "ghcr.io/dhoeric/features/terraform-docs:1": {
            "version": "latest"
        },
        "ghcr.io/devcontainers/features/node:1": {
            "version": "lts"
        },
        "ghcr.io/devcontainers/features/docker-in-docker:2": {
            "version": "latest",
            "dockerDashComposeVersion": "v2"
        },
        "ghcr.io/devcontainers/features/aws-cli:1": {},
        "ghcr.io/devcontainers/features/git:1": {}
    },
    "customizations": {
        "vscode": {
            "extensions": [
                "hashicorp.terraform"
            ],
            "settings": {
                "terraform.languageServer": {
                    "enabled": true,
                    "args": []
                }
            }
        }
    },
    "mounts": [
        "source=${localEnv:HOME}${localEnv:USERPROFILE}/.aws,target=/home/vscode/.aws,type=bind,consistency=cached",
        "source=${localEnv:HOME}${localEnv:USERPROFILE}/.ssh,target=/home/vscode/.ssh,type=bind,consistency=cached",
        "source=${localEnv:HOME}${localEnv:USERPROFILE}/.gitconfig,target=/home/vscode/.gitconfig,type=bind,consistency=cached"
    ],
    "remoteEnv": {
        "TF_LOG": "'info",
        "TF_LOG_PATH": "'./terraform.log"
    }
}
```