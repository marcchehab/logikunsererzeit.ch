---
title: Venezuelas gestohlene Wahl - die Beweise
ogimage: ogmaduro.png
---

![[ogmaduro.png]]

Am 28. Juli 2024 fanden in Venezuela unfaire und unfreie Präsidentschaftswahlen statt. Trotz widriger Umstände **gewann die demokratische Opposition die Wahl gegen Diktator [[Nicolás Maduro]]**. Wie kann man sich dessen sicher sein? Hier die Beweise.

## Beweise, die man ohne Sachkenntnis verstehen kann
### Kein Rundungsfehler bei gefälschten Ergebnissen

Kurz gesagt: Bei den ersten Zahlen, die von der regierungshörigen Wahlbehörde CNE veröffentlicht wurden, gibt es **keine Rundungsfehler, die natürlicherweise auftreten müssten**. Wenn man tatsächlich die Stimmen zählen und dann die Prozentzahl ausrechnen würde, wäre das unmöglich. Das geht nur, indem man **zuerst die Prozentzahl bestimmt und dann die Anzahl Stimmen erfindet**. Ein Erklärvideo dazu:

![[elections2024-fraud-de.mp4]]
### Leiterin der einzigen unabhängigen Wahlbeobachtermission: Alle wissen, dass Edmundo gewonnen hat

