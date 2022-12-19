import {
  ABOUT_PAGE,
  HOME_PAGE,
  ADDPIC_PAGE,
  LOGIN_PAGE,
  ERR_PAGE,
} from "../services/domService.js";
import PAGES from "../models/pageModel.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  ADDPIC_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";

  switch (page) {
    case PAGES.HOME:
      HOME_PAGE.className = "d-block";
      break;
    case PAGES.ABOUT:
      ABOUT_PAGE.className = "d-block";
      break;
    case PAGES.ADDPIC:
      ADDPIC_PAGE.className = "d-block";
      break;
    case PAGES.LOGIN:
      LOGIN_PAGE.className = "d-block";
      break;
    default:
      ERR_PAGE.className = "d-block";
  }
};
