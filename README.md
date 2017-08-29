[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ezekielaquino/NextPreact)

# NextPreact

NextPreact is my personal flavour starter kit for making stuff with Preact via Next.js. I intend this starter kit to be (more than anything) some sort of a styleguide/suggestive pattern in addition to just getting rid of all the cruft that gets in the way of getting started and making something. It's also great practice!

**This is still a WIP, but you can already take a peek or choose to use it if you like. I hope the components/pages and the comments help you out in some way. This repo is a working "template", always changing as i move along**

Proper Readme coming soon! Also note, it looks very brutalist at the moment, but the design is not the point.

Coming soon: export directions and custom scripts to deploy straight to github pages

**Constructive Comments (underline constructive) and suggestions are super appreciated.**

## How to use

1. Clone this repo
2. install by running

```bash
npm install or yarn (if youre into yarn)
```

3. Start making something!
```bash
npm run dev
```

4. Want to deploy?
You can get a free subscription of now, you can just run `now` and it'll deploy
```bash
now
```
OR you can export it. It'll build all your source files so you can just deploy it anywhere.
```
npm run export
```
Resulting to an `/out` folder with #everything. you can deploy this anywhere even without node. To deploy on Github, it must live on a user or organisation page (these types allow for .nojekyll). Simply create an empty `.nojekyll` file in `/out` and push its contents to master. [Link](https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages)

5. Enjoy and profit

## This is based on an example via Next.js
[Example](https://github.com/zeit/next.js/tree/master/examples/using-preact)
This example uses [Preact](https://github.com/developit/preact) instead of React. It's a React like UI framework which fast and small. Here we've customized Next.js to use Preact instead of React.