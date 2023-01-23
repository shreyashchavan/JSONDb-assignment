# Student Enrollment Form
> That will store data in STUDENT-TABLE relation of STD-REL database.

## Description:
Implemented Student form with Login2Explore JSONPowerDb using HTML, CSS and Javascript along with Jquery, Bootstrap, etc.

## Benefits of using JsonPowerDB:
* Proprietary algorithm for High Performance CRUD operations. Multiple times faster than popular DBMS.
* Serverless support for faster development - A UI developer can develop complete dynamic application.
* DBMS with built in web / application server and embedded caching makes the performance lightning fast.
* Server side Native NoSQL - best query performance.
* In-built support to query on multiple JPDB databases.
* Multi-mode DBMS - Document DB, Key-Value DB, RDBMS support.
* Schema free - easy to develop and maintain.
* Web-services API - Can be used with any programming language that has support for HTTP.
* Enriched by a pluggable API Framework - A developer can develop a pluggable API and plugin into any of our cloud JPDB instance.
* Standardisation of API development framework makes the development process easy, more readable, and less error prone.
* Multiple security layers.
* Nimble, Simple to use, In Memory, Real-time DBMS.

## Release History:
* v0.3.2.20220829.2828 beta
> 0.3.2 / 2022-08-29
> ==================
> * Completed Phase-4 of Pluggable API framework for configuration properties that controls the usage of API for global and individual users.
> * Added NEW pluggable API for importing data from CSV files.
> * Modified existing Drive API to support the Phase-4 of Pluggable API release.
> * Development for Phase-1 for Replication of user's database - Replica Manager Dashboard, Sync user database from MasterNode to ReplicaNode(s) completed. 
> * Added: New methods in jpdb-commons.js (0.0.4 and 0.0.5) for creating the 
>   COPY COLUMN request i.e. createCopyColumnRequest(token, jsonObj, dbName, relName), 
>   RENAME COLUMN request i.e. createRenameColumnRequest(token, jsonObj, dbName, relName), 
>   REMOVE COLUMN request i.e. createRemoveColumnRequest(token, jsonObj, dbName, relName), 
>   CHANGE COLUMN request i.e. createChangeColumnTypeRequest(token, jsonObj, dbName, relName), 
>   UPDATE RECORD request i.e. createUPDATERecordRequest2(token, jsonObj, dbName, relName).
> * Improved: Documentation
> * Improved: SMTP Implementation for sending Emails 
> * Fixed: Various Important bugs fixed

## DB Table:
Student Enrollment Form that will store data in *STUDENT-TABLE* relation of *STD-REL* database.

__Input Fields__: *{Roll-No, Full-Name, Class, Birth-Date, Address, Enrollment-Date}*

__Primary key__: *Roll No*.

## Flow:
1. User will enter data in the field having primary key and

2. If the primary key value does NOT exist in the database, enable [Save] and [Reset] buttons and move the cursor to the next field and allow the user to enter data in the form.

3. Check that the data should be valid i.e. no empty fields.

4. Complete the data entry form and click the [Save] button to store the data in the database.

5. If the primary key value is present in the database, display that data in the form. Enable [Update] and [Reset] buttons and move the cursor to the next' field in the form. Keep the primary key field disabled and allow users to change other form fields.

6. Check that the data should be valid i.e. no empty fields.

7. Click on [Update] button to update the data in the database.

8. Click [Reset] to reset the form.

## Screenshot:
![image](https://user-images.githubusercontent.com/54321675/214034153-25367809-eb63-4a4f-ad93-4a668060bcb1.png)

### Sources:
Login2Explore – [Dashboard](https://login2explore.com/)
