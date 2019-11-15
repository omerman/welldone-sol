import React from "react"
import SortByAlpha from "@material-ui/icons/SortByAlpha";
import { Typography, Box, Card, Button, Theme, IconButton } from "@material-ui/core"
import { StyledSectionHeader } from "./styled/category-header"
import { useTheme } from "@material-ui/styles"

export interface ILocationListProps {
  categoryList: Array<{ name: string, locationList: Array<{ id: string, name: string, }> }>,
  selectedLocationId: string | undefined,
  onSelectLocation: (id: string) => void,
  isSortedAlpha: boolean,
  onToggleSortedAlpha: () => void,
}

export const LocationList: React.FC<ILocationListProps> = ({
  categoryList,
  selectedLocationId,
  onSelectLocation,
  isSortedAlpha,
  onToggleSortedAlpha,
}) => {
  const theme = useTheme<Theme>();

  return (
    <div>
      <Box display="flex" marginLeft={1}>
        <IconButton
          color={isSortedAlpha ? 'primary' : undefined}
          onClick={onToggleSortedAlpha}
        >
          <SortByAlpha />
        </IconButton>
      </Box>
      {
        categoryList.map(
          ({ name: categoryName, locationList }, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <StyledSectionHeader theme={theme}>
                <Typography variant="h6">
                  {categoryName}
                </Typography>
              </StyledSectionHeader>
              <Box display="flex" marginLeft={2}>
                {
                  locationList.map(
                    ({ id, name: locationName }) => (
                      <Box key={id} marginRight={2}>
                        <Card
                          elevation={selectedLocationId === id ? 12 : 1}
                        >
                          <Button onClick={() => onSelectLocation(id)}>
                            <Box
                              height={140}
                              paddingLeft={8}
                              paddingRight={8}
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Typography variant="h5" color="primary">
                                {locationName}
                              </Typography>
                            </Box>
                          </Button>
                        </Card>
                      </Box>
                    ),
                  )
                }
              </Box>
            </React.Fragment>
          ),
        )
      }
    </div>
  );
}