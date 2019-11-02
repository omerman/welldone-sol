import React from "react"
import { Typography, Box, Card } from "@material-ui/core"

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
                elevation={selectedCategoryId === id ? 5 : 1}
                onClick={() => onSelectCategory(id)}
              >
                <Box
                  height={140}
                  width={140}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h6" color="primary">
                    {name}
                  </Typography>
                </Box>
              </Card>
            </Box>
          ),
        )
      }
    </Box>
  )
}