const COLORS = require("./colors");

const theme = {
  "primary-color": COLORS.primary,
  "link-color": COLORS.grey,
  "success-color": COLORS.green,
  "error-color": COLORS.red,
  "border-radius-base": "6px",
  "card-shadow": "0px 1px 1.5px 0px rgb(0,0,0)",
  "card-background": COLORS.white,
  "font-family":
    "ProximaNovaRegular, ProximaNovaBlack, ProximaNovaBold, ProximaNovaExtrabld, ProximaNovaLight",

  /* Button */
  "btn-height-sm": "32px",
  "btn-height-lg": "35px",
  "btn-padding-horizontal-sm": "12px",
  "btn-padding-horizontal-lg": "14px",
  "btn-border-style": "none",
  "btn-border-radius-sm": "4px",
  "btn-border-radius-lg": "4px",
  "btn-disable-bg": "inherit",
  /* Menu */
  "menu-item-active-bg": COLORS.white,
  "menu-item-padding": 0,
  "menu-item-vertical-margin": 0,
  "menu-highlight-color": "rgba(0,0,0,0)",
  "menu-inline-submenu-bg": "rgba(0,0,0,0)",

  /* Badge */
  "badge-dot-size": 11,
  "badge-color": COLORS.text,

  /* Switch */
  "switch-height": "16px",
  "switch-min-width": "26px",
  "switch-sm-height": "13px",
  "switch-sm-min-width": "22px",
  "switch-color": COLORS.green,

  /* Tag */
  "tag-line-height": "23px",
  "tag-default-bg": COLORS.backgroundHover,
  "tag-default-color": COLORS.blueGrey,

  /* Collapse */
  "collapse-header-bg": COLORS.background,
  "collapse-content-bg": COLORS.background,
  "collapse-header-arrow-left": "22px",
  "collapse-header-padding": "12px 10px",

  /* Radio */
  "radio-dot-color": COLORS.green,

  /* Checkbox */
  "checkbox-color": COLORS.green,
  "checkbox-border-width": "1px",

  /* Modal */
  "modal-header-close-size": "auto",
  "modal-close-color": COLORS.darkBlueGrey,
  "modal-content-bg": COLORS.white,
  "modal-header-border-style": "none",
  "modal-footer-border-style": "none",
  "modal-header-padding": "0px",
  "modal-body-padding": "0px 0px 0px 0px",
  "modal-footer-padding-vertical": "0px",
  "modal-footer-padding-horizontal": "0px",

  /* Table */
  "table-header-bg": COLORS.backgroundHover,
  "table-header-color": COLORS.blueGrey,
  "border-color-split": COLORS.background,
  "table-border-radius-base": "6px",
  "table-padding-vertical": "14px",

  /* Alert */
  "alert-success-border-color": "transparent",
  "alert-warning-border-color": "transparent",
  "alert-info-border-color": "transparent",
  "alert-error-border-color": "transparent",
  "alert-text-color": COLORS.darkBlueGrey,
  "alert-message-color": COLORS.darkBlueGrey,
  "alert-success-bg-color": "transparent",
  "alert-warning-bg-color": "transparent",
  "alert-info-bg-color": "transparent",
  "alert-error-bg-color": "transparent",
  "alert-with-description-icon-size": "20px",

  /* Input */
  "input-height-base": 36,
  "label-color": COLORS.blueGrey,
  "form-vertical-label-padding": "0 2px 2px",
  "select-selection-item-bg": COLORS.blueLight,

  /* Skeleton */
  "skeleton-color": COLORS.background,

  /* Tooltip */
  "tooltip-bg": COLORS.blueGrey,
  "tooltip-color": COLORS.white,
  "tooltip-arrow-color": COLORS.blueGrey,

  /* List */
  "list-item-meta-title-margin-bottom": "0px",
  "list-item-meta-avatar-margin-right": "21px",
};

module.exports = theme;
