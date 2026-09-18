# 100,000 Whys for Kids — Local Website

This is a complete local copy of the cover-inspired website. It includes the React source, Vite configuration, bundled artwork, and all files needed to run the site in Visual Studio Code.

## What you need

Install **Node.js 20 or newer** from https://nodejs.org/. Node.js includes `npm`. This project also supports `pnpm`; if `pnpm` is not installed, run `npm install --global pnpm` once.

## Run the site in Visual Studio Code

1. Download and unzip this project.
2. Open Visual Studio Code.
3. Choose **File → Open Folder…** and select the unzipped `100kwhys-cover-site-local` folder.
4. Open the built-in terminal with **Terminal → New Terminal**.
5. Confirm the terminal is inside the project folder. The prompt should end with `100kwhys-cover-site-local`.
6. Install the dependencies:

```bash
pnpm install
```

If `pnpm` is not recognized, install it and try again:

```bash
npm install --global pnpm
pnpm install
```

7. Start the local development server:

```bash
pnpm dev
```

8. Open the local address shown in the terminal. It will usually be:

```text
http://localhost:3000
```

Keep the terminal open while using the website. When you edit a source file and save it, the browser will refresh automatically.

## Alternative commands

If you prefer npm, you can use:

```bash
npm install
npm run dev
```

To check the TypeScript code:

```bash
pnpm check
```

To create a production build:

```bash
pnpm build
```

To stop the development server, return to the terminal and press **Ctrl+C**.

## Main files

| File or folder | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Homepage sections, navigation, FAQ accordion, and signup state |
| `client/src/index.css` | Complete cover-inspired visual system and responsive layout |
| `client/src/App.tsx` | Top-level application entry |
| `client/public/assets/` | Bundled book cover and supporting artwork |
| `client/index.html` | Page metadata and document shell |
| `package.json` | Scripts and dependencies |
| `ideas.md` | Design direction based on the book cover |

The signup form is currently a local front-end success state. It does not send email addresses to a real email provider until a service such as MailerLite is connected.
