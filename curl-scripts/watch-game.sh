curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}/watch" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
