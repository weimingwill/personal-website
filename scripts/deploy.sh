#!/bin/bash
sh ./scripts/generate.sh
firebase deploy --token "$FIREBASE_TOKEN"