import React from "react";
import { ThemeProvider, CSSReset, Flex, Box } from "@chakra-ui/core";

import { getDataByCategory, getDataByType } from "../api/alertAPI";
import { mockData } from "../constants/mockData";
import { SCOPE_MAP, TYPES, VILNIAUS_ALERTAI } from "../constants/alerts";
import HeadDiv from "./HeadDiv";
import Header from "./Header";
import CategoriesAndTypes from "./CategoriesAndTypes";
import SearchStats from "./SearchStats";
import AlertList from "./AlertList";
import debounce from "lodash.debounce";

class VilniusAlertContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchResults: [],
      data: [],
      categories: [],
      currentCategory: 0,
      filterName: "Visi",
      types: ["Įspėjimas", "Naujiena"]
    };
    this.debounceSearch = debounce(this.handleSearchTerm, 300);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let apiData = [];

    try {
      apiData = await getDataByCategory(SCOPE_MAP.Visi);
    } catch (error) {
      console.log(error);
      console.log("...loading Mock data instead");
      apiData = mockData;
    }

    const categoriesObj = apiData.reduce((acc, next) => {
      acc[next.alert_data.alert_scope] = true;
      return acc;
    }, {});

    const categories = ["Visi", ...Object.keys(categoriesObj)];
    this.setState({
      loading: false,
      searchResults: apiData,
      data: apiData,
      categories
    });
  }

  componentWillUnmount() {
    this.debounceSearch.cancel();
  }

  setLoading = isLoading => this.setState({ loading: isLoading });

  setSearchResults = res => this.setState({ searchResults: res });

  setCategory = cat => this.setState({ currentCategory: cat });

  setFilterName = name => this.setState({ filterName: name });

  handleSearchTerm = event => {
    const { data } = this.state;
    const {
      target: { value = "" }
    } = event;
    const searchTerm = value.toLowerCase();
    console.log("handleSearchTerm()", searchTerm);
    if (searchTerm) {
      const results = data.filter(item => {
        return item.alert_data.content.toLowerCase().includes(searchTerm);
      });
      this.setSearchResults(results);
    } else {
      this.setSearchResults(data);
    }
  };

  handleCategoryPick = async category => {
    const catNumber = SCOPE_MAP[category];
    this.setState({ filterName: category, loading: true });

    getDataByCategory(catNumber).then(dataByCategory => {
      this.setSearchResults(dataByCategory);
      this.setLoading(false);
    });
  };

  handleTypePick = async type => {
    const typeNumber = TYPES[type];
    this.setState({ filterName: type, loading: true });

    getDataByType(typeNumber).then(dataByType => {
      this.setSearchResults(dataByType);
      this.setLoading(false);
    });
  };

  render() {
    const {
      loading,
      searchResults,
      filterName,
      categories,
      types
    } = this.state;

    return (
      <ThemeProvider>
        <CSSReset />
        <HeadDiv title={VILNIAUS_ALERTAI} />
        <Header handleSearchTerm={this.handleSearchTerm} />
        <Box fontFamily="Montserrat" overflowY="hidden">
          <Box maxWidth="1280px" mx="auto" pt="8" px="4">
            <Flex>
              <CategoriesAndTypes
                categories={categories}
                types={types}
                handleCategoryPick={this.handleCategoryPick}
                handleTypePick={this.handleTypePick}
              />
              <Box flex="1" px="10">
                <SearchStats
                  searchResults={searchResults}
                  filterName={filterName}
                />
                <AlertList loading={loading} searchResults={searchResults} />
              </Box>
            </Flex>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default VilniusAlertContainer;
