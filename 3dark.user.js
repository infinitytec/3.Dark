// ==UserScript==
// @name         3.Dark
// @namespace    infinitytec.github.io
// @version      1.0
// @description  Dark theme for 3.0. Distributed under the MIT license.
// @author       infinitytec
// @match        https://scratch.mit.edu/projects/*
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/3.Dark/raw/master/3dark.user.js
// ==/UserScript==

(function() {
    'use strict';
    //Main background
    GM_addStyle(".gui_body-wrapper_-N0sA{background-color: #051638;}");
    //Scripting area background
    GM_addStyle(".blocklyMainBackground{fill: #273552 !important;}");
    //Palette
    GM_addStyle(".blocklyFlyoutBackground {fill: #2f4066 !important;}");
    //Palette text
    GM_addStyle(".blocklyFlyoutLabelText{fill: white !important;}");
    //Toolbox
    GM_addStyle(".blocklyToolboxDiv, .scratchCategoryMenu {background: #2f4066; color: white;}");
    //Selected category
    GM_addStyle(".scratchCategoryMenuItem.categorySelected {background: #ffffff22;}");
    //Sprite and stage selection area
    GM_addStyle(".sprite-selector_sprite-selector_2KgCX, .stage-selector_stage-selector_3oWOr, .stage-selector_label_1MCfr, .stage-selector_count_2QK7D {background: #2f4066; color: white;}");
    GM_addStyle(".sprite-info_sprite-info_3EyZh, .stage-selector_header_2GVr1, .stage-selector_header-title_33xCt, .stage-selector_header-title_33xCt {background: #273552; color: white;}");
    //Palette Buttons
    GM_addStyle(".blocklyFlyoutButtonBackground {fill: #3d4e72 !important;}.blocklyFlyoutButtonBackground:hover, .blocklyFlyoutButton:hover {fill: #4d5e82 !important;}");
    GM_addStyle("blocklyFlyoutButton > text.blocklyText {fill: white!important;}");
     //Backpack header
    GM_addStyle(".backpack_backpack-header_6ltCS {background: #2d3e62; color: white;}");
     //Backpack
    GM_addStyle(".backpack_backpack-list-inner_10a2A {background: #273552;} .backpack_backpack-item_hwqzQ{background: white;}");
     //Paint & sound editor sidebar
    GM_addStyle(".selector_list-area_1Xbj_{background: #2f4066;} .selector_new-buttons_2qHDd::before {background: none;}");
     //Paint & sound editor main
    GM_addStyle(".asset-panel_wrapper_366X0{background: #273552; color: white;} .sound-editor_effect-button_2zuzT, .sound-editor_trim-button_lSENI {color: white;}");
    //Tabs
    GM_addStyle(".gui_tab_27Unf.gui_is-selected_sHAiu{background: #2d3e62;color: white;}.gui_tab_27Unf{background: #273552;} .gui_tab_27Unf:hover{background: #374562;}");
    //New variable/list/custom block
    GM_addStyle(".prompt_body_18Z-I, .custom-procedures_body_SQBv6, div.custom-procedures_option-card_BtHt3 {background: #2d3e62; color: white;} .custom-procedures_button-row_2jBu3 > button:nth-child(1), .prompt_button-row_3Wc5Z > button:nth-child(1),.prompt_button-row_3Wc5Z > button:nth-child(1) {background: #ff3a5b;}");
    //
    GM_addStyle("");
})();
