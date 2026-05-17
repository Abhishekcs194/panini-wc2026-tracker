export type Sticker = {
  id: string;
  code: string;
  num: number | string;
  name: string;
  foil: boolean;
  special: boolean;
  section: string;
  albumPos: number;
};

export const STICKERS: Sticker[] = [
  {
    "id": "PANINI00",
    "code": "PANINI",
    "num": "00",
    "name": "Panini Logo - We Are Panini",
    "foil": true,
    "special": true,
    "section": "INTRO",
    "albumPos": 1
  },
  {
    "id": "FWC1",
    "code": "FWC",
    "num": 1,
    "name": "Official Emblem",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 2
  },
  {
    "id": "FWC2",
    "code": "FWC",
    "num": 2,
    "name": "Official Emblem",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 3
  },
  {
    "id": "FWC3",
    "code": "FWC",
    "num": 3,
    "name": "Official Mascots",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 4
  },
  {
    "id": "FWC4",
    "code": "FWC",
    "num": 4,
    "name": "Official Slogan",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 5
  },
  {
    "id": "FWC5",
    "code": "FWC",
    "num": 5,
    "name": "Official Ball",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 6
  },
  {
    "id": "FWC6",
    "code": "FWC",
    "num": 6,
    "name": "Canada - Host Countries & Cities",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 7
  },
  {
    "id": "FWC7",
    "code": "FWC",
    "num": 7,
    "name": "Mexico - Host Countries & Cities",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 8
  },
  {
    "id": "FWC8",
    "code": "FWC",
    "num": 8,
    "name": "USA - Host Countries & Cities",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 9
  },
  {
    "id": "FWC9",
    "code": "FWC",
    "num": 9,
    "name": "Italy 1934 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 10
  },
  {
    "id": "FWC10",
    "code": "FWC",
    "num": 10,
    "name": "Uruguay 1950 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 11
  },
  {
    "id": "FWC11",
    "code": "FWC",
    "num": 11,
    "name": "West Germany 1954 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 12
  },
  {
    "id": "FWC12",
    "code": "FWC",
    "num": 12,
    "name": "Brazil 1962 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 13
  },
  {
    "id": "FWC13",
    "code": "FWC",
    "num": 13,
    "name": "West Germany 1974 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 14
  },
  {
    "id": "FWC14",
    "code": "FWC",
    "num": 14,
    "name": "Argentina 1986 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 15
  },
  {
    "id": "FWC15",
    "code": "FWC",
    "num": 15,
    "name": "Brazil 1994 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 16
  },
  {
    "id": "FWC16",
    "code": "FWC",
    "num": 16,
    "name": "Brazil 2002 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 17
  },
  {
    "id": "FWC17",
    "code": "FWC",
    "num": 17,
    "name": "Italy 2006 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 18
  },
  {
    "id": "FWC18",
    "code": "FWC",
    "num": 18,
    "name": "Germany 2014 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 19
  },
  {
    "id": "FWC19",
    "code": "FWC",
    "num": 19,
    "name": "Argentina 2022 - World Cup History",
    "foil": true,
    "special": true,
    "section": "FWC",
    "albumPos": 20
  },
  {
    "id": "ALG1",
    "code": "ALG",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "ALG",
    "albumPos": 21
  },
  {
    "id": "ALG2",
    "code": "ALG",
    "num": 2,
    "name": "Rais M'Bolhi",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 22
  },
  {
    "id": "ALG3",
    "code": "ALG",
    "num": 3,
    "name": "Ramy Bensebaini",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 23
  },
  {
    "id": "ALG4",
    "code": "ALG",
    "num": 4,
    "name": "Djamel Benlamri",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 24
  },
  {
    "id": "ALG5",
    "code": "ALG",
    "num": 5,
    "name": "Youcef Atal",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 25
  },
  {
    "id": "ALG6",
    "code": "ALG",
    "num": 6,
    "name": "Aissa Mandi",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 26
  },
  {
    "id": "ALG7",
    "code": "ALG",
    "num": 7,
    "name": "Hossam Abou Ali",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 27
  },
  {
    "id": "ALG8",
    "code": "ALG",
    "num": 8,
    "name": "Adlène Guedioura",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 28
  },
  {
    "id": "ALG9",
    "code": "ALG",
    "num": 9,
    "name": "Ismail Bennacer",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 29
  },
  {
    "id": "ALG10",
    "code": "ALG",
    "num": 10,
    "name": "Samir Nasri",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 30
  },
  {
    "id": "ALG11",
    "code": "ALG",
    "num": 11,
    "name": "Nabil Bentaleb",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 31
  },
  {
    "id": "ALG12",
    "code": "ALG",
    "num": 12,
    "name": "Yacine Brahimi",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 32
  },
  {
    "id": "ALG13",
    "code": "ALG",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 33
  },
  {
    "id": "ALG14",
    "code": "ALG",
    "num": 14,
    "name": "Riyad Mahrez",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 34
  },
  {
    "id": "ALG15",
    "code": "ALG",
    "num": 15,
    "name": "Adam Ounas",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 35
  },
  {
    "id": "ALG16",
    "code": "ALG",
    "num": 16,
    "name": "Islam Slimani",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 36
  },
  {
    "id": "ALG17",
    "code": "ALG",
    "num": 17,
    "name": "Baghdad Bounedjah",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 37
  },
  {
    "id": "ALG18",
    "code": "ALG",
    "num": 18,
    "name": "Sofiane Feghouli",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 38
  },
  {
    "id": "ALG19",
    "code": "ALG",
    "num": 19,
    "name": "Zinedine Ferhat",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 39
  },
  {
    "id": "ALG20",
    "code": "ALG",
    "num": 20,
    "name": "Andy Delort",
    "foil": false,
    "special": false,
    "section": "ALG",
    "albumPos": 40
  },
  {
    "id": "ARG1",
    "code": "ARG",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "ARG",
    "albumPos": 41
  },
  {
    "id": "ARG2",
    "code": "ARG",
    "num": 2,
    "name": "Emiliano Martinez",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 42
  },
  {
    "id": "ARG3",
    "code": "ARG",
    "num": 3,
    "name": "Nahuel Molina",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 43
  },
  {
    "id": "ARG4",
    "code": "ARG",
    "num": 4,
    "name": "Cristian Romero",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 44
  },
  {
    "id": "ARG5",
    "code": "ARG",
    "num": 5,
    "name": "Nicolas Otamendi",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 45
  },
  {
    "id": "ARG6",
    "code": "ARG",
    "num": 6,
    "name": "Nicolas Tagliafico",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 46
  },
  {
    "id": "ARG7",
    "code": "ARG",
    "num": 7,
    "name": "Leonardo Balerdi",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 47
  },
  {
    "id": "ARG8",
    "code": "ARG",
    "num": 8,
    "name": "Enzo Fernandez",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 48
  },
  {
    "id": "ARG9",
    "code": "ARG",
    "num": 9,
    "name": "Alexis Mac Allister",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 49
  },
  {
    "id": "ARG10",
    "code": "ARG",
    "num": 10,
    "name": "Rodrigo De Paul",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 50
  },
  {
    "id": "ARG11",
    "code": "ARG",
    "num": 11,
    "name": "Exequiel Palacios",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 51
  },
  {
    "id": "ARG12",
    "code": "ARG",
    "num": 12,
    "name": "Leandro Paredes",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 52
  },
  {
    "id": "ARG13",
    "code": "ARG",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 53
  },
  {
    "id": "ARG14",
    "code": "ARG",
    "num": 14,
    "name": "Nico Paz",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 54
  },
  {
    "id": "ARG15",
    "code": "ARG",
    "num": 15,
    "name": "Franco Mastantuono",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 55
  },
  {
    "id": "ARG16",
    "code": "ARG",
    "num": 16,
    "name": "Nico Gonzalez",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 56
  },
  {
    "id": "ARG17",
    "code": "ARG",
    "num": 17,
    "name": "Lionel Messi",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 57
  },
  {
    "id": "ARG18",
    "code": "ARG",
    "num": 18,
    "name": "Lautaro Martinez",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 58
  },
  {
    "id": "ARG19",
    "code": "ARG",
    "num": 19,
    "name": "Julian Alvarez",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 59
  },
  {
    "id": "ARG20",
    "code": "ARG",
    "num": 20,
    "name": "Giuliano Simeone",
    "foil": false,
    "special": false,
    "section": "ARG",
    "albumPos": 60
  },
  {
    "id": "AUS1",
    "code": "AUS",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "AUS",
    "albumPos": 61
  },
  {
    "id": "AUS2",
    "code": "AUS",
    "num": 2,
    "name": "Mat Ryan",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 62
  },
  {
    "id": "AUS3",
    "code": "AUS",
    "num": 3,
    "name": "Milos Degenek",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 63
  },
  {
    "id": "AUS4",
    "code": "AUS",
    "num": 4,
    "name": "Harry Souttar",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 64
  },
  {
    "id": "AUS5",
    "code": "AUS",
    "num": 5,
    "name": "Kye Rowles",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 65
  },
  {
    "id": "AUS6",
    "code": "AUS",
    "num": 6,
    "name": "Aziz Behich",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 66
  },
  {
    "id": "AUS7",
    "code": "AUS",
    "num": 7,
    "name": "Bailey Wright",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 67
  },
  {
    "id": "AUS8",
    "code": "AUS",
    "num": 8,
    "name": "Aaron Mooy",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 68
  },
  {
    "id": "AUS9",
    "code": "AUS",
    "num": 9,
    "name": "Jackson Irvine",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 69
  },
  {
    "id": "AUS10",
    "code": "AUS",
    "num": 10,
    "name": "Riley McGree",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 70
  },
  {
    "id": "AUS11",
    "code": "AUS",
    "num": 11,
    "name": "Marco Tilio",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 71
  },
  {
    "id": "AUS12",
    "code": "AUS",
    "num": 12,
    "name": "Cameron Burgess",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 72
  },
  {
    "id": "AUS13",
    "code": "AUS",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 73
  },
  {
    "id": "AUS14",
    "code": "AUS",
    "num": 14,
    "name": "Nestory Irankunda",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 74
  },
  {
    "id": "AUS15",
    "code": "AUS",
    "num": 15,
    "name": "Connor Metcalfe",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 75
  },
  {
    "id": "AUS16",
    "code": "AUS",
    "num": 16,
    "name": "Keanu Baccus",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 76
  },
  {
    "id": "AUS17",
    "code": "AUS",
    "num": 17,
    "name": "Mathew Leckie",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 77
  },
  {
    "id": "AUS18",
    "code": "AUS",
    "num": 18,
    "name": "Mitchell Duke",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 78
  },
  {
    "id": "AUS19",
    "code": "AUS",
    "num": 19,
    "name": "Jason Cummings",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 79
  },
  {
    "id": "AUS20",
    "code": "AUS",
    "num": 20,
    "name": "Garang Kuol",
    "foil": false,
    "special": false,
    "section": "AUS",
    "albumPos": 80
  },
  {
    "id": "AUT1",
    "code": "AUT",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "AUT",
    "albumPos": 81
  },
  {
    "id": "AUT2",
    "code": "AUT",
    "num": 2,
    "name": "Patrick Pentz",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 82
  },
  {
    "id": "AUT3",
    "code": "AUT",
    "num": 3,
    "name": "Stefan Posch",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 83
  },
  {
    "id": "AUT4",
    "code": "AUT",
    "num": 4,
    "name": "Kevin Danso",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 84
  },
  {
    "id": "AUT5",
    "code": "AUT",
    "num": 5,
    "name": "Philipp Lienhart",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 85
  },
  {
    "id": "AUT6",
    "code": "AUT",
    "num": 6,
    "name": "Phillipp Mwene",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 86
  },
  {
    "id": "AUT7",
    "code": "AUT",
    "num": 7,
    "name": "Florian Grillitsch",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 87
  },
  {
    "id": "AUT8",
    "code": "AUT",
    "num": 8,
    "name": "Nicolas Seiwald",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 88
  },
  {
    "id": "AUT9",
    "code": "AUT",
    "num": 9,
    "name": "Konrad Laimer",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 89
  },
  {
    "id": "AUT10",
    "code": "AUT",
    "num": 10,
    "name": "Marcel Sabitzer",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 90
  },
  {
    "id": "AUT11",
    "code": "AUT",
    "num": 11,
    "name": "Christoph Baumgartner",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 91
  },
  {
    "id": "AUT12",
    "code": "AUT",
    "num": 12,
    "name": "Florian Kainz",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 92
  },
  {
    "id": "AUT13",
    "code": "AUT",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 93
  },
  {
    "id": "AUT14",
    "code": "AUT",
    "num": 14,
    "name": "Romano Schmid",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 94
  },
  {
    "id": "AUT15",
    "code": "AUT",
    "num": 15,
    "name": "Patrick Wimmer",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 95
  },
  {
    "id": "AUT16",
    "code": "AUT",
    "num": 16,
    "name": "Maximilian Entrup",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 96
  },
  {
    "id": "AUT17",
    "code": "AUT",
    "num": 17,
    "name": "Michael Gregoritsch",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 97
  },
  {
    "id": "AUT18",
    "code": "AUT",
    "num": 18,
    "name": "Marko Arnautovic",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 98
  },
  {
    "id": "AUT19",
    "code": "AUT",
    "num": 19,
    "name": "Andreas Weimann",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 99
  },
  {
    "id": "AUT20",
    "code": "AUT",
    "num": 20,
    "name": "Sasa Kalajdzic",
    "foil": false,
    "special": false,
    "section": "AUT",
    "albumPos": 100
  },
  {
    "id": "BEL1",
    "code": "BEL",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "BEL",
    "albumPos": 101
  },
  {
    "id": "BEL2",
    "code": "BEL",
    "num": 2,
    "name": "Koen Casteels",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 102
  },
  {
    "id": "BEL3",
    "code": "BEL",
    "num": 3,
    "name": "Timothy Castagne",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 103
  },
  {
    "id": "BEL4",
    "code": "BEL",
    "num": 4,
    "name": "Wout Faes",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 104
  },
  {
    "id": "BEL5",
    "code": "BEL",
    "num": 5,
    "name": "Arthur Theate",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 105
  },
  {
    "id": "BEL6",
    "code": "BEL",
    "num": 6,
    "name": "Maxim De Cuyper",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 106
  },
  {
    "id": "BEL7",
    "code": "BEL",
    "num": 7,
    "name": "Alexis Saelemaekers",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 107
  },
  {
    "id": "BEL8",
    "code": "BEL",
    "num": 8,
    "name": "Amadou Onana",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 108
  },
  {
    "id": "BEL9",
    "code": "BEL",
    "num": 9,
    "name": "Hans Vanaken",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 109
  },
  {
    "id": "BEL10",
    "code": "BEL",
    "num": 10,
    "name": "Leandro Trossard",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 110
  },
  {
    "id": "BEL11",
    "code": "BEL",
    "num": 11,
    "name": "Yannick Carrasco",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 111
  },
  {
    "id": "BEL12",
    "code": "BEL",
    "num": 12,
    "name": "Thomas Meunier",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 112
  },
  {
    "id": "BEL13",
    "code": "BEL",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 113
  },
  {
    "id": "BEL14",
    "code": "BEL",
    "num": 14,
    "name": "Johan Bakayoko",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 114
  },
  {
    "id": "BEL15",
    "code": "BEL",
    "num": 15,
    "name": "Charles De Ketelaere",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 115
  },
  {
    "id": "BEL16",
    "code": "BEL",
    "num": 16,
    "name": "Romelu Lukaku",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 116
  },
  {
    "id": "BEL17",
    "code": "BEL",
    "num": 17,
    "name": "Dodi Lukebakio",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 117
  },
  {
    "id": "BEL18",
    "code": "BEL",
    "num": 18,
    "name": "Lois Openda",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 118
  },
  {
    "id": "BEL19",
    "code": "BEL",
    "num": 19,
    "name": "Jeremy Doku",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 119
  },
  {
    "id": "BEL20",
    "code": "BEL",
    "num": 20,
    "name": "Leonardo Trossard",
    "foil": false,
    "special": false,
    "section": "BEL",
    "albumPos": 120
  },
  {
    "id": "BIH1",
    "code": "BIH",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "BIH",
    "albumPos": 121
  },
  {
    "id": "BIH2",
    "code": "BIH",
    "num": 2,
    "name": "Ibrahim Sehic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 122
  },
  {
    "id": "BIH3",
    "code": "BIH",
    "num": 3,
    "name": "Jusuf Gazibegovic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 123
  },
  {
    "id": "BIH4",
    "code": "BIH",
    "num": 4,
    "name": "Ermin Bicakcic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 124
  },
  {
    "id": "BIH5",
    "code": "BIH",
    "num": 5,
    "name": "Ognjen Zunic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 125
  },
  {
    "id": "BIH6",
    "code": "BIH",
    "num": 6,
    "name": "Sead Kolasinac",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 126
  },
  {
    "id": "BIH7",
    "code": "BIH",
    "num": 7,
    "name": "Sasa Lukic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 127
  },
  {
    "id": "BIH8",
    "code": "BIH",
    "num": 8,
    "name": "Miralem Pjanic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 128
  },
  {
    "id": "BIH9",
    "code": "BIH",
    "num": 9,
    "name": "Amer Gojak",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 129
  },
  {
    "id": "BIH10",
    "code": "BIH",
    "num": 10,
    "name": "Edin Visca",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 130
  },
  {
    "id": "BIH11",
    "code": "BIH",
    "num": 11,
    "name": "Anel Ahmedhodzic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 131
  },
  {
    "id": "BIH12",
    "code": "BIH",
    "num": 12,
    "name": "Benjamin Tahirovic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 132
  },
  {
    "id": "BIH13",
    "code": "BIH",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 133
  },
  {
    "id": "BIH14",
    "code": "BIH",
    "num": 14,
    "name": "Armin Hodic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 134
  },
  {
    "id": "BIH15",
    "code": "BIH",
    "num": 15,
    "name": "Armin Gigovic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 135
  },
  {
    "id": "BIH16",
    "code": "BIH",
    "num": 16,
    "name": "Amar Dedic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 136
  },
  {
    "id": "BIH17",
    "code": "BIH",
    "num": 17,
    "name": "Edin Dzeko",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 137
  },
  {
    "id": "BIH18",
    "code": "BIH",
    "num": 18,
    "name": "Ermedin Demirovic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 138
  },
  {
    "id": "BIH19",
    "code": "BIH",
    "num": 19,
    "name": "Alen Halilovic",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 139
  },
  {
    "id": "BIH20",
    "code": "BIH",
    "num": 20,
    "name": "Dzenis Kozica",
    "foil": false,
    "special": false,
    "section": "BIH",
    "albumPos": 140
  },
  {
    "id": "BRA1",
    "code": "BRA",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "BRA",
    "albumPos": 141
  },
  {
    "id": "BRA2",
    "code": "BRA",
    "num": 2,
    "name": "Ederson",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 142
  },
  {
    "id": "BRA3",
    "code": "BRA",
    "num": 3,
    "name": "Danilo",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 143
  },
  {
    "id": "BRA4",
    "code": "BRA",
    "num": 4,
    "name": "Marquinhos",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 144
  },
  {
    "id": "BRA5",
    "code": "BRA",
    "num": 5,
    "name": "Gabriel Magalhaes",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 145
  },
  {
    "id": "BRA6",
    "code": "BRA",
    "num": 6,
    "name": "Guilherme Arana",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 146
  },
  {
    "id": "BRA7",
    "code": "BRA",
    "num": 7,
    "name": "Bruno Guimaraes",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 147
  },
  {
    "id": "BRA8",
    "code": "BRA",
    "num": 8,
    "name": "Casemiro",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 148
  },
  {
    "id": "BRA9",
    "code": "BRA",
    "num": 9,
    "name": "Lucas Paqueta",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 149
  },
  {
    "id": "BRA10",
    "code": "BRA",
    "num": 10,
    "name": "Raphinha",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 150
  },
  {
    "id": "BRA11",
    "code": "BRA",
    "num": 11,
    "name": "Vinicius Jr",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 151
  },
  {
    "id": "BRA12",
    "code": "BRA",
    "num": 12,
    "name": "Rodrygo",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 152
  },
  {
    "id": "BRA13",
    "code": "BRA",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 153
  },
  {
    "id": "BRA14",
    "code": "BRA",
    "num": 14,
    "name": "Endrick",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 154
  },
  {
    "id": "BRA15",
    "code": "BRA",
    "num": 15,
    "name": "Savinho",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 155
  },
  {
    "id": "BRA16",
    "code": "BRA",
    "num": 16,
    "name": "Gabriel Martinelli",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 156
  },
  {
    "id": "BRA17",
    "code": "BRA",
    "num": 17,
    "name": "Neymar Jr",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 157
  },
  {
    "id": "BRA18",
    "code": "BRA",
    "num": 18,
    "name": "Gabriel Jesus",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 158
  },
  {
    "id": "BRA19",
    "code": "BRA",
    "num": 19,
    "name": "Richarlison",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 159
  },
  {
    "id": "BRA20",
    "code": "BRA",
    "num": 20,
    "name": "Matheus Cunha",
    "foil": false,
    "special": false,
    "section": "BRA",
    "albumPos": 160
  },
  {
    "id": "CAN1",
    "code": "CAN",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "CAN",
    "albumPos": 161
  },
  {
    "id": "CAN2",
    "code": "CAN",
    "num": 2,
    "name": "Maxime Crepeau",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 162
  },
  {
    "id": "CAN3",
    "code": "CAN",
    "num": 3,
    "name": "Richie Laryea",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 163
  },
  {
    "id": "CAN4",
    "code": "CAN",
    "num": 4,
    "name": "Steven Vitoria",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 164
  },
  {
    "id": "CAN5",
    "code": "CAN",
    "num": 5,
    "name": "Kamal Miller",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 165
  },
  {
    "id": "CAN6",
    "code": "CAN",
    "num": 6,
    "name": "Alistair Johnston",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 166
  },
  {
    "id": "CAN7",
    "code": "CAN",
    "num": 7,
    "name": "Stephen Eustaquio",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 167
  },
  {
    "id": "CAN8",
    "code": "CAN",
    "num": 8,
    "name": "Jonathan Osorio",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 168
  },
  {
    "id": "CAN9",
    "code": "CAN",
    "num": 9,
    "name": "Samuel Piette",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 169
  },
  {
    "id": "CAN10",
    "code": "CAN",
    "num": 10,
    "name": "Tajon Buchanan",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 170
  },
  {
    "id": "CAN11",
    "code": "CAN",
    "num": 11,
    "name": "Alphonso Davies",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 171
  },
  {
    "id": "CAN12",
    "code": "CAN",
    "num": 12,
    "name": "Liam Millar",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 172
  },
  {
    "id": "CAN13",
    "code": "CAN",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 173
  },
  {
    "id": "CAN14",
    "code": "CAN",
    "num": 14,
    "name": "Jonathan David",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 174
  },
  {
    "id": "CAN15",
    "code": "CAN",
    "num": 15,
    "name": "Cyle Larin",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 175
  },
  {
    "id": "CAN16",
    "code": "CAN",
    "num": 16,
    "name": "Jacob Shaffelburg",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 176
  },
  {
    "id": "CAN17",
    "code": "CAN",
    "num": 17,
    "name": "Ismael Kone",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 177
  },
  {
    "id": "CAN18",
    "code": "CAN",
    "num": 18,
    "name": "Derek Cornelius",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 178
  },
  {
    "id": "CAN19",
    "code": "CAN",
    "num": 19,
    "name": "Ali Ahmed",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 179
  },
  {
    "id": "CAN20",
    "code": "CAN",
    "num": 20,
    "name": "Charles-Andreas Brym",
    "foil": false,
    "special": false,
    "section": "CAN",
    "albumPos": 180
  },
  {
    "id": "CIV1",
    "code": "CIV",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "CIV",
    "albumPos": 181
  },
  {
    "id": "CIV2",
    "code": "CIV",
    "num": 2,
    "name": "Yahia Fofana",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 182
  },
  {
    "id": "CIV3",
    "code": "CIV",
    "num": 3,
    "name": "Ghislain Konan",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 183
  },
  {
    "id": "CIV4",
    "code": "CIV",
    "num": 4,
    "name": "Eric Bailly",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 184
  },
  {
    "id": "CIV5",
    "code": "CIV",
    "num": 5,
    "name": "Simon Deli",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 185
  },
  {
    "id": "CIV6",
    "code": "CIV",
    "num": 6,
    "name": "Serge Aurier",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 186
  },
  {
    "id": "CIV7",
    "code": "CIV",
    "num": 7,
    "name": "Ibrahim Sangare",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 187
  },
  {
    "id": "CIV8",
    "code": "CIV",
    "num": 8,
    "name": "Franck Kessie",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 188
  },
  {
    "id": "CIV9",
    "code": "CIV",
    "num": 9,
    "name": "Jean Michael Seri",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 189
  },
  {
    "id": "CIV10",
    "code": "CIV",
    "num": 10,
    "name": "Nicolas Pepe",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 190
  },
  {
    "id": "CIV11",
    "code": "CIV",
    "num": 11,
    "name": "Wilfried Zaha",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 191
  },
  {
    "id": "CIV12",
    "code": "CIV",
    "num": 12,
    "name": "Maxwel Cornet",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 192
  },
  {
    "id": "CIV13",
    "code": "CIV",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 193
  },
  {
    "id": "CIV14",
    "code": "CIV",
    "num": 14,
    "name": "Simon Adingra",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 194
  },
  {
    "id": "CIV15",
    "code": "CIV",
    "num": 15,
    "name": "Oumar Diakite",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 195
  },
  {
    "id": "CIV16",
    "code": "CIV",
    "num": 16,
    "name": "Seko Fofana",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 196
  },
  {
    "id": "CIV17",
    "code": "CIV",
    "num": 17,
    "name": "Sebastien Haller",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 197
  },
  {
    "id": "CIV18",
    "code": "CIV",
    "num": 18,
    "name": "Wilfried Bony",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 198
  },
  {
    "id": "CIV19",
    "code": "CIV",
    "num": 19,
    "name": "Jonathan Bamba",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 199
  },
  {
    "id": "CIV20",
    "code": "CIV",
    "num": 20,
    "name": "Jeremie Boga",
    "foil": false,
    "special": false,
    "section": "CIV",
    "albumPos": 200
  },
  {
    "id": "COD1",
    "code": "COD",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "COD",
    "albumPos": 201
  },
  {
    "id": "COD2",
    "code": "COD",
    "num": 2,
    "name": "Joel Kiassumbua",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 202
  },
  {
    "id": "COD3",
    "code": "COD",
    "num": 3,
    "name": "Chancel Mbemba",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 203
  },
  {
    "id": "COD4",
    "code": "COD",
    "num": 4,
    "name": "Nadiem Amiri",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 204
  },
  {
    "id": "COD5",
    "code": "COD",
    "num": 5,
    "name": "Marcel Tisserand",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 205
  },
  {
    "id": "COD6",
    "code": "COD",
    "num": 6,
    "name": "Yoël Kassi",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 206
  },
  {
    "id": "COD7",
    "code": "COD",
    "num": 7,
    "name": "Arthur Masuaku",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 207
  },
  {
    "id": "COD8",
    "code": "COD",
    "num": 8,
    "name": "Cédric Bakambu",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 208
  },
  {
    "id": "COD9",
    "code": "COD",
    "num": 9,
    "name": "Samuel Bastien",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 209
  },
  {
    "id": "COD10",
    "code": "COD",
    "num": 10,
    "name": "Yoane Mwepu",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 210
  },
  {
    "id": "COD11",
    "code": "COD",
    "num": 11,
    "name": "Silas Mvumpa",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 211
  },
  {
    "id": "COD12",
    "code": "COD",
    "num": 12,
    "name": "Théo Bongonda",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 212
  },
  {
    "id": "COD13",
    "code": "COD",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 213
  },
  {
    "id": "COD14",
    "code": "COD",
    "num": 14,
    "name": "Benjamin Moukandjo",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 214
  },
  {
    "id": "COD15",
    "code": "COD",
    "num": 15,
    "name": "Dieumerci Mbokani",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 215
  },
  {
    "id": "COD16",
    "code": "COD",
    "num": 16,
    "name": "Elisha Owusu",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 216
  },
  {
    "id": "COD17",
    "code": "COD",
    "num": 17,
    "name": "Cédric Bakambu",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 217
  },
  {
    "id": "COD18",
    "code": "COD",
    "num": 18,
    "name": "Arthur Masuaku",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 218
  },
  {
    "id": "COD19",
    "code": "COD",
    "num": 19,
    "name": "Loïs Openda",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 219
  },
  {
    "id": "COD20",
    "code": "COD",
    "num": 20,
    "name": "Héritier Luvumbu",
    "foil": false,
    "special": false,
    "section": "COD",
    "albumPos": 220
  },
  {
    "id": "COL1",
    "code": "COL",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "COL",
    "albumPos": 221
  },
  {
    "id": "COL2",
    "code": "COL",
    "num": 2,
    "name": "Camilo Vargas",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 222
  },
  {
    "id": "COL3",
    "code": "COL",
    "num": 3,
    "name": "Santiago Arias",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 223
  },
  {
    "id": "COL4",
    "code": "COL",
    "num": 4,
    "name": "Carlos Cuesta",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 224
  },
  {
    "id": "COL5",
    "code": "COL",
    "num": 5,
    "name": "Davinson Sanchez",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 225
  },
  {
    "id": "COL6",
    "code": "COL",
    "num": 6,
    "name": "Johan Mojica",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 226
  },
  {
    "id": "COL7",
    "code": "COL",
    "num": 7,
    "name": "Wilmar Barrios",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 227
  },
  {
    "id": "COL8",
    "code": "COL",
    "num": 8,
    "name": "Mateus Uribe",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 228
  },
  {
    "id": "COL9",
    "code": "COL",
    "num": 9,
    "name": "Jefferson Lerma",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 229
  },
  {
    "id": "COL10",
    "code": "COL",
    "num": 10,
    "name": "Juan Cuadrado",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 230
  },
  {
    "id": "COL11",
    "code": "COL",
    "num": 11,
    "name": "James Rodriguez",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 231
  },
  {
    "id": "COL12",
    "code": "COL",
    "num": 12,
    "name": "Luis Diaz",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 232
  },
  {
    "id": "COL13",
    "code": "COL",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 233
  },
  {
    "id": "COL14",
    "code": "COL",
    "num": 14,
    "name": "Rafael Santos Borre",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 234
  },
  {
    "id": "COL15",
    "code": "COL",
    "num": 15,
    "name": "Jhon Arias",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 235
  },
  {
    "id": "COL16",
    "code": "COL",
    "num": 16,
    "name": "Lerma Jefferson",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 236
  },
  {
    "id": "COL17",
    "code": "COL",
    "num": 17,
    "name": "Falcao",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 237
  },
  {
    "id": "COL18",
    "code": "COL",
    "num": 18,
    "name": "Duvan Zapata",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 238
  },
  {
    "id": "COL19",
    "code": "COL",
    "num": 19,
    "name": "Radamel Falcao",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 239
  },
  {
    "id": "COL20",
    "code": "COL",
    "num": 20,
    "name": "Miguel Angel Borja",
    "foil": false,
    "special": false,
    "section": "COL",
    "albumPos": 240
  },
  {
    "id": "CPV1",
    "code": "CPV",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "CPV",
    "albumPos": 241
  },
  {
    "id": "CPV2",
    "code": "CPV",
    "num": 2,
    "name": "Vozinha",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 242
  },
  {
    "id": "CPV3",
    "code": "CPV",
    "num": 3,
    "name": "Stopira",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 243
  },
  {
    "id": "CPV4",
    "code": "CPV",
    "num": 4,
    "name": "Roberto Lopes",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 244
  },
  {
    "id": "CPV5",
    "code": "CPV",
    "num": 5,
    "name": "Steven Fortes",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 245
  },
  {
    "id": "CPV6",
    "code": "CPV",
    "num": 6,
    "name": "Diney",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 246
  },
  {
    "id": "CPV7",
    "code": "CPV",
    "num": 7,
    "name": "Jamiro Monteiro",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 247
  },
  {
    "id": "CPV8",
    "code": "CPV",
    "num": 8,
    "name": "Kenny Rocha",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 248
  },
  {
    "id": "CPV9",
    "code": "CPV",
    "num": 9,
    "name": "Ryan Mendes",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 249
  },
  {
    "id": "CPV10",
    "code": "CPV",
    "num": 10,
    "name": "Lisandro",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 250
  },
  {
    "id": "CPV11",
    "code": "CPV",
    "num": 11,
    "name": "Garry Rodrigues",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 251
  },
  {
    "id": "CPV12",
    "code": "CPV",
    "num": 12,
    "name": "Elvis Macedo",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 252
  },
  {
    "id": "CPV13",
    "code": "CPV",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 253
  },
  {
    "id": "CPV14",
    "code": "CPV",
    "num": 14,
    "name": "Julio Tavares",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 254
  },
  {
    "id": "CPV15",
    "code": "CPV",
    "num": 15,
    "name": "Ze Luis",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 255
  },
  {
    "id": "CPV16",
    "code": "CPV",
    "num": 16,
    "name": "Gilson Tavares",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 256
  },
  {
    "id": "CPV17",
    "code": "CPV",
    "num": 17,
    "name": "Bryan Teixeira",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 257
  },
  {
    "id": "CPV18",
    "code": "CPV",
    "num": 18,
    "name": "Willy Semedo",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 258
  },
  {
    "id": "CPV19",
    "code": "CPV",
    "num": 19,
    "name": "Vagner Dias",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 259
  },
  {
    "id": "CPV20",
    "code": "CPV",
    "num": 20,
    "name": "Patrick Andrade",
    "foil": false,
    "special": false,
    "section": "CPV",
    "albumPos": 260
  },
  {
    "id": "CRO1",
    "code": "CRO",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "CRO",
    "albumPos": 261
  },
  {
    "id": "CRO2",
    "code": "CRO",
    "num": 2,
    "name": "Dominik Livakovic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 262
  },
  {
    "id": "CRO3",
    "code": "CRO",
    "num": 3,
    "name": "Josip Juranovic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 263
  },
  {
    "id": "CRO4",
    "code": "CRO",
    "num": 4,
    "name": "Duje Caleta-Car",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 264
  },
  {
    "id": "CRO5",
    "code": "CRO",
    "num": 5,
    "name": "Josko Gvardiol",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 265
  },
  {
    "id": "CRO6",
    "code": "CRO",
    "num": 6,
    "name": "Borna Sosa",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 266
  },
  {
    "id": "CRO7",
    "code": "CRO",
    "num": 7,
    "name": "Marcelo Brozovic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 267
  },
  {
    "id": "CRO8",
    "code": "CRO",
    "num": 8,
    "name": "Mateo Kovacic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 268
  },
  {
    "id": "CRO9",
    "code": "CRO",
    "num": 9,
    "name": "Mario Pasalic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 269
  },
  {
    "id": "CRO10",
    "code": "CRO",
    "num": 10,
    "name": "Ivan Perisic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 270
  },
  {
    "id": "CRO11",
    "code": "CRO",
    "num": 11,
    "name": "Ante Rebic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 271
  },
  {
    "id": "CRO12",
    "code": "CRO",
    "num": 12,
    "name": "Nikola Vlasic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 272
  },
  {
    "id": "CRO13",
    "code": "CRO",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 273
  },
  {
    "id": "CRO14",
    "code": "CRO",
    "num": 14,
    "name": "Luka Sucic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 274
  },
  {
    "id": "CRO15",
    "code": "CRO",
    "num": 15,
    "name": "Petar Sucic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 275
  },
  {
    "id": "CRO16",
    "code": "CRO",
    "num": 16,
    "name": "Marko Pjaca",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 276
  },
  {
    "id": "CRO17",
    "code": "CRO",
    "num": 17,
    "name": "Luka Modric",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 277
  },
  {
    "id": "CRO18",
    "code": "CRO",
    "num": 18,
    "name": "Andrej Kramaric",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 278
  },
  {
    "id": "CRO19",
    "code": "CRO",
    "num": 19,
    "name": "Ante Budimir",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 279
  },
  {
    "id": "CRO20",
    "code": "CRO",
    "num": 20,
    "name": "Bruno Petkovic",
    "foil": false,
    "special": false,
    "section": "CRO",
    "albumPos": 280
  },
  {
    "id": "CUW1",
    "code": "CUW",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "CUW",
    "albumPos": 281
  },
  {
    "id": "CUW2",
    "code": "CUW",
    "num": 2,
    "name": "Eloy Room",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 282
  },
  {
    "id": "CUW3",
    "code": "CUW",
    "num": 3,
    "name": "Ethan Doesburg",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 283
  },
  {
    "id": "CUW4",
    "code": "CUW",
    "num": 4,
    "name": "Cuco Martina",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 284
  },
  {
    "id": "CUW5",
    "code": "CUW",
    "num": 5,
    "name": "Jurien Gaari",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 285
  },
  {
    "id": "CUW6",
    "code": "CUW",
    "num": 6,
    "name": "Leandro Bacuna",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 286
  },
  {
    "id": "CUW7",
    "code": "CUW",
    "num": 7,
    "name": "Brandley Kuwas",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 287
  },
  {
    "id": "CUW8",
    "code": "CUW",
    "num": 8,
    "name": "Gino van Kessel",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 288
  },
  {
    "id": "CUW9",
    "code": "CUW",
    "num": 9,
    "name": "Rajiv van La Parra",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 289
  },
  {
    "id": "CUW10",
    "code": "CUW",
    "num": 10,
    "name": "Rangelo Janga",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 290
  },
  {
    "id": "CUW11",
    "code": "CUW",
    "num": 11,
    "name": "Quevin Castro",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 291
  },
  {
    "id": "CUW12",
    "code": "CUW",
    "num": 12,
    "name": "Fernandinho",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 292
  },
  {
    "id": "CUW13",
    "code": "CUW",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 293
  },
  {
    "id": "CUW14",
    "code": "CUW",
    "num": 14,
    "name": "Myron Boadu",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 294
  },
  {
    "id": "CUW15",
    "code": "CUW",
    "num": 15,
    "name": "Giovani dos Santos",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 295
  },
  {
    "id": "CUW16",
    "code": "CUW",
    "num": 16,
    "name": "Curacao Player 14",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 296
  },
  {
    "id": "CUW17",
    "code": "CUW",
    "num": 17,
    "name": "Curacao Player 15",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 297
  },
  {
    "id": "CUW18",
    "code": "CUW",
    "num": 18,
    "name": "Curacao Player 16",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 298
  },
  {
    "id": "CUW19",
    "code": "CUW",
    "num": 19,
    "name": "Curacao Player 17",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 299
  },
  {
    "id": "CUW20",
    "code": "CUW",
    "num": 20,
    "name": "Curacao Player 18",
    "foil": false,
    "special": false,
    "section": "CUW",
    "albumPos": 300
  },
  {
    "id": "CZE1",
    "code": "CZE",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "CZE",
    "albumPos": 301
  },
  {
    "id": "CZE2",
    "code": "CZE",
    "num": 2,
    "name": "Jiri Pavlenka",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 302
  },
  {
    "id": "CZE3",
    "code": "CZE",
    "num": 3,
    "name": "Vladimir Coufal",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 303
  },
  {
    "id": "CZE4",
    "code": "CZE",
    "num": 4,
    "name": "Tomas Holes",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 304
  },
  {
    "id": "CZE5",
    "code": "CZE",
    "num": 5,
    "name": "Jakub Brabec",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 305
  },
  {
    "id": "CZE6",
    "code": "CZE",
    "num": 6,
    "name": "Jan Boril",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 306
  },
  {
    "id": "CZE7",
    "code": "CZE",
    "num": 7,
    "name": "Tomas Soucek",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 307
  },
  {
    "id": "CZE8",
    "code": "CZE",
    "num": 8,
    "name": "Alex Kral",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 308
  },
  {
    "id": "CZE9",
    "code": "CZE",
    "num": 9,
    "name": "Lukas Provod",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 309
  },
  {
    "id": "CZE10",
    "code": "CZE",
    "num": 10,
    "name": "Antonin Barak",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 310
  },
  {
    "id": "CZE11",
    "code": "CZE",
    "num": 11,
    "name": "Adam Hlozek",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 311
  },
  {
    "id": "CZE12",
    "code": "CZE",
    "num": 12,
    "name": "Ondrej Lingr",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 312
  },
  {
    "id": "CZE13",
    "code": "CZE",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 313
  },
  {
    "id": "CZE14",
    "code": "CZE",
    "num": 14,
    "name": "Ladislav Krejci",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 314
  },
  {
    "id": "CZE15",
    "code": "CZE",
    "num": 15,
    "name": "Vaclav Cerny",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 315
  },
  {
    "id": "CZE16",
    "code": "CZE",
    "num": 16,
    "name": "Mojmir Chytil",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 316
  },
  {
    "id": "CZE17",
    "code": "CZE",
    "num": 17,
    "name": "Patrik Schick",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 317
  },
  {
    "id": "CZE18",
    "code": "CZE",
    "num": 18,
    "name": "Adam Hlozek",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 318
  },
  {
    "id": "CZE19",
    "code": "CZE",
    "num": 19,
    "name": "Tomas Cvancara",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 319
  },
  {
    "id": "CZE20",
    "code": "CZE",
    "num": 20,
    "name": "Jan Kuchta",
    "foil": false,
    "special": false,
    "section": "CZE",
    "albumPos": 320
  },
  {
    "id": "ECU1",
    "code": "ECU",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "ECU",
    "albumPos": 321
  },
  {
    "id": "ECU2",
    "code": "ECU",
    "num": 2,
    "name": "Hernan Galindez",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 322
  },
  {
    "id": "ECU3",
    "code": "ECU",
    "num": 3,
    "name": "Angelo Preciado",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 323
  },
  {
    "id": "ECU4",
    "code": "ECU",
    "num": 4,
    "name": "Piero Hincapie",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 324
  },
  {
    "id": "ECU5",
    "code": "ECU",
    "num": 5,
    "name": "Felix Torres",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 325
  },
  {
    "id": "ECU6",
    "code": "ECU",
    "num": 6,
    "name": "Pervis Estupinan",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 326
  },
  {
    "id": "ECU7",
    "code": "ECU",
    "num": 7,
    "name": "Jose Cifuentes",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 327
  },
  {
    "id": "ECU8",
    "code": "ECU",
    "num": 8,
    "name": "Carlos Gruezo",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 328
  },
  {
    "id": "ECU9",
    "code": "ECU",
    "num": 9,
    "name": "Moises Caicedo",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 329
  },
  {
    "id": "ECU10",
    "code": "ECU",
    "num": 10,
    "name": "Jeremy Sarmiento",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 330
  },
  {
    "id": "ECU11",
    "code": "ECU",
    "num": 11,
    "name": "Michael Estrada",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 331
  },
  {
    "id": "ECU12",
    "code": "ECU",
    "num": 12,
    "name": "Gonzalo Plata",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 332
  },
  {
    "id": "ECU13",
    "code": "ECU",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 333
  },
  {
    "id": "ECU14",
    "code": "ECU",
    "num": 14,
    "name": "Enner Valencia",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 334
  },
  {
    "id": "ECU15",
    "code": "ECU",
    "num": 15,
    "name": "Djorkaeff Reasco",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 335
  },
  {
    "id": "ECU16",
    "code": "ECU",
    "num": 16,
    "name": "Kevin Rodriguez",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 336
  },
  {
    "id": "ECU17",
    "code": "ECU",
    "num": 17,
    "name": "Angel Mena",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 337
  },
  {
    "id": "ECU18",
    "code": "ECU",
    "num": 18,
    "name": "Ayrton Preciado",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 338
  },
  {
    "id": "ECU19",
    "code": "ECU",
    "num": 19,
    "name": "Jordan Rezabala",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 339
  },
  {
    "id": "ECU20",
    "code": "ECU",
    "num": 20,
    "name": "Alan Franco",
    "foil": false,
    "special": false,
    "section": "ECU",
    "albumPos": 340
  },
  {
    "id": "EGY1",
    "code": "EGY",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "EGY",
    "albumPos": 341
  },
  {
    "id": "EGY2",
    "code": "EGY",
    "num": 2,
    "name": "Mohamed El-Shenawy",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 342
  },
  {
    "id": "EGY3",
    "code": "EGY",
    "num": 3,
    "name": "Ahmed Hegazi",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 343
  },
  {
    "id": "EGY4",
    "code": "EGY",
    "num": 4,
    "name": "Ahmed Fatouh",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 344
  },
  {
    "id": "EGY5",
    "code": "EGY",
    "num": 5,
    "name": "Omar Gaber",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 345
  },
  {
    "id": "EGY6",
    "code": "EGY",
    "num": 6,
    "name": "Mahmoud Hamdy",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 346
  },
  {
    "id": "EGY7",
    "code": "EGY",
    "num": 7,
    "name": "Tarek Hamed",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 347
  },
  {
    "id": "EGY8",
    "code": "EGY",
    "num": 8,
    "name": "Mohamed Elneny",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 348
  },
  {
    "id": "EGY9",
    "code": "EGY",
    "num": 9,
    "name": "Amr El Sulaya",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 349
  },
  {
    "id": "EGY10",
    "code": "EGY",
    "num": 10,
    "name": "Mostafa Mohamed",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 350
  },
  {
    "id": "EGY11",
    "code": "EGY",
    "num": 11,
    "name": "Mahmoud Hassan",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 351
  },
  {
    "id": "EGY12",
    "code": "EGY",
    "num": 12,
    "name": "Mahmoud Trezeguet",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 352
  },
  {
    "id": "EGY13",
    "code": "EGY",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 353
  },
  {
    "id": "EGY14",
    "code": "EGY",
    "num": 14,
    "name": "Salah Mohamed",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 354
  },
  {
    "id": "EGY15",
    "code": "EGY",
    "num": 15,
    "name": "Omar Marmoush",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 355
  },
  {
    "id": "EGY16",
    "code": "EGY",
    "num": 16,
    "name": "Trézéguet",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 356
  },
  {
    "id": "EGY17",
    "code": "EGY",
    "num": 17,
    "name": "Mohamed Salah",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 357
  },
  {
    "id": "EGY18",
    "code": "EGY",
    "num": 18,
    "name": "Zizo",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 358
  },
  {
    "id": "EGY19",
    "code": "EGY",
    "num": 19,
    "name": "Ahmed Sayed Zizo",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 359
  },
  {
    "id": "EGY20",
    "code": "EGY",
    "num": 20,
    "name": "Ramadan Sobhi",
    "foil": false,
    "special": false,
    "section": "EGY",
    "albumPos": 360
  },
  {
    "id": "ENG1",
    "code": "ENG",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "ENG",
    "albumPos": 361
  },
  {
    "id": "ENG2",
    "code": "ENG",
    "num": 2,
    "name": "Jordan Pickford",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 362
  },
  {
    "id": "ENG3",
    "code": "ENG",
    "num": 3,
    "name": "Kyle Walker",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 363
  },
  {
    "id": "ENG4",
    "code": "ENG",
    "num": 4,
    "name": "John Stones",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 364
  },
  {
    "id": "ENG5",
    "code": "ENG",
    "num": 5,
    "name": "Marc Guehi",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 365
  },
  {
    "id": "ENG6",
    "code": "ENG",
    "num": 6,
    "name": "Luke Shaw",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 366
  },
  {
    "id": "ENG7",
    "code": "ENG",
    "num": 7,
    "name": "Declan Rice",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 367
  },
  {
    "id": "ENG8",
    "code": "ENG",
    "num": 8,
    "name": "Jude Bellingham",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 368
  },
  {
    "id": "ENG9",
    "code": "ENG",
    "num": 9,
    "name": "Phil Foden",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 369
  },
  {
    "id": "ENG10",
    "code": "ENG",
    "num": 10,
    "name": "Bukayo Saka",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 370
  },
  {
    "id": "ENG11",
    "code": "ENG",
    "num": 11,
    "name": "Marcus Rashford",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 371
  },
  {
    "id": "ENG12",
    "code": "ENG",
    "num": 12,
    "name": "Raheem Sterling",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 372
  },
  {
    "id": "ENG13",
    "code": "ENG",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 373
  },
  {
    "id": "ENG14",
    "code": "ENG",
    "num": 14,
    "name": "Cole Palmer",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 374
  },
  {
    "id": "ENG15",
    "code": "ENG",
    "num": 15,
    "name": "Anthony Gordon",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 375
  },
  {
    "id": "ENG16",
    "code": "ENG",
    "num": 16,
    "name": "Eberechi Eze",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 376
  },
  {
    "id": "ENG17",
    "code": "ENG",
    "num": 17,
    "name": "Harry Kane",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 377
  },
  {
    "id": "ENG18",
    "code": "ENG",
    "num": 18,
    "name": "Ollie Watkins",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 378
  },
  {
    "id": "ENG19",
    "code": "ENG",
    "num": 19,
    "name": "Jarrod Bowen",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 379
  },
  {
    "id": "ENG20",
    "code": "ENG",
    "num": 20,
    "name": "Ivan Toney",
    "foil": false,
    "special": false,
    "section": "ENG",
    "albumPos": 380
  },
  {
    "id": "ESP1",
    "code": "ESP",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "ESP",
    "albumPos": 381
  },
  {
    "id": "ESP2",
    "code": "ESP",
    "num": 2,
    "name": "Unai Simon",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 382
  },
  {
    "id": "ESP3",
    "code": "ESP",
    "num": 3,
    "name": "Dani Carvajal",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 383
  },
  {
    "id": "ESP4",
    "code": "ESP",
    "num": 4,
    "name": "Robin Le Normand",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 384
  },
  {
    "id": "ESP5",
    "code": "ESP",
    "num": 5,
    "name": "Aymeric Laporte",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 385
  },
  {
    "id": "ESP6",
    "code": "ESP",
    "num": 6,
    "name": "Alejandro Grimaldo",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 386
  },
  {
    "id": "ESP7",
    "code": "ESP",
    "num": 7,
    "name": "Rodri",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 387
  },
  {
    "id": "ESP8",
    "code": "ESP",
    "num": 8,
    "name": "Fabian Ruiz",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 388
  },
  {
    "id": "ESP9",
    "code": "ESP",
    "num": 9,
    "name": "Pedri",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 389
  },
  {
    "id": "ESP10",
    "code": "ESP",
    "num": 10,
    "name": "Lamine Yamal",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 390
  },
  {
    "id": "ESP11",
    "code": "ESP",
    "num": 11,
    "name": "Alvaro Morata",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 391
  },
  {
    "id": "ESP12",
    "code": "ESP",
    "num": 12,
    "name": "Ferran Torres",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 392
  },
  {
    "id": "ESP13",
    "code": "ESP",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 393
  },
  {
    "id": "ESP14",
    "code": "ESP",
    "num": 14,
    "name": "Dani Olmo",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 394
  },
  {
    "id": "ESP15",
    "code": "ESP",
    "num": 15,
    "name": "Nico Williams",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 395
  },
  {
    "id": "ESP16",
    "code": "ESP",
    "num": 16,
    "name": "Mikel Merino",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 396
  },
  {
    "id": "ESP17",
    "code": "ESP",
    "num": 17,
    "name": "Mikel Oyarzabal",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 397
  },
  {
    "id": "ESP18",
    "code": "ESP",
    "num": 18,
    "name": "Bryan Gil",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 398
  },
  {
    "id": "ESP19",
    "code": "ESP",
    "num": 19,
    "name": "Joselu",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 399
  },
  {
    "id": "ESP20",
    "code": "ESP",
    "num": 20,
    "name": "Yeremy Pino",
    "foil": false,
    "special": false,
    "section": "ESP",
    "albumPos": 400
  },
  {
    "id": "FRA1",
    "code": "FRA",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "FRA",
    "albumPos": 401
  },
  {
    "id": "FRA2",
    "code": "FRA",
    "num": 2,
    "name": "Mike Maignan",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 402
  },
  {
    "id": "FRA3",
    "code": "FRA",
    "num": 3,
    "name": "Benjamin Pavard",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 403
  },
  {
    "id": "FRA4",
    "code": "FRA",
    "num": 4,
    "name": "Dayot Upamecano",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 404
  },
  {
    "id": "FRA5",
    "code": "FRA",
    "num": 5,
    "name": "William Saliba",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 405
  },
  {
    "id": "FRA6",
    "code": "FRA",
    "num": 6,
    "name": "Theo Hernandez",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 406
  },
  {
    "id": "FRA7",
    "code": "FRA",
    "num": 7,
    "name": "Aurelien Tchouameni",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 407
  },
  {
    "id": "FRA8",
    "code": "FRA",
    "num": 8,
    "name": "Adrien Rabiot",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 408
  },
  {
    "id": "FRA9",
    "code": "FRA",
    "num": 9,
    "name": "Antoine Griezmann",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 409
  },
  {
    "id": "FRA10",
    "code": "FRA",
    "num": 10,
    "name": "Ousmane Dembele",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 410
  },
  {
    "id": "FRA11",
    "code": "FRA",
    "num": 11,
    "name": "Kylian Mbappe",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 411
  },
  {
    "id": "FRA12",
    "code": "FRA",
    "num": 12,
    "name": "Marcus Thuram",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 412
  },
  {
    "id": "FRA13",
    "code": "FRA",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 413
  },
  {
    "id": "FRA14",
    "code": "FRA",
    "num": 14,
    "name": "Eduardo Camavinga",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 414
  },
  {
    "id": "FRA15",
    "code": "FRA",
    "num": 15,
    "name": "Kingsley Coman",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 415
  },
  {
    "id": "FRA16",
    "code": "FRA",
    "num": 16,
    "name": "Youssouf Fofana",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 416
  },
  {
    "id": "FRA17",
    "code": "FRA",
    "num": 17,
    "name": "Olivier Giroud",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 417
  },
  {
    "id": "FRA18",
    "code": "FRA",
    "num": 18,
    "name": "Randal Kolo Muani",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 418
  },
  {
    "id": "FRA19",
    "code": "FRA",
    "num": 19,
    "name": "Bradley Barcola",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 419
  },
  {
    "id": "FRA20",
    "code": "FRA",
    "num": 20,
    "name": "Warren Zaire-Emery",
    "foil": false,
    "special": false,
    "section": "FRA",
    "albumPos": 420
  },
  {
    "id": "GER1",
    "code": "GER",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "GER",
    "albumPos": 421
  },
  {
    "id": "GER2",
    "code": "GER",
    "num": 2,
    "name": "Manuel Neuer",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 422
  },
  {
    "id": "GER3",
    "code": "GER",
    "num": 3,
    "name": "Joshua Kimmich",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 423
  },
  {
    "id": "GER4",
    "code": "GER",
    "num": 4,
    "name": "Antonio Rudiger",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 424
  },
  {
    "id": "GER5",
    "code": "GER",
    "num": 5,
    "name": "Jonathan Tah",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 425
  },
  {
    "id": "GER6",
    "code": "GER",
    "num": 6,
    "name": "David Raum",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 426
  },
  {
    "id": "GER7",
    "code": "GER",
    "num": 7,
    "name": "Leon Goretzka",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 427
  },
  {
    "id": "GER8",
    "code": "GER",
    "num": 8,
    "name": "Ilkay Gundogan",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 428
  },
  {
    "id": "GER9",
    "code": "GER",
    "num": 9,
    "name": "Toni Kroos",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 429
  },
  {
    "id": "GER10",
    "code": "GER",
    "num": 10,
    "name": "Florian Wirtz",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 430
  },
  {
    "id": "GER11",
    "code": "GER",
    "num": 11,
    "name": "Leroy Sane",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 431
  },
  {
    "id": "GER12",
    "code": "GER",
    "num": 12,
    "name": "Thomas Muller",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 432
  },
  {
    "id": "GER13",
    "code": "GER",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 433
  },
  {
    "id": "GER14",
    "code": "GER",
    "num": 14,
    "name": "Jamal Musiala",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 434
  },
  {
    "id": "GER15",
    "code": "GER",
    "num": 15,
    "name": "Kai Havertz",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 435
  },
  {
    "id": "GER16",
    "code": "GER",
    "num": 16,
    "name": "Jonas Hofmann",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 436
  },
  {
    "id": "GER17",
    "code": "GER",
    "num": 17,
    "name": "Niclas Fullkrug",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 437
  },
  {
    "id": "GER18",
    "code": "GER",
    "num": 18,
    "name": "Deniz Undav",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 438
  },
  {
    "id": "GER19",
    "code": "GER",
    "num": 19,
    "name": "Chris Fuhrich",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 439
  },
  {
    "id": "GER20",
    "code": "GER",
    "num": 20,
    "name": "Robert Andrich",
    "foil": false,
    "special": false,
    "section": "GER",
    "albumPos": 440
  },
  {
    "id": "GHA1",
    "code": "GHA",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "GHA",
    "albumPos": 441
  },
  {
    "id": "GHA2",
    "code": "GHA",
    "num": 2,
    "name": "Lawrence Ati-Zigi",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 442
  },
  {
    "id": "GHA3",
    "code": "GHA",
    "num": 3,
    "name": "Tariqe Fosu",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 443
  },
  {
    "id": "GHA4",
    "code": "GHA",
    "num": 4,
    "name": "Daniel Amartey",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 444
  },
  {
    "id": "GHA5",
    "code": "GHA",
    "num": 5,
    "name": "Alexander Djiku",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 445
  },
  {
    "id": "GHA6",
    "code": "GHA",
    "num": 6,
    "name": "Abdul Rahman Baba",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 446
  },
  {
    "id": "GHA7",
    "code": "GHA",
    "num": 7,
    "name": "Thomas Partey",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 447
  },
  {
    "id": "GHA8",
    "code": "GHA",
    "num": 8,
    "name": "Mohammed Kudus",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 448
  },
  {
    "id": "GHA9",
    "code": "GHA",
    "num": 9,
    "name": "Andre Ayew",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 449
  },
  {
    "id": "GHA10",
    "code": "GHA",
    "num": 10,
    "name": "Jordan Ayew",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 450
  },
  {
    "id": "GHA11",
    "code": "GHA",
    "num": 11,
    "name": "Inaki Williams",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 451
  },
  {
    "id": "GHA12",
    "code": "GHA",
    "num": 12,
    "name": "Osman Bukari",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 452
  },
  {
    "id": "GHA13",
    "code": "GHA",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 453
  },
  {
    "id": "GHA14",
    "code": "GHA",
    "num": 14,
    "name": "Antoine Semenyo",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 454
  },
  {
    "id": "GHA15",
    "code": "GHA",
    "num": 15,
    "name": "Kamaldeen Sulemana",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 455
  },
  {
    "id": "GHA16",
    "code": "GHA",
    "num": 16,
    "name": "Felix Afena-Gyan",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 456
  },
  {
    "id": "GHA17",
    "code": "GHA",
    "num": 17,
    "name": "Kwabena Owusu",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 457
  },
  {
    "id": "GHA18",
    "code": "GHA",
    "num": 18,
    "name": "Richmond Boakye",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 458
  },
  {
    "id": "GHA19",
    "code": "GHA",
    "num": 19,
    "name": "Joel Fameyeh",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 459
  },
  {
    "id": "GHA20",
    "code": "GHA",
    "num": 20,
    "name": "Caleb Ekuban",
    "foil": false,
    "special": false,
    "section": "GHA",
    "albumPos": 460
  },
  {
    "id": "HAI1",
    "code": "HAI",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "HAI",
    "albumPos": 461
  },
  {
    "id": "HAI2",
    "code": "HAI",
    "num": 2,
    "name": "Josue Duverger",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 462
  },
  {
    "id": "HAI3",
    "code": "HAI",
    "num": 3,
    "name": "Andrew Jean-Baptiste",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 463
  },
  {
    "id": "HAI4",
    "code": "HAI",
    "num": 4,
    "name": "Mechack Jerome",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 464
  },
  {
    "id": "HAI5",
    "code": "HAI",
    "num": 5,
    "name": "Nicolas Nkoulou",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 465
  },
  {
    "id": "HAI6",
    "code": "HAI",
    "num": 6,
    "name": "Duckens Nazon",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 466
  },
  {
    "id": "HAI7",
    "code": "HAI",
    "num": 7,
    "name": "Steeven Saba",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 467
  },
  {
    "id": "HAI8",
    "code": "HAI",
    "num": 8,
    "name": "Alex Apoua",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 468
  },
  {
    "id": "HAI9",
    "code": "HAI",
    "num": 9,
    "name": "Frantzdy Pierrot",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 469
  },
  {
    "id": "HAI10",
    "code": "HAI",
    "num": 10,
    "name": "Sem Saint-Hilaire",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 470
  },
  {
    "id": "HAI11",
    "code": "HAI",
    "num": 11,
    "name": "Nazon Duckens",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 471
  },
  {
    "id": "HAI12",
    "code": "HAI",
    "num": 12,
    "name": "Jeff Louis",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 472
  },
  {
    "id": "HAI13",
    "code": "HAI",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 473
  },
  {
    "id": "HAI14",
    "code": "HAI",
    "num": 14,
    "name": "Bedy Zidane",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 474
  },
  {
    "id": "HAI15",
    "code": "HAI",
    "num": 15,
    "name": "Derrick Etienne",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 475
  },
  {
    "id": "HAI16",
    "code": "HAI",
    "num": 16,
    "name": "Wilde-Donald Guerrier",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 476
  },
  {
    "id": "HAI17",
    "code": "HAI",
    "num": 17,
    "name": "Jhon Crespo",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 477
  },
  {
    "id": "HAI18",
    "code": "HAI",
    "num": 18,
    "name": "Kevin Lafrance",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 478
  },
  {
    "id": "HAI19",
    "code": "HAI",
    "num": 19,
    "name": "Herve Bazile",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 479
  },
  {
    "id": "HAI20",
    "code": "HAI",
    "num": 20,
    "name": "Mickael Moreau",
    "foil": false,
    "special": false,
    "section": "HAI",
    "albumPos": 480
  },
  {
    "id": "IRN1",
    "code": "IRN",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "IRN",
    "albumPos": 481
  },
  {
    "id": "IRN2",
    "code": "IRN",
    "num": 2,
    "name": "Alireza Beiranvand",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 482
  },
  {
    "id": "IRN3",
    "code": "IRN",
    "num": 3,
    "name": "Sadegh Moharrami",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 483
  },
  {
    "id": "IRN4",
    "code": "IRN",
    "num": 4,
    "name": "Morteza Pouraliganji",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 484
  },
  {
    "id": "IRN5",
    "code": "IRN",
    "num": 5,
    "name": "Majid Hosseini",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 485
  },
  {
    "id": "IRN6",
    "code": "IRN",
    "num": 6,
    "name": "Milad Mohammadi",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 486
  },
  {
    "id": "IRN7",
    "code": "IRN",
    "num": 7,
    "name": "Saeid Ezatolahi",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 487
  },
  {
    "id": "IRN8",
    "code": "IRN",
    "num": 8,
    "name": "Ali Karimi",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 488
  },
  {
    "id": "IRN9",
    "code": "IRN",
    "num": 9,
    "name": "Ahmad Noorollahi",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 489
  },
  {
    "id": "IRN10",
    "code": "IRN",
    "num": 10,
    "name": "Mehdi Torabi",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 490
  },
  {
    "id": "IRN11",
    "code": "IRN",
    "num": 11,
    "name": "Sardar Azmoun",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 491
  },
  {
    "id": "IRN12",
    "code": "IRN",
    "num": 12,
    "name": "Alireza Jahanbakhsh",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 492
  },
  {
    "id": "IRN13",
    "code": "IRN",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 493
  },
  {
    "id": "IRN14",
    "code": "IRN",
    "num": 14,
    "name": "Mehdi Ghayedi",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 494
  },
  {
    "id": "IRN15",
    "code": "IRN",
    "num": 15,
    "name": "Saman Ghoddos",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 495
  },
  {
    "id": "IRN16",
    "code": "IRN",
    "num": 16,
    "name": "Karim Ansarifard",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 496
  },
  {
    "id": "IRN17",
    "code": "IRN",
    "num": 17,
    "name": "Mehdi Taremi",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 497
  },
  {
    "id": "IRN18",
    "code": "IRN",
    "num": 18,
    "name": "Reza Ghoochannejhad",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 498
  },
  {
    "id": "IRN19",
    "code": "IRN",
    "num": 19,
    "name": "Allahyar Sayyadmanesh",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 499
  },
  {
    "id": "IRN20",
    "code": "IRN",
    "num": 20,
    "name": "Shayan Mosleh",
    "foil": false,
    "special": false,
    "section": "IRN",
    "albumPos": 500
  },
  {
    "id": "IRQ1",
    "code": "IRQ",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "IRQ",
    "albumPos": 501
  },
  {
    "id": "IRQ2",
    "code": "IRQ",
    "num": 2,
    "name": "Jalal Hassan",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 502
  },
  {
    "id": "IRQ3",
    "code": "IRQ",
    "num": 3,
    "name": "Ali Adnan",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 503
  },
  {
    "id": "IRQ4",
    "code": "IRQ",
    "num": 4,
    "name": "Ahmed Ibrahim",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 504
  },
  {
    "id": "IRQ5",
    "code": "IRQ",
    "num": 5,
    "name": "Mustafa Nadhim",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 505
  },
  {
    "id": "IRQ6",
    "code": "IRQ",
    "num": 6,
    "name": "Hussein Ali",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 506
  },
  {
    "id": "IRQ7",
    "code": "IRQ",
    "num": 7,
    "name": "Amjad Attwan",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 507
  },
  {
    "id": "IRQ8",
    "code": "IRQ",
    "num": 8,
    "name": "Bashar Resan",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 508
  },
  {
    "id": "IRQ9",
    "code": "IRQ",
    "num": 9,
    "name": "Osama Rashid",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 509
  },
  {
    "id": "IRQ10",
    "code": "IRQ",
    "num": 10,
    "name": "Alaa Abbas",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 510
  },
  {
    "id": "IRQ11",
    "code": "IRQ",
    "num": 11,
    "name": "Aymen Hussein",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 511
  },
  {
    "id": "IRQ12",
    "code": "IRQ",
    "num": 12,
    "name": "Mohanad Ali",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 512
  },
  {
    "id": "IRQ13",
    "code": "IRQ",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 513
  },
  {
    "id": "IRQ14",
    "code": "IRQ",
    "num": 14,
    "name": "Amir Al Ammari",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 514
  },
  {
    "id": "IRQ15",
    "code": "IRQ",
    "num": 15,
    "name": "Saad Natiq",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 515
  },
  {
    "id": "IRQ16",
    "code": "IRQ",
    "num": 16,
    "name": "Ibrahim Bayesh",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 516
  },
  {
    "id": "IRQ17",
    "code": "IRQ",
    "num": 17,
    "name": "Emad Mohammed",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 517
  },
  {
    "id": "IRQ18",
    "code": "IRQ",
    "num": 18,
    "name": "Hammadi Ahmed",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 518
  },
  {
    "id": "IRQ19",
    "code": "IRQ",
    "num": 19,
    "name": "Yousif Nasser",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 519
  },
  {
    "id": "IRQ20",
    "code": "IRQ",
    "num": 20,
    "name": "Ali Faez",
    "foil": false,
    "special": false,
    "section": "IRQ",
    "albumPos": 520
  },
  {
    "id": "JOR1",
    "code": "JOR",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "JOR",
    "albumPos": 521
  },
  {
    "id": "JOR2",
    "code": "JOR",
    "num": 2,
    "name": "Amer Shafi",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 522
  },
  {
    "id": "JOR3",
    "code": "JOR",
    "num": 3,
    "name": "Baha Faisal",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 523
  },
  {
    "id": "JOR4",
    "code": "JOR",
    "num": 4,
    "name": "Bachar Bihon",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 524
  },
  {
    "id": "JOR5",
    "code": "JOR",
    "num": 5,
    "name": "Mohammad Al Dmeiri",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 525
  },
  {
    "id": "JOR6",
    "code": "JOR",
    "num": 6,
    "name": "Abdullah Nasib",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 526
  },
  {
    "id": "JOR7",
    "code": "JOR",
    "num": 7,
    "name": "Yazan Al Arab",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 527
  },
  {
    "id": "JOR8",
    "code": "JOR",
    "num": 8,
    "name": "Nour Ali",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 528
  },
  {
    "id": "JOR9",
    "code": "JOR",
    "num": 9,
    "name": "Salih Altaamari",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 529
  },
  {
    "id": "JOR10",
    "code": "JOR",
    "num": 10,
    "name": "Ahmad Salah",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 530
  },
  {
    "id": "JOR11",
    "code": "JOR",
    "num": 11,
    "name": "Musa Al-Taamari",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 531
  },
  {
    "id": "JOR12",
    "code": "JOR",
    "num": 12,
    "name": "Yousef Al Rawabdeh",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 532
  },
  {
    "id": "JOR13",
    "code": "JOR",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 533
  },
  {
    "id": "JOR14",
    "code": "JOR",
    "num": 14,
    "name": "Hussein Ahmad",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 534
  },
  {
    "id": "JOR15",
    "code": "JOR",
    "num": 15,
    "name": "Amro Yagi",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 535
  },
  {
    "id": "JOR16",
    "code": "JOR",
    "num": 16,
    "name": "Mohammad Ababneh",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 536
  },
  {
    "id": "JOR17",
    "code": "JOR",
    "num": 17,
    "name": "Mousa Al Taamari",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 537
  },
  {
    "id": "JOR18",
    "code": "JOR",
    "num": 18,
    "name": "Khaled Dawoud",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 538
  },
  {
    "id": "JOR19",
    "code": "JOR",
    "num": 19,
    "name": "Omar Al Qaisi",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 539
  },
  {
    "id": "JOR20",
    "code": "JOR",
    "num": 20,
    "name": "Ayman Altaher",
    "foil": false,
    "special": false,
    "section": "JOR",
    "albumPos": 540
  },
  {
    "id": "JPN1",
    "code": "JPN",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "JPN",
    "albumPos": 541
  },
  {
    "id": "JPN2",
    "code": "JPN",
    "num": 2,
    "name": "Shuichi Gonda",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 542
  },
  {
    "id": "JPN3",
    "code": "JPN",
    "num": 3,
    "name": "Hiroki Sakai",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 543
  },
  {
    "id": "JPN4",
    "code": "JPN",
    "num": 4,
    "name": "Ko Itakura",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 544
  },
  {
    "id": "JPN5",
    "code": "JPN",
    "num": 5,
    "name": "Shogo Taniguchi",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 545
  },
  {
    "id": "JPN6",
    "code": "JPN",
    "num": 6,
    "name": "Yuto Nagatomo",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 546
  },
  {
    "id": "JPN7",
    "code": "JPN",
    "num": 7,
    "name": "Gaku Shibasaki",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 547
  },
  {
    "id": "JPN8",
    "code": "JPN",
    "num": 8,
    "name": "Wataru Endo",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 548
  },
  {
    "id": "JPN9",
    "code": "JPN",
    "num": 9,
    "name": "Hidemasa Morita",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 549
  },
  {
    "id": "JPN10",
    "code": "JPN",
    "num": 10,
    "name": "Junya Ito",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 550
  },
  {
    "id": "JPN11",
    "code": "JPN",
    "num": 11,
    "name": "Daichi Kamada",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 551
  },
  {
    "id": "JPN12",
    "code": "JPN",
    "num": 12,
    "name": "Takumi Minamino",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 552
  },
  {
    "id": "JPN13",
    "code": "JPN",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 553
  },
  {
    "id": "JPN14",
    "code": "JPN",
    "num": 14,
    "name": "Kaoru Mitoma",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 554
  },
  {
    "id": "JPN15",
    "code": "JPN",
    "num": 15,
    "name": "Ritsu Doan",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 555
  },
  {
    "id": "JPN16",
    "code": "JPN",
    "num": 16,
    "name": "Ayase Ueda",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 556
  },
  {
    "id": "JPN17",
    "code": "JPN",
    "num": 17,
    "name": "Sho Ito",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 557
  },
  {
    "id": "JPN18",
    "code": "JPN",
    "num": 18,
    "name": "Takefusa Kubo",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 558
  },
  {
    "id": "JPN19",
    "code": "JPN",
    "num": 19,
    "name": "Keito Nakamura",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 559
  },
  {
    "id": "JPN20",
    "code": "JPN",
    "num": 20,
    "name": "Yuya Osako",
    "foil": false,
    "special": false,
    "section": "JPN",
    "albumPos": 560
  },
  {
    "id": "KOR1",
    "code": "KOR",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "KOR",
    "albumPos": 561
  },
  {
    "id": "KOR2",
    "code": "KOR",
    "num": 2,
    "name": "Kim Seung-Gyu",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 562
  },
  {
    "id": "KOR3",
    "code": "KOR",
    "num": 3,
    "name": "Kim Moon-Hwan",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 563
  },
  {
    "id": "KOR4",
    "code": "KOR",
    "num": 4,
    "name": "Kim Min-Jae",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 564
  },
  {
    "id": "KOR5",
    "code": "KOR",
    "num": 5,
    "name": "Kwon Kyung-Won",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 565
  },
  {
    "id": "KOR6",
    "code": "KOR",
    "num": 6,
    "name": "Kim Jin-Su",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 566
  },
  {
    "id": "KOR7",
    "code": "KOR",
    "num": 7,
    "name": "Hwang In-Beom",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 567
  },
  {
    "id": "KOR8",
    "code": "KOR",
    "num": 8,
    "name": "Jung Woo-Young",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 568
  },
  {
    "id": "KOR9",
    "code": "KOR",
    "num": 9,
    "name": "Lee Jae-Sung",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 569
  },
  {
    "id": "KOR10",
    "code": "KOR",
    "num": 10,
    "name": "Hwang Hee-Chan",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 570
  },
  {
    "id": "KOR11",
    "code": "KOR",
    "num": 11,
    "name": "Son Heung-Min",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 571
  },
  {
    "id": "KOR12",
    "code": "KOR",
    "num": 12,
    "name": "Na Sang-Ho",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 572
  },
  {
    "id": "KOR13",
    "code": "KOR",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 573
  },
  {
    "id": "KOR14",
    "code": "KOR",
    "num": 14,
    "name": "Lee Kang-In",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 574
  },
  {
    "id": "KOR15",
    "code": "KOR",
    "num": 15,
    "name": "Cho Gue-Sung",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 575
  },
  {
    "id": "KOR16",
    "code": "KOR",
    "num": 16,
    "name": "Seol Young-Woo",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 576
  },
  {
    "id": "KOR17",
    "code": "KOR",
    "num": 17,
    "name": "Hwang Ui-Jo",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 577
  },
  {
    "id": "KOR18",
    "code": "KOR",
    "num": 18,
    "name": "Oh Hyun-Gyu",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 578
  },
  {
    "id": "KOR19",
    "code": "KOR",
    "num": 19,
    "name": "Jung Sang-Bin",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 579
  },
  {
    "id": "KOR20",
    "code": "KOR",
    "num": 20,
    "name": "Um Won-Sang",
    "foil": false,
    "special": false,
    "section": "KOR",
    "albumPos": 580
  },
  {
    "id": "KSA1",
    "code": "KSA",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "KSA",
    "albumPos": 581
  },
  {
    "id": "KSA2",
    "code": "KSA",
    "num": 2,
    "name": "Mohammed Al-Owais",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 582
  },
  {
    "id": "KSA3",
    "code": "KSA",
    "num": 3,
    "name": "Sultan Al-Ghanam",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 583
  },
  {
    "id": "KSA4",
    "code": "KSA",
    "num": 4,
    "name": "Ali Al-Bulaihi",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 584
  },
  {
    "id": "KSA5",
    "code": "KSA",
    "num": 5,
    "name": "Hassan Tambakti",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 585
  },
  {
    "id": "KSA6",
    "code": "KSA",
    "num": 6,
    "name": "Yasser Al-Shahrani",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 586
  },
  {
    "id": "KSA7",
    "code": "KSA",
    "num": 7,
    "name": "Riyadh Sharahili",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 587
  },
  {
    "id": "KSA8",
    "code": "KSA",
    "num": 8,
    "name": "Sami Al-Naji",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 588
  },
  {
    "id": "KSA9",
    "code": "KSA",
    "num": 9,
    "name": "Mohammed Kanno",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 589
  },
  {
    "id": "KSA10",
    "code": "KSA",
    "num": 10,
    "name": "Saleh Al-Shehri",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 590
  },
  {
    "id": "KSA11",
    "code": "KSA",
    "num": 11,
    "name": "Salem Al-Dawsari",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 591
  },
  {
    "id": "KSA12",
    "code": "KSA",
    "num": 12,
    "name": "Firas Al-Buraikan",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 592
  },
  {
    "id": "KSA13",
    "code": "KSA",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 593
  },
  {
    "id": "KSA14",
    "code": "KSA",
    "num": 14,
    "name": "Ali Al-Hassan",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 594
  },
  {
    "id": "KSA15",
    "code": "KSA",
    "num": 15,
    "name": "Hattan Bahebri",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 595
  },
  {
    "id": "KSA16",
    "code": "KSA",
    "num": 16,
    "name": "Nasser Al-Dawsari",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 596
  },
  {
    "id": "KSA17",
    "code": "KSA",
    "num": 17,
    "name": "Abdullah Al-Hamdan",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 597
  },
  {
    "id": "KSA18",
    "code": "KSA",
    "num": 18,
    "name": "Mishari Al-Harbi",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 598
  },
  {
    "id": "KSA19",
    "code": "KSA",
    "num": 19,
    "name": "Fahad Al-Muwallad",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 599
  },
  {
    "id": "KSA20",
    "code": "KSA",
    "num": 20,
    "name": "Muhannad Al-Shanqeeti",
    "foil": false,
    "special": false,
    "section": "KSA",
    "albumPos": 600
  },
  {
    "id": "MAR1",
    "code": "MAR",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "MAR",
    "albumPos": 601
  },
  {
    "id": "MAR2",
    "code": "MAR",
    "num": 2,
    "name": "Yassine Bounou",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 602
  },
  {
    "id": "MAR3",
    "code": "MAR",
    "num": 3,
    "name": "Achraf Hakimi",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 603
  },
  {
    "id": "MAR4",
    "code": "MAR",
    "num": 4,
    "name": "Nayef Aguerd",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 604
  },
  {
    "id": "MAR5",
    "code": "MAR",
    "num": 5,
    "name": "Romain Saiss",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 605
  },
  {
    "id": "MAR6",
    "code": "MAR",
    "num": 6,
    "name": "Noussair Mazraoui",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 606
  },
  {
    "id": "MAR7",
    "code": "MAR",
    "num": 7,
    "name": "Azzedine Ounahi",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 607
  },
  {
    "id": "MAR8",
    "code": "MAR",
    "num": 8,
    "name": "Sofyan Amrabat",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 608
  },
  {
    "id": "MAR9",
    "code": "MAR",
    "num": 9,
    "name": "Selim Amallah",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 609
  },
  {
    "id": "MAR10",
    "code": "MAR",
    "num": 10,
    "name": "Hakim Ziyech",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 610
  },
  {
    "id": "MAR11",
    "code": "MAR",
    "num": 11,
    "name": "Youssef En-Nesyri",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 611
  },
  {
    "id": "MAR12",
    "code": "MAR",
    "num": 12,
    "name": "Abde Ezzalzouli",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 612
  },
  {
    "id": "MAR13",
    "code": "MAR",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 613
  },
  {
    "id": "MAR14",
    "code": "MAR",
    "num": 14,
    "name": "Ilias Chair",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 614
  },
  {
    "id": "MAR15",
    "code": "MAR",
    "num": 15,
    "name": "Abdessamad Ezzalzouli",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 615
  },
  {
    "id": "MAR16",
    "code": "MAR",
    "num": 16,
    "name": "Anass Zaroury",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 616
  },
  {
    "id": "MAR17",
    "code": "MAR",
    "num": 17,
    "name": "Munir El Haddadi",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 617
  },
  {
    "id": "MAR18",
    "code": "MAR",
    "num": 18,
    "name": "Soufiane Rahimi",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 618
  },
  {
    "id": "MAR19",
    "code": "MAR",
    "num": 19,
    "name": "Ayoub El Kaabi",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 619
  },
  {
    "id": "MAR20",
    "code": "MAR",
    "num": 20,
    "name": "Zakaria Aboukhlal",
    "foil": false,
    "special": false,
    "section": "MAR",
    "albumPos": 620
  },
  {
    "id": "MEX1",
    "code": "MEX",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "MEX",
    "albumPos": 621
  },
  {
    "id": "MEX2",
    "code": "MEX",
    "num": 2,
    "name": "Guillermo Ochoa",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 622
  },
  {
    "id": "MEX3",
    "code": "MEX",
    "num": 3,
    "name": "Jorge Sanchez",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 623
  },
  {
    "id": "MEX4",
    "code": "MEX",
    "num": 4,
    "name": "Johan Vasquez",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 624
  },
  {
    "id": "MEX5",
    "code": "MEX",
    "num": 5,
    "name": "Cesar Montes",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 625
  },
  {
    "id": "MEX6",
    "code": "MEX",
    "num": 6,
    "name": "Jesus Gallardo",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 626
  },
  {
    "id": "MEX7",
    "code": "MEX",
    "num": 7,
    "name": "Edson Alvarez",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 627
  },
  {
    "id": "MEX8",
    "code": "MEX",
    "num": 8,
    "name": "Andres Guardado",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 628
  },
  {
    "id": "MEX9",
    "code": "MEX",
    "num": 9,
    "name": "Hector Herrera",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 629
  },
  {
    "id": "MEX10",
    "code": "MEX",
    "num": 10,
    "name": "Alexis Vega",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 630
  },
  {
    "id": "MEX11",
    "code": "MEX",
    "num": 11,
    "name": "Hirving Lozano",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 631
  },
  {
    "id": "MEX12",
    "code": "MEX",
    "num": 12,
    "name": "Henry Martin",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 632
  },
  {
    "id": "MEX13",
    "code": "MEX",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 633
  },
  {
    "id": "MEX14",
    "code": "MEX",
    "num": 14,
    "name": "Santiago Gimenez",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 634
  },
  {
    "id": "MEX15",
    "code": "MEX",
    "num": 15,
    "name": "Luis Romo",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 635
  },
  {
    "id": "MEX16",
    "code": "MEX",
    "num": 16,
    "name": "Orbelin Pineda",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 636
  },
  {
    "id": "MEX17",
    "code": "MEX",
    "num": 17,
    "name": "Raul Jimenez",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 637
  },
  {
    "id": "MEX18",
    "code": "MEX",
    "num": 18,
    "name": "Roberto Alvarado",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 638
  },
  {
    "id": "MEX19",
    "code": "MEX",
    "num": 19,
    "name": "Uriel Antuna",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 639
  },
  {
    "id": "MEX20",
    "code": "MEX",
    "num": 20,
    "name": "Rogelio Funes Mori",
    "foil": false,
    "special": false,
    "section": "MEX",
    "albumPos": 640
  },
  {
    "id": "NED1",
    "code": "NED",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "NED",
    "albumPos": 641
  },
  {
    "id": "NED2",
    "code": "NED",
    "num": 2,
    "name": "Bart Verbruggen",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 642
  },
  {
    "id": "NED3",
    "code": "NED",
    "num": 3,
    "name": "Denzel Dumfries",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 643
  },
  {
    "id": "NED4",
    "code": "NED",
    "num": 4,
    "name": "Virgil van Dijk",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 644
  },
  {
    "id": "NED5",
    "code": "NED",
    "num": 5,
    "name": "Stefan de Vrij",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 645
  },
  {
    "id": "NED6",
    "code": "NED",
    "num": 6,
    "name": "Nathan Ake",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 646
  },
  {
    "id": "NED7",
    "code": "NED",
    "num": 7,
    "name": "Frenkie de Jong",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 647
  },
  {
    "id": "NED8",
    "code": "NED",
    "num": 8,
    "name": "Teun Koopmeiners",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 648
  },
  {
    "id": "NED9",
    "code": "NED",
    "num": 9,
    "name": "Tijjani Reijnders",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 649
  },
  {
    "id": "NED10",
    "code": "NED",
    "num": 10,
    "name": "Donyell Malen",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 650
  },
  {
    "id": "NED11",
    "code": "NED",
    "num": 11,
    "name": "Memphis Depay",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 651
  },
  {
    "id": "NED12",
    "code": "NED",
    "num": 12,
    "name": "Xavi Simons",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 652
  },
  {
    "id": "NED13",
    "code": "NED",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 653
  },
  {
    "id": "NED14",
    "code": "NED",
    "num": 14,
    "name": "Cody Gakpo",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 654
  },
  {
    "id": "NED15",
    "code": "NED",
    "num": 15,
    "name": "Wout Weghorst",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 655
  },
  {
    "id": "NED16",
    "code": "NED",
    "num": 16,
    "name": "Quinten Timber",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 656
  },
  {
    "id": "NED17",
    "code": "NED",
    "num": 17,
    "name": "Stefan Bergwijn",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 657
  },
  {
    "id": "NED18",
    "code": "NED",
    "num": 18,
    "name": "Ryan Gravenberch",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 658
  },
  {
    "id": "NED19",
    "code": "NED",
    "num": 19,
    "name": "Brian Brobbey",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 659
  },
  {
    "id": "NED20",
    "code": "NED",
    "num": 20,
    "name": "Jeremie Frimpong",
    "foil": false,
    "special": false,
    "section": "NED",
    "albumPos": 660
  },
  {
    "id": "NOR1",
    "code": "NOR",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "NOR",
    "albumPos": 661
  },
  {
    "id": "NOR2",
    "code": "NOR",
    "num": 2,
    "name": "Orjan Nyland",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 662
  },
  {
    "id": "NOR3",
    "code": "NOR",
    "num": 3,
    "name": "Kristoffer Ajer",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 663
  },
  {
    "id": "NOR4",
    "code": "NOR",
    "num": 4,
    "name": "Andreas Christensen",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 664
  },
  {
    "id": "NOR5",
    "code": "NOR",
    "num": 5,
    "name": "Leo Ostigard",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 665
  },
  {
    "id": "NOR6",
    "code": "NOR",
    "num": 6,
    "name": "Birger Meling",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 666
  },
  {
    "id": "NOR7",
    "code": "NOR",
    "num": 7,
    "name": "Martin Odegaard",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 667
  },
  {
    "id": "NOR8",
    "code": "NOR",
    "num": 8,
    "name": "Sander Berge",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 668
  },
  {
    "id": "NOR9",
    "code": "NOR",
    "num": 9,
    "name": "Fredrik Aursnes",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 669
  },
  {
    "id": "NOR10",
    "code": "NOR",
    "num": 10,
    "name": "Mohamed Elyounoussi",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 670
  },
  {
    "id": "NOR11",
    "code": "NOR",
    "num": 11,
    "name": "Alexander Sorloth",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 671
  },
  {
    "id": "NOR12",
    "code": "NOR",
    "num": 12,
    "name": "Erling Haaland",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 672
  },
  {
    "id": "NOR13",
    "code": "NOR",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 673
  },
  {
    "id": "NOR14",
    "code": "NOR",
    "num": 14,
    "name": "Antonio Nusa",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 674
  },
  {
    "id": "NOR15",
    "code": "NOR",
    "num": 15,
    "name": "Mathias Normann",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 675
  },
  {
    "id": "NOR16",
    "code": "NOR",
    "num": 16,
    "name": "Jens Petter Hauge",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 676
  },
  {
    "id": "NOR17",
    "code": "NOR",
    "num": 17,
    "name": "Joshua King",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 677
  },
  {
    "id": "NOR18",
    "code": "NOR",
    "num": 18,
    "name": "Ohi Omoijuanfo",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 678
  },
  {
    "id": "NOR19",
    "code": "NOR",
    "num": 19,
    "name": "Havard Nielsen",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 679
  },
  {
    "id": "NOR20",
    "code": "NOR",
    "num": 20,
    "name": "Kristian Thorstvedt",
    "foil": false,
    "special": false,
    "section": "NOR",
    "albumPos": 680
  },
  {
    "id": "NZL1",
    "code": "NZL",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "NZL",
    "albumPos": 681
  },
  {
    "id": "NZL2",
    "code": "NZL",
    "num": 2,
    "name": "Stefan Marinovic",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 682
  },
  {
    "id": "NZL3",
    "code": "NZL",
    "num": 3,
    "name": "Storm Roux",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 683
  },
  {
    "id": "NZL4",
    "code": "NZL",
    "num": 4,
    "name": "Winston Reid",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 684
  },
  {
    "id": "NZL5",
    "code": "NZL",
    "num": 5,
    "name": "Michael Boxall",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 685
  },
  {
    "id": "NZL6",
    "code": "NZL",
    "num": 6,
    "name": "Liberato Cacace",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 686
  },
  {
    "id": "NZL7",
    "code": "NZL",
    "num": 7,
    "name": "Ryan Thomas",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 687
  },
  {
    "id": "NZL8",
    "code": "NZL",
    "num": 8,
    "name": "Clayton Lewis",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 688
  },
  {
    "id": "NZL9",
    "code": "NZL",
    "num": 9,
    "name": "Sarpreet Singh",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 689
  },
  {
    "id": "NZL10",
    "code": "NZL",
    "num": 10,
    "name": "Alex Greive",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 690
  },
  {
    "id": "NZL11",
    "code": "NZL",
    "num": 11,
    "name": "Chris Wood",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 691
  },
  {
    "id": "NZL12",
    "code": "NZL",
    "num": 12,
    "name": "Joe Bell",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 692
  },
  {
    "id": "NZL13",
    "code": "NZL",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 693
  },
  {
    "id": "NZL14",
    "code": "NZL",
    "num": 14,
    "name": "Matthew Garbett",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 694
  },
  {
    "id": "NZL15",
    "code": "NZL",
    "num": 15,
    "name": "Elijah Just",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 695
  },
  {
    "id": "NZL16",
    "code": "NZL",
    "num": 16,
    "name": "Kosta Barbarouses",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 696
  },
  {
    "id": "NZL17",
    "code": "NZL",
    "num": 17,
    "name": "Micah Lea'alafa",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 697
  },
  {
    "id": "NZL18",
    "code": "NZL",
    "num": 18,
    "name": "Dane Ingham",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 698
  },
  {
    "id": "NZL19",
    "code": "NZL",
    "num": 19,
    "name": "Marko Stamenic",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 699
  },
  {
    "id": "NZL20",
    "code": "NZL",
    "num": 20,
    "name": "Ben Old",
    "foil": false,
    "special": false,
    "section": "NZL",
    "albumPos": 700
  },
  {
    "id": "PAN1",
    "code": "PAN",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "PAN",
    "albumPos": 701
  },
  {
    "id": "PAN2",
    "code": "PAN",
    "num": 2,
    "name": "Luis Mejia",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 702
  },
  {
    "id": "PAN3",
    "code": "PAN",
    "num": 3,
    "name": "Michael Murillo",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 703
  },
  {
    "id": "PAN4",
    "code": "PAN",
    "num": 4,
    "name": "Eric Davis",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 704
  },
  {
    "id": "PAN5",
    "code": "PAN",
    "num": 5,
    "name": "Harold Cummings",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 705
  },
  {
    "id": "PAN6",
    "code": "PAN",
    "num": 6,
    "name": "Edgardo Farietta",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 706
  },
  {
    "id": "PAN7",
    "code": "PAN",
    "num": 7,
    "name": "Jose Luis Rodriguez",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 707
  },
  {
    "id": "PAN8",
    "code": "PAN",
    "num": 8,
    "name": "Anibal Godoy",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 708
  },
  {
    "id": "PAN9",
    "code": "PAN",
    "num": 9,
    "name": "Adalberto Carrasquilla",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 709
  },
  {
    "id": "PAN10",
    "code": "PAN",
    "num": 10,
    "name": "Rolando Blackburn",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 710
  },
  {
    "id": "PAN11",
    "code": "PAN",
    "num": 11,
    "name": "Ismael Diaz",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 711
  },
  {
    "id": "PAN12",
    "code": "PAN",
    "num": 12,
    "name": "Cecilio Waterman",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 712
  },
  {
    "id": "PAN13",
    "code": "PAN",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 713
  },
  {
    "id": "PAN14",
    "code": "PAN",
    "num": 14,
    "name": "Armando Cooper",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 714
  },
  {
    "id": "PAN15",
    "code": "PAN",
    "num": 15,
    "name": "Gabriel Torres",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 715
  },
  {
    "id": "PAN16",
    "code": "PAN",
    "num": 16,
    "name": "Abdiel Ayarza",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 716
  },
  {
    "id": "PAN17",
    "code": "PAN",
    "num": 17,
    "name": "Eduardo Del Pino",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 717
  },
  {
    "id": "PAN18",
    "code": "PAN",
    "num": 18,
    "name": "Jose Fajardo",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 718
  },
  {
    "id": "PAN19",
    "code": "PAN",
    "num": 19,
    "name": "Jovanny Ramos",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 719
  },
  {
    "id": "PAN20",
    "code": "PAN",
    "num": 20,
    "name": "Alberto Quintero",
    "foil": false,
    "special": false,
    "section": "PAN",
    "albumPos": 720
  },
  {
    "id": "PAR1",
    "code": "PAR",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "PAR",
    "albumPos": 721
  },
  {
    "id": "PAR2",
    "code": "PAR",
    "num": 2,
    "name": "Antony Silva",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 722
  },
  {
    "id": "PAR3",
    "code": "PAR",
    "num": 3,
    "name": "Robert Rojas",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 723
  },
  {
    "id": "PAR4",
    "code": "PAR",
    "num": 4,
    "name": "Junior Alonso",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 724
  },
  {
    "id": "PAR5",
    "code": "PAR",
    "num": 5,
    "name": "Santiago Caceres",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 725
  },
  {
    "id": "PAR6",
    "code": "PAR",
    "num": 6,
    "name": "Fabian Balbuena",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 726
  },
  {
    "id": "PAR7",
    "code": "PAR",
    "num": 7,
    "name": "Miguel Almiron",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 727
  },
  {
    "id": "PAR8",
    "code": "PAR",
    "num": 8,
    "name": "Mathias Villasanti",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 728
  },
  {
    "id": "PAR9",
    "code": "PAR",
    "num": 9,
    "name": "Richard Sanchez",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 729
  },
  {
    "id": "PAR10",
    "code": "PAR",
    "num": 10,
    "name": "Alejandro Romero Gamarra",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 730
  },
  {
    "id": "PAR11",
    "code": "PAR",
    "num": 11,
    "name": "Antonio Sanabria",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 731
  },
  {
    "id": "PAR12",
    "code": "PAR",
    "num": 12,
    "name": "Alberto Espinola",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 732
  },
  {
    "id": "PAR13",
    "code": "PAR",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 733
  },
  {
    "id": "PAR14",
    "code": "PAR",
    "num": 14,
    "name": "Julio Enciso",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 734
  },
  {
    "id": "PAR15",
    "code": "PAR",
    "num": 15,
    "name": "Kaku",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 735
  },
  {
    "id": "PAR16",
    "code": "PAR",
    "num": 16,
    "name": "Carlos Gonzalez",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 736
  },
  {
    "id": "PAR17",
    "code": "PAR",
    "num": 17,
    "name": "Gustavo Gomez",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 737
  },
  {
    "id": "PAR18",
    "code": "PAR",
    "num": 18,
    "name": "Roque Santa Cruz",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 738
  },
  {
    "id": "PAR19",
    "code": "PAR",
    "num": 19,
    "name": "Derlis Gonzalez",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 739
  },
  {
    "id": "PAR20",
    "code": "PAR",
    "num": 20,
    "name": "Oscar Romero",
    "foil": false,
    "special": false,
    "section": "PAR",
    "albumPos": 740
  },
  {
    "id": "POR1",
    "code": "POR",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "POR",
    "albumPos": 741
  },
  {
    "id": "POR2",
    "code": "POR",
    "num": 2,
    "name": "Diogo Costa",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 742
  },
  {
    "id": "POR3",
    "code": "POR",
    "num": 3,
    "name": "Joao Cancelo",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 743
  },
  {
    "id": "POR4",
    "code": "POR",
    "num": 4,
    "name": "Pepe",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 744
  },
  {
    "id": "POR5",
    "code": "POR",
    "num": 5,
    "name": "Ruben Dias",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 745
  },
  {
    "id": "POR6",
    "code": "POR",
    "num": 6,
    "name": "Nuno Mendes",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 746
  },
  {
    "id": "POR7",
    "code": "POR",
    "num": 7,
    "name": "Joao Palhinha",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 747
  },
  {
    "id": "POR8",
    "code": "POR",
    "num": 8,
    "name": "Vitinha",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 748
  },
  {
    "id": "POR9",
    "code": "POR",
    "num": 9,
    "name": "Bruno Fernandes",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 749
  },
  {
    "id": "POR10",
    "code": "POR",
    "num": 10,
    "name": "Bernardo Silva",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 750
  },
  {
    "id": "POR11",
    "code": "POR",
    "num": 11,
    "name": "Cristiano Ronaldo",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 751
  },
  {
    "id": "POR12",
    "code": "POR",
    "num": 12,
    "name": "Rafael Leao",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 752
  },
  {
    "id": "POR13",
    "code": "POR",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 753
  },
  {
    "id": "POR14",
    "code": "POR",
    "num": 14,
    "name": "Diogo Jota",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 754
  },
  {
    "id": "POR15",
    "code": "POR",
    "num": 15,
    "name": "Joao Felix",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 755
  },
  {
    "id": "POR16",
    "code": "POR",
    "num": 16,
    "name": "Goncalo Ramos",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 756
  },
  {
    "id": "POR17",
    "code": "POR",
    "num": 17,
    "name": "Pedro Neto",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 757
  },
  {
    "id": "POR18",
    "code": "POR",
    "num": 18,
    "name": "Francisco Conceicao",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 758
  },
  {
    "id": "POR19",
    "code": "POR",
    "num": 19,
    "name": "Joao Neves",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 759
  },
  {
    "id": "POR20",
    "code": "POR",
    "num": 20,
    "name": "Joao Moutinho",
    "foil": false,
    "special": false,
    "section": "POR",
    "albumPos": 760
  },
  {
    "id": "QAT1",
    "code": "QAT",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "QAT",
    "albumPos": 761
  },
  {
    "id": "QAT2",
    "code": "QAT",
    "num": 2,
    "name": "Meshaal Barsham",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 762
  },
  {
    "id": "QAT3",
    "code": "QAT",
    "num": 3,
    "name": "Pedro Miguel",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 763
  },
  {
    "id": "QAT4",
    "code": "QAT",
    "num": 4,
    "name": "Bassam Al-Rawi",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 764
  },
  {
    "id": "QAT5",
    "code": "QAT",
    "num": 5,
    "name": "Boualem Khoukhi",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 765
  },
  {
    "id": "QAT6",
    "code": "QAT",
    "num": 6,
    "name": "Homam Ahmed",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 766
  },
  {
    "id": "QAT7",
    "code": "QAT",
    "num": 7,
    "name": "Karim Boudiaf",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 767
  },
  {
    "id": "QAT8",
    "code": "QAT",
    "num": 8,
    "name": "Abdulaziz Hatem",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 768
  },
  {
    "id": "QAT9",
    "code": "QAT",
    "num": 9,
    "name": "Hassan Al-Haydos",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 769
  },
  {
    "id": "QAT10",
    "code": "QAT",
    "num": 10,
    "name": "Akram Afif",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 770
  },
  {
    "id": "QAT11",
    "code": "QAT",
    "num": 11,
    "name": "Almoez Ali",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 771
  },
  {
    "id": "QAT12",
    "code": "QAT",
    "num": 12,
    "name": "Abdulkarim Hassan",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 772
  },
  {
    "id": "QAT13",
    "code": "QAT",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 773
  },
  {
    "id": "QAT14",
    "code": "QAT",
    "num": 14,
    "name": "Mohammed Muntari",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 774
  },
  {
    "id": "QAT15",
    "code": "QAT",
    "num": 15,
    "name": "Yusuf Abdurisag",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 775
  },
  {
    "id": "QAT16",
    "code": "QAT",
    "num": 16,
    "name": "Ahmed Alaaeldin",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 776
  },
  {
    "id": "QAT17",
    "code": "QAT",
    "num": 17,
    "name": "Assim Madibo",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 777
  },
  {
    "id": "QAT18",
    "code": "QAT",
    "num": 18,
    "name": "Khalid Muneer",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 778
  },
  {
    "id": "QAT19",
    "code": "QAT",
    "num": 19,
    "name": "Salem Al Hajri",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 779
  },
  {
    "id": "QAT20",
    "code": "QAT",
    "num": 20,
    "name": "Naif Al Hadhrami",
    "foil": false,
    "special": false,
    "section": "QAT",
    "albumPos": 780
  },
  {
    "id": "RSA1",
    "code": "RSA",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "RSA",
    "albumPos": 781
  },
  {
    "id": "RSA2",
    "code": "RSA",
    "num": 2,
    "name": "Ronwen Williams",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 782
  },
  {
    "id": "RSA3",
    "code": "RSA",
    "num": 3,
    "name": "Siyanda Xulu",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 783
  },
  {
    "id": "RSA4",
    "code": "RSA",
    "num": 4,
    "name": "Rushine De Reuck",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 784
  },
  {
    "id": "RSA5",
    "code": "RSA",
    "num": 5,
    "name": "Itumeleng Khune",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 785
  },
  {
    "id": "RSA6",
    "code": "RSA",
    "num": 6,
    "name": "Terrence Mashego",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 786
  },
  {
    "id": "RSA7",
    "code": "RSA",
    "num": 7,
    "name": "Ethan Ntwatwa",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 787
  },
  {
    "id": "RSA8",
    "code": "RSA",
    "num": 8,
    "name": "Teboho Mokoena",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 788
  },
  {
    "id": "RSA9",
    "code": "RSA",
    "num": 9,
    "name": "Mothobi Mvala",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 789
  },
  {
    "id": "RSA10",
    "code": "RSA",
    "num": 10,
    "name": "Percy Tau",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 790
  },
  {
    "id": "RSA11",
    "code": "RSA",
    "num": 11,
    "name": "Lyle Foster",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 791
  },
  {
    "id": "RSA12",
    "code": "RSA",
    "num": 12,
    "name": "Bongokuhle Hlongwane",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 792
  },
  {
    "id": "RSA13",
    "code": "RSA",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 793
  },
  {
    "id": "RSA14",
    "code": "RSA",
    "num": 14,
    "name": "Themba Zwane",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 794
  },
  {
    "id": "RSA15",
    "code": "RSA",
    "num": 15,
    "name": "Keagan Dolly",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 795
  },
  {
    "id": "RSA16",
    "code": "RSA",
    "num": 16,
    "name": "Evidence Makgopa",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 796
  },
  {
    "id": "RSA17",
    "code": "RSA",
    "num": 17,
    "name": "Lebo Mothiba",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 797
  },
  {
    "id": "RSA18",
    "code": "RSA",
    "num": 18,
    "name": "Lyle Foster",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 798
  },
  {
    "id": "RSA19",
    "code": "RSA",
    "num": 19,
    "name": "Sifiso Hlanti",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 799
  },
  {
    "id": "RSA20",
    "code": "RSA",
    "num": 20,
    "name": "Grant Kekana",
    "foil": false,
    "special": false,
    "section": "RSA",
    "albumPos": 800
  },
  {
    "id": "SCO1",
    "code": "SCO",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "SCO",
    "albumPos": 801
  },
  {
    "id": "SCO2",
    "code": "SCO",
    "num": 2,
    "name": "Angus Gunn",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 802
  },
  {
    "id": "SCO3",
    "code": "SCO",
    "num": 3,
    "name": "Anthony Ralston",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 803
  },
  {
    "id": "SCO4",
    "code": "SCO",
    "num": 4,
    "name": "Grant Hanley",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 804
  },
  {
    "id": "SCO5",
    "code": "SCO",
    "num": 5,
    "name": "Jack Hendry",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 805
  },
  {
    "id": "SCO6",
    "code": "SCO",
    "num": 6,
    "name": "Andy Robertson",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 806
  },
  {
    "id": "SCO7",
    "code": "SCO",
    "num": 7,
    "name": "Billy Gilmour",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 807
  },
  {
    "id": "SCO8",
    "code": "SCO",
    "num": 8,
    "name": "John McGinn",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 808
  },
  {
    "id": "SCO9",
    "code": "SCO",
    "num": 9,
    "name": "Callum McGregor",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 809
  },
  {
    "id": "SCO10",
    "code": "SCO",
    "num": 10,
    "name": "Ryan Christie",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 810
  },
  {
    "id": "SCO11",
    "code": "SCO",
    "num": 11,
    "name": "Che Adams",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 811
  },
  {
    "id": "SCO12",
    "code": "SCO",
    "num": 12,
    "name": "Ryan Fraser",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 812
  },
  {
    "id": "SCO13",
    "code": "SCO",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 813
  },
  {
    "id": "SCO14",
    "code": "SCO",
    "num": 14,
    "name": "Ryan Jack",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 814
  },
  {
    "id": "SCO15",
    "code": "SCO",
    "num": 15,
    "name": "Kenny McLean",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 815
  },
  {
    "id": "SCO16",
    "code": "SCO",
    "num": 16,
    "name": "Scott McTominay",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 816
  },
  {
    "id": "SCO17",
    "code": "SCO",
    "num": 17,
    "name": "Lyndon Dykes",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 817
  },
  {
    "id": "SCO18",
    "code": "SCO",
    "num": 18,
    "name": "Lawrence Shankland",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 818
  },
  {
    "id": "SCO19",
    "code": "SCO",
    "num": 19,
    "name": "Stuart Armstrong",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 819
  },
  {
    "id": "SCO20",
    "code": "SCO",
    "num": 20,
    "name": "James Forrest",
    "foil": false,
    "special": false,
    "section": "SCO",
    "albumPos": 820
  },
  {
    "id": "SEN1",
    "code": "SEN",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "SEN",
    "albumPos": 821
  },
  {
    "id": "SEN2",
    "code": "SEN",
    "num": 2,
    "name": "Edouard Mendy",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 822
  },
  {
    "id": "SEN3",
    "code": "SEN",
    "num": 3,
    "name": "Youssouf Sabaly",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 823
  },
  {
    "id": "SEN4",
    "code": "SEN",
    "num": 4,
    "name": "Abdou Diallo",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 824
  },
  {
    "id": "SEN5",
    "code": "SEN",
    "num": 5,
    "name": "Kalidou Koulibaly",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 825
  },
  {
    "id": "SEN6",
    "code": "SEN",
    "num": 6,
    "name": "Saliou Ciss",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 826
  },
  {
    "id": "SEN7",
    "code": "SEN",
    "num": 7,
    "name": "Idrissa Gana Gueye",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 827
  },
  {
    "id": "SEN8",
    "code": "SEN",
    "num": 8,
    "name": "Nampalys Mendy",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 828
  },
  {
    "id": "SEN9",
    "code": "SEN",
    "num": 9,
    "name": "Pape Matar Sarr",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 829
  },
  {
    "id": "SEN10",
    "code": "SEN",
    "num": 10,
    "name": "Ismaila Sarr",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 830
  },
  {
    "id": "SEN11",
    "code": "SEN",
    "num": 11,
    "name": "Sadio Mane",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 831
  },
  {
    "id": "SEN12",
    "code": "SEN",
    "num": 12,
    "name": "Habib Diallo",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 832
  },
  {
    "id": "SEN13",
    "code": "SEN",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 833
  },
  {
    "id": "SEN14",
    "code": "SEN",
    "num": 14,
    "name": "Iliman Ndiaye",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 834
  },
  {
    "id": "SEN15",
    "code": "SEN",
    "num": 15,
    "name": "Nicolas Jackson",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 835
  },
  {
    "id": "SEN16",
    "code": "SEN",
    "num": 16,
    "name": "Formose Mendy",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 836
  },
  {
    "id": "SEN17",
    "code": "SEN",
    "num": 17,
    "name": "Famara Diedhiou",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 837
  },
  {
    "id": "SEN18",
    "code": "SEN",
    "num": 18,
    "name": "Bamba Dieng",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 838
  },
  {
    "id": "SEN19",
    "code": "SEN",
    "num": 19,
    "name": "Mame Thiam",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 839
  },
  {
    "id": "SEN20",
    "code": "SEN",
    "num": 20,
    "name": "Cheikhou Kouyate",
    "foil": false,
    "special": false,
    "section": "SEN",
    "albumPos": 840
  },
  {
    "id": "SUI1",
    "code": "SUI",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "SUI",
    "albumPos": 841
  },
  {
    "id": "SUI2",
    "code": "SUI",
    "num": 2,
    "name": "Yann Sommer",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 842
  },
  {
    "id": "SUI3",
    "code": "SUI",
    "num": 3,
    "name": "Silvan Widmer",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 843
  },
  {
    "id": "SUI4",
    "code": "SUI",
    "num": 4,
    "name": "Nico Elvedi",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 844
  },
  {
    "id": "SUI5",
    "code": "SUI",
    "num": 5,
    "name": "Fabian Schar",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 845
  },
  {
    "id": "SUI6",
    "code": "SUI",
    "num": 6,
    "name": "Ricardo Rodriguez",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 846
  },
  {
    "id": "SUI7",
    "code": "SUI",
    "num": 7,
    "name": "Remo Freuler",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 847
  },
  {
    "id": "SUI8",
    "code": "SUI",
    "num": 8,
    "name": "Granit Xhaka",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 848
  },
  {
    "id": "SUI9",
    "code": "SUI",
    "num": 9,
    "name": "Djibril Sow",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 849
  },
  {
    "id": "SUI10",
    "code": "SUI",
    "num": 10,
    "name": "Ruben Vargas",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 850
  },
  {
    "id": "SUI11",
    "code": "SUI",
    "num": 11,
    "name": "Breel Embolo",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 851
  },
  {
    "id": "SUI12",
    "code": "SUI",
    "num": 12,
    "name": "Renato Steffen",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 852
  },
  {
    "id": "SUI13",
    "code": "SUI",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 853
  },
  {
    "id": "SUI14",
    "code": "SUI",
    "num": 14,
    "name": "Zeki Amdouni",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 854
  },
  {
    "id": "SUI15",
    "code": "SUI",
    "num": 15,
    "name": "Dan Ndoye",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 855
  },
  {
    "id": "SUI16",
    "code": "SUI",
    "num": 16,
    "name": "Xherdan Shaqiri",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 856
  },
  {
    "id": "SUI17",
    "code": "SUI",
    "num": 17,
    "name": "Haris Seferovic",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 857
  },
  {
    "id": "SUI18",
    "code": "SUI",
    "num": 18,
    "name": "Noah Okafor",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 858
  },
  {
    "id": "SUI19",
    "code": "SUI",
    "num": 19,
    "name": "Fabian Rieder",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 859
  },
  {
    "id": "SUI20",
    "code": "SUI",
    "num": 20,
    "name": "Michel Aebischer",
    "foil": false,
    "special": false,
    "section": "SUI",
    "albumPos": 860
  },
  {
    "id": "SWE1",
    "code": "SWE",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "SWE",
    "albumPos": 861
  },
  {
    "id": "SWE2",
    "code": "SWE",
    "num": 2,
    "name": "Robin Olsen",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 862
  },
  {
    "id": "SWE3",
    "code": "SWE",
    "num": 3,
    "name": "Emil Krafth",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 863
  },
  {
    "id": "SWE4",
    "code": "SWE",
    "num": 4,
    "name": "Victor Lindelof",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 864
  },
  {
    "id": "SWE5",
    "code": "SWE",
    "num": 5,
    "name": "Isak Hien",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 865
  },
  {
    "id": "SWE6",
    "code": "SWE",
    "num": 6,
    "name": "Ludwig Augustinsson",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 866
  },
  {
    "id": "SWE7",
    "code": "SWE",
    "num": 7,
    "name": "Mattias Svanberg",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 867
  },
  {
    "id": "SWE8",
    "code": "SWE",
    "num": 8,
    "name": "Albin Ekdal",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 868
  },
  {
    "id": "SWE9",
    "code": "SWE",
    "num": 9,
    "name": "Viktor Claesson",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 869
  },
  {
    "id": "SWE10",
    "code": "SWE",
    "num": 10,
    "name": "Dejan Kulusevski",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 870
  },
  {
    "id": "SWE11",
    "code": "SWE",
    "num": 11,
    "name": "Alexander Isak",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 871
  },
  {
    "id": "SWE12",
    "code": "SWE",
    "num": 12,
    "name": "Emil Forsberg",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 872
  },
  {
    "id": "SWE13",
    "code": "SWE",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 873
  },
  {
    "id": "SWE14",
    "code": "SWE",
    "num": 14,
    "name": "Anthony Elanga",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 874
  },
  {
    "id": "SWE15",
    "code": "SWE",
    "num": 15,
    "name": "Jesper Karlsson",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 875
  },
  {
    "id": "SWE16",
    "code": "SWE",
    "num": 16,
    "name": "Zlatan Ibrahimovic",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 876
  },
  {
    "id": "SWE17",
    "code": "SWE",
    "num": 17,
    "name": "Marcus Berg",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 877
  },
  {
    "id": "SWE18",
    "code": "SWE",
    "num": 18,
    "name": "Robin Quaison",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 878
  },
  {
    "id": "SWE19",
    "code": "SWE",
    "num": 19,
    "name": "Pontus Jansson",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 879
  },
  {
    "id": "SWE20",
    "code": "SWE",
    "num": 20,
    "name": "Gustav Svensson",
    "foil": false,
    "special": false,
    "section": "SWE",
    "albumPos": 880
  },
  {
    "id": "TUN1",
    "code": "TUN",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "TUN",
    "albumPos": 881
  },
  {
    "id": "TUN2",
    "code": "TUN",
    "num": 2,
    "name": "Aymen Dahmen",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 882
  },
  {
    "id": "TUN3",
    "code": "TUN",
    "num": 3,
    "name": "Ali Maaloul",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 883
  },
  {
    "id": "TUN4",
    "code": "TUN",
    "num": 4,
    "name": "Yassine Meriah",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 884
  },
  {
    "id": "TUN5",
    "code": "TUN",
    "num": 5,
    "name": "Montassar Talbi",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 885
  },
  {
    "id": "TUN6",
    "code": "TUN",
    "num": 6,
    "name": "Dylan Bronn",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 886
  },
  {
    "id": "TUN7",
    "code": "TUN",
    "num": 7,
    "name": "Anis Ben Slimane",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 887
  },
  {
    "id": "TUN8",
    "code": "TUN",
    "num": 8,
    "name": "Ellyes Skhiri",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 888
  },
  {
    "id": "TUN9",
    "code": "TUN",
    "num": 9,
    "name": "Hannibal Mejbri",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 889
  },
  {
    "id": "TUN10",
    "code": "TUN",
    "num": 10,
    "name": "Taha Yassine Khenissi",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 890
  },
  {
    "id": "TUN11",
    "code": "TUN",
    "num": 11,
    "name": "Wahbi Khazri",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 891
  },
  {
    "id": "TUN12",
    "code": "TUN",
    "num": 12,
    "name": "Naim Sliti",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 892
  },
  {
    "id": "TUN13",
    "code": "TUN",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 893
  },
  {
    "id": "TUN14",
    "code": "TUN",
    "num": 14,
    "name": "Saif-Eddine Khaoui",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 894
  },
  {
    "id": "TUN15",
    "code": "TUN",
    "num": 15,
    "name": "Youssef Msakni",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 895
  },
  {
    "id": "TUN16",
    "code": "TUN",
    "num": 16,
    "name": "Issam Jebali",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 896
  },
  {
    "id": "TUN17",
    "code": "TUN",
    "num": 17,
    "name": "Seifeddine Jaziri",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 897
  },
  {
    "id": "TUN18",
    "code": "TUN",
    "num": 18,
    "name": "Aissa Laidouni",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 898
  },
  {
    "id": "TUN19",
    "code": "TUN",
    "num": 19,
    "name": "Mohamed Drager",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 899
  },
  {
    "id": "TUN20",
    "code": "TUN",
    "num": 20,
    "name": "Hamza Mathlouthi",
    "foil": false,
    "special": false,
    "section": "TUN",
    "albumPos": 900
  },
  {
    "id": "TUR1",
    "code": "TUR",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "TUR",
    "albumPos": 901
  },
  {
    "id": "TUR2",
    "code": "TUR",
    "num": 2,
    "name": "Ugurcan Cakir",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 902
  },
  {
    "id": "TUR3",
    "code": "TUR",
    "num": 3,
    "name": "Zeki Celik",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 903
  },
  {
    "id": "TUR4",
    "code": "TUR",
    "num": 4,
    "name": "Merih Demiral",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 904
  },
  {
    "id": "TUR5",
    "code": "TUR",
    "num": 5,
    "name": "Samet Akaydin",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 905
  },
  {
    "id": "TUR6",
    "code": "TUR",
    "num": 6,
    "name": "Ferdi Kadioglu",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 906
  },
  {
    "id": "TUR7",
    "code": "TUR",
    "num": 7,
    "name": "Hakan Calhanoglu",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 907
  },
  {
    "id": "TUR8",
    "code": "TUR",
    "num": 8,
    "name": "Salih Ozcan",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 908
  },
  {
    "id": "TUR9",
    "code": "TUR",
    "num": 9,
    "name": "Orkun Kokcu",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 909
  },
  {
    "id": "TUR10",
    "code": "TUR",
    "num": 10,
    "name": "Kerem Akturkoglu",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 910
  },
  {
    "id": "TUR11",
    "code": "TUR",
    "num": 11,
    "name": "Burak Yilmaz",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 911
  },
  {
    "id": "TUR12",
    "code": "TUR",
    "num": 12,
    "name": "Arda Guler",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 912
  },
  {
    "id": "TUR13",
    "code": "TUR",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 913
  },
  {
    "id": "TUR14",
    "code": "TUR",
    "num": 14,
    "name": "Baris Alper Yilmaz",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 914
  },
  {
    "id": "TUR15",
    "code": "TUR",
    "num": 15,
    "name": "Yusuf Yazici",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 915
  },
  {
    "id": "TUR16",
    "code": "TUR",
    "num": 16,
    "name": "Abdulkerim Bardakci",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 916
  },
  {
    "id": "TUR17",
    "code": "TUR",
    "num": 17,
    "name": "Serdar Dursun",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 917
  },
  {
    "id": "TUR18",
    "code": "TUR",
    "num": 18,
    "name": "Cenk Tosun",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 918
  },
  {
    "id": "TUR19",
    "code": "TUR",
    "num": 19,
    "name": "Halil Dervisoglu",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 919
  },
  {
    "id": "TUR20",
    "code": "TUR",
    "num": 20,
    "name": "Oguz Aydin",
    "foil": false,
    "special": false,
    "section": "TUR",
    "albumPos": 920
  },
  {
    "id": "URU1",
    "code": "URU",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "URU",
    "albumPos": 921
  },
  {
    "id": "URU2",
    "code": "URU",
    "num": 2,
    "name": "Sergio Rochet",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 922
  },
  {
    "id": "URU3",
    "code": "URU",
    "num": 3,
    "name": "Nahitan Nandez",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 923
  },
  {
    "id": "URU4",
    "code": "URU",
    "num": 4,
    "name": "Jose Maria Gimenez",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 924
  },
  {
    "id": "URU5",
    "code": "URU",
    "num": 5,
    "name": "Sebastian Coates",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 925
  },
  {
    "id": "URU6",
    "code": "URU",
    "num": 6,
    "name": "Mathias Olivera",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 926
  },
  {
    "id": "URU7",
    "code": "URU",
    "num": 7,
    "name": "Rodrigo Bentancur",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 927
  },
  {
    "id": "URU8",
    "code": "URU",
    "num": 8,
    "name": "Manuel Ugarte",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 928
  },
  {
    "id": "URU9",
    "code": "URU",
    "num": 9,
    "name": "Matias Vecino",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 929
  },
  {
    "id": "URU10",
    "code": "URU",
    "num": 10,
    "name": "Federico Valverde",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 930
  },
  {
    "id": "URU11",
    "code": "URU",
    "num": 11,
    "name": "Luis Suarez",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 931
  },
  {
    "id": "URU12",
    "code": "URU",
    "num": 12,
    "name": "Edinson Cavani",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 932
  },
  {
    "id": "URU13",
    "code": "URU",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 933
  },
  {
    "id": "URU14",
    "code": "URU",
    "num": 14,
    "name": "Darwin Nunez",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 934
  },
  {
    "id": "URU15",
    "code": "URU",
    "num": 15,
    "name": "Facundo Pellistri",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 935
  },
  {
    "id": "URU16",
    "code": "URU",
    "num": 16,
    "name": "Nicolas De La Cruz",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 936
  },
  {
    "id": "URU17",
    "code": "URU",
    "num": 17,
    "name": "Maxi Gomez",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 937
  },
  {
    "id": "URU18",
    "code": "URU",
    "num": 18,
    "name": "Facundo Torres",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 938
  },
  {
    "id": "URU19",
    "code": "URU",
    "num": 19,
    "name": "Brian Rodriguez",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 939
  },
  {
    "id": "URU20",
    "code": "URU",
    "num": 20,
    "name": "Giorgian De Arrascaeta",
    "foil": false,
    "special": false,
    "section": "URU",
    "albumPos": 940
  },
  {
    "id": "USA1",
    "code": "USA",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "USA",
    "albumPos": 941
  },
  {
    "id": "USA2",
    "code": "USA",
    "num": 2,
    "name": "Matt Freese",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 942
  },
  {
    "id": "USA3",
    "code": "USA",
    "num": 3,
    "name": "Chris Richards",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 943
  },
  {
    "id": "USA4",
    "code": "USA",
    "num": 4,
    "name": "Tim Ream",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 944
  },
  {
    "id": "USA5",
    "code": "USA",
    "num": 5,
    "name": "Mark McKenzie",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 945
  },
  {
    "id": "USA6",
    "code": "USA",
    "num": 6,
    "name": "Alex Freeman",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 946
  },
  {
    "id": "USA7",
    "code": "USA",
    "num": 7,
    "name": "Antonee Robinson",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 947
  },
  {
    "id": "USA8",
    "code": "USA",
    "num": 8,
    "name": "Tyler Adams",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 948
  },
  {
    "id": "USA9",
    "code": "USA",
    "num": 9,
    "name": "Tanner Tessmann",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 949
  },
  {
    "id": "USA10",
    "code": "USA",
    "num": 10,
    "name": "Weston McKennie",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 950
  },
  {
    "id": "USA11",
    "code": "USA",
    "num": 11,
    "name": "Christian Roldan",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 951
  },
  {
    "id": "USA12",
    "code": "USA",
    "num": 12,
    "name": "Timothy Weah",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 952
  },
  {
    "id": "USA13",
    "code": "USA",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 953
  },
  {
    "id": "USA14",
    "code": "USA",
    "num": 14,
    "name": "Diego Luna",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 954
  },
  {
    "id": "USA15",
    "code": "USA",
    "num": 15,
    "name": "Malik Tillman",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 955
  },
  {
    "id": "USA16",
    "code": "USA",
    "num": 16,
    "name": "Christian Pulisic",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 956
  },
  {
    "id": "USA17",
    "code": "USA",
    "num": 17,
    "name": "Brenden Aaronson",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 957
  },
  {
    "id": "USA18",
    "code": "USA",
    "num": 18,
    "name": "Ricardo Pepi",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 958
  },
  {
    "id": "USA19",
    "code": "USA",
    "num": 19,
    "name": "Haji Wright",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 959
  },
  {
    "id": "USA20",
    "code": "USA",
    "num": 20,
    "name": "Folarin Balogun",
    "foil": false,
    "special": false,
    "section": "USA",
    "albumPos": 960
  },
  {
    "id": "UZB1",
    "code": "UZB",
    "num": 1,
    "name": "Team Logo",
    "foil": true,
    "special": false,
    "section": "UZB",
    "albumPos": 961
  },
  {
    "id": "UZB2",
    "code": "UZB",
    "num": 2,
    "name": "Utkir Yusupov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 962
  },
  {
    "id": "UZB3",
    "code": "UZB",
    "num": 3,
    "name": "Farrukh Savfiev",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 963
  },
  {
    "id": "UZB4",
    "code": "UZB",
    "num": 4,
    "name": "Sherzod Nasrullaev",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 964
  },
  {
    "id": "UZB5",
    "code": "UZB",
    "num": 5,
    "name": "Umar Eshmurodov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 965
  },
  {
    "id": "UZB6",
    "code": "UZB",
    "num": 6,
    "name": "Husniddin Aliqulov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 966
  },
  {
    "id": "UZB7",
    "code": "UZB",
    "num": 7,
    "name": "Rustamjon Ashurmatov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 967
  },
  {
    "id": "UZB8",
    "code": "UZB",
    "num": 8,
    "name": "Khojiakbar Alijonov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 968
  },
  {
    "id": "UZB9",
    "code": "UZB",
    "num": 9,
    "name": "Abdukodir Khusanov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 969
  },
  {
    "id": "UZB10",
    "code": "UZB",
    "num": 10,
    "name": "Odiljon Hamrobekov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 970
  },
  {
    "id": "UZB11",
    "code": "UZB",
    "num": 11,
    "name": "Otabek Shukurov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 971
  },
  {
    "id": "UZB12",
    "code": "UZB",
    "num": 12,
    "name": "Jamshid Iskanderov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 972
  },
  {
    "id": "UZB13",
    "code": "UZB",
    "num": 13,
    "name": "Team Photo",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 973
  },
  {
    "id": "UZB14",
    "code": "UZB",
    "num": 14,
    "name": "Khurshid Tursunov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 974
  },
  {
    "id": "UZB15",
    "code": "UZB",
    "num": 15,
    "name": "Eldor Shomurodov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 975
  },
  {
    "id": "UZB16",
    "code": "UZB",
    "num": 16,
    "name": "Otabek Kholmatov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 976
  },
  {
    "id": "UZB17",
    "code": "UZB",
    "num": 17,
    "name": "Jaloliddin Masharipov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 977
  },
  {
    "id": "UZB18",
    "code": "UZB",
    "num": 18,
    "name": "Temur Jalolov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 978
  },
  {
    "id": "UZB19",
    "code": "UZB",
    "num": 19,
    "name": "Umid Nishonov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 979
  },
  {
    "id": "UZB20",
    "code": "UZB",
    "num": 20,
    "name": "Sanjar Tursunov",
    "foil": false,
    "special": false,
    "section": "UZB",
    "albumPos": 980
  }
];