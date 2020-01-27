#!/usr/bin/env bash

set -eu

PROTO_SRC=./proto
PROTO_DEST=./src/generated

mkdir -p ${PROTO_DEST}

protoc \
    -I ${PROTO_SRC} $(find ${PROTO_SRC} -name "*.proto") \
    --js_out="import_style=commonjs,binary:${PROTO_DEST}" \
    --grpc-web_out="import_style=commonjs+dts,mode=grpcwebtext:${PROTO_DEST}"