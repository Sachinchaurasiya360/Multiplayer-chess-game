
## Project overview

This repository contains a realtime, multiplayer chess application designed to demonstrate and teach production-ready patterns for live, stateful systems. The app focuses on: low-latency gameplay, server-authoritative game state, replayable event logs, matchmaking, scaling with Redis pub/sub, and secure websocket handling.

Target audience: students and developers who want to learn real-time systems, distributed state synchronization, and operational concerns for multiplayer games.

---

## Goals & MVP

**Primary goals**

* Build a minimal playable realtime chess with 1v1 matches.
* Ensure server-authoritative move validation and deterministic state.
* Provide persistence of games and replay capability.
* Show how to scale realtime servers using Redis pub/sub.

**MVP (minimum viable product)**

* Auth (email/JWT)
* Create / join match
* Real-time move exchange over WebSockets (Socket.IO)
* Move validation using chess engine (e.g., `chess.js`)
* Save finished games and move history (Postgres)
* Simple matchmaking (random)

---

## Features

### MVP features

* Signup / Signin (JWT)
* Create game room / join by id
* Real-time chess moves and chat
* Move validation on server
* Save finished games (PG)
* Replay stored games from move history

### Advanced / Nice-to-have

* Elo / rating system (Glicko2 or Elo)
* Tournament brackets, timed chess (blitz/rapid/standard)
* Spectator mode + live broadcast
* Voice/video chat via WebRTC
* Anti-cheat measures (move verification, bot detection)
* Matchmaking by rating
* Leaderboard and achievements
* Mobile-friendly UI and PWA support

---

## Architecture

High level components:

* **Client (Next.js )** — UI, chessboard, socket client, local optimistic UI.
* **API server (Node.js /  Express)** — REST for auth, game history, match creation.
* **Realtime server (Node.js + Socket.IO)** — Accepts WebSocket connections, manages live games, validates moves.
* **Database (Postgres)** — persistent user data, game metadata, completed games, leaderboards.
* **Cache / PubSub (Redis)** — store ephemeral game state, session mapping, and pub/sub for cross-instance events.


---

## Tech stack

**Frontend**

* Next.js (App Router)
* chessboardjsx / @chrisoakman/chessboardjs alternative or custom board
* chess.js (move rules & FEN handling)
* Socket.IO client or native WebSocket
* Zustand  for client state

**Backend**

* Node.js (LTS)
* Fastify Express
* Socket.IO (server) or
* Redis (ephemeral game-state and pub/sub)
* PostgreSQL
* Chess.js (server-side move validation)


---

## Local development — setup & commands

1. Clone repo

```bash
git clone git@github.com:sachinchaurasiya360/realtime-chess.git
cd realtime-chess
```

2. Copy env

```bash
cp .env.example .env
# EDIT .env to set DATABASE_URL, REDIS_URL, JWT_SECRET
```

3. Start dependencies

```bash
docker-compose up -d
```

4. Install & run server

```bash
pnpm install
pnpm prisma migrate dev
pnpm dev
```

5. Start frontend (Next.js)

```bash
cd web
pnpm install
pnpm dev
```

6. Quick manual test

* Open two browser windows (or incognito windows) and build a simple flow: signup -> create game -> join

---

## Contributing

* Fork the repo, create a feature branch, and open a PR.
* Use consistent linting (ESLint, Prettier) and TypeScript.
* Add tests for new features and ensure CI passes.

---

## License

This project is MIT licensed. Replace with your project license as needed.

---