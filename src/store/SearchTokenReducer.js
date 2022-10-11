const change = "change";

export const SearchTokenAction = (input) => 
{
  return {type:change,data:input}
};

const SearchTokenReducer = (state="none",action) => {
  switch (action.type) {
    case change:
      return action.data;
    default:
      return state;
  }
}

export default SearchTokenReducer