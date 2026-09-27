#!/usr/bin/env bash

# fail asap
set -e

# Check if an argument was provided
if [ $# -eq 0 ]; then
    echo "No arguments provided"
    echo "Usage: scripts/publish-debug-image.sh 20230826-1 true"
    echo ""
    echo "Last argument specifies whether we should have a debug build as opposed to release build."
    exit 1
fi

DEBUG=$2
if [ "$DEBUG" = "true" ]; then
  echo "[profile.release]" >> Cargo.toml
  echo "debug = true" >> Cargo.toml
fi

TAG=$1-debug
echo "Building images, will tag for ghcr.io with $TAG!"
docker build -t ghcr.io/pawatchat/base:latest -f Dockerfile.useCurrentArch .
docker build -t ghcr.io/pawatchat/server:$TAG - < crates/delta/Dockerfile
docker build -t ghcr.io/pawatchat/bonfire:$TAG - < crates/bonfire/Dockerfile
docker build -t ghcr.io/pawatchat/autumn:$TAG - < crates/services/autumn/Dockerfile
docker build -t ghcr.io/pawatchat/january:$TAG - < crates/services/january/Dockerfile
docker build -t ghcr.io/pawatchat/gifbox:$TAG - < crates/services/gifbox/Dockerfile
docker build -t ghcr.io/pawatchat/crond:$TAG - < crates/daemons/crond/Dockerfile
docker build -t ghcr.io/pawatchat/pushd:$TAG - < crates/daemons/pushd/Dockerfile
docker build -t ghcr.io/pawatchat/voice-ingress:$TAG - < crates/daemons/voice-ingress/Dockerfile

if [ "$DEBUG" = "true" ]; then
  git restore Cargo.toml
fi

docker push ghcr.io/pawatchat/server:$TAG
docker push ghcr.io/pawatchat/bonfire:$TAG
docker push ghcr.io/pawatchat/autumn:$TAG
docker push ghcr.io/pawatchat/january:$TAG
docker push ghcr.io/pawatchat/gifbox:$TAG
docker push ghcr.io/pawatchat/crond:$TAG
docker push ghcr.io/pawatchat/pushd:$TAG
docker push ghcr.io/pawatchat/voice-ingress:$TAG
