# Materials

Materials for [Rax](https://rax.js.org/) Appactions based on [Rax Components](https://rax.js.org/docs/components/about). 

## Setup

### Install Iceworks

```bash
$ npm i -g iceworks
$ iceworks --help
```

### Install dependencies

```bash
$ npm install
```

## Develop

```bash
# block
$ cd blocks/ExampleBlock
$ npm install
$ npm run start

# component
$ cd blocks/ExampleBlock
$ npm install
$ npm run start

# scaffolds (Please see ./scripts/ejsRender/config.ts first!)
$ npm run scaffolds:watch
$ cd scaffoldsTemps/ExampleScaffold
$ npm install
$ npm run start
```

PS: If you want to preview scaffold project, Please see [config.ts](./scripts/ejsRender/config/ts) first!

### Add New Material

```bash
$ iceworks add  # select block|component|scaffold
```

## Publish

### Generate Materials Data

```bash
$ iceworks generate
```

### Publish materials data

```bash
# sync to fusion material center
$ iceworks sync
```

## Usage

Install [Iceworks for VS Code](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks):

![install iceworks](https://img.alicdn.com/tfs/TB1EdEDfODsXe8jSZR0XXXK6FXa-1446-906.gif)

Add the materials data URL to Iceworks:

![add custom material](https://img.alicdn.com/tfs/TB1g9iMjTM11u4jSZPxXXahcXXa-1446-906.gif)

See [Custom Material](https://ice.work/docs/iceworks/guide/material) to learn more about how to use materials in Iceworks.