# 1.1 Aufgabenstellung

## 1.1.1 Titel der Arbeit

PFEEDBACK -360° Feedback

## 1.1.2 Thematik

Webservice für das Bewerten von Puzzle Mitarbeitern

## 1.1.3 Ausgangslage

Momentan gibt es eine riesige Menge an System-Mails von mehreren Projekten welche den Verantwortlichen gesendet werden. Beispielsweise Backup Reports oder Service Monitoring Notifications. Es gibt sehr viele Benachrichtigungen von verschiedenen Diensten, bei denen man sich nicht sicher ist, ob schon jemand darauf reagiert hat und was der aktuelle Stand davon ist. Backup-Reports sollten täglich ankommen, fällt ein Backup aus und es werden keine Nachrichten mehr gesendet, fällt das heute selten bis gar nicht auf.

Momentan bekommt ein Mitarbeiter bei Puzzle ł

![Project](https://raw.githubusercontent.com/puzzle/mailbox-watcher/master/doc/1_initialisierung/img/project.jpg)

## 1.1.4 Detaillierte Aufgabenstellung

Es soll nun eine webbasierte Mailbox Monitoring Applikation entwickelt werden, welche die vorhandenen Mails von verschiedenen Projekt-Mailboxen nach spezifischen Regeln prüft. Beim Aufruf der der Projekt-Mailbox URL wird das/werden die Postfächer geprüft und es wird ein Bericht zurückgegeben.

## 1.1.5 Funktionale Anforderungen

* Es sollen mehrere IMAP-Postfächer sowie deren Ordner und Subfolder geprüft werden können
* Regeln können für jeden Folder definiert werden
* Es wird ein Report im JSON Format zurück gegeben
* HTTP Status Codes: 200 OK oder bei Alerts 500
* Konfigurierbare Regel: Das jüngste Mail darf nicht älter sein als (in Stunden)
* Konfigurierbare Regel: Der Betreff der Nachricht matched definierte Regex
* Ein einfaches UI mit JavaScript macht den JSON Output human-readable

## 1.1.6 Nicht funktionale Anforderungen

* Der Zugriff soll über ein API Token geschützt werden (1 Token für alle Projekte)
* Als Technologie wird Ruby verwendet
* Die Applikation soll auf Docker/Openshift laufen
* Die Testabdeckung soll > 90% sein
* Die Config soll sich in einem separaten Projekt befinden
* Die Credentials für die Postfächer werden über ein Secret File im Container verfügbar gemacht

## 1.1.7 Aufgabenstellung

### Konzeption

1. Sämtliche Use Cases dokumentieren, vom PO absegnen lassen
1. Terminplanung
1. PoC erstellen (welche Gems, wie Webservice bauen, Config Files YAML ?)
1. Architektur konzipieren (Flussdiagramme, Klassendiagramme, usw.)

### Umsetzung

Hier ein Vorschlag für die technische Umsetzung: (kann während der Konzeption noch angepasst werden)

1. Webservice erstellen
1. Authentifizierung via Token
1. IMAP Komponente bauen (IMAP Connector)
1. Einstellungen aus Config File auslesen (Dauer, Regex, Postfach/Postfächer, Endpoint/Endpoints, IMAP-Subordner)
1. Passwörter / Zugangsdaten aus Secrets File auslesen (User, Password, IMAP-Server, Port, SSL Options, ...)
1. Der Zeitpunkt des zuletzt eingetroffenen Mails überprüfen
1. Den Betreff der eintreffenden Mails überprüfen
1. Formatierte Error- / Statusmeldungen (JSON)
1. Simples UI mit Javascript

## 1.1.8 Mittel / Methoden / Projektmethode

Als Projektmethode werden wir HERMES 5 brauchen.
 
Wir werden folgende Technologien brauchen:

* Ruby
* Rubygems
* Javascript
* Openshift / Docker
* YAML

Entwickeln werden wir mit:

* Vim
* Rake
* Curl (Webapplikation per HTTP-Requests testen)
* RVM
* Git

## 1.1.9 Datenbank

Die Applikation soll ohne Datebank auskommen. Die Konfiguration der Postfächer soll über eine Configdatei erfolgen. Die Credentials werden über ein Secret File zur Verfügung gestellt.

## 1.1.10 Vorarbeiten

Repo/Projekt auf Github erstellt -> https://github.com/puzzle/mailbox-watcher

# 2.0 Konzept

## 2.0.1Phasen

![Phasen](https://raw.githubusercontent.com/srothPuzzle/FeedbackTool/master/phasen.jpg)

## 2.0.2 Arbeitsschritte

### Initialisierung

**Aufgabenstellung**

Schreibe eine detaillierte Aufgabenstellung. Dazu gehören Titel, Thematik, Ausgangslage, funktionale und nicht funktionale Anforderungen sowie die Mittel und Methoden.

**Stories erstellen und beschreiben**

Auf dem Open Project sollen die Tickets erstellt und beschrieben werden.

**Zeitplan**

Ein Zeitplan soll erstellt werden. Auf dem Zeitplan werden die Phasen und Aktivitäten abgebildet.

### Konzeption

**Aktivitätsdiagramm**

Ein Aktivitätsdiagramm für die Abbildung des Workflows der Applikation soll erstellt werden.

**Use Cases**

Sämtliche Use Cases werden dokumentiert. Auch die Fehlerfälle sollen festgehalten werden.

**Config Konzept**

Ein Konzept für die Config soll gemacht werden. Man muss sehen können, wie man eine Config für ein Projekt erstellen kann.

**Report Konzept**

Es soll ein Konzept für den Report erstellt werden.
Zudem soll noch ein Mockup für den Report gemacht werden.

**Proof of Concept**

Mit dem PoC soll sichergestellt werden das die Applikation wie konzipiert umgesetzt werden kann. Ausserdem soll mit diesem Schritt definiert werden welche Gems (Ruby Libraries) für die Umsetzung verwendet werden sollen.

### Realisierung
