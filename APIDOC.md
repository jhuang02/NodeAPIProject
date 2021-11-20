# Fake Identity API Documentation
This Fake Identity API returns a random first and last name combination based off
if the client requested a female or male identity.

## *Request random male first and last name*
**Request Format:** /male

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Returns plain text of a random first and last name combination seperated
by a new line.


**Example Request:** /male

**Example Response:**

```
"Luca
\nWalker"
```

**Error Handling:**
Since there is no user input, and the /male endpoint is simply called by a button click, there is
no specific error handling for this, but I had error handling of returning a 400 status error
when any other endpoint besides male or female is somehow requested.

## *Request random female first and last name*
**Request Format:** /female

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns JSON object with a random first and last name stored in its
first and last name fields.

**Example Request:** /female

**Example Response:**

```json
{
  "firstName": "Kamryn",
  "lastName":  "Holland"
}
```

**Error Handling:**
Since there is no user input, and the /female endpoint is simply called by a button click, there is
no specific error handling for this, but I had error handling of returning a 400 status error
when any other endpoint besides male or female is somehow requested.