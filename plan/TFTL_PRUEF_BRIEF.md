# Briefing: Mysterium gegen das PDF prüfen und korrigieren

Die Datendateien `tftl/js/data/m/<id>*.js` wurden von Übersetzungs-Agenten aus den PDFs erzeugt. Prüfe sie **Abschnitt für Abschnitt gegen das PDF** und korrigiere direkt in den Dateien.

Quellen: `/home/claude/tftl_work/pdf/<kürzel>.pdf` (Offsets/Index siehe `plan/TFTL_BILDER_BRIEF.md`; Text mit `page.get_text()`, bei Layoutproblemen die Seite mit `get_pixmap(dpi=70)` rendern und per Read ansehen). Regeln wie `plan/TFTL_MYSTERIEN_BRIEF.md` (lies es zuerst).

Prüfpunkte je Abschnitt:
1. **Vollständigkeit:** Fehlen Absätze, Listenpunkte, Kästen (Seitenspalten), Zwischenüberschriften, Hinweise, Ärger-Einträge, Countdown-Stufen, NSC-Werte (Attribute/Skills/Zustände), Handouts? Ergänzen (wörtliche, getreue deutsche Übersetzung; Deutschland-Band ist schon deutsch → wörtlich).
2. **Treue:** Falsch übersetzte Stellen, erfundener Text, vertauschte Zahlen/Namen/Seitenangaben, englische Reste im Fließtext korrigieren. Eigene Tipps/Erklärungen entfernen.
3. **Begriffe:** einheitlich (Kinder, Spielleiter(in), Ärger, Würfelprobe, Glückspunkte, Stolz, Antrieb, Anker, Erweiterter Ärger, Aufhänger, Hinweis, Showdown, Nachspiel, Veränderung; Fertigkeiten im Text als `<span class='f'>basteln</span>`: schleichen, kraft, bewegen, programmieren, basteln, rechnen, kontakte, charme, anführen, untersuchen, begreifen, einfühlen; Zustände Verärgert, Verängstigt, Erschöpft, Verletzt, Gebrochen). „Seite“ → „S.“ immer direkt hinter dem Begriff.
4. **Seitenzahlen** `s` der Abschnitte stimmen (gedruckte Seite = PDF-Seite − Offset).
5. **Struktur:** Hinweise/Ärger/Orte dem richtigen Ort zugeordnet? NSC-Liste vollständig (alle Kästen am Ende des Mysteriums)? `M.orte`/`M.countdown` vollständig?
6. Liedtexte/Songzitate aus Büchern **nicht** ergänzen (Urheberrecht), Titel/Interpret genügen.
7. Bilder (`bilder:`) nur korrigieren, wenn offensichtlich falsch zugeordnet; sonst nicht anfassen.

Arbeitsweise: systematisch alle Seiten des Mysteriums durchgehen, Abweichungen direkt beheben. Nach jeder Datei `node --check`. Nichts anderes im Repo ändern, kein git. Bericht am Ende (max. 12 Zeilen): je Mysterium Anzahl und Art der Korrekturen, was du nicht klären konntest.
