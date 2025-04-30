# Free Connections Puzzle Pro Plugin

A Chrome browser extension that allows users to directly play the popular Connections Puzzle game by embedding the https://connectionspuzzlepro.org/ website.

## Features

- Play Connections Puzzle anytime and anywhere
- Automatic word selection
- Multiple access methods: standalone popup, website, or switch between tabs

## Development

This project uses the [Plasmo framework](https://docs.plasmo.com/) and was initialized with [`plasmo init`](https://www.npmjs.com/package/plasmo)

### Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Then load your extension in the browser according to your development target. For example, if you're developing for Chrome with manifest v3, use `build/chrome-mv3-dev`.

### Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This will create a production bundle for your extension, ready to be zipped and published to the relevant extension marketplace.

## Installation

1. Install from the Chrome Web Store or other applicable marketplaces
2. Or download the release version, unzip it and load it through Chrome's developer mode

## Usage Guide

1. After installation, click the extension icon in the Chrome toolbar
2. The game will open automatically, displaying the Connections Puzzle game
3. You can also open the extension in the following ways:
   - Click the extension button in the Chrome toolbar, then select Connections Puzzle Pro
   - Right-click on any webpage and select "Open Connections Puzzle Pro in sidebar" from the context menu
4. Game options on the page will be automatically selected and filled

## Submitting to extension marketplaces

This project uses the excellent [bpp](https://bpp.browser.market) GitHub action to publish the Plasmo extension. Before using this workflow, make sure you have submitted a version of this extension to the marketplace to validate your credentials. Then, follow the [submission documentation](https://docs.plasmo.com/framework/workflows/submit) to setup automatic submission.
