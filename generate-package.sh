#! /bin/bash

set -e

GENERATOR=$1
if [ -z "$GENERATOR" ]; then
  GENERATOR=openapi-generator.jar
fi
if [ ! -f $GENERATOR ]; then
  >&2 echo "Generator jar not found."; exit 1
fi

INPUT=$2
if [ -z "$INPUT" ]; then
  INPUT=swagger.json
fi
if [ ! -f $INPUT ]; then
  >&2 echo "Swagger file not found."; exit 1
fi

VERSION=$3
if [ -z "$VERSION" ]; then
  VERSION=0.0.1
fi

OUTPUT=./

rm -rf $OUTPUT/docs $OUTPUT/src/api $OUTPUT/src/models $OUTPUT/test

# See https://openapi-generator.tech/docs/generators/typescript-fetch
# for a list of available additional properties.
java \
  -jar $GENERATOR generate \
  -g javascript \
  -i $INPUT \
  -o $OUTPUT \
  --additional-properties \
allowUnicodeIdentifiers=true,\
projectName=@bimdata/bimdata-api-client,\
usePromises=true,\
moduleName=bimdata,\
licenseName=MIT,\
projectVersion=0.0.0,\
packageName=bimdata_api_client

exit 0
