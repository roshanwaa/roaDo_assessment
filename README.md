# RoaDo - Dev Role - Pre-Interview tasks and skills assessment

- There are 3 tasks mentioned below, please answer all to the best of your capability ( Keep it short and precise, the use of GPTs might not yield the best results here! )

## Task 1: You have 3 timestamps for the list of users along with the device details: logged_in, logged_out, and last seen at (for the device during the log-in period). Please note: Users can log in from multiple devices, users are generally logged in for a longer duration of time 6 months or so.
```sh
a) Mention the logic to figure out monthly logged-in and active users
b) List down the assumptions made in the logic
c) Typescript code for the logic (It can be a GitHub link)
c) Given an option to get more data regarding the same, what would be the fields / key values that would help to get better accurate values for the same and how would it help the time complexity of the operation?
  ```

## Task 2 : A multi pick up and drop shipment is to be divided into multiple trips, mention the logic to figure out of the given list of trips are legit and fulfils the shipment with typescript. (Please note:  A shipment can have multiple pick up points and drop points, and a trip can also have multiple pick up points , drop points and an additional option of a warehouse a via point.)
Example:  
For a shipment with Pick ups : (A, B), Drop points (C,D),
```sh
a) Valid set of trips are :  Trip 1: (A,W), Trip 2: (B, W), Trip 3: (W,C), Trip 4: (W, D).
b) Invalid set of trips are : Trip 1: (A,W1), Trip 2: (B, W2), Trip 3: (W3,C), Trip 4: (W4, D).
a) Mention the logic to figure out legit and valid trips.*
b) List down the assumptions made in the logic, if any
c) Typescript code for the logic (It can be a GitHub link)*
```
