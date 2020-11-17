import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Spinner } from "@chakra-ui/core";
import Alert from "./Alert";

const AlertList = ({ loading, searchResults }) => {
  return loading ? (
    <Box>
      <Flex justifyContent="center">
        <Spinner />
      </Flex>
    </Box>
  ) : (
    !!searchResults.length &&
      searchResults.map(({ alert_data, create_date }) => {
        return (
          <Alert
            key={create_date}
            alertData={alert_data}
            createDate={create_date}
          />
        );
      })
  );
};

AlertList.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired
};

export default AlertList;
