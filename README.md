# Hospital Management System

This Repository is for IAgility NodeJS Practice session

## Login API for JWT Token

### POST API

### URL

```
front/login
```

#### Request

```
{
	"email" : "salmanbukhari@gmail.com",
	"password" : "123456"
}
```

#### Response

```
{
    "result": {
        "Role": [
            "admin",
            "doctor"
        ],
        "_id": "5d6d39e7e79c642d108b2a5b",
        "FirstName": "Salman",
        "LastName": "Bukhari",
        "Email": "salmanbukhari@gmail.com",
        "Password": "$2a$10$SlE1Z2jDs3puRnmsrG0/z.nApwv8zFsi9yEMial6GdyzInCUKpOli",
        "LoginTime": "2019-09-02T15:48:55.801Z",
        "createdAt": "2019-09-02T15:48:55.809Z",
        "updatedAt": "2019-09-02T15:48:55.809Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiUm9sZSI6WyJhZG1pbiIsImRvY3RvciJdLCJfaWQiOiI1ZDZkMzllN2U3OWM2NDJkMTA4YjJhNWIiLCJGaXJzdE5hbWUiOiJTYWxtYW4iLCJMYXN0TmFtZSI6IkJ1a2hhcmkiLCJFbWFpbCI6InNhbG1hbmJ1a2hhcmlAZ21haWwuY29tIiwiUGFzc3dvcmQiOiIkMmEkMTAkU2xFMVoyakRzM3B1Um5tc3JHMC96Lm5BcHd2OHpGc2k5eUVNaWFsNkdkeXpJbkNVS3BPbGkiLCJMb2dpblRpbWUiOiIyMDE5LTA5LTAyVDE1OjQ4OjU1LjgwMVoiLCJjcmVhdGVkQXQiOiIyMDE5LTA5LTAyVDE1OjQ4OjU1LjgwOVoiLCJ1cGRhdGVkQXQiOiIyMDE5LTA5LTAyVDE1OjQ4OjU1LjgwOVoiLCJfX3YiOjB9LCJpYXQiOjE1Njc1OTk1MDAsImV4cCI6MTU2NzYyOTUwMH0.362yiXvjv3tFIilhRCZ9wYXjYpbM1GbVn6jYY1qjAUU"
}
```

### POST API by ID

```
api/reservation/get/one
```

#### Request

```
{
	"id" : "5d5d48d853191c2d3898aa19"
}
```

### POST API - add reservation

```
api/reservation/add
```

#### Request

```
{
	"name" : "Salman Bukhari",
	"email" : "salmanbukahri37@gmail.com",
	"room_type" : "4 Bed Rooms",
	"arrival_date" : "08/26/2019",
	"departure_date" : "08/30/2019",
	"number_of_guest" : "4",
	"free_pickup" : "Yes",
	"flight_number" : "ERS345234",
	"special_request" : "VIP Guest"
}
```

### POST API - update reservation

```
api/reservation/update
```

#### Request

```
{
	"id" : "5d5d48d853191c2d3898aa19",
	"updateData" : {
		"email" : "salmanbukhariiiiiit@gmail.com",
		"name" : "Mohammad Usman"
	}
}
```

### POST API - delete reservation

```
api/reservation/delete
```

#### Request

```
{
	"id" : "5d5d4a5dbacacd2c0c08858c"
}
```

# Session - 26/08/2019

## Student, Course, Enrollment API's

## Student API

### GET API

#### URL

```
api/student/get
```

### POST API - Add Student

#### URL

```
api/student/add
```

#### Request

```
{
	"student" :
	{
		"StudentName" : "Salman Bukhari",
		"MobileNumber" : "+92 333 4422233"
	}
}
```

## Course API

### GET API

#### URL

```
api/course/get
```

### POST API - Add Course

#### URL

```
api/course/add
```

#### Request

```
{
	"course" : {
		"CourseCode" : "AES431",
		"CourseName" : "Computer Sceince"
	}
}
```

## Enrollment API

### GET API

#### URL

```
api/enrollment/get
```

### POST API - Add Enrollment

#### URL

```
api/enrollment/add
```

#### Request

```
{
	"enrollment" : {
		"StudentId" : "5d63bc2a2a149b48c410e613",
		"CourseId" : "5d63bf9127630f1d2cdc54e4"
	}
}
```

# Session - 27/08/2019

## Mongoose Concepts - Virtual, Bcrypt

#### URL

```
api/parking/create/user
```

#### Request

```
{
	"first_name" : "Salman",
	"last_name" : "Bukhari",
	"email" : "salmanbukhara@gmail.com",
	"password" : "123456",
	"phone_no" : "+92-333-4422114"
}
```

Encrypt Password using bcrypt

# Assignment Login Credentials check via BCrypt 27/08/2019

#### URL

```
/api/parking/login
```

#### Request

```
{
	"email" : "salmanbukharasi@gmail.com",
	"password" : "123456"
}
```

#### Response

```
{
    "msg": "Logged in successfully",
    "isMatch": true
}
```

![Codeship Status](https://app.codeship.com/projects/42287930-a726-0137-f88c-5ae24cfcc022/status?branch=master)