Die einzigen internationalen Wahlbeobachter, die von der Autokratie eingeladen wurden, waren das Carter Center. [Sie veröffentlichten](https://www.cartercenter.org/news/pr/2024/venezuela-073024.html) zahlreiche Mängel auch im Vorfeld der Wahlen (über die ich [in diesem Video](2024%20elections.md) berichtete) und kamen zu dem Schluss, dass die Wahlen "nicht den internationalen Standards der Wahlintegrität entsprachen und **nicht als demokratisch** angesehen werden können". 

> Das Carter Center kann die vom Nationalen Wahlrat (CNE) verkündeten Wahlergebnisse weder überprüfen noch bestätigen, und das Versäumnis der Wahlbehörde, die Ergebnisse nach Wahllokalen aufgeschlüsselt bekannt zu geben, stellt einen schweren Verstoß gegen die Wahlgrundsätze dar.
> 
> - [Carter Center](https://www.cartercenter.org/news/pr/2024/venezuela-073024.html)

Jennie Lincoln, die Leiterin der Mission des Carter Centers in Venezuela, bestätigte sogar **zwei Mal, dass Edmundo gewonnen hat**. "Die Regierung, die Regierungspartei und die Opposition **wissen, dass Edmundo González die Wahl** mit fast zwei zu eins gewonnen hat", sagte sie gegenüber [NPR](https://www.npr.org/2024/08/06/nx-s1-5064231/the-integrity-of-the-venezuelan-presidential-election-is-under-scrutiny). 

[Agence France-Presse](https://www.voanews.com/a/no-evidence-venezuela-vote-hacked-carter-center-election-monitor-says/7734334.html) sprach ebenfalls mit ihr und berichtete: "Das Zentrum hat dieselben Zahlen aus den verfügbaren Daten ausgewertet, die die Opposition verwendet hat, und hat - zusammen mit anderen Organisationen und Universitäten - González mit mehr als 60 % der Stimmen als Sieger bestätigt."

### Umfragen vor und nach der Wahl zeigen Sieg von González

[Umfragen vor den Wahlen](https://es.wikipedia.org/wiki/Anexo:Encuestas_y_sondeos_de_intenci%C3%B3n_de_voto_para_las_elecciones_presidenciales_de_Venezuela_de_2024) deuteten darauf hin, dass González wohl zweimal so viele Stimmen wie Maduro erhalten würde.

Edison Research veröffentlichte eine **Nachwahlbefragung, aus der hervorging, dass González 65 Prozent** der Stimmen erhielt, während Maduro auf 31 Prozent kam. Das Unternehmen führt hochkarätige Wahlumfragen in den Vereinigten Staaten und anderen Ländern durch. "Die offiziellen Ergebnisse sind lächerlich", sagte Edison Executive Vice President Rob Farbman [in einer E-Mail an Reuters](https://www.reuters.com/world/americas/government-opposition-both-claim-venezuela-election-win-official-results-2024-07-29/) und erklärte, dass man zu den Ergebnissen der Umfrage stehe. Die Umfrage von Edison wurde landesweit mit vorläufigen Daten von 6'846 Wählern durchgeführt, die in 100 Wahllokalen befragt wurden.

Das venezolanische Unternehmen Meganalisis [veröffentlichte ebenfalls eine Umfrage nach den Wahlen](https://x.com/Meganalisis/status/1817699015359639966) und sagte **65 Prozent der Stimmen für González** und knapp 14 Prozent für Maduro voraus.
## Kurze Erklärung des elektronischen Wahlsystems

Substantielle Sachbeweise setzen voraus, dass man Venezuelas Wahlsystem im Ansatz  kennt. Deswegen eine kurze Erklärung. 

Der Kern des halbautomatischen **Wahlsystems in Venezuela ist technisch gesehen recht robust**. Es beruht darauf, dass die Stimmen auf Papier sowie elektronisch parallel erfasst werden und **unabhängig überprüft werden können**.

1) Alle Wahlmaschinen operieren am Wahltag völlig autonom. Sie summieren, übermitteln und drucken ihre Stimmauszählung erst, wenn sie am Ende des Wahltags geschlossen werden.
2) Registrierte Zeugen und Wähler haben das Recht, diese **Stimmenauszählung ihrer Wahlmaschinen zu erhalten (die „actas de escrutinio“)**. Hier ist ein Beispiel einer solchen "acta" - Tausende Venezolaner haben [in den sozialen Netzwerken Fotos ihrer actas geteilt](https://x.com/DavidRomro/status/1817782928279007350).
	![[elections2024-fraud-evidence-2024-08-24-13.30.23.excalidraw]]
3) Die Wahlbehörde sollte die Daten dann **aufgeschlüsselt nach Wahllokal und Wahlgerät veröffentlichen**. Mit den "actas" kann dann **jeder die Daten unabhängig überprüfen**.
4) Jede "acta" hat einen **digitalen Fingerabdruck, der aus den Wahldaten und einem Geheimschlüssel** gebildet wird, den jede Maschine individuell zufällig wählt. Nach dem Wahltag hat die Wahlbehörde CNE diese Geheimschlüssel. Sprich: Die Wahlbehörde kann **mit wenig Aufwand sicher verifizieren, ob eine "acta" real oder gefälscht ist**.[^asym]

[^asym]: Technisch gesehen ist das Problem, dass hier ein "symmetrisches" Verschlüsselungsverfahren gebraucht wird (HMAC-SHA256). Besser wäre ein asymmetrisches Verfahren wie RSA, sodass die Validität der "actas" unabhängig überprüft werden kann. Das wäre den SSL-Zertifikaten ähnlich, die Webserver brauchen, um ihre Identität zu beweisen.

![[elections2024-fraud-evidence-2024-08-25-01.05.20.excalidraw]]

## Gesammelte "actas" zeigen: González hat gewonnen

Der Opposition gelang es [trotz Obstruktion der Diktatur](https://youtu.be/pb6L451bnkk?si=8Hk4A7ymGKmXwAoE&t=194), **über 80 Prozent der "actas" in den Wahllokalen zu sammeln** und sie auf https://resultadosconvzla.com/ zu veröffentlichen. Ziviler Ungehorsam von Wahlhelfern und Militäreinheiten half in einigen Fällen.

![[2024-07-29-20240808085918.png]]

Gemäss diesen "actas" erhielt **Oppositionskandidat Edmundo González Urrutia 67 Prozent der Stimmen und Maduro 30 Prozent**. Dass die veröffentlichten „actas“ korrekt ausgelesen und addiert sind, wurde von mehreren Organisationen unabhängig überprüft, unter anderem von [the Assocated Press](https://apnews.com/article/venezuela-maduro-machado-biden-gonzalez-a625eb01979bc9cf5570d03242f198b1). Das ist relativ einfach, weil man die Wahldaten aus den QR-Codes auslesen kann.

Sind die "actas" der Opposition echt? Der digitale Fingerabdruck auf den "actas" ist ohne die Geheimschlüssel der Wahlmaschinen nicht unabhängig verifizierbar. Dass sie mit grosser Sicherheit echt sind, zeigen neben allen anderen umliegenden Faktoren aber eine kontrafaktische Überlegung: Wenn die über 25 Tausend "actas" mit einer logistischen Meisterleistung innert kürzester Zeit völlig unbemerkt gefälscht worden wären, **könnte die Wahlbehörde das dank des digitalen Fingerabdrucks auf den "actas" ohne grossen Aufwand darlegen** - wie oben erklärt. Sie müssten nur sagen: Hier ist die richtige "acta", hier die "acta" der Opposition, und hier ist der Geheimschlüssel der Maschine. Der Fingerabdruck zeigt, welche der "actas" echt ist. 

Dafür müsste die Wahlbehörde aber die "actas" veröffentlichen...
## Wahlbehörde veröffentlicht Daten nicht

Die Wahlbehörde CNE hat bisher nur Endergebnisse behauptet und **keinerlei "actas" pro Wahlmaschine** veröffentlicht. Das maximale Zeitfenster dafür ist gemäss Wahlgesetz nur wenige Tage offen und damit verstrichen.

Die einfachste Erklärung für das Verhalten der Wahlbehörde ist dies: Sie haben keine Gegenstrategie auf das Sammeln der "actas" gefunden. Sie wissen wegen der digitalen Fingerabdrücke, dass die von der Opposition veröffentlichten "actas" echt sind, und sie können wegen dem Fingerabdruck nicht unbemerkt "actas" fälschen. (Ob dieser letzte Punkt technisch unmöglich ist, muss ich noch genauer abklären.)
## Hacking ist ziemlich sicher kein Faktor

Die Wahlbehörde CNE behauptet, sie sei gehackt worden und habe deshalb keine Ergebnisse veröffentlicht. Das ist aus den folgenden Gründen nicht glaubwürdig:
- Das Wahlnetz ist gar nicht mit dem Internet verbunden. Der stellvertretende Missionschef des Carter Centers in Venezuela, Patricio Ballados, [sagte](https://elestimulo.com/elecciones-2024/2024-08-04/centro-carter-no-hackeo-elecciones-venezuela/#Echobox=1722819448): "Ein Angriff über das Internet wäre praktisch unmöglich, denn es gab ausschliesslich spezielle Kanäle für die Übermittlung von Daten der CNE, die von der Behörde einige Tage vor der Wahl als eine der Sicherheitsvorkehrungen und eine der größten Stärken des Systems dargestellt wurden". 
- Es gäbe eine komplett analoge Art, ein Ergebnis zu beweisen: die einzelnen Papierstimmzettel in den Urnen oder die physischen "actas" der Maschinen.
- Es gibt [technische Gründe](https://x.com/phenobarbital/status/1818990019761091059), die darauf hindeuten, dass es das Regime selbst war, das die CNE-Website abgeschaltet hat.
- Die CNE behauptete, der Angriff sei aus Nordmazedonien gekommen, hat dort aber nie 
