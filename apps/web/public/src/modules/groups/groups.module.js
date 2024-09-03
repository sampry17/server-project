import {groupsList} from './groupsList.component';
import {groupsEdit} from './groupsEdit.component';


export const groupsModule = angular.module('groups', [])
    .component('groupsList', groupsList)
    .component('groupsEdit', groupsEdit);