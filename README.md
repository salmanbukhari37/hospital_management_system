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

## Create User

### POST API

### URL

```
/api/create-user
```

#### Request

```
{
    "userData": {
        "FirstName": "Ahmed",
        "LastName": "Butt",
        "Email": "ahmedbutts@gmail.com",
        "Password": "123456",
        "Role": [
            "dispenser"
        ]
    }
}
```

#### Response

```
{
    "message": "User created successfully",
    "result": {
        "Role": [
            "dispenser"
        ],
        "_id": "5d6fdc9e571c460b8866a56d",
        "FirstName": "Ali",
        "LastName": "Saeed",
        "Email": "alisaeed@gmail.com",
        "Password": "$2a$10$Qrq2UQUfG47IWXv.M2jzi.gqvyjNj4.qFTUykHu9zRCXldIKJVFCK",
        "createdAt": "2019-09-04T15:47:42.367Z",
        "updatedAt": "2019-09-04T15:47:42.367Z",
        "__v": 0
    }
}
```

## Delete User

### POST API

### URL

```
/api/delete-user
```

#### Request

```
{
	"userId" : "5d6d40dd0ad6cf410c3ad9ba"
}
```

#### Response

```
{
    "message": "Record deleted successfully",
    "result": {
        "Role": [
            "dispenser"
        ],
        "_id": "5d6fdc9e571c460b8866a56d",
        "FirstName": "Ali",
        "LastName": "Saeed",
        "Email": "alisaeed@gmail.com",
        "Password": "$2a$10$Qrq2UQUfG47IWXv.M2jzi.gqvyjNj4.qFTUykHu9zRCXldIKJVFCK",
        "createdAt": "2019-09-04T15:47:42.367Z",
        "updatedAt": "2019-09-04T15:47:42.367Z",
        "__v": 0
    }
}
```

## Create Patient Token

### POST API

### URL

```
/api/create-patient
```

#### Request

```
{
	"patientData" : {
		"PatientName" : "Ali Raza",
		"Price" : 200
	}
}
```

#### Response

```
{
    "message": "Patient created successfully",
    "result": {
        "TokenNumber": 5,
        "_id": "5d6facd81381453a683c7d61",
        "PatientName": "Ali Raza",
        "Price": 200,
        "UserId": "5d6d39e7e79c642d108b2a5b",
        "createdAt": "2019-09-04T12:23:52.028Z",
        "updatedAt": "2019-09-04T12:23:52.028Z",
        "__v": 0
    }
}
```

## POST Patient (Get Patient Data by Patient Name)

### POST API

### URL

```
/api/get-patient
```

#### Request

```
{
	"patientData" : {
		"PatientName" : "Ali Raza",
		"Price" : 200
	}
}
```

#### Response

```
{
    "result": [
        {
            "_id": "Ali Raza",
            "totalPatient": 1,
            "totalAmount": 200
        }
    ]
}
```

## POST Patient (Get Patient Data by using between dates)

### POST API

### URL

```
/api/get-patient-between-date
```

#### Request

```
{
	"startDate" : "2019-09-03",
	"endDate" : "2019-09-05"
}
```

#### Response

```
{
    "result": [
        {
            "TokenNumber": 1,
            "_id": "5d6fa999aafa9b04d0118adc",
            "PatientName": "Ahmed Raza",
            "Price": 200,
            "UserId": "5d6d3a392d7fc931d8bbbc57",
            "createdAt": "2019-09-04T12:10:01.715Z",
            "updatedAt": "2019-09-04T12:10:01.715Z",
            "__v": 0
        },
        {
            "TokenNumber": 2,
            "_id": "5d6fab70f6537d55a4fc2b8b",
            "PatientName": "Ahmed Raza",
            "Price": 200,
            "UserId": "5d6d3a392d7fc931d8bbbc57",
            "createdAt": "2019-09-04T12:17:52.452Z",
            "updatedAt": "2019-09-04T12:17:52.452Z",
            "__v": 0
        },
        {
            "TokenNumber": 3,
            "_id": "5d6fab90f6537d55a4fc2b8c",
            "PatientName": "Ahmed Raza",
            "Price": 200,
            "UserId": "5d6d3a392d7fc931d8bbbc57",
            "createdAt": "2019-09-04T12:18:24.150Z",
            "updatedAt": "2019-09-04T12:18:24.150Z",
            "__v": 0
        },
        {
            "TokenNumber": 4,
            "_id": "5d6fabec738b213084e89d48",
            "PatientName": "Ahmed Raza",
            "Price": 200,
            "UserId": "5d6d39e7e79c642d108b2a5b",
            "createdAt": "2019-09-04T12:19:56.314Z",
            "updatedAt": "2019-09-04T12:19:56.314Z",
            "__v": 0
        },
        {
            "TokenNumber": 5,
            "_id": "5d6facd81381453a683c7d61",
            "PatientName": "Ali Raza",
            "Price": 200,
            "UserId": "5d6d39e7e79c642d108b2a5b",
            "createdAt": "2019-09-04T12:23:52.028Z",
            "updatedAt": "2019-09-04T12:23:52.028Z",
            "__v": 0
        }
    ],
    "totalRecords": 5,
    "totalTokens": 5
}
```

## POST Patient (Get Patient Data by year only)

### POST API

### URL

```
/api/get-patient-by-year
```

#### Request

```
{
	"year" : 2019
}
```

#### Response

```
{
    "result": [
        {
            "_id": "5d6fa999aafa9b04d0118adc",
            "year": 2019
        },
        {
            "_id": "5d6fab70f6537d55a4fc2b8b",
            "year": 2019
        },
        {
            "_id": "5d6fab90f6537d55a4fc2b8c",
            "year": 2019
        },
        {
            "_id": "5d6fabec738b213084e89d48",
            "year": 2019
        },
        {
            "_id": "5d6facd81381453a683c7d61",
            "year": 2019
        }
    ]
}
```

## POST Patient (Get Patient Data by month only)

### POST API

### URL

```
/api/get-patient-by-month
```

#### Request

```
{
	"month" : 8
}
```

#### Response

```
{
    "result": [
        {
            "_id": "5d6fa999aafa9b04d0118adc",
            "month": 9
        },
        {
            "_id": "5d6fab70f6537d55a4fc2b8b",
            "month": 9
        },
        {
            "_id": "5d6fab90f6537d55a4fc2b8c",
            "month": 9
        },
        {
            "_id": "5d6fabec738b213084e89d48",
            "month": 9
        },
        {
            "_id": "5d6facd81381453a683c7d61",
            "month": 9
        }
    ]
}
```

## POST Patient (Get Patient Data by user id)

### POST API

### URL

```
/api/get-patient-by-month
```

#### Request

```
{
	"UserId" : "5d6d410c86b81b4f9c61b832"
}
```

#### Response

```
{
    "result": [
        {
            "_id": "5d6d3a392d7fc931d8bbbc57",
            "TotalSale": 1000
        }
    ]
}
```

![Codeship Status](https://app.codeship.com/projects/42287930-a726-0137-f88c-5ae24cfcc022/status?branch=master)
