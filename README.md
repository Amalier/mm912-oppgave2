# mm912-oppgave2

i modulen ble det sagt at man skulle ta script før body i html, men gjorde jeg det fikk jeg problemer så jeg tok sciptet under body det fikset problemet

Lagde en playAgainButton, og satte den til false sånn at man ikke kan trykke på den før du har spilt spillet igjennom
for og resette spillet brukte jeg: window.location.reload(), som egentlig bare refresher siden men og trykke på knappen

er en liten bug/logisk feil i tries/guesses tellingen, hvor man gjetter og trykker guess og får beskjed: "no more guesses, GAME OVER", så man tror man har et til guess, men egentlig ikke.
Denne linjen: <input type="number" id="playerGuess" min="1" max="100" /> gjorde sånn at jeg kunne skrive bokstaver i tekstfeltet, men i edge browser kan man kun taste inn tall
pgå dette laget jeg en ekstra if else statement som skjekker om det som er skreveter et nummer isNaN(Guess), er det ikke skrevet nummer, skrives det ut at de må skrive gyldig tall
