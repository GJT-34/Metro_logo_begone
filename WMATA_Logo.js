// ==UserScript==
// @name         Remove WMATA logo
// @namespace    GTnamespace
// @version      1.0
// @description  Remove space-hogging WMATA (DC Metro) logo from WMATA's 'Next Train' page
// @author       Greg Till
// @match        https://www.wmata.com/js/*
// @match        https://wmata.com/js/*
// ==/UserScript==
/* global $ */
$('.logo').remove()
