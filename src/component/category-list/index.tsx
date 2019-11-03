import React from "react"
import { Typography, Box, Card, Button } from "@material-ui/core"

export interface ICategoryListProps {
  list: Array<{ id: string, name: string }>,
  onSelectCategory: (id: string) => void,
  selectedCategoryId: string | undefined,
}

export const CategoryList: React.FC<ICategoryListProps> = ({
  list,
  selectedCategoryId,
  onSelectCategory,
}) => {
  return (
    <Box display="flex">
      {
        list.map(
          ({ id, name }) => (
            <Box key={id} margin={2}>
              <Card
                elevation={selectedCategoryId === id ? 12 : 1}
              >
                <Button onClick={() => onSelectCategory(id)}>
                  <Box
                    height={140}
                    paddingLeft={8}
                    paddingRight={8}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h6" color="primary">
                      {name}
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