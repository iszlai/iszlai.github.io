+++
date = "2016-06-16T11:40:17+02:00"
title = "when to use kv store"
draft=true
+++

## Key-value what?

Key-value store, or key-value database is a kind of storage mechanism which is designed to store and fetch
data that is like an associative array or other names we know it by today like dictionary or HashMap.
As you might have guessed by the name this has to do with key and value pairs, where KEY-s are the identifier that allows the easy and fast retrieval
of data that is stored in the values.
The values can be depending on the implementation strings, numbers, collections or binary data.

## And has it been always so popular?

In the beginning because of a lack of standardization and requiring different mindset for designing the data storage it was only a niche
for a few limited use cases.
And the came the [Dynamo Paper] (http://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) and bunch of implementations
each competing for the title of the best key-value data store for some use case.

## Ok but "When to use a Key-Value store ?" What can it do for me ?


 **Can handle size and can scale well.**

  Due to the implementation and use of distributed hash tables it usually really easy to add more nodes if you want to scale out.
  You can also set how much of data you want replicated on what percent of the nodes. With this type of NoSQL data store you can almost
  linearly scale out.


 **When processing a constant stream of small reads and writes really fast.**

  Like logs but any other data stream would work equally well.
  There are lot's of implementation of key value stores that are based on ram or SSD and only backed by filesystem.
  This means that data stored in ram and provides fast in-memory access.

  *NOTE: This part is refers mostly to the RAM based implementation but the SSD ones are pretty close.*


 **Programmer friendly.**

  I would say that every programmer uses and knows how to used dictionaries, hashmaps associative arrays etc.
  It's easy to get into a mindset to have a unique id for every data.
  The querying can be a bit challenging but more about this later.

  **Fluid schema system**
  It's easier to upgrade or change the data if you don't have constraints of a rigid schema. Schema wise think of it like a Document Database
  because it can have 'optional fields'. You can add, delete fields without the need to worry about schema migration.

 **Cache or store BLOB data**

Caching can for bits of web pages, or to save complex objects that were expensive to join in a relational database, to reduce latency, and so on.

## Cool. But how do you query this thing?

 Well generally what you want to do is store the related under similar keys.
 For example on a log in page you could store all user related data "under the user namespace". Like **user:johndoe** and the password hash under **user:johndoe:passwd** .

 Imagine you are building a webshop, and lets say a product you are selling gets mentioned by Oprah.
 If you store it all like  **product:1234:stockcount**, then all the queries hit that single cell.
 In scenarios like that you might want to think about different schema to partition your data.
 Classical SQL databases where designed for easy querying. Everyone can easily write analytics queries like give me all the people who purchased this and that or live here etc.
 When you create a highly scalable system it would be way less straining to separate writes like:
   **didpurchase:something** and **lives:somewhere** inc.
 If your chosen key value store implementation doesn't have indexes you could also maintain it by yourself for example a product list:
```
 product:0 -> { "color":"blue",
                "souldOut":false,
                "vendor":"MS",
                "price":500 }

 product:1 -> { "color":"red",
                "souldOut":true,
                "vendor":"IBM",
                "price":150 }

 product:2 -> { "color":"beige",
                "souldOut":false,
                "vendor":"Intel",
                "price":400 }

 product:3 -> { "color":"blue",
                "souldOut":false,
                "vendor":"Apple",
                "price":1100}

 product:index:price -> [ {"price":500000,"id":"0"},
                          {"price":150000,"id":"1"},
                          {"price":110000,"id":"3"},
                          {"price":40000,"id":"2"}
                        ]
```
