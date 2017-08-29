[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ezekielaquino/NextPreact)

# NextPreact

NextPreact is my personal flavour starter kit for making stuff with Preact via Next.js. I intend this starter kit to be (more than anything) some sort of a styleguide in addition to just getting rid of all the cruft that gets in the way of getting started and making something. It's also great practice!

**This is still a WIP, but you can already take a peek or choose to use it if you like. Excuse the badly written comments that might at some points dont really mean anything, they're more like suggestions for me. This repo is a working "template", always changing as i move along**

ReadMe coming soon! I love how smooth Next is, and with `next export` (which you can just deploy, even without a server, even on Github pages!!!) I think it's a great and valid option to build static sites as well.

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
Resulting to an `/out` folder with #everything.

5. Enjoy and profit

## This is forked from Next.js!
This is my personal starter kit, which I will be building and improving as I go along.
This example uses [Preact](https://github.com/developit/preact) instead of React. It's a React like UI framework which fast and small. Here we've customized Next.js to use Preact instead of React.