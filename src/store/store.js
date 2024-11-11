import auctionReducer from "./slices/auctionSlice";
import bidReducer from "./slices/bidSlice";
import commissionReducer from "./slices/commissionSlice";
import superAdminReducer from "./slices/superAdminSlice";
import userReducer from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    commission: commissionReducer,
    auction: auctionReducer,
    bid: bidReducer,
    superAdmin: superAdminReducer,
  },
});