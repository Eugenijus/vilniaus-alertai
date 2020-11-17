import React from "react";
import PropTypes from "prop-types";
import { Flex, Box, Text, Badge, Divider } from "@chakra-ui/core";

const Alert = ({ alertData, createDate }) => {
  return (
    <Box>
      <Text fontFamily="inherit" fontSize="lg">
        {alertData.content}
      </Text>
      <Flex mt="2" alignItems="center">
        <Box ml="auto">
          <Text color="gray.500" fontSize="sm" fontFamily="inherit">
            {createDate}
          </Text>
        </Box>
        <Badge
          ml="4"
          pt="1px"
          fontSize="xs"
          variantColor="green"
          fontFamily="inherit"
        >
          {alertData.alert_type}
        </Badge>
        <Badge
          ml="4"
          pt="1px"
          fontSize="xs"
          variantColor="purple"
          fontFamily="inherit"
        >
          {alertData.alert_scope}
        </Badge>
      </Flex>
      <Divider my="6" />
    </Box>
  );
};

Alert.propTypes = {
  alertData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    alert_type: PropTypes.string.isRequired,
    alert_scope: PropTypes.string.isRequired
  }).isRequired,
  createDate: PropTypes.string.isRequired
};

export default Alert;
