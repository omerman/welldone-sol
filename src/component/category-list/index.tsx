import React from "react"
import { Typography, Box, Card } from "@material-ui/core"

export interface ICategoryListProps {
  list: Array<{ name: string }>,
}

export const CategoryList: React.FC<ICategoryListProps> = ({
  list,
}) => {
  return (
    <Box display="flex">
      {
        list.map(
          (category, index) => (
            <Box key={index} margin={2}>
              <Card>
                <Box
                  height={140}
                  width={140}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h6" color="primary">
                    {category.name}
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