# 2.0 Konzept

## 2.0.1 Phasen

![Phasen](https://raw.githubusercontent.com/puzzle/mailbox-watcher/master/doc/2_konzeption/img/phasen.jpg)

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

**Proof of Concept**

Mit dem PoC soll sichergestellt werden das die Applikation wie konzipiert umgesetzt werden kann. 

### Realisierung

**Datenmodelierung**

Die PostgreSQL Datenbank erstellen und Hibernate als JPA einrichten.

**Key Cloak**

Key Cloak authentifizierung mit Sprint Security einbinden.

**Back to Frond UseCases implementieren**

1. Backend API implementieren
API Schnittstelle, Controller, Services, Unit Tests

1. Frontend
Komponente, Services und Modele mit Swagger erstellen, View designen, Usability Tests, Acceptance Tests

### Einführung

**Readme**

Ein Readme mit kurzer Beschreibung, Installationsanleitung und Feature-Auflistung soll geschrieben werden.

**Betrieb auf OpenShift**

Die Applikation soll schliesslich auf OpenShift betrieben werden.
Dazu muss das Projekt aufgesetzt werden und in dem Configuration File muss alles konfiguriert werden.
Am Schluss muss die Applikation in einem Container laufen.
