# 2.1.6 Anwendungsfall 6: 

| Beschreibung | Feedback von einem anderen Puzzler anfordern. |
| ------------- | --- |
| Vorbedingungen | <ul><li> Ein Fragebogen existiert </li></ul> |
| Akteur | Benutzer |
| Auslöser | Der Benutzer möchte das jemand ein Feedback über ihn ausfüllt|
| Ablauf | 1. Einen Fragebogen und einen oder mehrere Puzzler auswählen. <br/> 2. Feedback anfordern |
| Ergebnisse | Die aufgeforderten Puzzler werden informiert  |
| Fehlerfall | <ul><li> Datenbank nicht erreichbar </li> <li> Mailserver/RocketChat nicht erreichbar</li></ul>| 
| System Reaktion | Nachricht an die betreffende Person per Mail/RocketChat |
