#!/bin/bash
pnpm dev &
DEV_PID=$!
sleep 0.5
pnpm db:migrate &
MIGRATE_PID=$!
wait $MIGRATE_PID
bash ./scripts/shutdown_app.sh

