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
- Possible 400 (invalid request) errors (all plain text):
  - If the client attempts to pass in a query or other data after the /male endpoint, returns an
  error with message: 'Error invalid endpoint!'

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
- Possible 400 (invalid request) errors (all plain text):
  - If the client attempts to pass in a query or other data after the /female endpoint, returns an
  error with message: 'Error invalid endpoint!'