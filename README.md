# PSBookTracker -Create seperate angular class library
Main Objective is to create seperate angular class library.
- Styling Applications with Angular Material
- - https://app.pluralsight.com/library/courses/angular-material/table-of-contents
- Structuring Angular Applications with Angular Libraries
- - Creating and Using Your First Angular Library
- - https://app.pluralsight.com/library/courses/structuring-angular-applications-angular-libraries/table-of-contents


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
