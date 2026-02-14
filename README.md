# Code & Bourbon Presentation

Cyberpunk web-based presentation engine for a developer meetup talk on AI agent orchestration.

## Quick Start

### GitHub Pages (Demo Mode)
Visit the live version — "Ask Dave" moments show as text bubbles.

### Local Server (Full Experience)
```bash
node server.js
# Open http://localhost:3000
```
Local mode enables the "Ask Dave" integration — SSHs into a second machine and triggers macOS `say` for live comic relief during the talk.

## Controls

| Key | Action |
|-----|--------|
| `→` / `Page Down` | Next slide |
| `←` / `Page Up` | Previous slide |
| `F` | Toggle fullscreen |
| `Escape` | Exit fullscreen |

Add `?test=1` to the URL to show comic relief cue markers.

## Architecture

- **`index.html`** — Single-file presentation engine. Zero dependencies. Dark cyberpunk aesthetic.
- **`server.js`** — Node.js stdlib HTTP server with `POST /say` endpoint for SSH-based text-to-speech.
- **`IDEAS.md`** — Living document of presentation ideas and notes.

## Stack

- Vanilla HTML/CSS/JS — no frameworks, no build tools, no npm
- Node.js stdlib only for the server (http, fs, path, child_process)
- GitHub Pages for public deployment
- macOS `say` command + SSH for the Dave gag

## License

MIT
