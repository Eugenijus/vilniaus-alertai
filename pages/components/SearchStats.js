import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "@chakra-ui/core";

const SearchStats = ({ searchResults, filterName }) => {
  return (
    <Flex justify="space-around">
      <Text fontFamily="inherit" color="purple.600" mb="4">
        Rasta:{" "}
        <span style={{ fontWeight: "bold" }}>{searchResults.length}</span>
      </Text>
      <Text fontFamily="inherit" color="purple.600" mb="4">
        Filtras: <span style={{ fontWeight: "bold" }}>{filterName}</span>
      </Text>
    </Flex>
  );
};

SearchStats.propTypes = {
  searchResults: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired
};

export default SearchStats;
