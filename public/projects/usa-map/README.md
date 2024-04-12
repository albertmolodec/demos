# Test Task "USA Map Widget"

Need to create a React application that would look something like this:

![](https://raw.githubusercontent.com/kitcat-dev/demos/8a764b78236f124f602bfea7bc5db8fa0cfa5df0/public/projects/usa-map/preview.png)

## Result

👉 **https://demo.kitcat.dev/usa-map**

- Stack: **React, Typescript, Material UI, Mock Service Worker (MSW), Webpack**.
- There is 3 tabs with different views:
  - The request was successful
  - Server returned an error
  - Server returned an empty data
- The map on the first tab contains data about population and GDP per capita of the U.S. states. The view is switched through the select element.
- The map is interactive. You can see the data for each state when you hover.
- The data is real and up to date in 2022. It has been parsed via regular expressions and native JS methods. Sources:
  1. https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg
  2. https://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_GDP
  3. https://gist.github.com/yitzikc/0a1ef7fa6320250a7a3a8885ff9e91a1

## Requirements

Key points:

1. Preferably use as much of our stack as possible: React, Typescript, Material UI Components, Webpack/CRA etc.
2. At least one map widget needs to be seen on the page (hint: use an SVG of the USA map divided by states)
3. States have to contain some data (numerical preferably)
4. States have to be colored differently depending on the data, different data has to produce a different color (colors themselves don’t matter)
5. Map has to react to user input, e.g. you can show a tooltip with the states data when the user hovers over a state
6. Either a simulation through mocks (as close to real back end calls as possible) or a real back end should be used for providing numerical data for the map. The idea is to show how you work with asynchronous code (promises preferred to async/await)
7. Page should contain at least one filter that when changed should trigger the back end request and rerender the page with new mock data
8. Loading, error, empty data, normal data - these four states should be handled
9. Code should preferably be production ready, if time is a problem you can either sacrifice parts of functionality in order to make what is left production ready, or you can explain during the call how you would make it production ready if you had time (or both)
10. Read the [code convention](https://www.notion.so/3e2f7e0beb2d4d9fa1387e971e6d8aa5?pvs=21) and use it in the homework task and/or prepare to discuss it during the next call
