import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import 'assets/styles/app.sass';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

// import jquery
const $ = require('jquery');

// import bootstrap
require('bootstrap');

// import js file
import "assets/showAndHiddePassword.js";