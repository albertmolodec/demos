export type StateGDP = {
  name: string;
  gdp: number;
};

// https://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_GDP
/**
 * const states = []
 * for(const tr of trs) {
    const state = {
        name: tr.children[0].innerText.trim().replace(/\s\*$/, ''),
        value: Number(tr.children[1].innerText.trim().replaceAll(',', ''))
    }
    states.push(state)
}
 */
export const gdp: StateGDP[] = [
  {
    name: "California",
    gdp: 3598103,
  },
  {
    name: "Texas",
    gdp: 2355960,
  },
  {
    name: "New York",
    gdp: 2053180,
  },
  {
    name: "Florida",
    gdp: 1389070,
  },
  {
    name: "Illinois",
    gdp: 1033310,
  },
  {
    name: "Pennsylvania",
    gdp: 923089,
  },
  {
    name: "Ohio",
    gdp: 822670,
  },
  {
    name: "Georgia",
    gdp: 755698,
  },
  {
    name: "New Jersey",
    gdp: 745422,
  },
  {
    name: "North Carolina",
    gdp: 730072,
  },
  {
    name: "Washington",
    gdp: 725514,
  },
  {
    name: "Massachusetts",
    gdp: 688392,
  },
  {
    name: "Virginia",
    gdp: 649393,
  },
  {
    name: "Michigan",
    gdp: 620696,
  },
  {
    name: "Colorado",
    gdp: 484372,
  },
  {
    name: "Tennessee",
    gdp: 475755,
  },
  {
    name: "Maryland",
    gdp: 470187,
  },
  {
    name: "Arizona",
    gdp: 458950,
  },
  {
    name: "Indiana",
    gdp: 455750,
  },
  {
    name: "Minnesota",
    gdp: 446500,
  },
  {
    name: "Wisconsin",
    gdp: 401792,
  },
  {
    name: "Missouri",
    gdp: 389931,
  },
  {
    name: "Connecticut",
    gdp: 321845,
  },
  {
    name: "Oregon",
    gdp: 299125,
  },
  {
    name: "South Carolina",
    gdp: 295880,
  },
  {
    name: "Louisiana",
    gdp: 281429,
  },
  {
    name: "Alabama",
    gdp: 277817,
  },
  {
    name: "Kentucky",
    gdp: 260304,
  },
  {
    name: "Utah",
    gdp: 248176,
  },
  {
    name: "Oklahoma",
    gdp: 240534,
  },
  {
    name: "Iowa",
    gdp: 231108,
  },
  {
    name: "Nevada",
    gdp: 215918,
  },
  {
    name: "Kansas",
    gdp: 210670,
  },
  {
    name: "Arkansas",
    gdp: 165221,
  },
  {
    name: "Nebraska",
    gdp: 161702,
  },
  {
    name: "District of Columbia",
    gdp: 162314,
  },
  {
    name: "Mississippi",
    gdp: 138740,
  },
  {
    name: "New Mexico",
    gdp: 122115,
  },
  {
    name: "Idaho",
    gdp: 109546,
  },
  {
    name: "New Hampshire",
    gdp: 105414,
  },
  {
    name: "Hawaii",
    gdp: 98219,
  },
  {
    name: "West Virginia",
    gdp: 95588,
  },
  {
    name: "Delaware",
    gdp: 87525,
  },
  {
    name: "Maine",
    gdp: 84497,
  },
  {
    name: "North Dakota",
    gdp: 73267,
  },
  {
    name: "Rhode Island",
    gdp: 71402,
  },
  {
    name: "South Dakota",
    gdp: 67571,
  },
  {
    name: "Montana",
    gdp: 65015,
  },
  {
    name: "Alaska",
    gdp: 63618,
  },
  {
    name: "Wyoming",
    gdp: 47433,
  },
  {
    name: "Vermont",
    gdp: 40617,
  },
];
