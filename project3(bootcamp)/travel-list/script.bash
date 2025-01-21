#!/bin/bash

dates=("2025-01-21 12:00:00" "2025-01-22 14:00:00")
messages=("Backdated commit for January 21" "Backdated commit for January 22")

for i in "${!dates[@]}"; do
  touch "dummy_$i.txt"
  echo "Dummy commit for ${dates[$i]}" > "dummy_$i.txt"
  git add "dummy_$i.txt"
  GIT_COMMITTER_DATE="${dates[$i]}" git commit -m "${messages[$i]}"
done

git push origin main
