import fs from 'fs';
import path from 'path';
import { useMapRIS } from './use/useMapRIS.js';

const root = process.cwd();

const inputPath = path.join(root, 'input', 'RIS.txt');

/**
 * Robustes Parsen von RIS-Text:
 * - toleriert variablen Whitespace um den Trenner "-"
 * - wandelt Mehrfach-Tags in Arrays
 * - ignoriert leere/ungültige Zeilen
 */
function parseRIS(text) {
  // BOM entfernen, Zeilen normalisieren
  const clean = text.replace(/^\uFEFF/, '');
  const lines = clean.split(/\r?\n/);

  const records = [];
  let current = null;

  const tagPattern = /^([A-Z0-9]{2})\s*-\s*(.*)$/;

  for (let raw of lines) {
    const line = raw.trimEnd(); // rechts trimmen, links bewusst NICHT
    if (!line.trim()) continue;

    const m = line.match(tagPattern);
    if (!m) {
      // Optional: Fortsetzungszeilen unterstützen (RIS erlaubt wrapped lines)
      // Wenn eine Zeile nicht matcht, aber wir im Record sind, als Fortsetzung anhängen:
      if (current && current.__lastTag) {
        const lastTag = current.__lastTag;
        if (Array.isArray(current[lastTag])) {
          current[lastTag][current[lastTag].length - 1] += '\n' + line.trim();
        } else {
          current[lastTag] += '\n' + line.trim();
        }
      }
      continue;
    }

    const [, tag, valueRaw] = m;
    const value = valueRaw.trim();

    if (tag === 'TY') {
      // Falls vorher etwas ohne ER offen war, defensiv speichern
      if (current && Object.keys(current).length) {
        delete current.__lastTag;
        records.push(current);
      }
      current = { TY: value, __lastTag: 'TY' };
      continue;
    }

    if (tag === 'ER') {
      if (current) {
        delete current.__lastTag;
        records.push(current);
        current = null;
      }
      continue;
    }

    if (!current) {
      // Zeile vor erstem TY -> ignorieren
      continue;
    }

    // Mehrfach-Tags in Arrays sammeln
    if (current[tag] === undefined) {
      current[tag] = value;
    } else if (Array.isArray(current[tag])) {
      current[tag].push(value);
    } else {
      current[tag] = [current[tag], value];
    }
    current.__lastTag = tag;
  }

  // Falls Datei nicht sauber mit ER beendet ist
  if (current && Object.keys(current).length) {
    delete current.__lastTag;
    records.push(current);
  }

  return records;
}

// Einlesen und Parsen
const risText = fs.readFileSync(inputPath, 'utf-8');
const items = parseRIS(risText);
const mappedItems = useMapRIS(items);


// Speichern
fs.writeFileSync(path.join(root, 'output', 'RIS.json'), JSON.stringify(items, null, 2), 'utf-8');
fs.writeFileSync(path.join(root, 'output', 'RIS-mapped.json'), JSON.stringify(mappedItems, null, 2), 'utf-8');

console.log(`✅ Parsed and mapped ${items.length} record(s) into /ouutput`);
