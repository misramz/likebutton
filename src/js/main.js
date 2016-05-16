import angular from 'angular';

import {ButtonController} from './controller/button.controller';


angular
    .module('app', [])
    .controller( 'ButtonController', ButtonController);
