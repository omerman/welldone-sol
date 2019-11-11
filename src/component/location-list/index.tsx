import React from "react"
import { Typography, Box, Card, Button } from "@material-ui/core"

export interface ILocationListProps {
  list: Array<{ id: string, name: string, categoryName: string }>,
  onSelectLocation: (id: string) => void,
  selectedLocationId: string | undefined,
}

export const LocationList: React.FC<ILocationListProps> = ({
  list,
  selectedLocationId,
  onSelectLocation,
}) => {
  return (
    <Box display="flex">
      {
        list.map(
          ({ id, name, categoryName }) => (
            <Box key={id} margin={2}>
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
                      {name}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {categoryName}
                    </Typography>
                  </Box>
                </Button>
              </Card>
            </Box>
          ),
        )
      }
    </Box>
  )
}