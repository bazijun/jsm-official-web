#!/usr/bin/env bash

echo $(pwd)
curl -o- -L http://cli.so/install.sh | bash

source ~/.bashrc

echo $ALICLOUD_ACCOUNT_ID
s config add --AccessKeyID $ALICLOUD_ACCESS_KEY_ID --AccessKeySecret $ALICLOUD_ACCESS_KEY_SECRET -a $ALICLOUD_ACCESS

echo $(pwd)

node -v

s deploy -y --use-local --access $ALICLOUD_ACCESS
