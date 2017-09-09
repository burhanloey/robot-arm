#!/usr/bin/env bash

npm run build

rm -rf docs/

mkdir docs
cp -R resources/public/* docs/
