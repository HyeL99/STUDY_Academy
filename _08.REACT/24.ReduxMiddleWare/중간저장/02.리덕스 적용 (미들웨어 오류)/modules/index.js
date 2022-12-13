/*###############################################################################
################## 루트 리듀서 (리듀서 여러개를 모아주는 역할) ##################
###############################################################################*/

import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({counter});

export default rootReducer;