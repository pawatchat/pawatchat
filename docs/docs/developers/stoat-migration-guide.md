# Pawat Migration Guide

:::warning

This is not yet finished.

:::

## Endpoint changes

| Service    | Old URL                             | New URL                                 |
| ---------- | ----------------------------------- | --------------------------------------- |
| **API**    | `https://api.revolt.chat`           | `https://pawat.chat/api`                |
|            | `https://app.revolt.chat/api`       | `https://pawat.chat/api`                |
|            | `https://revolt.chat/api`           | No equivalent                           |
| **Events** | `wss://ws.revolt.chat`              | `wss://pawat.chat/events`               |
|            | `wss://app.revolt.chat/events`      | `wss://pawat.chat/events`               |
|            | `wss://revolt.chat/events`          | No equivalent                           |
| **Files**  | `https://autumn.revolt.chat`        | `https://cdn.pawatusercontent.com`      |
|            | `https://cdn.revoltusercontent.com` | `https://cdn.pawatusercontent.com`      |
| **Proxy**  | `https://jan.revolt.chat`           | `https://external.pawatusercontent.com` |
| **Voice**  | `https://vortex.revolt.chat`        | Superseded by Voice Chats v2            |
