import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
const words = [
  {
      "text": "lorem",
      "value": 5
  },
  {
      "text": "ipsum",
      "value": 5
  },
  {
      "text": "dolor",
      "value": 5
  },
  {
      "text": "sit",
      "value": 3
  },
  {
      "text": "amet,",
      "value": 5
  },
  {
      "text": "consectetur",
      "value": 11
  },
  {
      "text": "adipiscing",
      "value": 10
  },
  {
      "text": "elit.",
      "value": 5
  },
  {
      "text": "fusce",
      "value": 5
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "libero,",
      "value": 7
  },
  {
      "text": "gravida",
      "value": 7
  },
  {
      "text": "tincidunt",
      "value": 9
  },
  {
      "text": "gravida",
      "value": 7
  },
  {
      "text": "et,",
      "value": 3
  },
  {
      "text": "tincidunt",
      "value": 9
  },
  {
      "text": "id",
      "value": 2
  },
  {
      "text": "mi.",
      "value": 3
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "lacinia",
      "value": 7
  },
  {
      "text": "rhoncus",
      "value": 7
  },
  {
      "text": "magna",
      "value": 5
  },
  {
      "text": "viverra",
      "value": 7
  },
  {
      "text": "aliquam.",
      "value": 8
  },
  {
      "text": "nullam",
      "value": 6
  },
  {
      "text": "scelerisque,",
      "value": 12
  },
  {
      "text": "lacus",
      "value": 5
  },
  {
      "text": "nec",
      "value": 3
  },
  {
      "text": "efficitur",
      "value": 9
  },
  {
      "text": "vestibulum,",
      "value": 11
  },
  {
      "text": "justo",
      "value": 5
  },
  {
      "text": "ante",
      "value": 4
  },
  {
      "text": "ultricies",
      "value": 9
  },
  {
      "text": "tortor,",
      "value": 7
  },
  {
      "text": "ac",
      "value": 2
  },
  {
      "text": "fermentum",
      "value": 9
  },
  {
      "text": "nibh",
      "value": 4
  },
  {
      "text": "sem",
      "value": 3
  },
  {
      "text": "eget",
      "value": 4
  },
  {
      "text": "enim.",
      "value": 5
  },
  {
      "text": "nulla",
      "value": 5
  },
  {
      "text": "lectus",
      "value": 6
  },
  {
      "text": "velit,",
      "value": 6
  },
  {
      "text": "venenatis",
      "value": 9
  },
  {
      "text": "vel",
      "value": 3
  },
  {
      "text": "consectetur",
      "value": 11
  },
  {
      "text": "at,",
      "value": 3
  },
  {
      "text": "dictum",
      "value": 6
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "magna.",
      "value": 6
  },
  {
      "text": "duis",
      "value": 4
  },
  {
      "text": "pharetra",
      "value": 8
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "nec",
      "value": 3
  },
  {
      "text": "nisi",
      "value": 4
  },
  {
      "text": "commodo,",
      "value": 8
  },
  {
      "text": "ac",
      "value": 2
  },
  {
      "text": "sollicitudin",
      "value": 12
  },
  {
      "text": "arcu",
      "value": 4
  },
  {
      "text": "porttitor.",
      "value": 10
  },
  {
      "text": "praesent",
      "value": 8
  },
  {
      "text": "sem",
      "value": 3
  },
  {
      "text": "est,",
      "value": 4
  },
  {
      "text": "viverra",
      "value": 7
  },
  {
      "text": "eget",
      "value": 4
  },
  {
      "text": "eros",
      "value": 4
  },
  {
      "text": "non,",
      "value": 4
  },
  {
      "text": "auctor",
      "value": 6
  },
  {
      "text": "molestie",
      "value": 8
  },
  {
      "text": "lectus.",
      "value": 7
  },
  {
      "text": "quisque",
      "value": 7
  },
  {
      "text": "semper",
      "value": 6
  },
  {
      "text": "hendrerit",
      "value": 9
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "vitae",
      "value": 5
  },
  {
      "text": "tristique.",
      "value": 10
  },
  {
      "text": "donec",
      "value": 5
  },
  {
      "text": "vestibulum",
      "value": 10
  },
  {
      "text": "sit",
      "value": 3
  },
  {
      "text": "amet",
      "value": 4
  },
  {
      "text": "massa",
      "value": 5
  },
  {
      "text": "sollicitudin",
      "value": 12
  },
  {
      "text": "sagittis.",
      "value": 9
  },
  {
      "text": "suspendisse",
      "value": 11
  },
  {
      "text": "elementum",
      "value": 9
  },
  {
      "text": "lobortis",
      "value": 8
  },
  {
      "text": "volutpat.",
      "value": 9
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "feugiat",
      "value": 7
  },
  {
      "text": "ullamcorper",
      "value": 11
  },
  {
      "text": "augue",
      "value": 5
  },
  {
      "text": "vel",
      "value": 3
  },
  {
      "text": "fermentum.",
      "value": 10
  },
  {
      "text": "fusce",
      "value": 5
  },
  {
      "text": "iaculis",
      "value": 7
  },
  {
      "text": "accumsan",
      "value": 8
  },
  {
      "text": "nibh",
      "value": 4
  },
  {
      "text": "sagittis",
      "value": 8
  },
  {
      "text": "gravida.",
      "value": 8
  },
  {
      "text": "nullam",
      "value": 6
  },
  {
      "text": "a",
      "value": 1
  },
  {
      "text": "malesuada",
      "value": 9
  },
  {
      "text": "purus,",
      "value": 6
  },
  {
      "text": "porta",
      "value": 5
  },
  {
      "text": "condimentum",
      "value": 11
  },
  {
      "text": "leo.",
      "value": 4
  },
  {
      "text": "nulla",
      "value": 5
  },
  {
      "text": "non",
      "value": 3
  },
  {
      "text": "felis",
      "value": 5
  },
  {
      "text": "pellentesque",
      "value": 12
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "luctus",
      "value": 6
  },
  {
      "text": "commodo.",
      "value": 8
  },
  {
      "text": "morbi",
      "value": 5
  },
  {
      "text": "sollicitudin",
      "value": 12
  },
  {
      "text": "imperdiet",
      "value": 9
  },
  {
      "text": "consectetur.",
      "value": 12
  },
  {
      "text": "sed",
      "value": 3
  },
  {
      "text": "fringilla",
      "value": 9
  },
  {
      "text": "ac",
      "value": 2
  },
  {
      "text": "massa",
      "value": 5
  },
  {
      "text": "ac",
      "value": 2
  },
  {
      "text": "maximus.",
      "value": 8
  },
  {
      "text": "fusce",
      "value": 5
  },
  {
      "text": "dictum",
      "value": 6
  },
  {
      "text": "porta",
      "value": 5
  },
  {
      "text": "risus,",
      "value": 6
  },
  {
      "text": "nec",
      "value": 3
  },
  {
      "text": "lobortis",
      "value": 8
  },
  {
      "text": "arcu",
      "value": 4
  },
  {
      "text": "tincidunt",
      "value": 9
  },
  {
      "text": "ut.",
      "value": 3
  },
  {
      "text": "donec",
      "value": 5
  },
  {
      "text": "commodo",
      "value": 7
  },
  {
      "text": "ornare",
      "value": 6
  },
  {
      "text": "sapien",
      "value": 6
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "ullamcorper.",
      "value": 12
  },
  {
      "text": "integer",
      "value": 7
  },
  {
      "text": "cursus",
      "value": 6
  },
  {
      "text": "nisl",
      "value": 4
  },
  {
      "text": "orci,",
      "value": 5
  },
  {
      "text": "vel",
      "value": 3
  },
  {
      "text": "sollicitudin",
      "value": 12
  },
  {
      "text": "ligula",
      "value": 6
  },
  {
      "text": "commodo",
      "value": 7
  },
  {
      "text": "sit",
      "value": 3
  },
  {
      "text": "amet.",
      "value": 5
  },
  {
      "text": "curabitur",
      "value": 9
  },
  {
      "text": "pharetra",
      "value": 8
  },
  {
      "text": "enim",
      "value": 4
  },
  {
      "text": "mauris,",
      "value": 7
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "ultrices",
      "value": 8
  },
  {
      "text": "libero",
      "value": 6
  },
  {
      "text": "bibendum",
      "value": 8
  },
  {
      "text": "non.",
      "value": 4
  },
  {
      "text": "duis",
      "value": 4
  },
  {
      "text": "faucibus",
      "value": 8
  },
  {
      "text": "cursus",
      "value": 6
  },
  {
      "text": "consectetur.",
      "value": 12
  },
  {
      "text": "nulla",
      "value": 5
  },
  {
      "text": "placerat",
      "value": 8
  },
  {
      "text": "faucibus",
      "value": 8
  },
  {
      "text": "mauris,",
      "value": 7
  },
  {
      "text": "id",
      "value": 2
  },
  {
      "text": "fringilla",
      "value": 9
  },
  {
      "text": "ex",
      "value": 2
  },
  {
      "text": "tempor",
      "value": 6
  },
  {
      "text": "a.",
      "value": 2
  },
  {
      "text": "nullam",
      "value": 6
  },
  {
      "text": "nibh",
      "value": 4
  },
  {
      "text": "purus,",
      "value": 6
  },
  {
      "text": "facilisis",
      "value": 9
  },
  {
      "text": "quis",
      "value": 4
  },
  {
      "text": "diam",
      "value": 4
  },
  {
      "text": "id,",
      "value": 3
  },
  {
      "text": "fringilla",
      "value": 9
  },
  {
      "text": "aliquet",
      "value": 7
  },
  {
      "text": "sapien.",
      "value": 7
  },
  {
      "text": "fusce",
      "value": 5
  },
  {
      "text": "et",
      "value": 2
  },
  {
      "text": "erat",
      "value": 4
  },
  {
      "text": "gravida",
      "value": 7
  },
  {
      "text": "ipsum",
      "value": 5
  },
  {
      "text": "laoreet",
      "value": 7
  },
  {
      "text": "placerat",
      "value": 8
  },
  {
      "text": "sit",
      "value": 3
  },
  {
      "text": "amet",
      "value": 4
  },
  {
      "text": "non",
      "value": 3
  },
  {
      "text": "risus.",
      "value": 6
  },
  {
      "text": "morbi",
      "value": 5
  },
  {
      "text": "lorem",
      "value": 5
  },
  {
      "text": "lectus,",
      "value": 7
  },
  {
      "text": "malesuada",
      "value": 9
  },
  {
      "text": "eu",
      "value": 2
  },
  {
      "text": "sollicitudin",
      "value": 12
  },
  {
      "text": "ut,",
      "value": 3
  },
  {
      "text": "sodales",
      "value": 7
  },
  {
      "text": "vel",
      "value": 3
  },
  {
      "text": "dui.",
      "value": 4
  },
  {
      "text": "maecenas",
      "value": 8
  },
  {
      "text": "non",
      "value": 3
  },
  {
      "text": "laoreet",
      "value": 7
  },
  {
      "text": "eros.",
      "value": 5
  },
  {
      "text": "donec",
      "value": 5
  },
  {
      "text": "vestibulum",
      "value": 10
  },
  {
      "text": "enim",
      "value": 4
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "felis",
      "value": 5
  },
  {
      "text": "ullamcorper,",
      "value": 12
  },
  {
      "text": "vitae",
      "value": 5
  },
  {
      "text": "euismod",
      "value": 7
  },
  {
      "text": "leo",
      "value": 3
  },
  {
      "text": "lobortis.",
      "value": 9
  },
  {
      "text": "praesent",
      "value": 8
  },
  {
      "text": "nec",
      "value": 3
  },
  {
      "text": "felis",
      "value": 5
  },
  {
      "text": "risus.",
      "value": 6
  },
  {
      "text": "etiam",
      "value": 5
  },
  {
      "text": "a",
      "value": 1
  },
  {
      "text": "diam",
      "value": 4
  },
  {
      "text": "suscipit,",
      "value": 9
  },
  {
      "text": "ullamcorper",
      "value": 11
  },
  {
      "text": "ante",
      "value": 4
  },
  {
      "text": "a,",
      "value": 2
  },
  {
      "text": "tincidunt",
      "value": 9
  },
  {
      "text": "augue.",
      "value": 6
  },
  {
      "text": "duis",
      "value": 4
  },
  {
      "text": "lacinia",
      "value": 7
  },
  {
      "text": "lectus",
      "value": 6
  },
  {
      "text": "felis,",
      "value": 6
  },
  {
      "text": "nec",
      "value": 3
  },
  {
      "text": "luctus",
      "value": 6
  },
  {
      "text": "mauris",
      "value": 6
  },
  {
      "text": "vestibulum",
      "value": 10
  },
  {
      "text": "et.",
      "value": 3
  },
  {
      "text": "fusce",
      "value": 5
  },
  {
      "text": "id",
      "value": 2
  },
  {
      "text": "lobortis",
      "value": 8
  },
  {
      "text": "enim,",
      "value": 5
  },
  {
      "text": "et",
      "value": 2
  },
  {
      "text": "posuere",
      "value": 7
  },
  {
      "text": "quam.",
      "value": 5
  },
  {
      "text": "vivamus",
      "value": 7
  },
  {
      "text": "vulputate",
      "value": 9
  },
  {
      "text": "eu",
      "value": 2
  },
  {
      "text": "augue",
      "value": 5
  },
  {
      "text": "sed",
      "value": 3
  },
  {
      "text": "porta.",
      "value": 6
  },
  {
      "text": "curabitur",
      "value": 9
  },
  {
      "text": "sollicitudin",
      "value": 12
  },
  {
      "text": "eros",
      "value": 4
  },
  {
      "text": "vitae",
      "value": 5
  },
  {
      "text": "euismod",
      "value": 7
  },
  {
      "text": "iaculis.",
      "value": 8
  },
  {
      "text": "curabitur",
      "value": 9
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "lorem,",
      "value": 6
  },
  {
      "text": "viverra",
      "value": 7
  },
  {
      "text": "et",
      "value": 2
  },
  {
      "text": "ante",
      "value": 4
  },
  {
      "text": "at,",
      "value": 3
  },
  {
      "text": "dapibus",
      "value": 7
  },
  {
      "text": "luctus",
      "value": 6
  },
  {
      "text": "tortor.",
      "value": 7
  },
  {
      "text": "suspendisse",
      "value": 11
  },
  {
      "text": "fringilla",
      "value": 9
  },
  {
      "text": "ornare",
      "value": 6
  },
  {
      "text": "nisi.",
      "value": 5
  },
  {
      "text": "aliquam",
      "value": 7
  },
  {
      "text": "suscipit",
      "value": 8
  },
  {
      "text": "magna",
      "value": 5
  },
  {
      "text": "eget",
      "value": 4
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "faucibus,",
      "value": 9
  },
  {
      "text": "sit",
      "value": 3
  },
  {
      "text": "amet",
      "value": 4
  },
  {
      "text": "porta",
      "value": 5
  },
  {
      "text": "metus",
      "value": 5
  },
  {
      "text": "fermentum.",
      "value": 10
  },
  {
      "text": "proin",
      "value": 5
  },
  {
      "text": "et",
      "value": 2
  },
  {
      "text": "velit",
      "value": 5
  },
  {
      "text": "risus.",
      "value": 6
  },
  {
      "text": "maecenas",
      "value": 8
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "facilisis",
      "value": 9
  },
  {
      "text": "magna.",
      "value": 6
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "sed",
      "value": 3
  },
  {
      "text": "pharetra",
      "value": 8
  },
  {
      "text": "turpis,",
      "value": 7
  },
  {
      "text": "sed",
      "value": 3
  },
  {
      "text": "fermentum",
      "value": 9
  },
  {
      "text": "nulla.",
      "value": 6
  },
  {
      "text": "proin",
      "value": 5
  },
  {
      "text": "rhoncus",
      "value": 7
  },
  {
      "text": "rhoncus",
      "value": 7
  },
  {
      "text": "iaculis.",
      "value": 8
  },
  {
      "text": "pellentesque",
      "value": 12
  },
  {
      "text": "finibus",
      "value": 7
  },
  {
      "text": "rutrum",
      "value": 6
  },
  {
      "text": "malesuada.",
      "value": 10
  },
  {
      "text": "sed",
      "value": 3
  },
  {
      "text": "vulputate",
      "value": 9
  },
  {
      "text": "id",
      "value": 2
  },
  {
      "text": "felis",
      "value": 5
  },
  {
      "text": "non",
      "value": 3
  },
  {
      "text": "cursus.",
      "value": 7
  },
  {
      "text": "fusce",
      "value": 5
  },
  {
      "text": "faucibus",
      "value": 8
  },
  {
      "text": "condimentum",
      "value": 11
  },
  {
      "text": "diam",
      "value": 4
  },
  {
      "text": "id",
      "value": 2
  },
  {
      "text": "blandit.",
      "value": 8
  },
  {
      "text": "integer",
      "value": 7
  },
  {
      "text": "feugiat",
      "value": 7
  },
  {
      "text": "at",
      "value": 2
  },
  {
      "text": "turpis",
      "value": 6
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "pretium.",
      "value": 8
  },
  {
      "text": "mauris",
      "value": 6
  },
  {
      "text": "congue",
      "value": 6
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "sapien",
      "value": 6
  },
  {
      "text": "nec",
      "value": 3
  },
  {
      "text": "pulvinar.",
      "value": 9
  },
  {
      "text": "donec",
      "value": 5
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "nunc",
      "value": 4
  },
  {
      "text": "id",
      "value": 2
  },
  {
      "text": "purus",
      "value": 5
  },
  {
      "text": "egestas",
      "value": 7
  },
  {
      "text": "porttitor",
      "value": 9
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "posuere",
      "value": 7
  },
  {
      "text": "lectus.",
      "value": 7
  },
  {
      "text": "nulla",
      "value": 5
  },
  {
      "text": "pellentesque",
      "value": 12
  },
  {
      "text": "fermentum",
      "value": 9
  },
  {
      "text": "neque,",
      "value": 6
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "vestibulum",
      "value": 10
  },
  {
      "text": "elit",
      "value": 4
  },
  {
      "text": "vulputate",
      "value": 9
  },
  {
      "text": "accumsan.",
      "value": 9
  },
  {
      "text": "etiam",
      "value": 5
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "ipsum",
      "value": 5
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "ipsum",
      "value": 5
  },
  {
      "text": "ullamcorper",
      "value": 11
  },
  {
      "text": "semper.",
      "value": 7
  },
  {
      "text": "nulla",
      "value": 5
  },
  {
      "text": "mauris",
      "value": 6
  },
  {
      "text": "magna,",
      "value": 6
  },
  {
      "text": "pulvinar",
      "value": 8
  },
  {
      "text": "ac",
      "value": 2
  },
  {
      "text": "purus",
      "value": 5
  },
  {
      "text": "in,",
      "value": 3
  },
  {
      "text": "scelerisque",
      "value": 11
  },
  {
      "text": "bibendum",
      "value": 8
  },
  {
      "text": "velit.",
      "value": 6
  },
  {
      "text": "sed",
      "value": 3
  },
  {
      "text": "eget",
      "value": 4
  },
  {
      "text": "turpis",
      "value": 6
  },
  {
      "text": "quis",
      "value": 4
  },
  {
      "text": "ipsum",
      "value": 5
  },
  {
      "text": "mollis",
      "value": 6
  },
  {
      "text": "pretium.",
      "value": 8
  },
  {
      "text": "suspendisse",
      "value": 11
  },
  {
      "text": "potenti.",
      "value": 8
  },
  {
      "text": "mauris",
      "value": 6
  },
  {
      "text": "dignissim",
      "value": 9
  },
  {
      "text": "pulvinar",
      "value": 8
  },
  {
      "text": "posuere.",
      "value": 8
  },
  {
      "text": "nulla",
      "value": 5
  },
  {
      "text": "ligula",
      "value": 6
  },
  {
      "text": "lectus,",
      "value": 7
  },
  {
      "text": "ullamcorper",
      "value": 11
  },
  {
      "text": "vel",
      "value": 3
  },
  {
      "text": "enim",
      "value": 4
  },
  {
      "text": "et,",
      "value": 3
  },
  {
      "text": "mattis",
      "value": 6
  },
  {
      "text": "gravida",
      "value": 7
  },
  {
      "text": "quam.",
      "value": 5
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "efficitur",
      "value": 9
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "felis",
      "value": 5
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "elementum.",
      "value": 10
  },
  {
      "text": "praesent",
      "value": 8
  },
  {
      "text": "hendrerit",
      "value": 9
  },
  {
      "text": "laoreet",
      "value": 7
  },
  {
      "text": "est,",
      "value": 4
  },
  {
      "text": "in",
      "value": 2
  },
  {
      "text": "condimentum",
      "value": 11
  },
  {
      "text": "risus",
      "value": 5
  },
  {
      "text": "egestas",
      "value": 7
  },
  {
      "text": "non.",
      "value": 4
  },
  {
      "text": "nullam",
      "value": 6
  },
  {
      "text": "sagittis",
      "value": 8
  },
  {
      "text": "diam",
      "value": 4
  },
  {
      "text": "ligula,",
      "value": 7
  },
  {
      "text": "ut",
      "value": 2
  },
  {
      "text": "rhoncus",
      "value": 7
  },
  {
      "text": "odio",
      "value": 4
  },
  {
      "text": "ultrices",
      "value": 8
  },
  {
      "text": "in.",
      "value": 3
  },
  {
      "text": "nam",
      "value": 3
  },
  {
      "text": "quis",
      "value": 4
  },
  {
      "text": "nibh",
      "value": 4
  },
  {
      "text": "sagittis,",
      "value": 9
  },
  {
      "text": "mattis",
      "value": 6
  },
  {
      "text": "purus",
      "value": 5
  },
  {
      "text": "facilisis,",
      "value": 10
  },
  {
      "text": "semper",
      "value": 6
  },
  {
      "text": "nibh.",
      "value": 5
  },
  {
      "text": "vestibulum",
      "value": 10
  },
  {
      "text": "a",
      "value": 1
  },
  {
      "text": "tempus",
      "value": 6
  },
  {
      "text": "orci,",
      "value": 5
  },
  {
      "text": "sit",
      "value": 3
  },
  {
      "text": "amet",
      "value": 4
  },
  {
      "text": "commodo",
      "value": 7
  },
  {
      "text": "massa.",
      "value": 6
  },
  {
      "text": "proin",
      "value": 5
  },
  {
      "text": "blandit",
      "value": 7
  },
  {
      "text": "lorem",
      "value": 5
  },
  {
      "text": "et",
      "value": 2
  },
  {
      "text": "lorem",
      "value": 5
  },
  {
      "text": "malesuada",
      "value": 9
  },
  {
      "text": "mattis.",
      "value": 7
  }
]
 
const options : {rotations:number,rotationAngles:[number,number]} = {
  rotations: 2,
  rotationAngles: [-90, 0],
};
// const size:[number,number] = [600, 400];

function SimpleWordcloud() {
  return <ReactWordcloud words={words} 
  // size={size}
  options={options}
  />
}

export default SimpleWordcloud;