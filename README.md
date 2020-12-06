# PSBookTracker
Material Design
- https://app.pluralsight.com/library/courses/angular-material/table-of-contents

https://app.pluralsight.com/library/courses/structuring-angular-applications-angular-libraries/table-of-contents
- Creating and Using Your First Angular Library

## 1.0 Add Angular Matirial to project
use `ng add` instead of `ng install`
-   `PS D:\GitRepo\jb-weerasinghe\PS-book-tracker> ng add @angular/material`
## 1.1 Create seperate shared module to import material component
-  each componenet should be imported seperately to reduse bundle size
## 1.2 add materail navigation to start page
## 1.3 add dummy book related component with child routing
## 1.4 add bookservice and http service to read data from API.
- **HttpClientModule** should be add to root module. 
- Otherwise there will be **Dependency Injection** Error

## 1.6 add book list component and call it insde tabs

## 1.7 add book edit /detail components

## 1.8 MAIN STYLE SHEET add

## 1.9 Add notfication service with  `/material/snack-bar`

## 2.0 Add Rating Feature module
## 2.1 color star based on current rating value. pass input value `@Input() currentRating:`

## 3.0 Create Angular library
- 3.1 install following packages
- - `PS D:\GitRepo\jb-weerasinghe\PS-book-tracker> npm i ng-packagr --save-dev`
- - `PS D:\GitRepo\jb-weerasinghe\PS-book-tracker> npm i tsickle --save-dev   `
- 3.2 generate angular library package `lib-angular-rating`
- - `PS D:\GitRepo\jb-weerasinghe\PS-book-tracker> ng generate library angular-rating`
compare with PS-First-ng-packagr. in this case 2 files were added `ng-package.json ,package.json `
- - angular.json, tsconfig.json are also modified. when search library from root project, it first check paths mentioned in tsconfig before check node-modules folder
- 3.3 call `lib-angular-rating` from external library package
- - import { LibAngularRatingModule } from 'lib-angular-rating';



## Special points
- book container component vs book presentational component
- -  container component :statefull and handle data retriveing
- -  presentational component : stateless - use to display data and ignorant about data retrieve
