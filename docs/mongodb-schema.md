# MongoDB Schema

## Users Collection
{
"_id": ObjectId,
"name": String,
"email": String,
"passwordHash": String,
"address": {
"street": String,
"city": String,
"state": String,
"zipCode": String,
"country": String
},
"phone": String,
"createdAt": Date,
"updatedAt": Date
}


## Product Collection
{
"_id": ObjectId,
"name": String,
"description": String,
"price": Number,
"sizes": [String],
"colors": [String],
"category": ObjectId, // Reference to Categories collection
"stock": Number,
"images": [String],
"createdAt": Date,
"updatedAt": Date
}


## Orders Collection
{
"_id": ObjectId,
"userId": ObjectId, // Reference to Users collection
"products": [
{
"productId": ObjectId, // Reference to Products collection
"quantity": Number,
"size": String,
"color": String
}
],
"totalPrice": Number,
"status": String,
"shippingAddress": {
"street": String,
"city": String,
"state": String,
"zipCode": String,
"country": String
},
"createdAt": Date,
"updatedAt": Date
}


## Categories Collection
{
"_id": ObjectId,
"name": String,
"description": String,
"createdAt": Date,
"updatedAt": Date
}