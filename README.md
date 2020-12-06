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

