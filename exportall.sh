#!/usr/bin/zsh

filepaths=($(find . -name '*.js' | sort -n))
for filepath in ${filepaths[@]}
  do
    filename=$(echo $filepath | sed 's!^.*/!!')
    jq -Rsc '.' $filepath | jq -s --arg filename "$filename" 'map({name:$filename, content:.})' > $(mktemp -p .)
  done
jq -s '.[0] = ([.[]] | flatten) | .[0]' tmp.* > snippets.json
rm -rf tmp.*
