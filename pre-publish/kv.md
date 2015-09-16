## Key-value what?
 
 Key-value store, or key-value database is a kind of storage mechanism which is designed to store and fetch 
 data that is like an associative array or other names we know it by today like dictionary or HashMap.
 As you might have guessed by the name this has to do with key and value pairs, where KEY-s are the identifier that allows the easy and fast retrieval 
 of data that is stored in the values.
 The values can be depending on the implementation strings, numbers, collections or binary data.
 
## And has it been always so popular?
  
 In the beginning because of a lack of standardization and requiring different mindset for designing the data storage it was only a niche 
 for a few limited use cases.
 And the came the [Dynamo Paper] (http://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) and bunch of implementation 
 each competing for the title of the best key-value data store for some use case.
 
## Ok, but ... "When to use a Key-Value store and what's it good for?" 
 
  
  **Can handle size and can scale well.**
   
   Due to the implementation and use of distributed hash tables it usually really easy to add more nodes if you want to scale out. 
   You can also set how much of data you want replicated on what percent of the nodes. And for this type of NoSQL data store you can almost 
   linearly scale out 
  
  
  **When processing a constant stream of small reads and writes really fast.**
   
   Like logs but any other data stream would work equally well.
   There are lot's of implementation of key value stores that are based on ram or SSD and only backed by filesystem. 
   This means that data stored in ram and provides fast in-memory access.
 
   NOTE: This part is refers mostly to the RAM based implementation but the SSD ones are pretty close. 
   
 
  **Programmer friendly.**
  
   I would say that every programmer uses and knows how to used dictionaries, hashmaps associative arrays etc.
   It's easy to get into a mindset to have a unique id for every data.
   The querying can be a bit challenging but more about this later.
    
   **Fluid schema system** 
   It's easier to upgrade or change the data if you don't have constraints of a rigid schema. Schema wise think of it like a Document Database 
   because it can have 'optional fields'. You can add, delete fields without the need to worry about schema migration.
 
  **cache or store BLOB data**
  
 Caching can for bits of web pages, or to save complex objects that were expensive to join in a relational database, to reduce latency, and so on.
 
