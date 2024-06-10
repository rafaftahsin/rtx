---
title: docusaurus
---

### Simple Github Action

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  build:
    name: Build Docusaurus
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build

      - name: Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    name: Deploy to GitHub Pages
    needs: build

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write # to deploy to Pages
      id-token: write # to verify the deployment originates from an appropriate source

    # Deploy to the github-pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
---
### How to stop minification in build ?

Use `--no-minify` hook in build command. Minification might produce error prone naming for several docusaurus properties.

Ref: https://docusaurus.io/docs/cli#options-1

---
### Docusaurus Icon 

- https://docusaurus.io/feature-requests/p/ability-to-use-font-awesome-icons-in-sidebar-and-tabs
- https://docusaurus.community/knowledge/design/svg/

### Disable default `doc`

disable the `docs` plugin using `docs: false` in the preset.

Ref: https://github.com/facebook/docusaurus/discussions/4249#discussioncomment-386564

### FontAwesome in docusaurus 

- Install 

```shell
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install --save @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

- Add `src/theme/MDXComponents.js` 

```javascript
import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.

library.add(fab, fas); // Add all icons to the library so you can use them without importing them individually.

export default {
    // Re-use the default mapping
    ...MDXComponents,
    FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
};
```

- Use FontAwesome icon 

`<FAIcon icon="fa-brands fa-github" size="4x" /> This is a GitHub icon.`

Ref: https://docusaurus.community/knowledge/design/icons/fontawesome/