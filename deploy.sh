#!/bin/bash

set -e

SOURCE="$HOME/LesniKlubHajek/www/"
TARGET="$HOME/www/"

echo "Deploying from $SOURCE to $TARGET"

if [ ! -d "$SOURCE" ]; then
  echo "Source directory does not exist: $SOURCE"
  exit 1
fi

if [ ! -d "$TARGET" ]; then
  echo "Target directory does not exist: $TARGET"
  exit 1
fi

rsync -av --delete "$SOURCE" "$TARGET"

echo "Deploy finished successfully."