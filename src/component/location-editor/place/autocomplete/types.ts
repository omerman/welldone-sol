export interface PlaceType {
  id: string,
  description: string,
  structured_formatting: {
    secondary_text: string;
    main_text_matched_substrings: [
      {
        offset: number;
        length: number;
      }
    ];
  };
}
