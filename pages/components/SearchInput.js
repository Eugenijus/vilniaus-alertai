import React from "react";
import PropTypes from "prop-types";
import { Input, InputLeftElement, InputGroup, Icon } from "@chakra-ui/core";

const SearchInput = ({ handleSearchTerm }) => {
  return (
    <InputGroup my="auto" maxWidth="5xl" width="full">
      <InputLeftElement
        mt="1"
        pt="1"
        ml="1"
        children={<Icon name="search" color="gray.900" size="6" />}
      />
      <Input
        pl="3.0rem"
        height="12"
        boxShadow="md"
        borderRadius="lg"
        placeholder="Search"
        type="text"
        onChange={handleSearchTerm}
      />
    </InputGroup>
  );
};

SearchInput.propTypes = {
  handleSearchTerm: PropTypes.func.isRequired
};

export default SearchInput;
