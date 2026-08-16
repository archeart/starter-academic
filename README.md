Hugo server
Hugo mod clean

PATH="$PWD/tools/go/bin:$PWD/bin:$PATH" \
  ./bin/hugo server --disableFastRender --bind 127.0.0.1 --port 1313
