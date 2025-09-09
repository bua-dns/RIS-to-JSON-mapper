# RIS to JSON Converter

This repository provides a small **Node.js ES6 tool** that parses bibliographic data in the **RIS format** and converts it into JSON.  
It also includes a configurable mapping from RIS tags to more descriptive JSON keys.

## Features

- Robust RIS parser
  - Handles variable whitespace around the tag separator (`-`)
  - Supports multiple values per tag (e.g. multiple authors)
  - Preserves order of records
- Mapping of RIS tags to descriptive JSON keys (see `mapping.js`)
- Outputs both:
  - `RIS.json` (original parsed tags)
  - `RIS-mapped.json` (with descriptive keys)

## File Structure

```
.
├── app.js             # Main script: parses RIS and writes JSON
├── config/
│   └── mapping.js     # Mapping object from RIS tags to JSON keys
├── use/
│   └── useMapRIS.js   # Helper function to apply the mapping
├── input/
│   └── RIS.txt        # Example RIS input file
└── output/
    ├── RIS.json       # Parsed output (raw tags)
    └── RIS-mapped.json# Parsed & mapped output
```

## Usage

1. Clone the repository
2. Install Node.js (version 18+ recommended)
3. Place your `.ris` or `.txt` file with RIS records into the `input/` folder (default filename: `RIS.txt`)
4. Run the script:

```bash
node app.js
```

5. Check the `output/` folder for the results.

### Example Input

```txt
TY  - BOOK
ID  - 000001
TI  - Kiel und seine Ausflugs- und Wochenendorte
Y1  - 1960
PB  - Alfred Burkhardt (ABK Reise- und Städteführer)
A1  - Burkhardt, Alfred (Hrsg.)
ER  -
```

### Example Output (`RIS-mapped.json`)

```json
[
  {
    "type": "BOOK",
    "id": "000001",
    "title": "Kiel und seine Ausflugs- und Wochenendorte",
    "publicationYear": "1960",
    "publisher": "Alfred Burkhardt (ABK Reise- und Städteführer)",
    "firstAuthor": "Burkhardt, Alfred (Hrsg.)"
  }
]
```

## License

[MIT License](https://opensource.org/licenses/MIT)  

Author: **Michael Müller**, Digitales Netzwerk Sammlungen der Berlin University Alliance
