import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userForm",
  initialState: {
    user: { name: "", email: "", phone: "" },
    plan: { isYearly: false, selectedPlan: "arcade" },
    addOns: { online: true, storage: true, profile: false },
    pricing: {
      arcade: {
        monthly: 9,
        yearly: 90,
      },
      advanced: {
        monthly: 12,
        yearly: 120,
      },
      pro: {
        monthly: 15,
        yearly: 150,
      },
      online: {
        monthly: 1,
        yearly: 10,
      },
      storage: {
        monthly: 2,
        yearly: 20,
      },
      profile: {
        monthly: 2,
        yearly: 20,
      },
    },
  },
  reducers: {
    userInfo: (state, action) => {
      state.user = action.payload;
    },
    userPlan: (state, action) => {
      state.plan.isYearly = action.payload.toggle;
      state.plan.selectedPlan = action.payload.checked;
    },
    userAddons: (state, action) => {
      state.addOns.online = action.payload.one;
      state.addOns.storage = action.payload.two;
      state.addOns.profile = action.payload.three;
      },
  },
});

export const { userInfo, userPlan, userAddons } = userSlice.actions;
export default userSlice.reducer;
