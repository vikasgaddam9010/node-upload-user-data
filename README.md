# Cricket Team

Given two files `app.js` and a database file `cricketTeam.db` consisting a table `cricket_team`.

Write APIs to perform operations on the table `cricket_team` containing the following columns,

| Columns       | Type    |
| ------------- | ------- |
| id            | INTEGER |
| title         | TEXT    |
| description   | TEXT    |
| image_url     | TEXT    |
| video_url     | TEXT    |

### API 1

#### Path: `/all-items/`

#### Method: `GET`

#### Description:

Returns a list of all uploaded data

#### Response

```
[
  {
    "id": 1,
    "title": "Vikas",
    "description": "Early Morning",
    "img_url": "https://res.cloudinary.com/dagtd0cm9/image/upload/v1722952186/eelxuoufmvj1nydpb9u4.jpg",
    "video_url": "https://res.cloudinary.com/dagtd0cm9/video/upload/v1722952190/ibovjca86paovezh4xg7.mp4"
  },
  {
    "id": 2,
    "title": "Vikas",
    "description": "Good Movements",
    "img_url": "https://res.cloudinary.com/dagtd0cm9/image/upload/v1722952186/eelxuoufmvj1nydpb9u4.jpg",
    "video_url": "https://res.cloudinary.com/dagtd0cm9/video/upload/v1722952190/ibovjca86paovezh4xg7.mp4"
  },
  {
    "id": 3,
    "title": "Vikas",
    "description": "Happy Movements",
    "img_url": "https://res.cloudinary.com/dagtd0cm9/image/upload/v1722952186/eelxuoufmvj1nydpb9u4.jpg",
    "video_url": "https://res.cloudinary.com/dagtd0cm9/video/upload/v1722952190/ibovjca86paovezh4xg7.mp4"
  },
  ...
]
```

### API 2

#### Path: `//upload-data`

#### Method: `POST`

#### Description:

Creates a new data in the (database). `id` is auto-incremented

#### Request

```
{
    "title": "Vikas",
    "descrption": "Dev",
    "thumbnailUrl": "https://res.cloudinary.com/dagtd0cm9/image/upload/v1722952186/eelxuoufmvj1nydpb9u4.jpg",
    "videoUrl": "https://res.cloudinary.com/dagtd0cm9/video/upload/v1722952190/ibovjca86paovezh4xg7.mp4"
}
```

#### Response

```
Success
```

### API 3

#### Path: `/get-uploded-by-id/2`

#### Method: `GET`

#### Description:

Returns a player based on a data id

#### Response

```
{
  "id": 2,
  "title": "Vikas",
  "description": "Good Movements",
  "img_url": "https://res.cloudinary.com/dagtd0cm9/image/upload/v1722952186/eelxuoufmvj1nydpb9u4.jpg",
  "video_url": "https://res.cloudinary.com/dagtd0cm9/video/upload/v1722952190/ibovjca86paovezh4xg7.mp4"
}
```

### API 4

#### Path: `/del/2`

#### Method: `DELETE`

#### Description:

Deletes a player from the (database) based on the id

#### Response

```
[
  {
    "id": 1,
    "title": "Vikas",
    "description": "undefined",
    "img_url": "https://res.cloudinary.com/dagtd0cm9/image/upload/v1722952186/eelxuoufmvj1nydpb9u4.jpg",
    "video_url": "https://res.cloudinary.com/dagtd0cm9/video/upload/v1722952190/ibovjca86paovezh4xg7.mp4"
  },
  {
    "id": 3,
    "title": "Vikas",
    "description": "Happy Movements",
    "img_url": "https://res.cloudinary.com/dagtd0cm9/image/upload/v1722952186/eelxuoufmvj1nydpb9u4.jpg",
    "video_url": "https://res.cloudinary.com/dagtd0cm9/video/upload/v1722952190/ibovjca86paovezh4xg7.mp4"
  },
  ...
]
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
