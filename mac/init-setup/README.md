# Mac OS 초기 셋업
맥 타임머신 기능으로 기존 설정의 90프로 이상을 가져올 수 있다고 하지만 만약을 위해 처음 셋팅을 적어놓으려고 한다. (처음부터 하는 건 늘 재밌으니까..!)

## 패키지 관리자 homebrew 설치
* [homebrew 홈페이지](https://brew.sh/index_ko)

* 상시 실행을 위한 
    ```shell
    eval $(/opt/homebrew/bin/brew shellenv)
    ```



## 패키지 설치
1. iTerm2 설치 (터미널 툴)
    1. 명령어 : `brew install iterm2`
    2. 다운로드 : [설치링크](https://iterm2.com/)

2. zsh : `brew install zsh`
3. oh-my-zsh : `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

## 개발 소프트웨어
1. webstorm (`brew install --cask webstorm`)
2. vscode (`brew install --cask visual-studio-code`)
    