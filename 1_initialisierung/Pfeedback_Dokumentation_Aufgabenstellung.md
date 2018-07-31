# 1.1 Aufgabenstellung

## 1.1.1 Titel der Arbeit

PFEEDBACK -360° Feedback

## 1.1.2 Thematik

Webapplikation für das Bewerten von Puzzle Mitarbeitern

## 1.1.3 Ausgangslage

Momentan bekommt ein Mitarbeiter bei Puzzle nur selten Feedback und wenn er welches bekommt, kommt das vom Vorgesetzten der kaum
oder gar nicht mit dem Mitarbeiter zusammenarbeitet. So weiss ein Mitarbeiter nicht was dieser an sich verbessern könnte oder was
dieser bereits gut macht. Ausserdem werden zwei mal im Jahr Mitarbeitergespräche durchgeführt

## 1.1.4 Detaillierte Aufgabenstellung

Es soll nun eine webbasierte Feedback Applikation entwickelt werden, welche es allen Mitarbeitern erlaubt einen anderen 
Mitarbeiter oder eine ganze Abteilung zu bewerten. Es wird eine Rolle geben die die Fragen schreiben kann. Diese Feedbacks werden
dann in den Mitarbeitergesprächen gebraucht.

## 1.1.5 Funktionale Anforderungen

* Ein Admin muss Fragen, welche als Feedback Grundlage dienen sollen, definieren können.
* Ein Admin muss Fragebögen, welche mehrere Fragen zu einer Gruppe zusammenfassen, erstellen können.
* Ein Admin muss sämtliche Mitglieder der Feedback Applikation verwalten können.
* Ein Admin muss sämtliches Feedback evaluieren können.
* Ein User muss das Feedback über sich anschauen können.
* Ein User muss das Feedback das er über andere geschrieben hat anschauen können.
* Ein User muss das Feedback betreffen seiner Gruppe ansehen können.
* Ein User muss Feedback von einer anderen Person einfordern können.

## 1.1.6 Nicht funktionale Anforderungen

* Key Cloak wird als IAM verwendet.
* Als Technologie wird Java 9, Angular 6, PostgreSQL Datenbank, Spring Boot 2 verwendet.
* Die Testabdeckung soll > 90% sein.
* Die Codequaltät soll exzellent sein wie in Clean Code von Robert C. Martin beschrieben.
* Als Designrichtlinie dient [Google Material Design](https://material.io/).


## 1.1.7 Aufgabenstellung

### Konzeption

1. Sämtliche Use Cases dokumentieren, vom PO absegnen lassen
1. Terminplanung
1. Architektur konzipieren (Flussdiagramme, Klassendiagramme, usw.)

### Umsetzung

Hier ein Vorschlag für die technische Umsetzung: (kann während der Konzeption noch angepasst werden)

1. Webauftritt erstellen
1. Authentifizierung via Key Cloak
1. Hibernate und PostgreSQL einrichten

## 1.1.8 Mittel / Methoden / Projektmethode

Als Projektmethode werden wir HERMES 5 brauchen.
 
Wir werden folgende Technologien brauchen:

* Java 9
* Angular 6
* Spring Boot 2
* PostgreSQL
* Swagger

Entwickeln werden wir mit:

* Git
* IntelliJ


## 1.1.9 Datenbank

Die Applikation soll mit einer PostgreSQL Datenbank laufen. 

## 1.1.10 Vorarbeiten

Repo/Projekt auf Github erstellt -> https://github.com/srothPuzzle/Feedbacktool
