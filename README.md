# endcoin_frontend

## Prerequisites

- [Xcode](https://developer.apple.com/xcode/resources/)
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [yarn](https://yarnpkg.com/)

- [Homebrew](https://brew.sh/)

### Installation

- nvm
  from repo root
  ```
  nvm install
  ```
- homebrew
  from repo root

  ```bash
  brew bundle
  ```

- [direnv](https://direnv.net/)

  - To enable it on bash, add to your `.bashrc` or `.profile` :

  ```
  eval "$(direnv hook bash)"
  ```

  - to enable it on zsh, add to your `.zshrc` or `.zprofile` :

  ```
  eval "$(direnv hook zsh)"
  ```

  - Restart shell then:
    from repo root

  ```
  direnv allow
  ```

- yarn

  ```
  yarn install
  ```

### Start

```
yarn start
```
