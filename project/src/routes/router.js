import {
  ABOUT_PAGE,
  HOME_PAGE,
  SETAPPOINMENT,
  MYAPPOINMENT,
  ERR_PAGE,
} from "../services/domService.js";
import PAGES from "../models/pageModel.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  MYAPPOINMENT.className = "d-none";
  SETAPPOINMENT.className = "d-none";
  LOGIN_PAGE.className = "d-none";

  switch (page) {
    case PAGES.HOME:
      HOME_PAGE.className = "d-block";
      break;
    case PAGES.ABOUT:
      ABOUT_PAGE.className = "d-block";
      break;
    case PAGES.MYAPPOINMENT:
      MYAPPOINMENT_PAGE.className = "d-block";
      break;
    case PAGES.SETAPPOINMENT:
      SETAPPOINMENT.className = "d-block";
    case PAGES.LOGIN:
      LOGIN_PAGE.className = "d-block";
      break;
    default:
      ERR_PAGE.className = "d-block";
  }
};
