import { PlaceType } from "./types";

export const mockPlacePredictions = ([
  {
    description: "Amsterdam, Netherlands",
    id: "583c21d6b8c8d9922969236a70104244512786a2",
    matched_substrings: [
      {
        length: 2,
        offset: 0
      }
    ],
    place_id: "ChIJVXealLU_xkcRja_At0z9AGY",
    reference: "ChIJVXealLU_xkcRja_At0z9AGY",
    structured_formatting: {
      main_text: "Amsterdam",
      main_text_matched_substrings: [
        {
          length: 2,
          offset: 0
        }
      ],
      secondary_text: "Netherlands"
    },
    terms: [
      {
        offset: 0,
        value: "Amsterdam"
      },
      {
        offset: 11,
        value: "Netherlands"
      }
    ],
    "types": ["locality", "political", "geocode"]
  },
  {
    description: "Amritsar, Punjab, India",
    id: "d0d2a2e82cc4db54296a786a4eed8cf594cc542c",
    matched_substrings: [
      {
        length: 2,
        offset: 0
      }
    ],
    place_id: "ChIJVXOeVqpkGTkRfe-E7ltgou4",
    reference: "ChIJVXOeVqpkGTkRfe-E7ltgou4",
    structured_formatting: {
      main_text: "Amritsar",
      main_text_matched_substrings: [
        {
          length: 2,
          offset: 0
        }
      ],
      secondary_text: "Punjab, India"
    },
    terms: [
      {
        offset: 0,
        value: "Amritsar"
      },
      {
        offset: 10,
        value: "Punjab"
      },
      {
        offset: 18,
        value: "India"
      }
    ],
    "types": ["locality", "political", "geocode"]
  },
  {
    description: "Amarillo, TX, USA",
    id: "2c01735624888973dce213df67af9c90f2154770",
    matched_substrings: [
      {
        length: 2,
        offset: 0
      }
    ],
    place_id: "ChIJA89FstRIAYcRr9I2aBzR89A",
    reference: "ChIJA89FstRIAYcRr9I2aBzR89A",
    structured_formatting: {
      main_text: "Amarillo",
      main_text_matched_substrings: [
        {
          length: 2,
          offset: 0
        }
      ],
      secondary_text: "TX, USA"
    },
    terms: [
      {
        offset: 0,
        value: "Amarillo"
      },
      {
        offset: 10,
        value: "TX"
      },
      {
        offset: 14,
        value: "USA"
      }
    ],
    "types": ["locality", "political", "geocode"]
  },
  {
    description: "Ambala, Haryana, India",
    id: "ec1bda35db6966fb145dcb04bbcb23f9bde3555a",
    matched_substrings: [
      {
        length: 2,
        offset: 0
      }
    ],
    place_id: "ChIJEW8eQiq2DzkRFI0l9ymK0us",
    reference: "ChIJEW8eQiq2DzkRFI0l9ymK0us",
    structured_formatting: {
      main_text: "Ambala",
      main_text_matched_substrings: [
        {
          length: 2,
          offset: 0
        }
      ],
      secondary_text: "Haryana, India"
    },
    terms: [
      {
        offset: 0,
        value: "Ambala"
      },
      {
        offset: 8,
        value: "Haryana"
      },
      {
        offset: 17,
        value: "India"
      }
    ],
    "types": ["locality", "political", "geocode"]
  },
  {
    description: "Amersfoort, Netherlands",
    id: "2024b73f561f467c7579bd561cf755f640fef167",
    matched_substrings: [
      {
        length: 2,
        offset: 0
      }
    ],
    place_id: "ChIJ8XuXeZ1axkcRHpl2fyrMFjw",
    reference: "ChIJ8XuXeZ1axkcRHpl2fyrMFjw",
    structured_formatting: {
      main_text: "Amersfoort",
      main_text_matched_substrings: [
        {
          length: 2,
          offset: 0
        }
      ],
      secondary_text: "Netherlands"
    },
    terms: [
      {
        offset: 0,
        value: "Amersfoort"
      },
      {
        offset: 12,
        value: "Netherlands"
      }
    ],
    "types": ["locality", "political", "geocode"]
  }
] as any as PlaceType[]);