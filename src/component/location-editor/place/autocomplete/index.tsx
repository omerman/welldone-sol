import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import throttle from "lodash.throttle";
import { PlaceType } from "./types";
// import { loadScript } from "../../../common/util/load-script";
import { mockPlacePredictions } from "./mock";

// const autocompleteService = { current: null };
// const mapsScriptId = 'google-maps';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export interface IPlaceAutoCompleteProps {
  value: string,
  onChange: (
    value: string,
    placeId: string,
  ) => void,
  onClear: () => void,
}

export const PlaceAutoComplete: React.FC<IPlaceAutoCompleteProps> = ({
  value, onChange, onClear,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<PlaceType[]>([]);

  // Google maps api demanded I enter billing.. so using mock data.
  // const loaded = React.useRef(false);

  // if (!loaded.current) {
  //   if (!document.querySelector(`#${mapsScriptId}`)) {
  //     loadScript(
  //       'https://maps.googleapis.com/maps/api/js?key=AIzaSyA5FOC9bUulwBrXowOndMY1d2Ff4Ox7-dw&libraries=places',
  //       mapsScriptId,
  //     );
  //   }

  //   loaded.current = true;
  // }

  const handleInputChange = (v: any) => {
    setInputValue(v);
  };

  const suggestPlaces = React.useMemo(
    () =>
      throttle((input: { input: string }, callback: (results?: PlaceType[]) => void) => {
        callback(mockPlacePredictions);
      }, 200),
    [],
  );

  React.useEffect(() => {
    let active = true;

    // if (!autocompleteService.current && (window as any).google) {
    //   autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    // }

    // if (!autocompleteService.current) {
    //   return undefined;
    // }

    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }

    suggestPlaces({ input: inputValue }, (results?: PlaceType[]) => {
      if (active) {
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };
  }, [suggestPlaces, inputValue]);

  return (
    <Autocomplete
      style={{ width: 300 }}
      getOptionLabel={option => option.description}
      filterOptions={x => x}
      options={options}
      autoComplete
      inputValue={inputValue || value}
      includeInputInList
      disableOpenOnFocus
      onInputChange={(e, nextInputValue) => {
        handleInputChange(nextInputValue);
      }}
      onChange={(e, nextValue: PlaceType | undefined) => {
        if (nextValue) {
          onChange(
            nextValue.description,
            nextValue.id,
          );
        } else {
          onClear();
        }
        setInputValue('');
      }}
      renderInput={params => {
        return (<TextField
          {...params}
          label="Add a location"
          variant="outlined"
          margin="dense"
          fullWidth
          InputProps={{
            ...params.InputProps,
            margin: 'dense',
            className: undefined,
          }}
          InputLabelProps={{
            ...params.InputLabelProps,
            shrink: Boolean(value || inputValue)
          }}
        />);
      }}
      renderOption={option => {
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [match.offset, match.offset + match.length]),
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}
              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
