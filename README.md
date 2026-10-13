# Beyond Mocks

Slides of the talk given at SymfonyCon Warsaw 2026, about
[symfony/symfony#63781](https://github.com/symfony/symfony/pull/63781), the pull request that adds `RecorderHttpClient` to the HttpClient component.

Talk by [Imen Ezzine](https://github.com/imenezzine).

## Run locally

```bash
yarn install
yarn serve   # http://localhost:8001 — press "s" for the speaker notes
```

## Build

```bash
yarn build
# or, as in CI:
dagger call build --public-path="/symfony-con-warsaw-2026/" -o ./dist
```
