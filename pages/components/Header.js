import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "@chakra-ui/core";
import SearchInput from "./SearchInput";
import { VILNIAUS_ALERTAI } from "../constants/alerts";

const Header = ({ handleSearchTerm }) => {
  return (
    <Flex width="full" flexDirection="column" bg="blue.100" px="4">
      <Flex alignItems="center" flexDirection="column">
        <Text fontSize="3xl">{VILNIAUS_ALERTAI}</Text>
      </Flex>
      <Flex alignItems="center" flexDirection="column" h="100px">
        <SearchInput handleSearchTerm={handleSearchTerm} />
      </Flex>
    </Flex>
  );
};

Header.propTypes = {
  handleSearchTerm: PropTypes.func.isRequired
};

export default Header;
