import React from "react";
const truth = React.createContext(true)

export const TruthProvider = truth.Provider
export const TruthConsumer = truth.Consumer
export default truth