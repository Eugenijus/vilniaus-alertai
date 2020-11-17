import React from "react";
import PropTypes from "prop-types";
import { Box, Badge } from "@chakra-ui/core";

const CategoriesAndTypes = ({
  categories,
  types,
  handleCategoryPick,
  handleTypePick
}) => {
  return (
    <Box width="25%" ml="2" mr="2">
      {categories.map(category => {
        return (
          <Badge
            key={category}
            fontSize="md"
            mx="2"
            mb="3"
            variantColor="purple"
            onClick={() => handleCategoryPick(category)}
          >
            {category}
          </Badge>
        );
      })}
      {types.map(type => {
        return (
          <Badge
            key={type}
            fontSize="md"
            mx="2"
            mb="3"
            variantColor="green"
            onClick={() => handleTypePick(type)}
          >
            {type}
          </Badge>
        );
      })}
    </Box>
  );
};

CategoriesAndTypes.propTypes = {
  categories: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  handleCategoryPick: PropTypes.func.isRequired,
  handleTypePick: PropTypes.func.isRequired
};

export default CategoriesAndTypes;
