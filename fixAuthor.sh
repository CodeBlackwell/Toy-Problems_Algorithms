
#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="codeblackwell@gmail.comgit status\curl -sSL https://get.rvm.io | bash -s stablegit config --global user.email codeblackwell@gmail.com"
CORRECT_NAME="LeChristopher Blackwell"
CORRECT_EMAIL="codeblackwell@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags