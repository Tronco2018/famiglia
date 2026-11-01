#!/bin/bash

grep -hvxf .listignore <(ls -1) > list.txt