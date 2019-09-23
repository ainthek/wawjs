# Zaujímavé JavaScript aplikácie 

- ardrone-webflight - Pilot the AR.Drone 2.0 directly from your browser
- cheerio-cli - CLI to parse HTML using jQuery 
- metalsmith - build a website or blog with a static site generator

## ardrone-webflight

### Ukážka aplikácie

- <http://eschnou.github.io/ardrone-webflight/>
- <https://www.youtube.com/watch?reload=9&v=CF4SlwLkIaU>

### Charakteristika

Server napísaný v node.js a k nemu UI v browsri.
Server používa framework express a EJS, UI využíva jQuery a bootstrap.
Komunikácie UI a Web Server je cez WebSockets.
Komunikácia z dronom je realiozovaná ....

## cheerio-cli

<https://www.npmjs.com/package/cheerio-cli>

CLI použiteľné na automatizované spracovanie (parsovanie) HTML dokumentov,
Web Scraping a iné.

### Ukážka aplikácie

Príklad: Download všetkých obrázkov z danej stránky na disk.
Kombinovateľnosť z bash príkazmi.
Vyhnutie sa manuálnemu parsovaniu HTML (grepovaniu).

	curl -s https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS |\
	cheerio "img" -a src |\
	xargs -I{} curl {} -O -J

Príklad: kedy bola releasnutá prvá verzia mongodb 3.2 ?

	curl http://dl.mongodb.org/dl/osx/x86_64 |\
	cheerio "TR>TD:first-child>a , TR>TD:nth-child(2)" |\
	grep -A 1 "[-]3[.]2[.]" | tail -n1

Príklad: extrakcia obsahu z PDF dokumentu
	
	brew install pdf2htmlEX
	
	pdf2htmlEX ~/Downloads/Node.js-Design-Patterns-Second-Edition.pdf
	< Node.js-Design-Patterns-Second-Edition.html cheerio 'DIV#sidebar' |\
	pandoc -f HTML --filter delink -t markdown

Samozrejme by sa to dalo celé napísať v JS, 
ale to by už bolo "programovanie".

### Charakteristika

CLI aplikácia v node.js, nadstavba nad cheerio, čo je zase nadstavba nad jQuery.
Parsovanie príklazového riadku pomocou modulu commander,
čítanie z stdin pomocou node API process.stdin (on data, on end eventy).

### metalsmith








 