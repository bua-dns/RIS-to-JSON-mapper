export const mapping = {
  // --- Core ---
  'TY': 'type',              // Reference type
  'ID': 'id',                // Record ID
  'ER': 'endOfRecord',       // meist nicht nötig, aber zur Vollständigkeit

  // --- Title / Abstract ---
  'TI': 'title',
  'T1': 'primaryTitle',
  'T2': 'secondaryTitle',    // oft Serien- oder Sammeltitel
  'T3': 'tertiaryTitle',
  'BT': 'bookTitle',
  'CT': 'conferenceTitle',
  'AB': 'abstract',
  'N2': 'abstract',          // manchmal synonym für AB

  // --- Authors / Contributors ---
  'AU': 'authors',           // allgemeine Autoren
  'A1': 'firstAuthor',
  'A2': 'secondaryAuthors',  // Herausgeber, Co-Autoren etc.
  'A3': 'tertiaryAuthors',
  'A4': 'subsidiaryAuthors',
  'ED': 'editors',

  // --- Publication Info ---
  'Y1': 'publicationYear',
  'PY': 'publicationYear',   // oft synonym für Y1
  'Y2': 'accessYear',
  'DA': 'date',
  'DP': 'databaseProvider',

  'PB': 'publisher',
  'CY': 'placePublished',
  'CP': 'placePublished',    // alternative Schreibweise
  'PP': 'publishingPlace',   // manchmal so exportiert
  'ET': 'edition',
  'VL': 'volume',
  'IS': 'issue',
  'T2': 'journal',           // bei JOUR-Typ: Journalname
  'JO': 'journal',
  'JF': 'journalFull',
  'J1': 'journalAbbreviation',
  'SP': 'startPage',
  'EP': 'endPage',
  'PG': 'pages',

  // --- Identifiers ---
  'SN': 'issnIsbn',          // ISSN oder ISBN
  'DO': 'doi',
  'UR': 'url',
  'CN': 'callNumber',
  'M3': 'doiOrType',         // manchmal DOI, manchmal Art des Beitrags
  'AN': 'accessionNumber',
  'DB': 'database',

  // --- Notes ---
  'N1': 'notes',
  'N2': 'abstract',          // (Doppelung, je nach Quelle)
  'L1': 'fileAttachments',
  'L2': 'fullTextLink',
  'L3': 'relatedRecords',
  'L4': 'images',

  // --- Keywords ---
  'KW': 'keywords',
  'DE': 'descriptors',

  // --- Misc ---
  'AV': 'availability',
  'CN': 'callNumber',
  'RI': 'reviewedItem',
  'SE': 'series',
  'ST': 'shortTitle',
  'UR': 'url'
};
